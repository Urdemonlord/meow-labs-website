import type { Metadata } from "next"
import type { ResourceItem } from "@/lib/resources-data"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { fetchTokenGratis } from "@/lib/tokengratis"

export const metadata: Metadata = {
  title: "Direktori Provider API AI Gratis | Meow Labs Resources",
  description:
    "27 provider API AI gratis — free tier, free credits, model, context window, dan modality. Data aggregasi live dari tokengratis.id.",
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
      "27 provider API AI gratis dengan free tier dan free credits. Data live dari tokengratis.id.",
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

  // modality badges
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
      `${p.modelCount} model tersedia. ${p.freeLimit ? `Gratis: ${p.freeLimit}.` : ""} Cek halaman provider untuk detail lengkap.`,
    href: p.href,
    ctaLabel: "Lihat provider",
    imageUrl: p.logo || undefined,
    badges: badgeList,
    meta: [
      { label: "Model", value: String(p.modelCount) },
      { label: "Modality", value: p.modalities.slice(0, 4).join(", ") || "-" },
      ...(p.freeLimit
        ? [{ label: "Gratis", value: p.freeLimit }]
        : []),
      ...(p.maxContext
        ? [{ label: "Max context", value: p.maxContext }]
        : []),
    ],
    notes: [
      `Data aggregasi dari tokengratis.id. ${p.freeLimit ? `Free limit: ${p.freeLimit}.` : "Free limit tidak disebutkan."} Verifikasi langsung di halaman provider untuk syarat & ketentuan terbaru.`,
    ],
  }
}

export default async function ApiAiGratisPage() {
  const { providers, lastSync, total } = await fetchTokenGratis()
  const items = providers.map(mapProviderToResourceItem)

  return (
    <ResourcePageTemplate
      eyebrow="API AI Gratis"
      title={`${total} provider API AI gratis — lengkap dengan model & free tier`}
      description={`Direktori provider API AI gratis dari tokengratis.id. Data di-aggregate dari 5 sumber komunitas (freellm.net, GitHub awesome lists, models.dev, OpenRouter API). Menampilkan model, modality, free limit, dan context window tiap provider.`}
      highlightedNote="tokengratis.id adalah aggregator — bukan verifier. Data ditampilkan apa adanya dari sumber. Selalu cek syarat & ketentuan masing-masing provider langsung di halaman mereka."
      stats={[
        { label: "Total provider", value: `${total}` },
        { label: "Total model", value: "273+" },
        { label: "Sumber data", value: "5 direktori" },
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
