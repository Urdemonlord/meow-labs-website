"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { buildWhatsAppUrl, MEOWLABS_ADMIN_PHONE_DISPLAY } from "@/lib/whatsapp"
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react"
import { useUiPreferences } from "./ui-preferences-provider"

const promoExtensions = ["web.id", "my.id", "biz.id"]

export function DomainPromoSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

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

  const handleWhatsAppClick = () => {
    window.open(buildWhatsAppUrl(whatsappMessage), "_blank")
  }

  const bullets = isEn
    ? [
        "Check your preferred domain name via WhatsApp.",
        "Our team verifies availability and confirms the promo price manually.",
        "Payment and activation are handled with clear admin assistance.",
      ]
    : [
        "Cek nama domain yang kamu mau lewat WhatsApp.",
        "Tim kami cek ketersediaan dan konfirmasi harga promo secara manual.",
        "Pembayaran dan aktivasi dibantu langsung oleh admin.",
      ]

  return (
    <section id="promo-domain" className="bg-muted/40 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm sm:p-10">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
              {isEn ? "Domain promo" : "Promo domain"}
            </Badge>
            <h2 className="max-w-3xl text-balance text-3xl font-bold text-foreground sm:text-4xl">
              {isEn ? "Get web.id, my.id, and biz.id domains starting from Rp3.000" : "Dapatkan domain web.id, my.id, dan biz.id mulai Rp3.000"}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {isEn
                ? "Display the offer on Meow Labs and let visitors order through WhatsApp. Availability and activation are confirmed manually by our admin."
                : "Tampilkan promo di Meow Labs dan arahkan pengunjung untuk pesan lewat WhatsApp. Ketersediaan dan aktivasi domain dikonfirmasi manual oleh admin kami."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {promoExtensions.map((extension) => (
                <span
                  key={extension}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {extension}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-border/60 bg-background p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>{isEn ? "Manual order flow" : "Alur order manual"}</span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-background/90 p-4">
                <div className="text-sm font-semibold text-foreground">1. {isEn ? "Chat admin" : "Chat admin"}</div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {isEn
                    ? "Visitors click the WhatsApp button and send the domain they want."
                    : "Pengunjung klik tombol WhatsApp lalu kirim nama domain yang mereka inginkan."}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/90 p-4">
                <div className="text-sm font-semibold text-foreground">2. {isEn ? "Availability check" : "Cek ketersediaan"}</div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {isEn
                    ? "Admin checks availability and confirms the promo terms before payment."
                    : "Admin cek ketersediaan dan konfirmasi syarat promo sebelum pembayaran."}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/90 p-4">
                <div className="text-sm font-semibold text-foreground">3. {isEn ? "Manual activation" : "Aktivasi manual"}</div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {isEn
                    ? "After payment, the domain is processed manually and the result is delivered to the customer."
                    : "Setelah pembayaran, domain diproses manual lalu hasilnya dikirim ke customer."}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-background/80 p-4">
              <div className="text-sm font-semibold text-foreground">{isEn ? "Admin WhatsApp" : "WhatsApp admin"}</div>
              <p className="mt-1 text-sm text-muted-foreground">{MEOWLABS_ADMIN_PHONE_DISPLAY}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {isEn
                  ? "The CTA uses the same admin number shown in the footer so the order flow stays consistent."
                  : "CTA ini memakai nomor admin yang sama seperti di footer supaya alur pemesanan tetap konsisten."}
              </p>
            </div>

            <Button size="lg" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-2 h-4 w-4" />
              {isEn ? "Order via WhatsApp" : "Pesan via WhatsApp"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {isEn
                ? "Promo availability, registration requirements, and renewal pricing are confirmed during admin chat."
                : "Ketersediaan promo, syarat pendaftaran, dan harga renewal dikonfirmasi saat chat dengan admin."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
