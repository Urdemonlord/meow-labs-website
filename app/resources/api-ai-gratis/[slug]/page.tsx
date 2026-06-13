import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, KeyRound } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { fetchTokenGratis, fetchTokenGratisProvider } from "@/lib/tokengratis"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const provider = await fetchTokenGratisProvider(slug)

  if (!provider) {
    return { title: "Provider tidak ditemukan" }
  }

  return {
    title: `${provider.name} | API AI Gratis Meow Labs`,
    description:
      provider.description ||
      `${provider.name} — ${provider.modelCount} model, ${provider.maxContext || "context belum disebut"}, dan tutorial claim dasar di Meow Labs.`,
    openGraph: {
      title: `${provider.name} | API AI Gratis Meow Labs`,
      description:
        provider.description ||
        `${provider.name} — ${provider.modelCount} model dan tutorial claim dasar di Meow Labs.`,
      type: "article",
      url: `https://meowlabs.id/resources/api-ai-gratis/${slug}`,
    },
    alternates: {
      canonical: `https://meowlabs.id/resources/api-ai-gratis/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const { providers } = await fetchTokenGratis()
  return providers.map((provider) => ({ slug: provider.slug }))
}

export default async function ApiAiGratisDetailPage({ params }: Props) {
  const { slug } = await params
  const provider = await fetchTokenGratisProvider(slug)

  if (!provider) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/35 to-background pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/resources/api-ai-gratis">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke daftar provider
              </Link>
            </Button>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">API AI Gratis</Badge>
                <Badge variant="secondary">Meow Labs</Badge>
                <Badge variant="outline">{provider.modelCount} model</Badge>
                {provider.modalities.slice(0, 3).map((modality) => (
                  <Badge key={modality} variant="outline">
                    {modality}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{provider.name}</h1>
              <p className="text-lg leading-8 text-muted-foreground">
                {provider.description ||
                  `${provider.name} disajikan ulang di Meow Labs supaya ringkasan claim, base URL, dan metadata utamanya bisa dibaca tanpa lompat dulu ke aggregator luar.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="gap-3 border-border/70 bg-background/80 py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="text-2xl font-semibold tracking-tight">{provider.modelCount}</p>
                  <p className="text-sm text-muted-foreground">Jumlah model</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-border/70 bg-background/80 py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="text-2xl font-semibold tracking-tight">{provider.maxContext || "-"}</p>
                  <p className="text-sm text-muted-foreground">Context maks</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-border/70 bg-background/80 py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="text-2xl font-semibold tracking-tight">{provider.freeLimit || "-"}</p>
                  <p className="text-sm text-muted-foreground">Free tier / limit</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-border/70 bg-background/80 py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="truncate text-2xl font-semibold tracking-tight">{provider.domain || "-"}</p>
                  <p className="text-sm text-muted-foreground">Domain</p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <KeyRound className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold tracking-tight">Tutorial claim dasar</h2>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {provider.claimIntro ||
                    `Langkah di bawah adalah ringkasan umum untuk mulai memakai ${provider.name}. Tetap cek halaman resmi karena limit, region, dan eligibility bisa berubah kapan saja.`}
                </p>
              </div>

              {provider.claimSteps.length > 0 ? (
                <ol className="space-y-3 text-sm leading-7 text-foreground/90">
                  {provider.claimSteps.map((step, index) => (
                    <li key={`${provider.slug}-step-${index}`} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm leading-7 text-muted-foreground">
                  Belum ada langkah spesifik yang bisa diparse otomatis dari sumber. Gunakan tombol resmi di bawah untuk cek halaman claim provider.
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                {provider.claimUrl ? (
                  <Button asChild size="lg" className="gap-2">
                    <a href={provider.claimUrl} target="_blank" rel="noopener noreferrer">
                      Buka halaman claim resmi
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {provider.sourceDirectoryUrl ? (
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href={provider.sourceDirectoryUrl} target="_blank" rel="noopener noreferrer">
                      Lihat sumber aggregator
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-muted/30 p-6 space-y-4">
              <h3 className="text-xl font-semibold tracking-tight">Metadata integrasi</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Base URL</p>
                  <p className="break-all rounded-lg border border-border/70 bg-background px-3 py-2 font-mono text-sm">
                    {provider.baseUrl || "Belum disebutkan di sumber"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Modality</p>
                  <p className="text-sm leading-7 text-foreground">
                    {provider.modalities.join(", ") || "Belum disebutkan di sumber"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Update sumber</p>
                  <p className="text-sm leading-7 text-foreground">{provider.lastSync || "-"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Sumber utama</p>
                  <p className="text-sm leading-7 text-foreground">tokengratis.id + direktori komunitas</p>
                </div>
              </div>
            </div>

            {provider.sourceNote ? (
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">Catatan dari sumber</h3>
                <p className="text-sm leading-7 text-muted-foreground">{provider.sourceNote}</p>
              </div>
            ) : null}

            {provider.models.length > 0 ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">Preview model</h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Diambil dari data source provider yang berhasil diparse otomatis. Ini preview cepat, bukan jaminan final katalog model.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {provider.models.slice(0, 8).map((model) => (
                    <div key={model.slug} className="rounded-2xl border border-border/70 bg-card/70 p-5 space-y-3">
                      <div>
                        <h3 className="font-semibold leading-6">{model.name}</h3>
                        <p className="break-all font-mono text-xs text-muted-foreground">{model.slug}</p>
                      </div>
                      <div className="grid gap-3 text-sm sm:grid-cols-2">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Modality</p>
                          <p>{model.modality || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Context</p>
                          <p>{model.context || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Output</p>
                          <p>{model.output || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Rate limit</p>
                          <p>{model.rateLimit || "-"}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 space-y-3">
              <h3 className="font-semibold text-accent">Checklist sebelum dipakai di produk</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
                <li>Verifikasi limit gratis, region, dan syarat akun langsung di situs resmi provider</li>
                <li>Jangan commit API key ke repo atau log publik</li>
                <li>Uji latensi, kuota, dan error rate sebelum dipakai di workflow production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Lihat provider lainnya</h2>
            <p className="text-muted-foreground">
              Kembali ke direktori provider AI gratis yang sudah diringkas di Meow Labs.
            </p>
            <Button asChild size="lg">
              <Link href="/resources/api-ai-gratis">Lihat semua provider</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
