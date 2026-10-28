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
          <h3 key={index} className="text-lg font-semibold tracking-tight text-ink">
            {lines[0]}
          </h3>
        )
      }

      if (isList) {
        return (
          <ul key={index} className="list-disc space-y-2 pl-5 text-sm leading-7 text-ink">
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )
      }

      return (
        <div key={index} className="space-y-2">
          {lines.map((line) => (
            <p key={line} className="text-sm leading-7 text-ink whitespace-pre-wrap">
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
    alternates: { canonical: `/resources/bansos-ai/${slug}` },
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
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <section className="border-b border-rule py-14 sm:py-20">
        <div className="ml-container">
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
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-tight">{item.title}</h1>
              {item.date && (
                <p className="text-sm text-ink-muted">Diposting: {item.date}</p>
              )}
            </div>

            {item.description && (
              <p className="text-lg leading-8 text-ink-muted">{item.description}</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="ml-container">
          <div className="mx-auto max-w-3xl space-y-8">
            {item.imageUrl && (
              <div className="aspect-video w-full overflow-hidden rounded-[4px] border border-rule bg-muted">
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
                <div className="rounded-[4px] border border-ink bg-paper-light p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <h2 className="font-display text-3xl leading-tight">Tutorial mirror</h2>
                    <p className="text-sm leading-7 text-ink-muted">
                      Isi di bawah sudah diarsipkan ke Meow Labs. Tetap verifikasi lagi sebelum dipakai karena method, kuota, dan eligibility bisa berubah kapan saja.
                    </p>
                  </div>
                  <div className="space-y-4">{renderTutorialText(item.tutorialText ?? "")}</div>
                </div>
              ) : hasTutorialFile ? (
                <div className="rounded-[4px] border border-ink bg-paper-light p-6 space-y-4">
                  <h2 className="font-display text-3xl leading-tight">File arsip tersedia</h2>
                  <p className="text-sm leading-7 text-ink-muted">
                    File tutorial untuk item ini sudah diarsipkan di Meow Labs sebagai {item.tutorialSourceType?.toUpperCase()}. Teks belum berhasil diekstrak otomatis, jadi buka file arsipnya untuk melihat langkah lengkap.
                  </p>
                </div>
              ) : (
                <div className="rounded-[4px] border border-rule bg-paper-light p-6 space-y-3">
                  <h2 className="text-xl font-medium">Belum ada arsip internal</h2>
                  <p className="text-sm leading-7 text-ink-muted">
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

              <div className="rounded-[4px] border border-rule bg-paper-light p-6 space-y-3">
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

              <div className="rounded-[4px] border border-rule bg-paper-light p-6 space-y-3">
                <h3 className="font-medium text-ink">Checklist sebelum coba</h3>
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

      <section className="border-t border-rule py-12 sm:py-16">
        <div className="ml-container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-display text-3xl leading-tight">Cari bansos AI lainnya?</h2>
            <p className="text-ink-muted">
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
