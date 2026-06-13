import type { Metadata } from "next"
import type { ResourceItem } from "@/lib/resources-data"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { fetchAppVerseBansos } from "@/lib/appverse-bansos"

export const metadata: Metadata = {
  title: "Bansos AI & Promo Kredit AI | Meow Labs Resources",
  description:
    "Bansos AI, promo kredit, dan resource hemat untuk builder — data live dari AppVerse. Fokus pada discovery cepat, lalu verifikasi manual di sumber akhir.",
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
      "Kumpulan bansos AI dan promo kredit dari AppVerse. Data live — selalu yang terbaru.",
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
  return {
    slug: b.slug,
    title: b.title,
    description: b.description || "Lihat artikel untuk detail lengkap dan cara klaim.",
    href: `/resources/bansos-ai/${b.slug}`,
    ctaLabel: "Baca artikel",
    imageUrl: b.imageUrl,
    badges: [
      { label: "Bansos AI", variant: "default" as const },
      { label: "AppVerse", variant: "secondary" as const },
    ],
    meta: [
      ...(b.date ? [{ label: "Tanggal", value: b.date }] : []),
      { label: "Sumber", value: "AppVerse" },
    ],
    notes: [
      "Artikel ini berisi panduan cara klaim dan link ke tutorial resmi di AppVerse.",
    ],
  }
}

export default async function BansosAiPage() {
  const { items: bansosItems, total, lastSync } = await fetchAppVerseBansos()
  const items = bansosItems.map(mapBansosToResourceItem)

  return (
    <ResourcePageTemplate
      eyebrow="Bansos AI"
      title={`${total} bansos AI terbaru — live dari AppVerse`}
      description={`Metadata publik bansos AI dari AppVerse.id. Halaman ini adalah layer discovery cepat: cocok buat lihat peluang promo tanpa buka satu-satu, tapi tetap harus verifikasi sendiri karena promo, method, atau eligibility bisa berubah kapan pun.`}
      highlightedNote="Semua item marked sebagai AppVerse karena sumber akhirnya di luar Meow Labs. Gunakan untuk riset cepat, bukan sebagai garansi."
      stats={[
        { label: "Total bansos", value: `${total}` },
        { label: "Sumber", value: "AppVerse" },
        { label: "Metode", value: "Live fetch" },
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
