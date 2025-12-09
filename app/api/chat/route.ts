import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "@/lib/chat-helper";
import { sanitizeChatMessage, checkRateLimit } from "@/lib/security-utils";

// Rate limiting: 100 requests per 15 minutes per IP
const RATE_LIMIT = 100;
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutes

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    const rateLimit = checkRateLimit(`chat:${ip}`, RATE_LIMIT, RATE_WINDOW);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Too many requests. Please try again later.",
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
            'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }
    
    // Parse request with size limit
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10000) { // 10KB max
      return NextResponse.json(
        { success: false, message: "Request too large" },
        { status: 413 }
      );
    }
    
    const body = await request.json();
    const { message } = body;
    
    // Validate and sanitize message
    const sanitizedMessage = sanitizeChatMessage(message);
    
    if (!sanitizedMessage) {
      return NextResponse.json(
        { success: false, message: "Invalid message format or content" },
        { status: 400 }
      );
    }
    
    // Generate a response based on the sanitized message
    const response = await generateResponse(sanitizedMessage);
    
    // Return the response with rate limit headers
    return NextResponse.json(
      {
        success: true,
        message: response,
      },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString()
        }
      }
    );
  } catch (error) {
    // Don't leak error details
    return NextResponse.json(
      { 
        success: false, 
        message: "Maaf, terjadi kesalahan saat memproses pesan Anda. Silakan coba lagi nanti." 
      },
      { status: 500 }
    );
  }
}