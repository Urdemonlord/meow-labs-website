import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaBand, PageHeader } from "@/components/editorial"
import { fetchAppVerseBansos } from "@/lib/appverse-bansos"
import { fetchAwesomeIndonesia } from "@/lib/awesome-indonesia"
import { fetchTokenGratis } from "@/lib/tokengratis"

export const metadata: Metadata = {
  title: "Resources AI Gratis & Open Source | Meow Labs",
  description:
    "Hub resource Meow Labs untuk bansos AI, direktori API AI gratis, dan kurasi project open source pilihan untuk builder Indonesia.",
  keywords: [
    "bansos ai",
    "ai gratis indonesia",
    "api ai gratis",
    "project open source pilihan",
    "resource ai indonesia",
  ],
  openGraph: {
    title: "Resources AI Gratis & Open Source | Meow Labs",
    description:
      "Kurasi Meow Labs untuk promo AI, direktori API gratis, dan open source yang layak dijadikan fondasi produk.",
    type: "website",
    url: "https://meowlabs.id/resources",
  },
  alternates: {
    canonical: "https://meowlabs.id/resources",
  },
}

export default async function ResourcesHubPage() {
  const [bansos, tokenGratis, openSource] = await Promise.all([
    fetchAppVerseBansos(),
    fetchTokenGratis(),
    fetchAwesomeIndonesia(),
  ])

  const resourceHubSections = [
    {
      title: "Bansos AI",
      href: "/resources/bansos-ai",
      description:
        "Promo, kredit, dan resource AI hemat yang diarsipkan ulang ke Meow Labs supaya tutorialnya bisa dibaca di sini.",
      count: bansos.total,
    },
    {
      title: "API AI Gratis",
      href: "/resources/api-ai-gratis",
      description:
        "Direktori provider AI gratis dengan ringkasan claim dasar dan metadata utama, dibaca langsung di Meow Labs.",
      count: tokenGratis.total,
    },
    {
      title: "Open Source Pilihan",
      href: "/resources/open-source",
      description:
        "Proyek open source Indonesia dari komunitas, ditarik live dari GitHub untuk discovery cepat tanpa list basi.",
      count: openSource.total,
    },
  ]

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <PageHeader
        eyebrow="// Resources"
        title="Resource hub untuk builder yang ingin bergerak cepat."
        intro="Kurasi Meow Labs untuk resource AI gratis, direktori API, dan proyek open source yang relevan untuk validasi, eksperimen, dan membangun MVP. Ringkasan tutorialnya bisa dibaca langsung di sini."
      >
        <dl className="grid border-t border-ink sm:grid-cols-3">
          {[
            { value: "3 vertikal", label: "Bansos AI · API Gratis · Open Source" },
            { value: `${tokenGratis.total} provider`, label: "Tutorial dasar provider AI gratis" },
            { value: `${openSource.total}+ proyek`, label: "Open source Indonesia dari GitHub" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse border-b border-rule py-5 sm:pr-6">
              <dt className="ml-eyebrow mt-2 text-ink-muted">{stat.label}</dt>
              <dd className="text-2xl font-medium">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <ol className="border-t border-ink">
            {resourceHubSections.map((section, index) => (
              <li key={section.href} className="border-b border-rule">
                <Link href={section.href} className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                  <span className="ml-eyebrow text-ink-muted md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-3xl leading-none group-hover:underline md:col-span-4 md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="text-pretty leading-relaxed text-ink-muted md:col-span-5">{section.description}</p>
                  <span className="ml-eyebrow flex items-center justify-between gap-3 text-ink md:col-span-2 md:justify-end">
                    {section.count} entri
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Mau resource hub serupa untuk bisnis atau komunitas Anda?"
        body="Meow Labs bisa membantu membuat direktori, knowledge base, atau content hub yang SEO-friendly, cepat, dan mudah dirawat."
        whatsappMessage="Halo Meow Labs, saya ingin membuat resource hub seperti halaman resources."
        buttonLabel="Konsultasi"
      />
      <Footer />
    </main>
  )
}
