import { NextRequest, NextResponse } from "next/server";
import { CloudClient, Collection, Metadata, EmbeddingFunction } from "chromadb";

interface AddDataRequest {
  ids: string[];
  documents: string[];
  metadatas: Metadata[];
}

// Simple embedding function that creates a basic embedding
// This avoids the need for the ONNX runtime which is causing issues
class SimpleEmbeddingFunction implements EmbeddingFunction {
  async generate(texts: string[]): Promise<number[][]> {
    // Create a simple deterministic embedding for each text
    // Not suitable for semantic search but will work for storing data
    return texts.map(text => {
      // Create a simple hash-based embedding (32 dimensions)
      const embedding = new Array(32).fill(0);
      
      // Simple hash function to fill the embedding
      for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        embedding[i % embedding.length] += charCode / 1000;
      }
      
      // Normalize the embedding
      const sum = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
      return embedding.map(val => val / (sum || 1));
    });
  }
}

const chromaClient = new CloudClient({
  apiKey: process.env.CHROMA_API_KEY,
  tenant: process.env.CHROMA_TENANT,
  database: process.env.CHROMA_DATABASE,
});

let myCollection: Collection | null = null;

const getMyCollection = async () => {
  if (!myCollection) {
    myCollection = await chromaClient.getOrCreateCollection({
      name: "knowledge_base",
      embeddingFunction: new SimpleEmbeddingFunction(),
    });
  }
  return myCollection;
};

export async function POST(request: NextRequest) {
  try {
    const data: AddDataRequest = await request.json();
    const collection = await getMyCollection();

    await collection.add({
      ids: data.ids,
      documents: data.documents,
      metadatas: data.metadatas,
    });

    return NextResponse.json({
      success: true,
      message: "Data added successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to add data" },
      { status: 500 },
    );
  }
}