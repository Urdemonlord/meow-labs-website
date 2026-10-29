import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaBand, PageHeader } from "@/components/editorial"
import { WorkCard } from "@/components/work-card"
import { works } from "@/lib/works"
import { sharedOpenGraph } from "@/lib/seo"

const description =
  "Karya MeowLabs untuk klien: company profile, toko online, sistem informasi, dan chatbot AI untuk UMKM, institusi, dan perusahaan."

export const metadata: Metadata = {
  title: "Karya MeowLabs: Website dan Sistem untuk Klien | MeowLabs",
  description,
  alternates: { canonical: "/karya" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Karya MeowLabs",
    description,
    url: "/karya",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Karya MeowLabs",
  itemListElement: works.map((work, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: work.name,
    url: work.url,
  })),
}

export default function KaryaPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <PageHeader
        eyebrow="Karya"
        title="Dibangun untuk klien, dipakai setiap hari."
        intro="Website, toko online, sistem informasi, dan chatbot yang kami kerjakan untuk UMKM, institusi, dan perusahaan. Semuanya live dan bisa Anda kunjungi."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Karya" }]}
      />

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <li key={work.slug} className="ml-reveal">
                <WorkCard
                  name={work.name}
                  url={work.url}
                  image={work.image}
                  description={work.description}
                  label={work.category}
                  headingLevel="h2"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Proyek Anda berikutnya di sini?"
        body="Ceritakan kebutuhan Anda. Konsultasi awal gratis."
        whatsappMessage="Halo MeowLabs, saya sudah melihat karya Anda dan ingin mendiskusikan proyek."
        buttonLabel="Diskusikan Proyek"
      />
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
