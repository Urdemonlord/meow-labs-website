/**
 * Security utilities for input validation and sanitization
 * Prevents XSS, SQL Injection, and other attacks
 */

// 1. HTML escaping untuk prevent XSS
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// 2. Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

// 3. Validate phone number (Indonesia format)
export function isValidPhone(phone: string): boolean {
  // Format: 08xx-xxxx-xxxx atau +62xxx
  const phoneRegex = /^(\+?62|0)[0-9]{9,13}$/
  return phoneRegex.test(phone.replace(/[\s-]/g, ''))
}

// 4. Sanitize string input - remove dangerous characters
export function sanitizeString(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== 'string') return ''
  
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
}

// 5. Validate URL
export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return ['http:', 'https:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

// 6. Sanitize URL - only allow safe protocols
export function sanitizeUrl(url: string): string | null {
  if (!url) return null
  
  try {
    const parsed = new URL(url)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return null
    }
    return parsed.toString()
  } catch {
    return null
  }
}

// 7. Rate limiting helper
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs }
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime }
  }

  record.count++
  return { allowed: true, remaining: maxRequests - record.count, resetTime: record.resetTime }
}

// 8. Validate and sanitize chat message
export function sanitizeChatMessage(message: string): string | null {
  if (!message || typeof message !== 'string') return null
  
  const sanitized = message.trim()
  
  // Check length
  if (sanitized.length === 0 || sanitized.length > 2000) return null
  
  // Remove dangerous content
  const safe = sanitized
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
  
  return safe
}

// 9. Generate secure random token
export function generateSecureToken(length: number = 32): string {
  const array = new Uint8Array(length)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(array)
  } else {
    // Fallback for Node.js
    const { randomBytes } = require('crypto')
    const buffer = randomBytes(length)
    for (let i = 0; i < length; i++) {
      array[i] = buffer[i]
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

// 10. Validate file path (prevent path traversal)
export function isValidFilePath(filePath: string): boolean {
  // Prevent path traversal attacks
  const normalized = filePath.replace(/\\/g, '/')
  if (normalized.includes('../') || normalized.includes('..\\')) {
    return false
  }
  
  // Only allow alphanumeric, dash, underscore, dot
  const filenameRegex = /^[a-zA-Z0-9._-]+$/
  const filename = normalized.split('/').pop() || ''
  
  return filenameRegex.test(filename)
}

// 11. Content Type validation
export function isValidContentType(contentType: string, allowedTypes: string[]): boolean {
  return allowedTypes.some(type => contentType.toLowerCase().includes(type.toLowerCase()))
}

// 12. SQL Injection prevention - parameterized query helper
export function escapeSQL(value: any): string {
  if (value === null || value === undefined) return 'NULL'
  if (typeof value === 'number') return value.toString()
  if (typeof value === 'boolean') return value ? '1' : '0'
  
  // Escape string
  return "'" + value.toString().replace(/'/g, "''") + "'"
}

// 13. Validate API key format
export function isValidApiKey(apiKey: string): boolean {
  // Check if API key matches expected format
  if (!apiKey || typeof apiKey !== 'string') return false
  
  // Example: Check length and character set
  return apiKey.length >= 32 && /^[A-Za-z0-9_-]+$/.test(apiKey)
}

// 14. IP address validation
export function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/
  const ipv6Regex = /^([0-9a-fA-F]{0,4}:){7}[0-9a-fA-F]{0,4}$/
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip)
}

// 15. Clean object - remove sensitive fields
export function sanitizeObject<T extends Record<string, any>>(
  obj: T,
  sensitiveFields: string[] = ['password', 'token', 'secret', 'apiKey', 'api_key']
): Partial<T> {
  const cleaned: any = {}
  
  for (const [key, value] of Object.entries(obj)) {
    if (!sensitiveFields.includes(key)) {
      cleaned[key] = value
    }
  }
  
  return cleaned
}

// 16. Validate JSON input
export function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str)
    return true
  } catch {
    return false
  }
}

// 17. Hash sensitive data (for logging)
export function hashSensitiveData(data: string): string {
  if (!data || data.length < 4) return '****'
  return data.substring(0, 2) + '****' + data.substring(data.length - 2)
}

export const SecurityUtils = {
  escapeHtml,
  isValidEmail,
  isValidPhone,
  sanitizeString,
  isValidUrl,
  sanitizeUrl,
  checkRateLimit,
  sanitizeChatMessage,
  generateSecureToken,
  isValidFilePath,
  isValidContentType,
  escapeSQL,
  isValidApiKey,
  isValidIP,
  sanitizeObject,
  isValidJSON,
  hashSensitiveData,
}
