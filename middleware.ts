import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // 1. Content Security Policy (CSP) - Critical untuk prevent XSS
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https: https://www.googletagmanager.com https://www.google-analytics.com;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://api.trychroma.com https://show-case-it-05.vercel.app https://www.google-analytics.com https://generativelanguage.googleapis.com https://api.whatsapp.com;
    media-src 'self';
    object-src 'none';
    frame-src 'self';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()

  response.headers.set('Content-Security-Policy', cspHeader)

  // 2. X-Frame-Options - Prevent Clickjacking
  response.headers.set('X-Frame-Options', 'DENY')

  // 3. X-Content-Type-Options - Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // 4. X-XSS-Protection - Enable browser XSS protection
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // 5. Referrer-Policy - Control referrer information leakage
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // 6. Permissions-Policy - Restrict browser features
  response.headers.set(
    'Permissions-Policy',
    'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
  )

  // 7. Strict-Transport-Security (HSTS) - Force HTTPS
  // Only enable in production with proper SSL
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    )
  }

  // 8. X-DNS-Prefetch-Control - Control DNS prefetching
  response.headers.set('X-DNS-Prefetch-Control', 'on')

  // 9. CORS - Strict origin validation (handled per route, but set base policy)
  const origin = request.headers.get('origin')
  const allowedOrigins = [
    'https://meowlabs.id',
    'https://www.meowlabs.id',
    process.env.NEXT_PUBLIC_APP_URL,
  ].filter(Boolean)

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-CSRF-Token'
    )
  }

  // 10. Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers })
  }

  // 11. Rate limiting headers (informational)
  response.headers.set('X-RateLimit-Limit', '100')
  response.headers.set('X-RateLimit-Remaining', '99')

  return response
}

// Apply middleware to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
