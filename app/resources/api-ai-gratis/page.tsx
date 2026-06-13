import type { Metadata } from "next"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { apiGratisItems } from "@/lib/resources-data"

export const metadata: Metadata = {
  title: "API AI Gratis, Direktori, dan Sumber Referensi | Meow Labs Resources",
  description:
    "Daftar platform, katalog, dan direktori yang bisa dipakai untuk mencari API AI gratis atau free-tier secara lebih cepat.",
  keywords: [
    "api ai gratis",
    "free token ai",
    "direktori api ai",
    "openrouter models",
    "tokengratis",
  ],
  openGraph: {
    title: "API AI Gratis, Direktori, dan Sumber Referensi | Meow Labs Resources",
    description:
      "Platform dan direktori yang berguna buat mencari free token, free-tier, atau katalog model AI sebelum integrasi ke produk.",
    type: "website",
    url: "https://meowlabs.id/resources/api-ai-gratis",
  },
  alternates: {
    canonical: "https://meowlabs.id/resources/api-ai-gratis",
  },
}

export default function ApiAiGratisPage() {
  return (
    <ResourcePageTemplate
      eyebrow="API AI Gratis"
      title="Direktori dan sumber referensi untuk cari API AI gratis lebih cepat"
      description="Bukan semua entri di halaman ini adalah provider resmi yang memberi kuota gratis langsung. Sebagian adalah direktori, katalog model, atau repo komunitas yang membantu discovery. Tujuannya supaya builder Indonesia bisa menghemat waktu saat riset provider atau free-tier."
      highlightedNote="Cara pakainya simpel: jadikan halaman ini sebagai daftar starting point, lalu cek requirement akhir sendiri seperti region, kartu, verifikasi, limit rate, dan apakah free-tier masih aktif."
      stats={[
        { label: "Provider (aggregated)", value: "27" },
        { label: "Model gratis", value: "273+" },
        { label: "Sumber aggregated", value: "5 direktori" },
        { label: "Sinkron", value: "13 Jun 2026" },
      ]}
      items={apiGratisItems}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "API AI Gratis", href: "/resources/api-ai-gratis" },
      ]}
      cta={{
        title: "Sudah nemu provider, tapi bingung cara bungkus jadi produk?",
        description:
          "Meow Labs bisa bantu dari validasi arsitektur sampai implementasi frontend, backend, billing, dan dashboard untuk AI-powered product yang ringan dan cepat dirilis.",
        primaryLabel: "Lihat open source pilihan",
        primaryHref: "/resources/open-source",
        secondaryLabel: "Kembali ke hub",
        secondaryHref: "/resources",
      }}
    />
  )
}
