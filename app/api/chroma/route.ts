import { NextRequest, NextResponse } from "next/server";
import { getOrCreateCollection, addToCollection } from "@/lib/chroma-api";
import { requireAdmin } from "@/lib/auth-utils";
import { checkRateLimit } from "@/lib/security-utils";

// Rate limiting: 50 requests per 15 minutes
const RATE_LIMIT = 50;
const RATE_WINDOW = 15 * 60 * 1000;

interface AddDataRequest {
  ids: string[];
  documents: string[];
  metadatas: Record<string, any>[];
}

let collectionId: string | null = null;

const getCollectionId = async () => {
  if (!collectionId) {
    collectionId = await getOrCreateCollection("knowledge_base");
  }
  return collectionId;
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
    
    const collId = await getCollectionId();

    await addToCollection(collId, data.ids, data.documents, data.metadatas);

    return NextResponse.json({
      success: true,
      message: "Data added successfully",
      count: data.ids.length,
    });
  } catch (error) {
    console.error("Error:", error);
    // Don't leak error details
    return NextResponse.json(
      { success: false, message: "Failed to add data" },
      { status: 500 },
    );
  }
}