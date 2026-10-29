import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/editorial"
import {
  changelog,
  changelogEntryId,
  changelogProduct,
  changelogProductName,
  formatChangelogDate,
} from "@/lib/changelog"
import { productHref } from "@/lib/products"
import { sharedOpenGraph } from "@/lib/seo"

const description =
  "Catatan rilis MeowLabs: pembaruan meowlabs ai, MeowLabs Academy, TOEFL MeowLabs, GenCV, dan website meowlabs.id."

export const metadata: Metadata = {
  title: "Changelog: Yang Baru dari MeowLabs | MeowLabs",
  description,
  alternates: { canonical: "/changelog" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Changelog MeowLabs",
    description,
    url: "/changelog",
  },
}

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <PageHeader
        eyebrow="Changelog"
        title="Yang baru dari MeowLabs."
        intro="Catatan rilis produk MeowLabs dan website ini. Hanya yang sudah live, dengan tanggal rilis sebenarnya."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Changelog" }]}
      />

      <section>
        <ol className="ml-container py-8 sm:py-12">
          {changelog.map((entry) => {
            const product = changelogProduct(entry)
            return (
              <li
                key={changelogEntryId(entry)}
                id={changelogEntryId(entry)}
                className="ml-reveal grid scroll-mt-24 gap-6 border-b border-rule py-12 last:border-b-0 lg:grid-cols-12"
              >
                <div className="ml-eyebrow flex gap-4 lg:col-span-3 lg:flex-col lg:gap-2">
                  <time dateTime={entry.date} className="text-ink-muted">
                    {formatChangelogDate(entry.date)}
                  </time>
                  <span className="text-forest">{changelogProductName(entry)}</span>
                </div>
                <div className="max-w-2xl lg:col-span-9">
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] text-ink">
                    {entry.title}
                  </h2>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">{entry.summary}</p>
                  {entry.items && (
                    <ul className="mt-6 space-y-2 leading-relaxed text-ink">
                      {entry.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true" className="text-ink-muted">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {product && (
                    <a
                      href={productHref(product, "changelog")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm text-ink hover:underline"
                    >
                      Buka {product.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </section>

      <Footer />
    </main>
  )
}
