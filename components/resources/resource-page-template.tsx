import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader, buttonPrimary, buttonSecondary } from "@/components/editorial"
import type { ResourceBadgeVariant, ResourceItem } from "@/lib/resources-data"

type PageStat = {
  label: string
  value: string
}

type TemplateProps = {
  eyebrow: string
  title: string
  description: string
  highlightedNote: string
  stats: PageStat[]
  items: ResourceItem[]
  breadcrumbs: Array<{ label: string; href: string }>
  cta?: {
    title: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel?: string
    secondaryHref?: string
  }
}

// Varian badge dari data resource dipetakan ke warna brand agar hierarki
// (misalnya Hot dan jumlah stars) tetap terlihat.
const badgeClassMap: Record<ResourceBadgeVariant, string> = {
  default: "border-transparent bg-ink text-paper-light",
  secondary: "border-transparent bg-cobalt text-paper-light",
  destructive: "border-transparent bg-vermilion text-ink",
  outline: "border-rule text-ink-muted",
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

export function ResourcePageTemplate({
  eyebrow,
  title,
  description,
  highlightedNote,
  stats,
  items,
  breadcrumbs,
  cta,
}: TemplateProps) {
  // Crumb terakhir adalah halaman ini sendiri, jadi tidak ditautkan.
  const crumbs = breadcrumbs.map((crumb, index) =>
    index === breadcrumbs.length - 1 ? { label: crumb.label } : crumb,
  )

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <PageHeader eyebrow={`// ${eyebrow}`} title={title} intro={description} breadcrumb={crumbs}>
        <p className="max-w-2xl border-l-2 border-ink pl-4 text-sm leading-relaxed text-ink-muted">{highlightedNote}</p>
        <dl className="mt-10 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse border-b border-rule py-5 sm:pr-6">
              <dt className="ml-eyebrow mt-2 text-ink-muted">{stat.label}</dt>
              <dd className="text-2xl font-medium">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <div className="grid gap-px overflow-hidden rounded-[4px] border border-rule bg-rule lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => {
              const external = isExternalHref(item.href)

              return (
                <article key={item.slug} className="flex flex-col bg-paper-light">
                  {item.imageUrl ? (
                    <div className="aspect-[16/9] overflow-hidden border-b border-rule bg-paper">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-6">
                    {item.badges?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <span
                            key={`${item.slug}-${badge.label}`}
                            className={`ml-eyebrow rounded-[2px] border px-2 py-0.5 text-[0.65rem] ${badgeClassMap[badge.variant ?? "outline"]}`}
                          >
                            {badge.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <h2 className="mt-4 text-xl font-medium leading-snug">{item.title}</h2>
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-muted">{item.description}</p>

                    {item.meta?.length ? (
                      <dl className="mt-5 grid gap-3 border-t border-rule pt-4 sm:grid-cols-2">
                        {item.meta.map((meta) => (
                          <div key={`${item.slug}-${meta.label}`}>
                            <dt className="ml-eyebrow text-ink-muted">{meta.label}</dt>
                            <dd className="mt-1 text-sm font-medium">{meta.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    {item.notes?.length ? (
                      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink-muted">
                        {item.notes.map((note) => (
                          <li key={note} className="flex gap-2">
                            <span aria-hidden="true">+</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-auto pt-6">
                      <Link
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between border-t border-rule pt-4 font-medium hover:underline"
                      >
                        {item.ctaLabel ?? "Lihat detail"}
                        {external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {cta ? (
        <section className="border-b border-rule">
          <div className="ml-container ml-section flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05]">{cta.title}</h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-ink-muted">{cta.description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href={cta.primaryHref} className={buttonPrimary}>
                {cta.primaryLabel}
              </Link>
              {cta.secondaryHref && cta.secondaryLabel ? (
                <Link href={cta.secondaryHref} className={buttonSecondary}>
                  {cta.secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  )
}
