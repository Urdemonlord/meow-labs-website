import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Database, FolderGit2, Sparkles } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

const iconMap = {
  "Bansos AI": Sparkles,
  "API AI Gratis": Database,
  "Open Source Pilihan": FolderGit2,
} as const

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
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/40 to-background pt-28 pb-18 sm:pt-36 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="max-w-3xl space-y-5">
              <Badge variant="outline" className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]">
                Resources
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Resource hub untuk builder yang pengin gerak cepat
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Bukan clone mentah aggregator. Ini hub Meow Labs untuk resource AI gratis, direktori API,
                dan proyek open source yang relevan buat validasi, eksperimen, dan bangun MVP. Intinya:
                discovery tetap cepat, tapi tutorial ringkasnya dibaca di Meow Labs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="gap-3 border-border/70 bg-background/80 py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="text-2xl font-semibold">3 vertikal</p>
                  <p className="text-sm text-muted-foreground">Bansos AI · API Gratis · Open Source</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-border/70 bg-background/80 py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="text-2xl font-semibold">{tokenGratis.total} provider</p>
                  <p className="text-sm text-muted-foreground">Tutorial dasar provider AI gratis di Meow Labs</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-border/70 bg-background/80 py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="text-2xl font-semibold">{openSource.total}+ proyek</p>
                  <p className="text-sm text-muted-foreground">Open source Indonesia live dari GitHub</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {resourceHubSections.map((section) => {
              const Icon = iconMap[section.title as keyof typeof iconMap]

              return (
                <Card key={section.href} className="border-border/70 bg-card/70 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      <CardDescription className="text-sm leading-7 text-muted-foreground">
                        {section.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-2xl border border-border/70 bg-muted/20 p-4">
                      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Total entry</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">{section.count}</p>
                    </div>
                    <Button asChild className="w-full justify-between">
                      <Link href={section.href}>
                        Buka halaman
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/70 bg-gradient-to-r from-primary/10 via-background to-primary/5 p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Mau resource hub serupa untuk bisnis atau komunitasmu?
                </h2>
                <p className="max-w-2xl leading-7 text-muted-foreground">
                  Meow Labs bisa bantu bikin direktori, knowledge base, atau content hub yang SEO-friendly,
                  cepat, dan gampang di-maintain di VPS atau stack modern lain.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg">
                  <Link href="https://wa.me/62895386288683?text=Halo%20Meow%20Labs!%20Saya%20ingin%20buat%20resource%20hub%20seperti%20halaman%20resources" target="_blank" rel="noopener noreferrer">
                    Konsultasi
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">Lihat blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
