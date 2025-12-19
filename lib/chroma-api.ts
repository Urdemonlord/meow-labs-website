/**
 * Chroma Cloud API client - uses HTTP REST API instead of SDK
 * This avoids the large onnxruntime-node and transformers dependencies
 */

const CHROMA_API_URL = `https://${process.env.CHROMA_TENANT}.${process.env.CHROMA_DATABASE || "chromadb"}.trychroma.com`;
const CHROMA_API_KEY = process.env.CHROMA_API_KEY;

interface ChromaCollection {
  name: string;
  id: string;
}

interface ChromaEmbedding {
  ids: string[];
  documents: string[];
  embeddings?: number[][];
  metadatas: Record<string, any>[];
}

// Simple hash-based embedding function
function generateEmbedding(text: string): number[] {
  const embedding = new Array(384).fill(0); // Use 384 dimensions for compatibility
  
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    embedding[i % embedding.length] += charCode / 1000;
  }
  
  // Normalize
  const sum = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  return embedding.map(val => val / (sum || 1));
}

async function makeChromaRequest(
  method: string,
  endpoint: string,
  body?: any
): Promise<any> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (CHROMA_API_KEY) {
    headers["Authorization"] = `Bearer ${CHROMA_API_KEY}`;
  }

  const response = await fetch(`${CHROMA_API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Chroma API error: ${response.status} - ${error}`);
  }

  return response.json();
}

export async function getOrCreateCollection(collectionName: string) {
  try {
    // Try to get existing collection
    const collections = await makeChromaRequest("GET", `/api/v1/collections`);
    const existing = collections.data?.find(
      (c: ChromaCollection) => c.name === collectionName
    );
    if (existing) {
      return existing.id;
    }
  } catch (error) {
    console.log("Creating new collection...");
  }

  // Create new collection
  const result = await makeChromaRequest("POST", `/api/v1/collections`, {
    name: collectionName,
    metadata: { "hnsw:space": "cosine" },
  });

  return result.id;
}

export async function addToCollection(
  collectionId: string,
  ids: string[],
  documents: string[],
  metadatas: Record<string, any>[]
) {
  // Generate embeddings for documents
  const embeddings = documents.map(generateEmbedding);

  return makeChromaRequest(
    "POST",
    `/api/v1/collections/${collectionId}/add`,
    {
      ids,
      documents,
      embeddings,
      metadatas,
    }
  );
}

export async function queryCollection(
  collectionId: string,
  queryText: string,
  nResults: number = 5
) {
  const queryEmbedding = generateEmbedding(queryText);

  return makeChromaRequest(
    "POST",
    `/api/v1/collections/${collectionId}/query`,
    {
      query_embeddings: [queryEmbedding],
      n_results: nResults,
    }
  );
}

export async function deleteFromCollection(
  collectionId: string,
  ids: string[]
) {
  return makeChromaRequest(
    "POST",
    `/api/v1/collections/${collectionId}/delete`,
    { ids }
  );
}

export async function getCollectionMetadata(collectionId: string) {
  return makeChromaRequest("GET", `/api/v1/collections/${collectionId}`);
}
