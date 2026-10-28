import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { productHref, products } from "@/lib/products"
import { sharedOpenGraph } from "@/lib/seo"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const description =
  "Produk yang dibangun dan dijalankan MeowLabs: meowlabs ai, MeowLabs Academy, TOEFL MeowLabs, dan GenCV."

export const metadata: Metadata = {
  title: "Produk MeowLabs: meowlabs ai, Academy, TOEFL & GenCV | MeowLabs",
  description,
  alternates: { canonical: "/produk" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Produk MeowLabs",
    description,
    url: "/produk",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Produk MeowLabs",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: product.url,
  })),
}

export default function ProdukPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <section className="border-b border-rule">
        <div className="ml-container py-16 sm:py-24">
          <p className="ml-eyebrow text-ink-muted">Produk MeowLabs</p>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.75rem,6vw,5rem)] leading-[0.95]">
            Dibangun dan dijalankan sendiri.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            Selain mengerjakan proyek klien, MeowLabs membangun produk sendiri. Setiap produk diberi label status yang
            jujur, dan dikerjakan oleh tim yang sama yang akan menangani proyek Anda.
          </p>
        </div>
      </section>

      <section>
        <div className="ml-container py-8">
          {products.map((product, index) => (
            <article
              key={product.slug}
              className="grid items-center gap-6 border-b border-rule py-10 last:border-b-0 md:grid-cols-12 md:gap-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-ink md:col-span-5">
                <Image src={product.image} alt="" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="ml-eyebrow text-ink-muted">Produk / {String(index + 1).padStart(2, "0")}</span>
                  <span className="ml-eyebrow rounded-[2px] border border-forest px-2 py-0.5 text-[0.65rem] text-forest">
                    {product.status}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">{product.name}</h2>
                <p className="ml-eyebrow mt-3 text-ink-muted">{product.tagline}</p>
                <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-muted">{product.description}</p>
                <a
                  href={productHref(product, "produk")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-[3px] border border-ink px-5 py-3 font-medium transition-colors hover:bg-ink hover:text-paper-light"
                >
                  Buka {product.name}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper-light">
        <div className="ml-container ml-section">
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1]">
            Butuh sistem seperti ini untuk bisnis Anda?
          </h2>
          <p className="mt-5 max-w-xl text-dark-muted">
            Kami bisa membangun aplikasi yang disesuaikan dengan alur kerja Anda, dari dashboard internal sampai aplikasi
            dengan fitur AI.
          </p>
          <a
            href={buildWhatsAppUrl("Halo MeowLabs, saya ingin konsultasi pembuatan aplikasi untuk bisnis saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-paper-light px-5 py-3.5 font-medium text-ink"
          >
            Diskusikan Proyek
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
