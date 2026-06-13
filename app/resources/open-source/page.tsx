import type { Metadata } from "next"

import { ResourcePageTemplate } from "@/components/resources/resource-page-template"
import { fetchAwesomeIndonesia, mapToResourceItems } from "@/lib/awesome-indonesia"

export const metadata: Metadata = {
  title: "Project Open Source Indonesia | Meow Labs Resources",
  description:
    "52+ proyek open source Indonesia dari IndopenSource/awesome-indonesia — stars, bahasa, lisensi, dan metadata lengkap. Di-sync live dari GitHub API.",
  keywords: [
    "proyek open source indonesia",
    "awesome indonesia",
    "open source untuk startup",
    "tools open source",
    "IndopenSource",
  ],
  openGraph: {
    title: "Project Open Source Indonesia | Meow Labs Resources",
    description:
      "52+ proyek open source Indonesia dari komunitas IndopenSource. Data live dari GitHub API.",
    type: "website",
    url: "https://meowlabs.id/resources/open-source",
  },
  alternates: {
    canonical: "https://meowlabs.id/resources/open-source",
  },
}

export default async function OpenSourcePage() {
  const { projects, lastSync, total } = await fetchAwesomeIndonesia()
  const items = mapToResourceItems(projects)

  return (
    <ResourcePageTemplate
      eyebrow="Open Source Indonesia"
      title={`${total} proyek open source hasil kurasi komunitas`}
      description={`Proyek open source Indonesia dari IndopenSource/awesome-indonesia. Diurutkan berdasarkan jumlah GitHub stars. Data di-fetch langsung dari GitHub API setiap request — selalu fresh.`}
      highlightedNote="Beberapa proyek mungkin tidak memiliki deskripsi atau lisensi yang jelas. Cek langsung di masing-masing repo untuk validasi. Halaman ini adalah mirror langsung dari awesome-indonesia tanpa kurasi tambahan."
      stats={[
        { label: "Total proyek", value: `${total}+` },
        { label: "Sumber", value: "GitHub API" },
        { label: "Kurasi oleh", value: "IndopenSource" },
        { label: "Sinkron", value: lastSync },
      ]}
      items={items}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Open Source Indonesia", href: "/resources/open-source" },
      ]}
      cta={{
        title: "Mau ikut nambahin proyek ke daftar ini?",
        description:
          "Awesome-indonesia adalah proyek open source — siapa aja bisa kontribusi lewat GitHub. Kalau ada proyek Indonesia yang layak masuk, bikin PR di repositori IndopenSource.",
        primaryLabel: "Kembali ke hub resources",
        primaryHref: "/resources",
        secondaryLabel: "Kontribusi ke awesome-indonesia",
        secondaryHref: "https://github.com/IndopenSource/awesome-indonesia",
      }}
    />
  )
}
