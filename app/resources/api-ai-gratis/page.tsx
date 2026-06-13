import type { Metadata } from "next"
import type { ResourceItem } from "@/lib/resources-data"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { fetchTokenGratis } from "@/lib/tokengratis"

export const metadata: Metadata = {
  title: "Direktori Provider API AI Gratis | Meow Labs Resources",
  description:
    "Provider API AI gratis yang dibaca di Meow Labs: free tier, free credits, model, context window, dan tutorial claim dasar per provider.",
  keywords: [
    "api ai gratis",
    "free token ai",
    "direktori api ai",
    "openrouter",
    "tokengratis",
    "ai provider gratis",
  ],
  openGraph: {
    title: "Direktori Provider API AI Gratis | Meow Labs Resources",
    description:
      "Direktori provider API AI gratis dengan tutorial claim dasar dan metadata penting, disajikan di Meow Labs.",
    type: "website",
    url: "https://meowlabs.id/resources/api-ai-gratis",
  },
  alternates: {
    canonical: "https://meowlabs.id/resources/api-ai-gratis",
  },
}

function mapProviderToResourceItem(
  p: Awaited<ReturnType<typeof fetchTokenGratis>>["providers"][0]
): ResourceItem {
  const badgeList: { label: string; variant: "default" | "secondary" | "outline" | "destructive" }[] = [
    { label: `${p.modelCount} model`, variant: "default" },
  ]

  for (const mod of p.modalities.slice(0, 3)) {
    badgeList.push({
      label: mod,
      variant: "secondary",
    })
  }

  return {
    slug: p.slug,
    title: p.name,
    description:
      p.description ||
      `${p.modelCount} model tersedia. ${p.freeLimit ? `Gratis: ${p.freeLimit}.` : ""} Buka detail di Meow Labs untuk lihat langkah claim dasar dan metadata provider.`,
    href: `/resources/api-ai-gratis/${p.slug}`,
    ctaLabel: "Lihat tutorial",
    imageUrl: p.logo || undefined,
    badges: badgeList,
    meta: [
      { label: "Model", value: String(p.modelCount) },
      { label: "Modality", value: p.modalities.slice(0, 4).join(", ") || "-" },
      ...(p.freeLimit ? [{ label: "Gratis", value: p.freeLimit }] : []),
      ...(p.maxContext ? [{ label: "Max context", value: p.maxContext }] : []),
    ],
    notes: [
      `Halaman detail Meow Labs merangkum data provider ini dari tokengratis.id dan sumber komunitas. Tetap verifikasi syarat promo dan quota di situs resmi provider.`,
    ],
  }
}

export default async function ApiAiGratisPage() {
  const { providers, lastSync, total } = await fetchTokenGratis()
  const items = providers.map(mapProviderToResourceItem)

  return (
    <ResourcePageTemplate
      eyebrow="API AI Gratis"
      title={`${total} provider API AI gratis, dibaca langsung di Meow Labs`}
      description={`Direktori ini menampilkan provider API AI gratis beserta free tier, model, modality, dan jalur claim dasar tanpa melempar user keluar dari Meow Labs untuk baca ringkasannya.`}
      highlightedNote="Sumber utamanya tetap data komunitas seperti tokengratis.id. Meow Labs merangkum ulang supaya discovery dan tutorial dasar tetap ada di satu tempat. Selalu cek syarat resmi provider sebelum dipakai di workflow penting."
      stats={[
        { label: "Total provider", value: `${total}` },
        { label: "Tutorial internal", value: `${total}` },
        { label: "Sumber data", value: "Komunitas" },
        { label: "Sinkron", value: lastSync || "-" },
      ]}
      items={items}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "API AI Gratis", href: "/resources/api-ai-gratis" },
      ]}
      cta={{
        title: "Butuh bantuan milih provider atau integrasi API?",
        description:
          "Meow Labs bisa bantu evaluasi provider, desain arsitektur, dan implementasi AI API ke produk kamu — dari yang gratis sampai production-grade.",
        primaryLabel: "Lihat open source pilihan",
        primaryHref: "/resources/open-source",
        secondaryLabel: "Kembali ke hub",
        secondaryHref: "/resources",
      }}
    />
  )
}
