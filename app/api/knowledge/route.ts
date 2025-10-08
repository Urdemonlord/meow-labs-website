import { NextRequest, NextResponse } from "next/server";
import { CloudClient, Collection } from "chromadb";
import { parseKnowledgeBase } from "@/lib/knowledge-parser";

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
    });
  }
  return knowledgeCollection;
};

export async function POST() {
  try {
    // Parse knowledge base into chunks
    const { chunks, metadatas } = parseKnowledgeBase();
    const collection = await getKnowledgeCollection();
    
    // Generate IDs based on metadata
    const ids = metadatas.map(metadata => metadata.chunk_id);
    
    // Process in smaller batches to reduce memory usage
    const batchSize = 10;
    for (let i = 0; i < chunks.length; i += batchSize) {
      const batchIds = ids.slice(i, i + batchSize);
      const batchChunks = chunks.slice(i, i + batchSize);
      const batchMetadatas = metadatas.slice(i, i + batchSize);
      
      // Add data to ChromaDB in batches
      await collection.add({
        ids: batchIds,
        documents: batchChunks,
        metadatas: batchMetadatas,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Knowledge base added successfully",
      count: chunks.length,
    });
  } catch (error) {
    console.error("Error adding knowledge base:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add knowledge base" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const collection = await getKnowledgeCollection();
    const count = await collection.count();
    
    return NextResponse.json({
      success: true,
      message: "Knowledge base information retrieved",
      count,
    });
  } catch (error) {
    console.error("Error getting knowledge base info:", error);
    return NextResponse.json(
      { success: false, message: "Failed to get knowledge base information" },
      { status: 500 },
    );
  }
}