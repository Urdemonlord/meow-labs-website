"use client"

import Image from "next/image"
import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { useUiText } from "./ui-preferences-provider"

// Isi chat (riwayat, pengiriman pesan) baru diunduh saat panel dibuka,
// jadi halaman yang tidak memakai chat tidak ikut menanggung kodenya.
const WorkingChatInterface = dynamic(
  () => import("./working-chat-interface").then((mod) => mod.WorkingChatInterface),
  {
    ssr: false,
    loading: () => (
      <div role="status" className="flex h-full items-center justify-center text-sm text-ink-muted">
        Memuat chat…
      </div>
    ),
  },
)

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
          className="ml-pop relative h-14 w-14 rounded-full border border-ink bg-ink shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
          aria-label={copy.chat.open}
        >
          {/* Wajah maskot sebagai tombol chat; badge kecil menandakan fungsinya. */}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <Image src="/art/mascot-avatar.webp" alt="" width={128} height={128} className="h-full w-full scale-125 object-cover object-top" />
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
