import { NextRequest, NextResponse } from "next/server";
import { CloudClient, Collection, EmbeddingFunction } from "chromadb";
import { requireAdmin } from "@/lib/auth-utils";
import { checkRateLimit, isValidJSON, sanitizeString } from "@/lib/security-utils";

// Rate limiting: 50 requests per 15 minutes per admin
const RATE_LIMIT = 50;
const RATE_WINDOW = 15 * 60 * 1000;

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

let knowledgeCollection: Collection | null = null;

const getKnowledgeCollection = async () => {
  if (!knowledgeCollection) {
    knowledgeCollection = await chromaClient.getOrCreateCollection({
      name: "knowledge_base",
      embeddingFunction: new SimpleEmbeddingFunction(),
    });
  }
  return knowledgeCollection;
};

export async function POST(request: NextRequest) {
  try {
    // Require admin authentication
    const auth = requireAdmin(request);
    if (auth instanceof NextResponse) {
      return auth;
    }
    
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimit = checkRateLimit(`add-knowledge:${ip}`, RATE_LIMIT, RATE_WINDOW);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Too many requests",
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
        },
        { status: 429 }
      );
    }
    
    // Check content length
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 5000000) { // 5MB max
      return NextResponse.json(
        { success: false, message: "Request too large" },
        { status: 413 }
      );
    }
    
    const data = await request.json();
    const collection = await getKnowledgeCollection();

    // If using the direct JSON format with knowledgeData array
    if (data.knowledgeData && Array.isArray(data.knowledgeData)) {
      const chunks = data.knowledgeData;
      const ids = chunks.map((chunk: any) => chunk.id);
      const documents = chunks.map((chunk: any) => chunk.document);
      const metadatas = chunks.map((chunk: any) => chunk.metadata);

      // Process in smaller batches to reduce memory usage
      const batchSize = 5;
      let successCount = 0;

      for (let i = 0; i < ids.length; i += batchSize) {
        const batchIds = ids.slice(i, i + batchSize);
        const batchDocuments = documents.slice(i, i + batchSize);
        const batchMetadatas = metadatas.slice(i, i + batchSize);
        
        await collection.add({
          ids: batchIds,
          documents: batchDocuments,
          metadatas: batchMetadatas,
        });
        
        successCount += batchIds.length;
      }

      return NextResponse.json({
        success: true,
        message: "Knowledge data added successfully",
        count: successCount,
      });
    } 
    // For direct IDs/documents/metadatas format
    else if (data.ids && data.documents && data.metadatas) {
      await collection.add({
        ids: data.ids,
        documents: data.documents,
        metadatas: data.metadatas,
      });

      return NextResponse.json({
        success: true,
        message: "Data added successfully",
        count: data.ids.length,
      });
    }
    else {
      return NextResponse.json(
        { success: false, message: "Invalid data format" },
        { status: 400 },
      );
    }
  } catch (error) {
    // Don't leak error details
    return NextResponse.json(
      { success: false, message: "Failed to add data" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Require admin authentication for GET as well
    const auth = requireAdmin(request);
    if (auth instanceof NextResponse) {
      return auth;
    }
    
    const collection = await getKnowledgeCollection();
    const count = await collection.count();
    
    return NextResponse.json({
      success: true,
      message: "Knowledge base information retrieved",
      count,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to get knowledge base information" },
      { status: 500 },
    );
  }
}