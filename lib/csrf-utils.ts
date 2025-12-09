/**
 * CSRF (Cross-Site Request Forgery) Protection
 * Implements double-submit cookie pattern for CSRF prevention
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateSecureToken } from './security-utils';

const CSRF_TOKEN_HEADER = 'x-csrf-token';
const CSRF_COOKIE_NAME = 'csrf-token';
const CSRF_TOKEN_LENGTH = 32;

/**
 * Generate a new CSRF token
 */
export function generateCsrfToken(): string {
  return generateSecureToken(CSRF_TOKEN_LENGTH);
}

/**
 * Set CSRF token in response cookie
 */
export function setCsrfCookie(response: NextResponse, token: string): NextResponse {
  response.cookies.set({
    name: CSRF_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  });
  
  return response;
}

/**
 * Get CSRF token from request cookie
 */
export function getCsrfTokenFromCookie(request: NextRequest): string | null {
  return request.cookies.get(CSRF_COOKIE_NAME)?.value || null;
}

/**
 * Get CSRF token from request header
 */
export function getCsrfTokenFromHeader(request: NextRequest): string | null {
  return request.headers.get(CSRF_TOKEN_HEADER) || null;
}

/**
 * Verify CSRF token (double-submit cookie pattern)
 */
export function verifyCsrfToken(request: NextRequest): boolean {
  const cookieToken = getCsrfTokenFromCookie(request);
  const headerToken = getCsrfTokenFromHeader(request);
  
  if (!cookieToken || !headerToken) {
    return false;
  }
  
  // Constant-time comparison to prevent timing attacks
  return constantTimeCompare(cookieToken, headerToken);
}

/**
 * Constant-time string comparison to prevent timing attacks
 */
function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}

/**
 * Middleware to require CSRF token for state-changing methods
 */
export function requireCsrfToken(request: NextRequest): NextResponse | null {
  // Skip CSRF check for safe methods
  const safeMethods = ['GET', 'HEAD', 'OPTIONS'];
  if (safeMethods.includes(request.method)) {
    return null;
  }
  
  // Verify CSRF token
  if (!verifyCsrfToken(request)) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'CSRF token validation failed' 
      },
      { status: 403 }
    );
  }
  
  return null;
}

/**
 * Generate CSRF token and set cookie (for use in API routes)
 */
export function createCsrfResponse(data: any = {}): NextResponse {
  const token = generateCsrfToken();
  const response = NextResponse.json({
    ...data,
    csrfToken: token,
  });
  
  return setCsrfCookie(response, token);
}

/**
 * Middleware to attach CSRF token to response
 */
export function attachCsrfToken(response: NextResponse): NextResponse {
  const token = generateCsrfToken();
  
  // Set in cookie
  setCsrfCookie(response, token);
  
  // Also add to response header for client access
  response.headers.set(CSRF_TOKEN_HEADER, token);
  
  return response;
}

export const CsrfUtils = {
  generateCsrfToken,
  setCsrfCookie,
  getCsrfTokenFromCookie,
  getCsrfTokenFromHeader,
  verifyCsrfToken,
  requireCsrfToken,
  createCsrfResponse,
  attachCsrfToken,
  CSRF_TOKEN_HEADER,
  CSRF_COOKIE_NAME,
};
