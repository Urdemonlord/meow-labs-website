import { NextRequest, NextResponse } from "next/server";
import { getOrCreateCollection, addToCollection } from "@/lib/chroma-api";
import { parseKnowledgeBase } from "@/lib/knowledge-parser";

let collectionId: string | null = null;

const getKnowledgeCollectionId = async () => {
  if (!collectionId) {
    collectionId = await getOrCreateCollection("knowledge_base");
  }
  return collectionId;
};

export async function POST() {
  try {
    // Parse knowledge base into chunks
    const { chunks, metadatas } = parseKnowledgeBase();
    const collId = await getKnowledgeCollectionId();
    
    // Generate IDs based on metadata
    const ids = metadatas.map(metadata => metadata.chunk_id);
    
    // Process in smaller batches to reduce memory usage
    const batchSize = 10;
    for (let i = 0; i < chunks.length; i += batchSize) {
      const batchIds = ids.slice(i, i + batchSize);
      const batchChunks = chunks.slice(i, i + batchSize);
      const batchMetadatas = metadatas.slice(i, i + batchSize);
      
      // Add data to ChromaDB in batches
      await addToCollection(collId, batchIds, batchChunks, batchMetadatas);
    }

    return NextResponse.json({
      success: true,
      message: "Knowledge base added successfully",
      count: chunks.length,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add knowledge base" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await getKnowledgeCollectionId();
    
    return NextResponse.json({
      success: true,
      message: "Knowledge base collection ready",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to get knowledge base information" },
      { status: 500 },
    );
  }
}