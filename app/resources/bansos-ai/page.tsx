import type { Metadata } from "next"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { bansosAiItems } from "@/lib/resources-data"

export const metadata: Metadata = {
  title: "Bansos AI & Promo Kredit AI | Meow Labs Resources",
  description:
    "Kurasi metadata publik bansos AI, promo kredit, dan resource hemat untuk builder. Fokus pada discovery cepat, lalu verifikasi manual di sumber akhir.",
  keywords: [
    "bansos ai",
    "promo ai gratis",
    "kredit ai gratis",
    "resource ai indonesia",
  ],
  openGraph: {
    title: "Bansos AI & Promo Kredit AI | Meow Labs Resources",
    description:
      "Kumpulan metadata publik untuk promo AI, bansos AI, dan credit-based resources yang bisa dipakai builder untuk eksperimen cepat.",
    type: "website",
    url: "https://meowlabs.id/resources/bansos-ai",
  },
  alternates: {
    canonical: "https://meowlabs.id/resources/bansos-ai",
  },
}

export default function BansosAiPage() {
  return (
    <ResourcePageTemplate
      eyebrow="Bansos AI"
      title="Kurasi bansos AI yang bisa dipakai buat testing, coding, dan eksperimen"
      description="Halaman ini mengambil metadata publik yang sebelumnya berhasil kami scrape dari AppVerse. Kami sengaja tampilkan sebagai layer discovery saja: cepat buat lihat peluang, tapi tetap harus verifikasi sendiri karena promo, method, atau eligibility bisa berubah kapan pun."
      highlightedNote="Label di halaman ini sengaja konservatif. Hampir semua item kami tandai sebagai community/external karena sumber akhirnya berada di luar Meow Labs dan validitasnya bisa berubah. Gunakan untuk riset cepat, bukan anggap guarantee."
      stats={[
        { label: "Total item seed", value: String(bansosAiItems.length) },
        { label: "Sumber dataset", value: "Metadata publik" },
        { label: "Status kurasi", value: "Community-first" },
        { label: "Arah penggunaan", value: "Discovery cepat" },
      ]}
      items={bansosAiItems}
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
