/**
 * CSRF Token Generation Endpoint
 * Clients should call this before making state-changing requests
 */

import { NextRequest, NextResponse } from 'next/server';
import { createCsrfResponse } from '@/lib/csrf-utils';
import { checkRateLimit } from '@/lib/security-utils';

const RATE_LIMIT = 100;
const RATE_WINDOW = 60 * 1000; // 1 minute

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const rateLimit = checkRateLimit(`csrf:${ip}`, RATE_LIMIT, RATE_WINDOW);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Too many requests" 
        },
        { status: 429 }
      );
    }
    
    // Generate and return CSRF token
    return createCsrfResponse({
      success: true,
      message: 'CSRF token generated',
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to generate CSRF token" 
      },
      { status: 500 }
    );
  }
}
