import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductIcon } from "@/components/product-icon"
import { productCategories, productHref, products, isExternalProduct } from "@/lib/products"
import type { ProductCategory } from "@/lib/products"
import { sharedOpenGraph } from "@/lib/seo"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.id"

const description =
  "Produk buatan Meow Labs: MeowLabs POS untuk kasir dan QRIS, meowlabs ai, SidangAI untuk latihan sidang skripsi, TOEFL MeowLabs, dan GenCV untuk CV ramah ATS."

export const metadata: Metadata = {
  title: "Produk MeowLabs: POS, SidangAI, TOEFL, GenCV & AI | Meow Labs",
  description,
  alternates: { canonical: "/produk" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Produk MeowLabs",
    description,
    url: "/produk",
  },
}

const categoryOrder: ProductCategory[] = ["bisnis", "karier"]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Produk MeowLabs",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: isExternalProduct(product) ? product.url : `${siteUrl}${product.url}`,
  })),
}

export default function ProdukPage() {
  const whatsappHref = buildWhatsAppUrl("Halo admin Meow Labs, saya ingin konsultasi pembuatan aplikasi untuk bisnis saya.")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Dibangun dan dijalankan sendiri
          </span>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-5xl">Produk MeowLabs</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
            Selain mengerjakan website dan sistem untuk klien, Meow Labs membangun dan menjalankan produknya sendiri.
            Semua dibuat oleh tim yang sama yang akan menangani proyek Anda.
          </p>
        </div>
      </section>

      {categoryOrder.map((category) => (
        <section key={category} className="py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">{productCategories[category].id}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((product) => product.category === category)
                .map((product) => {
                  const external = isExternalProduct(product)
                  return (
                    <article
                      key={product.slug}
                      className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <ProductIcon name={product.icon} className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                          <p className="text-sm text-primary">{product.id.tagline}</p>
                        </div>
                      </div>
                      <p className="mt-4 flex-1 text-pretty text-muted-foreground">{product.id.description}</p>
                      <a
                        href={productHref(product, "produk")}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="mt-6 inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
                      >
                        {external ? `Buka ${product.name}` : "Unduh aplikasi"}
                        {external ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                      </a>
                    </article>
                  )
                })}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold">Butuh aplikasi seperti ini untuk bisnis Anda?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Kami bisa membangun sistem serupa yang disesuaikan dengan alur kerja Anda, dari dashboard internal sampai
              aplikasi dengan fitur AI.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Konsultasi Gratis
              </a>
              <Link
                href="/layanan/aplikasi-web"
                className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Lihat Layanan Aplikasi Web
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
