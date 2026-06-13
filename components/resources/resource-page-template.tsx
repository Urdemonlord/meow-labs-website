import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

const badgeClassMap: Record<NonNullable<ResourceBadgeVariant>, string> = {
  default: "",
  secondary: "",
  outline: "",
  destructive: "",
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
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/35 to-background pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((breadcrumb, index) => (
                <div key={breadcrumb.href} className="flex items-center gap-2">
                  <Link href={breadcrumb.href} className="transition-colors hover:text-primary">
                    {breadcrumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                </div>
              ))}
            </div>

            <div className="max-w-3xl space-y-5">
              <Badge variant="outline" className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]">
                {eyebrow}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
              <p className="text-lg leading-8 text-muted-foreground">{description}</p>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm leading-7 text-muted-foreground">
                {highlightedNote}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="gap-3 border-border/70 bg-background/80 py-5">
                  <CardContent className="space-y-1 px-5">
                    <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => {
              const external = isExternalHref(item.href)

              return (
                <Card key={item.slug} className="overflow-hidden border-border/70 bg-card/70 py-0 backdrop-blur-sm">
                  {item.imageUrl ? (
                    <div className="aspect-[16/9] overflow-hidden border-b border-border/70 bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  <CardHeader className="space-y-4 px-6 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {item.badges?.map((badge) => (
                        <Badge
                          key={`${item.slug}-${badge.label}`}
                          variant={badge.variant ?? "outline"}
                          className={badgeClassMap[badge.variant ?? "outline"]}
                        >
                          {badge.label}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl leading-7">{item.title}</CardTitle>
                    <p className="text-sm leading-7 text-muted-foreground whitespace-pre-line">{item.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4 px-6 pb-0">
                    {item.meta?.length ? (
                      <div className="grid gap-3 rounded-2xl border border-border/70 bg-muted/20 p-4 sm:grid-cols-2">
                        {item.meta.map((meta) => (
                          <div key={`${item.slug}-${meta.label}`} className="space-y-1">
                            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{meta.label}</p>
                            <p className="text-sm font-medium leading-6 text-foreground">{meta.value}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {item.notes?.length ? (
                      <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                        {item.notes.map((note) => (
                          <li key={note} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>

                  <CardFooter className="px-6 py-6">
                    <Button asChild className="w-full justify-between">
                      <Link href={item.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                        {item.ctaLabel ?? "Lihat detail"}
                        {external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {cta ? (
        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/70 bg-gradient-to-r from-primary/10 via-background to-primary/5 p-8 shadow-sm sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{cta.title}</h2>
                  <p className="max-w-2xl text-muted-foreground leading-7">{cta.description}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Button asChild size="lg">
                    <Link href={cta.primaryHref}>{cta.primaryLabel}</Link>
                  </Button>
                  {cta.secondaryHref && cta.secondaryLabel ? (
                    <Button asChild variant="outline" size="lg">
                      <Link href={cta.secondaryHref}>{cta.secondaryLabel}</Link>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  )
}
