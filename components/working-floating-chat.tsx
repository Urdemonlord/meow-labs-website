"use client"

import Image from "next/image"
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
          className="relative h-14 w-14 rounded-full border border-ink bg-ink shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
          aria-label={copy.chat.open}
        >
          {/* Wajah maskot sebagai tombol chat; badge kecil menandakan fungsinya. */}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <Image src="/art/mascot-head.webp" alt="" width={214} height={256} className="h-full w-full scale-125 object-cover object-top" />
          </span>
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-paper bg-vermilion text-ink">
            <MessageSquare className="h-3 w-3" />
          </span>
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
