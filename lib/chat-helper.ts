import fs from "fs"
import path from "path"
import { generateGeminiResponse, generateGreetingResponse } from "./gemini-helper"
import type { Locale } from "./ui-copy"

let cachedKnowledgeBase: string | null = null

function getKnowledgeBase(): string {
  if (cachedKnowledgeBase) return cachedKnowledgeBase

  try {
    const filePath = path.join(process.cwd(), "knowledge.md")
    cachedKnowledgeBase = fs.readFileSync(filePath, "utf8")
    return cachedKnowledgeBase
  } catch (error) {
    console.error("Error reading knowledge.md:", error)
    return ""
  }
}

export async function generateResponse(query: string, locale: Locale = "id"): Promise<string> {
  try {
    const normalizedQuery = query.toLowerCase().trim()

    if (isGreeting(normalizedQuery)) {
      return await generateGreetingResponse(locale)
    }

    const knowledgeContent = getKnowledgeBase()
    if (knowledgeContent) {
      return await generateGeminiResponse(query, [knowledgeContent], locale)
    }

    return await generateGeminiResponse(query, [""], locale)
  } catch (error) {
    console.error("Error generating response:", error)

    return locale === "en"
      ? "The AI assistant is temporarily unavailable. Please contact our team via WhatsApp +62 851-1717-0198 or email admin@meowlabs.id."
      : "Sistem AI sedang offline untuk sementara. Silakan hubungi tim kami via WhatsApp +62 851-1717-0198 atau email admin@meowlabs.id."
  }
}

function isGreeting(query: string): boolean {
  const greetings = [
    "hai",
    "halo",
    "hi",
    "hello",
    "hey",
    "selamat pagi",
    "selamat siang",
    "selamat sore",
    "selamat malam",
    "assalamualaikum",
    "salam",
    "permisi",
  ]

  return greetings.some((greeting) => query.startsWith(greeting))
}
