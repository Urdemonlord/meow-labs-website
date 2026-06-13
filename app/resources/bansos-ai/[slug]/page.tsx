import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

import { fetchAppVerseBansos } from "@/lib/appverse-bansos"

type Props = {
  params: Promise<{ slug: string }>
}

function renderTutorialText(text: string) {
  return text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, index) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean)
      const isList = lines.length > 1 && lines.every((line) => /^([0-9]+[.)]|[-*]|\[[^\]]+\])/.test(line))
      const isHeadingBlock =
        lines.length === 1 &&
        lines[0].length <= 80 &&
        !/^([0-9]+[.)]|[-*]|https?:\/\/)/.test(lines[0])

      if (isHeadingBlock) {
        return (
          <h3 key={index} className="text-lg font-semibold tracking-tight text-foreground">
            {lines[0]}
          </h3>
        )
      }

      if (isList) {
        return (
          <ul key={index} className="list-disc space-y-2 pl-5 text-sm leading-7 text-foreground/90">
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )
      }

      return (
        <div key={index} className="space-y-2">
          {lines.map((line) => (
            <p key={line} className="text-sm leading-7 text-foreground/90 whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>
      )
    })
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

export default async function BansosDetailPage({ params }: Props) {
  const { slug } = await params
  const { items } = await fetchAppVerseBansos()
  const item = items.find((i) => i.slug === slug)

  if (!item) {
    notFound()
  }

  const hasTutorialText = Boolean(item.tutorialText?.trim())
  const hasTutorialFile = Boolean(item.tutorialFileName && item.tutorialDownloadUrl)

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
                <Badge variant="secondary">Meow Labs</Badge>
                {hasTutorialFile && <Badge variant="outline">Arsip internal</Badge>}
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

            <div className="space-y-6">
              {hasTutorialText ? (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight">Tutorial mirror</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Isi di bawah sudah diarsipkan ke Meow Labs. Tetap verifikasi lagi sebelum dipakai karena method, kuota, dan eligibility bisa berubah kapan saja.
                    </p>
                  </div>
                  <div className="space-y-4">{renderTutorialText(item.tutorialText ?? "")}</div>
                </div>
              ) : hasTutorialFile ? (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">File arsip tersedia</h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    File tutorial untuk item ini sudah diarsipkan di Meow Labs sebagai {item.tutorialSourceType?.toUpperCase()}. Teks belum berhasil diekstrak otomatis, jadi buka file arsipnya untuk melihat langkah lengkap.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6 space-y-3">
                  <h2 className="text-xl font-semibold tracking-tight">Belum ada arsip internal</h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Untuk item ini, Meow Labs baru punya ringkasan metadata. Arsip tutorial detailnya belum masuk ke koleksi internal.
                  </p>
                </div>
              )}

              {!hasTutorialText && (
                <div className="grid gap-3 sm:grid-cols-1">
                  {hasTutorialFile && item.tutorialDownloadUrl && (
                    <Button asChild size="lg" className="gap-2">
                      <a href={item.tutorialDownloadUrl} target="_blank" rel="noopener noreferrer">
                        Buka file arsip Meow Labs
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              )}

              <div className="rounded-2xl border border-border/70 bg-muted/30 p-6 space-y-3">
                <h3 className="font-semibold">Informasi arsip</h3>
                <ul className="space-y-2 text-sm leading-7">
                  {item.date && (
                    <li>
                      <strong>Tanggal item:</strong> {item.date}
                    </li>
                  )}
                  <li>
                    <strong>File arsip:</strong> {item.tutorialFileName ?? "Belum tersedia"}
                  </li>
                  <li>
                    <strong>Lokasi:</strong> Meow Labs internal archive
                  </li>
                  <li>
                    <strong>Status:</strong> Selalu verifikasi manual sebelum claim
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 space-y-3">
                <h3 className="font-semibold text-accent">Checklist sebelum coba</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Pastikan akun, region, dan metode pembayaran sesuai syarat promo terbaru</li>
                  <li>Jangan anggap semua promo masih aktif hanya karena file tutorial masih ada</li>
                  <li>Simpan bukti, screenshot, dan catatan tanggal saat kamu verifikasi sendiri</li>
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
