import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "@/lib/chat-helper";

export async function POST(request: NextRequest) {
  try {
    // Parse request
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, message: "Invalid request format" },
        { status: 400 }
      );
    }
    
    // Generate a response based on the message
    const response = await generateResponse(message);
    
    // Return the response
    return NextResponse.json({
      success: true,
      message: response,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Maaf, terjadi kesalahan saat memproses pesan Anda. Silakan coba lagi nanti." 
      },
      { status: 500 }
    );
  }
}