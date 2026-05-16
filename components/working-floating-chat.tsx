"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { WorkingChatInterface } from "./working-chat-interface"
import { useUiText } from "./ui-preferences-provider"

export function WorkingFloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)
  const copy = useUiText()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6" ref={widgetRef}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-card text-primary shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          aria-label={copy.chat.open}
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="flex h-[min(76vh,36rem)] w-[min(92vw,24rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between border-b border-border bg-background/90 px-4 py-3">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-foreground">{copy.chat.title}</div>
              <div className="truncate text-xs text-muted-foreground">{copy.chat.subtitle}</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={copy.chat.close}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="min-h-0 flex-1">
            <WorkingChatInterface />
          </div>
        </div>
      )}
    </div>
  )
}
