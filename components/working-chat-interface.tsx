"use client"

import { useEffect, useRef, useState } from "react"
import { SendHorizonal } from "lucide-react"
import { useUiText } from "./ui-preferences-provider"

type Message = {
  id: string
  type: "user" | "bot"
  text: string
  timestamp: Date
}

const STORAGE_KEY = "meow-chat-history"

export function WorkingChatInterface() {
  const copy = useUiText()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: copy.chat.greeting,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isFetchingRef = useRef(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY)
      if (!savedMessages) return

      const parsed = JSON.parse(savedMessages)
      if (!Array.isArray(parsed) || parsed.length === 0) return

      const validMessages = parsed
        .map((item: unknown) => {
          if (
            item &&
            typeof item === "object" &&
            "id" in item &&
            "type" in item &&
            "text" in item &&
            "timestamp" in item
          ) {
            const typedItem = item as {
              id: string
              type: "user" | "bot"
              text: string
              timestamp: string
            }

            return {
              id: String(typedItem.id),
              type: typedItem.type,
              text: String(typedItem.text),
              timestamp: new Date(typedItem.timestamp),
            } satisfies Message
          }

          return null
        })
        .filter((message): message is Message => message !== null)

      if (validMessages.length > 0) {
        setMessages(validMessages)
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  useEffect(() => {
    setMessages((current) => {
      if (current.length === 0) {
        return [
          {
            id: "1",
            type: "bot",
            text: copy.chat.greeting,
            timestamp: new Date(),
          },
        ]
      }

      return current
    })
  }, [copy.chat.greeting])

  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const trimmedInput = inputValue.trim()
    if (!trimmedInput || isLoading || isFetchingRef.current) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: trimmedInput,
      timestamp: new Date(),
    }

    setMessages((current) => [...current, userMessage])
    setInputValue("")
    setIsLoading(true)
    isFetchingRef.current = true

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmedInput,
          locale: copy.chat.locale === "en-US" ? "en" : "id",
        }),
      })

      if (!response.ok) {
        throw new Error("Chat request failed")
      }

      const data = await response.json()

      setMessages((current) => [
        ...current,
        {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: data.message || copy.chat.empty,
          timestamp: new Date(),
        },
      ])
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: copy.chat.error,
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
      isFetchingRef.current = false
      inputRef.current?.focus()
    }
  }

  const formatTime = (date: Date) =>
    date.toLocaleTimeString(copy.chat.locale, {
      hour: "2-digit",
      minute: "2-digit",
    })

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="border-b border-border bg-gradient-to-r from-background to-card px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <h3 className="text-sm font-semibold text-foreground">{copy.chat.title}</h3>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{copy.chat.subtitle}</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground"
                }`}
              >
                <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">{message.text}</p>
                <p
                  className={`mt-2 text-[11px] ${
                    message.type === "user" ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-border bg-background px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  <span>{copy.chat.loading}</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-border bg-background/95 p-3">
        <div className="flex items-end gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={copy.chat.placeholder}
            className="min-w-0 flex-1 rounded-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            disabled={isLoading}
            autoFocus
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <SendHorizonal className="mr-2 h-4 w-4" />
            {copy.chat.send}
          </button>
        </div>
      </form>
    </div>
  )
}
