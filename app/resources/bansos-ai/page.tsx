import type { Metadata } from "next"
import type { ResourceItem } from "@/lib/resources-data"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { fetchAppVerseBansos } from "@/lib/appverse-bansos"

export const metadata: Metadata = {
  title: "Bansos AI & Promo Kredit AI | Meow Labs Resources",
  description:
    "Bansos AI, promo kredit, dan resource hemat untuk builder — semuanya disajikan ulang di Meow Labs dalam bentuk arsip internal.",
  keywords: [
    "bansos ai",
    "promo ai gratis",
    "kredit ai gratis",
    "resource ai indonesia",
    "appverse bansos",
  ],
  openGraph: {
    title: "Bansos AI & Promo Kredit AI | Meow Labs Resources",
    description:
      "Kumpulan bansos AI dan promo kredit yang diarsipkan ulang ke Meow Labs agar semua discovery dan pembacaan tetap di satu tempat.",
    type: "website",
    url: "https://meowlabs.id/resources/bansos-ai",
  },
  alternates: {
    canonical: "https://meowlabs.id/resources/bansos-ai",
  },
}

function mapBansosToResourceItem(
  b: Awaited<ReturnType<typeof fetchAppVerseBansos>>["items"][0]
): ResourceItem {
  const hasMirror = Boolean(b.tutorialFileName)

  return {
    slug: b.slug,
    title: b.title,
    description:
      b.description ||
      (hasMirror
        ? "Arsip tutorial tersedia di halaman detail."
        : "Buka halaman detail untuk lihat metadata dan status arsip."),
    href: `/resources/bansos-ai/${b.slug}`,
    ctaLabel: hasMirror ? "Baca tutorial" : "Baca artikel",
    imageUrl: b.imageUrl,
    badges: [
      { label: "Bansos AI", variant: "default" as const },
      { label: "Meow Labs", variant: "secondary" as const },
      ...(hasMirror ? [{ label: "Arsip", variant: "outline" as const }] : []),
    ],
    meta: [
      ...(b.date ? [{ label: "Tanggal", value: b.date }] : []),
      { label: "Lokasi", value: "Meow Labs" },
    ],
    notes: [
      hasMirror
        ? `File tutorial: ${b.tutorialFileName}`
        : "Belum ada mirror tutorial, baru metadata publik.",
    ],
  }
}

export default async function BansosAiPage() {
  const { items: bansosItems, total, lastSync, tutorialCoverage } = await fetchAppVerseBansos()
  const items = bansosItems.map(mapBansosToResourceItem)

  return (
    <ResourcePageTemplate
      eyebrow="Bansos AI"
      title={`${total} bansos AI terbaru, ${tutorialCoverage} sudah ada arsip internal`}
      description={`Data bansos AI dikumpulkan dan disajikan ulang di Meow Labs. Tujuannya biar discovery, pembacaan tutorial, dan file arsip tetap ada di satu tempat tanpa lempar user ke route luar.`}
      highlightedNote="Semua item yang sudah punya arsip bisa dibaca langsung di Meow Labs. Kalau belum ada arsip detail, item tetap muncul sebagai placeholder koleksi yang belum lengkap."
      stats={[
        { label: "Total bansos", value: `${total}` },
        { label: "Arsip internal", value: `${tutorialCoverage}` },
        { label: "Lokasi", value: "Meow Labs" },
        { label: "Sinkron", value: lastSync || "-" },
      ]}
      items={items}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Bansos AI", href: "/resources/bansos-ai" },
      ]}
      cta={{
        title: "Butuh versi yang lebih rapi dari sekadar list promo?",
        description:
          "Meow Labs bisa bantu ubah data mentah seperti ini jadi direktori yang lebih trustable: ada status official/community, last checked, filter, SEO page, dan CTA yang jelas.",
        primaryLabel: "Lihat API AI gratis",
        primaryHref: "/resources/api-ai-gratis",
        secondaryLabel: "Kembali ke hub",
        secondaryHref: "/resources",
      }}
    />
  )
}
