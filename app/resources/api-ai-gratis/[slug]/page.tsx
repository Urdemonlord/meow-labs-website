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
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <section className="border-b border-rule py-14 sm:py-20">
        <div className="ml-container">
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

              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-tight">{provider.name}</h1>
              <p className="text-lg leading-8 text-ink-muted">
                {provider.description ||
                  `${provider.name} disajikan ulang di Meow Labs supaya ringkasan claim, base URL, dan metadata utamanya bisa dibaca tanpa lompat dulu ke aggregator luar.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="ml-container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="gap-3 border-rule bg-paper-light py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="font-display text-3xl leading-tight">{provider.modelCount}</p>
                  <p className="text-sm text-ink-muted">Jumlah model</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-rule bg-paper-light py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="font-display text-3xl leading-tight">{provider.maxContext || "-"}</p>
                  <p className="text-sm text-ink-muted">Context maks</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-rule bg-paper-light py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="font-display text-3xl leading-tight">{provider.freeLimit || "-"}</p>
                  <p className="text-sm text-ink-muted">Free tier / limit</p>
                </CardContent>
              </Card>
              <Card className="gap-3 border-rule bg-paper-light py-5">
                <CardContent className="space-y-1 px-5">
                  <p className="truncate font-display text-3xl leading-tight">{provider.domain || "-"}</p>
                  <p className="text-sm text-ink-muted">Domain</p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-[4px] border border-ink bg-paper-light p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <KeyRound className="h-5 w-5 text-ink" />
                  <h2 className="font-display text-3xl leading-tight">Tutorial claim dasar</h2>
                </div>
                <p className="text-sm leading-7 text-ink-muted">
                  {provider.claimIntro ||
                    `Langkah di bawah adalah ringkasan umum untuk mulai memakai ${provider.name}. Tetap cek halaman resmi karena limit, region, dan eligibility bisa berubah kapan saja.`}
                </p>
              </div>

              {provider.claimSteps.length > 0 ? (
                <ol className="space-y-3 text-sm leading-7 text-ink">
                  {provider.claimSteps.map((step, index) => (
                    <li key={`${provider.slug}-step-${index}`} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] bg-ink font-mono text-xs text-paper-light">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="rounded-[4px] border border-rule bg-paper-light p-4 text-sm leading-7 text-ink-muted">
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

            <div className="rounded-[4px] border border-rule bg-paper-light p-6 space-y-4">
              <h3 className="text-xl font-medium">Metadata integrasi</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="ml-eyebrow text-ink-muted">Base URL</p>
                  <p className="break-all rounded-[4px] border border-rule bg-paper px-3 py-2 font-mono text-sm">
                    {provider.baseUrl || "Belum disebutkan di sumber"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="ml-eyebrow text-ink-muted">Modality</p>
                  <p className="text-sm leading-7 text-ink">
                    {provider.modalities.join(", ") || "Belum disebutkan di sumber"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="ml-eyebrow text-ink-muted">Update sumber</p>
                  <p className="text-sm leading-7 text-ink">{provider.lastSync || "-"}</p>
                </div>
                <div className="space-y-1">
                  <p className="ml-eyebrow text-ink-muted">Sumber utama</p>
                  <p className="text-sm leading-7 text-ink">tokengratis.id + direktori komunitas</p>
                </div>
              </div>
            </div>

            {provider.sourceNote ? (
              <div className="rounded-[4px] border border-rule bg-paper-light p-6 space-y-3">
                <h3 className="text-xl font-medium">Catatan dari sumber</h3>
                <p className="text-sm leading-7 text-ink-muted">{provider.sourceNote}</p>
              </div>
            ) : null}

            {provider.models.length > 0 ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2 className="font-display text-3xl leading-tight">Preview model</h2>
                  <p className="text-sm leading-7 text-ink-muted">
                    Diambil dari data source provider yang berhasil diparse otomatis. Ini preview cepat, bukan jaminan final katalog model.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {provider.models.slice(0, 8).map((model) => (
                    <div key={model.slug} className="rounded-[4px] border border-rule bg-paper-light p-5 space-y-3">
                      <div>
                        <h3 className="font-semibold leading-6">{model.name}</h3>
                        <p className="break-all font-mono text-xs text-ink-muted">{model.slug}</p>
                      </div>
                      <div className="grid gap-3 text-sm sm:grid-cols-2">
                        <div>
                          <p className="ml-eyebrow text-ink-muted">Modality</p>
                          <p>{model.modality || "-"}</p>
                        </div>
                        <div>
                          <p className="ml-eyebrow text-ink-muted">Context</p>
                          <p>{model.context || "-"}</p>
                        </div>
                        <div>
                          <p className="ml-eyebrow text-ink-muted">Output</p>
                          <p>{model.output || "-"}</p>
                        </div>
                        <div>
                          <p className="ml-eyebrow text-ink-muted">Rate limit</p>
                          <p>{model.rateLimit || "-"}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-[4px] border border-rule bg-paper-light p-6 space-y-3">
              <h3 className="font-medium text-ink">Checklist sebelum dipakai di produk</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
                <li>Verifikasi limit gratis, region, dan syarat akun langsung di situs resmi provider</li>
                <li>Jangan commit API key ke repo atau log publik</li>
                <li>Uji latensi, kuota, dan error rate sebelum dipakai di workflow production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-rule py-12 sm:py-16">
        <div className="ml-container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-display text-3xl leading-tight">Lihat provider lainnya</h2>
            <p className="text-ink-muted">
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
