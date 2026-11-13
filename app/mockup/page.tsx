import type { Metadata } from "next"

import { MockupPageContent } from "@/components/mockup-page-content"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { sharedOpenGraph } from "@/lib/seo"

export const metadata: Metadata = {
  alternates: { canonical: "/mockup" },
  title: "Studio Mockup Meowlabs.id | Buat Mockup Website Gratis",
  description:
    "Buat mockup website atau aplikasi gratis dalam semenit: ceritakan usahamu, pilih gaya, lihat mockup konsep plus perkiraan harga dan waktu. Cocok, lanjut jadi proyek.",
  keywords: [
    "mockup website gratis",
    "buat mockup website",
    "jasa pembuatan website semarang",
    "meowlabs id",
    "desain website umkm",
  ],
  openGraph: {
    ...sharedOpenGraph,
    title: "Studio Mockup Meowlabs.id",
    description:
      "Lihat dulu websitemu sebelum memutuskan: mockup konsep gratis, perkiraan harga, dan brief siap kirim.",
    url: "/mockup",
  },
}

export default function MockupPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <MockupPageContent />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Studio Mockup Meowlabs.id",
            description:
              "Buat mockup website atau aplikasi gratis: ceritakan usaha, pilih gaya, lihat mockup konsep dan perkiraan harga.",
            url: "https://meowlabs.id/mockup",
          }),
        }}
      />
    </main>
  )
}
