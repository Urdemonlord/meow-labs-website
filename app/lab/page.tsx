import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/editorial"
import { WorkCard } from "@/components/work-card"
import { AsciiArt } from "@/components/ascii-art"
import { labProjects } from "@/lib/lab"
import { sharedOpenGraph } from "@/lib/seo"

const description =
  "Lab MeowLabs: produk kecil dan eksperimen di luar produk utama, dari studio 3D furniture sampai deteksi hama berbasis IoT."

export const metadata: Metadata = {
  title: "Lab MeowLabs: Produk Kecil dan Eksperimen | MeowLabs",
  description,
  alternates: { canonical: "/lab" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Lab MeowLabs",
    description,
    url: "/lab",
  },
}

export default function LabPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <PageHeader
        eyebrow="Lab"
        title="Ide yang kami bangun sampai jalan."
        intro="Di luar empat produk utama, kami terus membuat dan menguji ide. Sebagian tumbuh jadi produk, sebagian tetap eksperimen. Setiap proyek diberi label status yang jujur."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Lab" }]}
      >
        <Link href="/produk" className="inline-flex items-center gap-1 text-sm text-ink hover:underline">
          Lihat produk utama
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section>
        <div className="ml-container ml-section">
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {labProjects.map((project) => (
              <li key={project.slug} className="ml-reveal">
                <WorkCard
                  name={project.name}
                  url={project.url}
                  image={project.image}
                  description={project.description}
                  tagline={project.tagline}
                  label={
                    <span className="rounded-[2px] border border-forest px-2 py-0.5 text-[0.65rem] text-forest">
                      {project.status}
                    </span>
                  }
                  headingLevel="h2"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="ml-container ml-section grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="ml-eyebrow text-ink-muted">{"// Sedang dikerjakan"}</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-tight">
              Eksperimen berikutnya sedang diketik.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-ink-muted">
              Punya ide yang ingin diuji bersama? Ceritakan masalahnya, kami bantu cari bentuk paling sederhana yang bisa
              jalan.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <AsciiArt
              piece="laptop-typing-cat"
              label="Animasi ASCII seekor kucing abu-abu mengetik kode di laptop"
              caption="$ npm run eksperimen"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
