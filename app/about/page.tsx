import type { Metadata } from "next"

import { AboutPageContent } from "@/components/about-page-content"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Tentang Meowlabs.id | Jasa Website UMKM",
  description:
    "Meowlabs.id adalah UMKM jasa pembuatan website oleh mahasiswa Unimus, didirikan oleh Hasrinata Arya Afendi untuk membantu UMKM dan personal brand membangun website yang rapi dan efektif.",
  keywords: [
    "meowlabs id",
    "jasa pembuatan website umkm",
    "mahasiswa unimus",
    "hasrinata arya afendi",
    "web developer semarang",
  ],
  openGraph: {
    title: "Tentang Meowlabs.id",
    description:
      "UMKM jasa website oleh mahasiswa Unimus, founder Hasrinata Arya Afendi.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
                "UMKM jasa pembuatan website oleh mahasiswa Unimus, didirikan oleh Hasrinata Arya Afendi.",
              url: "https://meowlabs.id",
              founder: {
                "@type": "Person",
                name: "Hasrinata Arya Afendi",
              },
            },
          }),
        }}
      />
    </main>
  )
}
