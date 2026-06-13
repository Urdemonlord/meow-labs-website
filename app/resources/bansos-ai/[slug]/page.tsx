import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

import { fetchAppVerseBansos } from "@/lib/appverse-bansos"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { items } = await fetchAppVerseBansos()
  const item = items.find((i) => i.slug === slug)

  if (!item) return { title: "Bansos tidak ditemukan" }

  return {
    title: `${item.title} | Meow Labs Bansos`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: "article",
      url: `https://meowlabs.id/resources/bansos-ai/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const { items } = await fetchAppVerseBansos()
  return items.map((item) => ({ slug: item.slug }))
}

export default async function BansosDtailPage({ params }: Props) {
  const { slug } = await params
  const { items } = await fetchAppVerseBansos()
  const item = items.find((i) => i.slug === slug)

  if (!item) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/35 to-background pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/resources/bansos-ai">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke daftar
              </Link>
            </Button>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">Bansos AI</Badge>
                <Badge variant="secondary">AppVerse</Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{item.title}</h1>
              {item.date && (
                <p className="text-sm text-muted-foreground">Diposting: {item.date}</p>
              )}
            </div>

            {item.description && (
              <p className="text-lg leading-8 text-muted-foreground">{item.description}</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8">
            {item.imageUrl && (
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border/70 bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-invert max-w-none space-y-6 text-foreground">
              <p className="text-base leading-7 text-muted-foreground">
                {item.description}
              </p>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                <h2 className="text-xl font-semibold">Tutorial & Cara Klaim</h2>
                <p className="text-sm leading-7">
                  Untuk cara lengkap dan update terbaru cara klaim bansos ini, silakan kunjungi halaman resmi di AppVerse:
                </p>
                <Button asChild className="w-full justify-center gap-2">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    Buka di AppVerse
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Catatan: Selalu verifikasi di sumber resmi. Method, syarat, dan eligibility bisa berubah sewaktu-waktu.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-muted/30 p-6 space-y-3">
                <h3 className="font-semibold">Informasi Tambahan</h3>
                <ul className="space-y-2 text-sm leading-7">
                  <li>
                    <strong>Sumber:</strong> AppVerse.id — platform kurasi bansos AI
                  </li>
                  {item.date && (
                    <li>
                      <strong>Terakhir update:</strong> {item.date}
                    </li>
                  )}
                  <li>
                    <strong>Status:</strong> Verifikasi ulang sebelum klaim — promo bisa berubah
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Cari bansos AI lainnya?</h2>
            <p className="text-muted-foreground">
              Lihat daftar lengkap semua bansos AI yang tersedia di Meow Labs Resources.
            </p>
            <Button asChild size="lg">
              <Link href="/resources/bansos-ai">Lihat semua bansos AI</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
