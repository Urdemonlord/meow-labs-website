"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MessageCircle, Sparkles, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { useUiPreferences } from "./ui-preferences-provider"

const STORAGE_KEY = "meow-domain-promo-popup-dismissed"

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY)
      if (dismissed === "true") return
    } catch {
      // Ignore localStorage access failures.
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsOpen(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, "true")
    } catch {
      // Ignore localStorage access failures.
    }
  }

  const whatsappMessage = isEn
    ? [
        "Hello admin Meow Labs, I want to check the domain promo.",
        "",
        "Desired domain:",
        "Extension: web.id / my.id / biz.id",
        "Purpose:",
      ].join("\n")
    : [
        "Halo admin Meow Labs, saya mau cek promo domain.",
        "",
        "Nama domain yang diinginkan:",
        "Ekstensi: web.id / my.id / biz.id",
        "Keperluan:",
      ].join("\n")

  const handleWhatsAppContact = () => {
    window.open(buildWhatsAppUrl(whatsappMessage), "_blank")
    closePopup()
  }

  if (!isOpen) return null

  return (
    <div className="animate-in fade-in fixed inset-0 z-[70] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
      <div className="animate-in zoom-in-95 relative w-full max-w-lg overflow-hidden rounded-[28px] border border-border/70 bg-background p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-full border border-border/70 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={isEn ? "Close promo popup" : "Tutup popup promo"}
        >
          <X className="h-4 w-4" />
        </button>

        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
          <Sparkles className="mr-2 h-3.5 w-3.5" />
          {isEn ? "Limited domain promo" : "Promo domain terbatas"}
        </Badge>

        <h3 className="max-w-md text-balance text-2xl font-bold text-foreground sm:text-3xl">
          {isEn ? "Claim web.id, my.id, and biz.id starting from Rp3.000" : "Klaim web.id, my.id, dan biz.id mulai Rp3.000"}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          {isEn
            ? "Order through WhatsApp first. Our admin checks availability manually before payment and activation."
            : "Pesan dulu lewat WhatsApp. Admin kami cek ketersediaan domain secara manual sebelum pembayaran dan aktivasi."}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            isEn ? "Promo for web.id" : "Promo untuk web.id",
            isEn ? "Promo for my.id" : "Promo untuk my.id",
            isEn ? "Promo for biz.id" : "Promo untuk biz.id",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border/70 bg-muted/40 px-4 py-3 text-sm font-medium text-foreground">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4">
          <p className="text-sm leading-6 text-muted-foreground">
            {isEn
              ? "Renewal pricing and registration requirements are confirmed during the admin chat so visitors get the exact next step."
              : "Harga renewal dan syarat registrasi dikonfirmasi saat chat dengan admin supaya pengunjung langsung dapat langkah berikutnya dengan jelas."}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleWhatsAppContact}>
            <MessageCircle className="mr-2 h-4 w-4" />
            {isEn ? "Order via WhatsApp" : "Pesan via WhatsApp"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button type="button" variant="outline" className="w-full rounded-full" onClick={closePopup}>
            {isEn ? "Maybe later" : "Nanti dulu"}
          </Button>
        </div>
      </div>
    </div>
  )
}
