import { NextRequest, NextResponse } from "next/server"
import { generateResponse } from "@/lib/chat-helper"
import {
  checkRateLimit,
  detectPromptInjection,
  sanitizeChatMessage,
  sanitizeGeneratedText,
} from "@/lib/security-utils"

type Locale = "id" | "en"

const RATE_LIMIT = 100
const RATE_WINDOW = 15 * 60 * 1000

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown"

    const rateLimit = checkRateLimit(`chat:${ip}`, RATE_LIMIT, RATE_WINDOW)

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": RATE_LIMIT.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimit.resetTime.toString(),
            "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        }
      )
    }

    const contentLength = request.headers.get("content-length")
    if (contentLength && Number.parseInt(contentLength, 10) > 10000) {
      return NextResponse.json(
        { success: false, message: "Request too large" },
        { status: 413 }
      )
    }

    const body = (await request.json()) as { message?: string; locale?: Locale }
    const sanitizedMessage = sanitizeChatMessage(body.message ?? "")
    const locale: Locale = body.locale === "en" ? "en" : "id"

    if (!sanitizedMessage) {
      return NextResponse.json(
        { success: false, message: "Invalid message format or content" },
        { status: 400 }
      )
    }

    const injectionCheck = detectPromptInjection(sanitizedMessage)
    if (injectionCheck.blocked) {
      return NextResponse.json(
        {
          success: false,
          message:
            locale === "en"
              ? "This request cannot be processed because it violates the security policy."
              : "Permintaan tidak dapat diproses karena melanggar kebijakan keamanan.",
        },
        { status: 400 }
      )
    }

    const response = await generateResponse(sanitizedMessage, locale)
    const cleanResponse = sanitizeGeneratedText(response)

    return NextResponse.json(
      { success: true, message: cleanResponse },
      {
        headers: {
          "X-RateLimit-Limit": RATE_LIMIT.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
          "X-RateLimit-Reset": rateLimit.resetTime.toString(),
        },
      }
    )
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Maaf, terjadi kesalahan saat memproses pesan Anda. Silakan coba lagi nanti.",
      },
      { status: 500 }
    )
  }
}
