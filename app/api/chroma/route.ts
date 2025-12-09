import { NextRequest, NextResponse } from "next/server";
import { CloudClient, Collection, Metadata, EmbeddingFunction } from "chromadb";
import { requireAdmin } from "@/lib/auth-utils";
import { checkRateLimit } from "@/lib/security-utils";

// Rate limiting: 50 requests per 15 minutes
const RATE_LIMIT = 50;
const RATE_WINDOW = 15 * 60 * 1000;

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
    // Require admin authentication
    const auth = requireAdmin(request);
    if (auth instanceof NextResponse) {
      return auth;
    }
    
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimit = checkRateLimit(`chroma:${ip}`, RATE_LIMIT, RATE_WINDOW);
    
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
    
    // Validate request size
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 5000000) { // 5MB max
      return NextResponse.json(
        { success: false, message: "Request too large" },
        { status: 413 }
      );
    }
    
    const data: AddDataRequest = await request.json();
    
    // Validate data structure
    if (!data.ids || !data.documents || !data.metadatas) {
      return NextResponse.json(
        { success: false, message: "Invalid data format" },
        { status: 400 }
      );
    }
    
    // Validate array lengths match
    if (data.ids.length !== data.documents.length || 
        data.ids.length !== data.metadatas.length) {
      return NextResponse.json(
        { success: false, message: "Array lengths must match" },
        { status: 400 }
      );
    }
    
    const collection = await getMyCollection();

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
  } catch (error) {
    // Don't leak error details
    return NextResponse.json(
      { success: false, message: "Failed to add data" },
      { status: 500 },
    );
  }
}