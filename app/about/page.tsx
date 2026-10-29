import type { Metadata } from "next"

import { AboutPageContent } from "@/components/about-page-content"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "Tentang Meowlabs.id | Studio Teknologi Independen dari Semarang",
  description:
    "Meowlabs.id adalah studio teknologi independen dari Semarang yang didirikan Hasrinata Arya Afendi. Tiga pilar kami: AI engineering untuk bisnis, produk digital sendiri, serta riset dan open source.",
  keywords: [
    "meowlabs id",
    "jasa pembuatan website umkm",
    "studio ai engineering",
    "mahasiswa unimus",
    "hasrinata arya afendi",
    "web developer semarang",
  ],
  openGraph: {
    title: "Tentang Meowlabs.id",
    description:
      "Studio teknologi independen dari Semarang: AI engineering, produk digital, serta riset dan open source. Founder Hasrinata Arya Afendi.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <AboutPageContent />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "Meowlabs.id",
              description:
                "Studio teknologi independen dari Semarang yang membangun sistem AI, produk digital, dan software yang berguna. Didirikan oleh Hasrinata Arya Afendi, mahasiswa Unimus.",
              url: "https://meowlabs.id",
              founder: {
                "@type": "Person",
                name: "Hasrinata Arya Afendi",
                url: "https://hasrinata.meowlabs.id/",
              },
            },
          }),
        }}
      />
    </main>
  )
}
