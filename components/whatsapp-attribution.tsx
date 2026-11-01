"use client"

import { useEffect } from "react"
import { applyVisitSource, isWhatsAppHref, rememberVisitSource } from "@/lib/whatsapp-visit-source"

// Menyimpan kanal asal pengunjung, lalu menambahkannya ke setiap tautan
// WhatsApp tepat sebelum diklik. href di HTML tidak berubah saat render,
// jadi tidak ada beda antara hasil server dan client.
export function WhatsAppAttribution() {
  useEffect(() => {
    rememberVisitSource()

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest("a")
      if (!anchor || !isWhatsAppHref(anchor.href)) return
      anchor.href = applyVisitSource(anchor.href)
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return null
}
