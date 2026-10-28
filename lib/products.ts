// Produk milik MeowLabs yang dipromosikan di website: halaman /produk,
// section produk di homepage, dan footer. Deskripsi TOEFL, GenCV, dan
// meowlabs ai disamakan dengan katalog produk di repo meowlabs-academy.

// Label status harus jujur dan akurat saat dipublikasikan.
export type ProductStatus = "Tersedia" | "Beta" | "Eksperimen"

export interface Product {
  slug: string
  name: string
  url: string
  status: ProductStatus
  // Label pendek untuk kartu produk.
  tagline: string
  description: string
  // Artwork sementara dari kolase brand, sampai ada screenshot produk.
  image: string
}

export const products: Product[] = [
  {
    slug: "meowlabs-ai",
    name: "meowlabs ai",
    url: "https://ai.meowlabs.id/",
    status: "Tersedia",
    tagline: "Ide jadi aplikasi",
    description: "Ceritakan ide aplikasimu, AI menyusun kode yang langsung jalan lengkap dengan preview.",
    image: "/art/wave.webp",
  },
  {
    slug: "academy",
    name: "MeowLabs Academy",
    url: "https://academy.meowlabs.id/",
    status: "Tersedia",
    tagline: "Learn · Build · Ship",
    description: "Platform belajar teknologi dari MeowLabs: kursus, dokumentasi, dan proyek nyata.",
    image: "/art/house.webp",
  },
  {
    slug: "toefl",
    name: "TOEFL MeowLabs",
    url: "https://toefl.meowlabs.id/",
    status: "Tersedia",
    tagline: "Latihan TOEFL ITP",
    description: "Latihan TOEFL ITP gratis: 450 soal, simulasi penuh berwaktu, dan bisa dipakai offline.",
    image: "/art/mountain.webp",
  },
  {
    slug: "gencv",
    name: "GenCV",
    url: "https://gencv.meowlabs.id/",
    status: "Tersedia",
    tagline: "CV ramah ATS",
    description: "Bikin CV ramah ATS dengan bantuan AI, cocokkan dengan lowongan, lalu ekspor ke PDF atau DOCX.",
    image: "/art/leaves.webp",
  },
]

// Tambahkan UTM agar kunjungan dari website terlihat di analitik produk
// tujuan. medium membedakan asalnya, misalnya "produk" atau "homepage".
export function productHref(product: Product, medium: string) {
  const url = new URL(product.url)
  url.searchParams.set("utm_source", "meowlabs-website")
  url.searchParams.set("utm_medium", medium)
  return url.toString()
}
