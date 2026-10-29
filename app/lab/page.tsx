import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/editorial"
import { WorkCard } from "@/components/work-card"
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

      <Footer />
    </main>
  )
}
