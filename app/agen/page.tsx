import type { Metadata } from "next"

import { AgentsPageContent } from "@/components/agents-page-content"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  alternates: { canonical: "/agen" },
  title: "Agen AI Meowlabs.id | Tim AI untuk Website dan Aplikasi",
  description:
    "Kenalan dengan tim AI Meow Labs: Kala (manajer proyek), Saka (desainer), Runa (developer), Tara (QA), dan Nara (copywriter). Agen AI bekerja 24/7, hasilnya diperiksa manusia.",
  keywords: [
    "agen ai",
    "tim ai",
    "jasa pembuatan website semarang",
    "meowlabs id",
    "ai agent indonesia",
  ],
  openGraph: {
    title: "Agen AI Meowlabs.id",
    description:
      "Lima agen AI mengerjakan proyek klien Meow Labs, dari brief sampai serah terima, diawasi manusia.",
    type: "website",
  },
}

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <AgentsPageContent />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Agen AI Meowlabs.id",
            description:
              "Tim AI Meow Labs: Kala (manajer proyek), Saka (desainer), Runa (developer), Tara (QA), dan Nara (copywriter).",
            url: "https://meowlabs.id/agen",
          }),
        }}
      />
    </main>
  )
}
