import type { Metadata } from "next"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { openSourceItems } from "@/lib/resources-data"

export const metadata: Metadata = {
  title: "Project Open Source Pilihan | Meow Labs Resources",
  description:
    "Kurasi project open source yang layak dipelajari atau dijadikan fondasi produk: infra, workflow, CMS, docs, dan internal tools.",
  keywords: [
    "project open source pilihan",
    "open source untuk startup",
    "open source indonesia",
    "tools open source terbaik",
  ],
  openGraph: {
    title: "Project Open Source Pilihan | Meow Labs Resources",
    description:
      "Kumpulan project open source yang berguna untuk membangun MVP, tooling internal, konten platform, dan deployment VPS-first.",
    type: "website",
    url: "https://meowlabs.id/resources/open-source",
  },
  alternates: {
    canonical: "https://meowlabs.id/resources/open-source",
  },
}

export default function OpenSourcePage() {
  return (
    <ResourcePageTemplate
      eyebrow="Open Source Pilihan"
      title="Proyek open source yang layak dijadikan fondasi, bukan cuma bookmark"
      description="Halaman ini fokus ke proyek yang punya leverage praktis: bisa mempercepat MVP, operasional, content engine, atau deploy stack tanpa bikin semua dari nol. Sumber utama direktori: IndopenSource/awesome-indonesia + GitHub API, di-sync live."
      highlightedNote="Kurasi ini sengaja bias ke proyek yang membantu validasi cepat, operasional ringan, dan VPS-first execution. Kalau tujuannya cuma keren-kerenan stack, biasanya justru melambatkan shipping."
      stats={[
        { label: "Total proyek (awesome-indonesia)", value: "49+" },
        { label: "Sumber", value: "GitHub API" },
        { label: "Kurasi oleh", value: "IndopenSource" },
        { label: "Sinkron", value: "13 Jun 2026" },
      ]}
      items={openSourceItems}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Open Source Pilihan", href: "/resources/open-source" },
      ]}
      cta={{
        title: "Mau open source ini dijadikan produk nyata?",
        description:
          "Kami bisa bantu pilih fondasi yang paling rasional, mengurangi overengineering, lalu bungkus jadi website, dashboard, atau SaaS ringan yang siap diuji ke user asli.",
        primaryLabel: "Kembali ke hub resources",
        primaryHref: "/resources",
        secondaryLabel: "Hubungi Meow Labs",
        secondaryHref: "https://wa.me/62895386288683?text=Halo%20Meow%20Labs!%20Saya%20ingin%20diskusi%20membangun%20produk%20dari%20open%20source",
      }}
    />
  )
}
