/**
 * Authentication and Authorization utilities
 * Simple API key based authentication for admin endpoints
 */

import { NextRequest, NextResponse } from 'next/server';

// Admin API key should be set in .env
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export interface AuthResult {
  authenticated: boolean;
  user?: {
    role: 'admin' | 'user';
    identifier: string;
  };
  error?: string;
}

/**
 * Verify API key from request headers
 */
export function verifyApiKey(request: NextRequest): AuthResult {
  const apiKey = request.headers.get('x-api-key') || request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!apiKey) {
    return {
      authenticated: false,
      error: 'API key required'
    };
  }
  
  // Check admin API key
  if (ADMIN_API_KEY && apiKey === ADMIN_API_KEY) {
    return {
      authenticated: true,
      user: {
        role: 'admin',
        identifier: 'admin'
      }
    };
  }
  
  return {
    authenticated: false,
    error: 'Invalid API key'
  };
}

/**
 * Middleware to protect admin routes
 * Returns NextResponse with 401 if not authenticated
 */
export function requireAuth(request: NextRequest): AuthResult | NextResponse {
  const auth = verifyApiKey(request);
  
  if (!auth.authenticated) {
    return NextResponse.json(
      { 
        success: false, 
        message: auth.error || 'Authentication required' 
      },
      { 
        status: 401,
        headers: {
          'WWW-Authenticate': 'Bearer realm="API"'
        }
      }
    );
  }
  
  return auth;
}

/**
 * Require admin role
 */
export function requireAdmin(request: NextRequest): AuthResult | NextResponse {
  const auth = requireAuth(request);
  
  if (auth instanceof NextResponse) {
    return auth;
  }
  
  if (auth.user?.role !== 'admin') {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Admin access required' 
      },
      { status: 403 }
    );
  }
  
  return auth;
}

/**
 * Generate secure API key
 */
export function generateApiKey(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return 'mk_' + Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Hash API key for storage (for future database implementation)
 */
export async function hashApiKey(apiKey: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(apiKey);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verify hashed API key (for future database implementation)
 */
export async function verifyHashedApiKey(apiKey: string, hash: string): Promise<boolean> {
  const computedHash = await hashApiKey(apiKey);
  return computedHash === hash;
}

export const AuthUtils = {
  verifyApiKey,
  requireAuth,
  requireAdmin,
  generateApiKey,
  hashApiKey,
  verifyHashedApiKey,
};
