// Produk milik Meow Labs yang dipromosikan di website: halaman /produk,
// section produk di homepage, dan kolom footer. Deskripsi TOEFL, GenCV, dan
// meowlabs ai disamakan dengan katalog produk di repo meowlabs-academy.

export type ProductIconName = "Store" | "Sparkles" | "GraduationCap" | "BookOpen" | "FileText"

export type ProductCategory = "bisnis" | "karier"

export interface ProductCopy {
  tagline: string
  description: string
}

export interface Product {
  slug: string
  name: string
  // Path internal (diawali "/") atau URL produk di subdomain meowlabs.id.
  url: string
  icon: ProductIconName
  category: ProductCategory
  id: ProductCopy
  en: ProductCopy
}

export const productCategories: Record<ProductCategory, { id: string; en: string }> = {
  bisnis: { id: "Untuk usaha dan pembuat aplikasi", en: "For businesses and builders" },
  karier: { id: "Untuk mahasiswa dan pencari kerja", en: "For students and job seekers" },
}

export const products: Product[] = [
  {
    slug: "pos",
    name: "MeowLabs POS",
    url: "/pos",
    icon: "Store",
    category: "bisnis",
    id: {
      tagline: "Kasir & QRIS",
      description:
        "Aplikasi kasir Android dengan pembayaran QRIS dan deteksi otomatis notifikasi bank, jadi transfer terkonfirmasi tanpa cek mutasi manual.",
    },
    en: {
      tagline: "Cashier & QRIS",
      description:
        "Android cashier app with QRIS payments and automatic bank-notification detection, so transfers are confirmed without manual checks.",
    },
  },
  {
    slug: "meowlabs-ai",
    name: "meowlabs ai",
    url: "https://ai.meowlabs.id/",
    icon: "Sparkles",
    category: "bisnis",
    id: {
      tagline: "Ide jadi aplikasi",
      description: "Ceritakan ide aplikasimu, AI menyusun kode yang langsung jalan lengkap dengan preview.",
    },
    en: {
      tagline: "Ideas into apps",
      description: "Describe your app idea and AI writes working code with a live preview.",
    },
  },
  {
    slug: "sidangai",
    name: "SidangAI",
    url: "https://sidangah.meowlabs.id/",
    icon: "GraduationCap",
    category: "karier",
    id: {
      tagline: "Latihan sidang skripsi",
      description:
        "Latihan sidang skripsi dan tesis dengan AI sebagai dosen penguji, lengkap dengan voice call, berbagai karakter penguji, dan bank soal. Gratis.",
    },
    en: {
      tagline: "Thesis defense practice",
      description:
        "Practice your thesis defense with AI examiners, including voice calls, different examiner personas, and a question bank. Free.",
    },
  },
  {
    slug: "toefl",
    name: "TOEFL MeowLabs",
    url: "https://toefl.meowlabs.id/",
    icon: "BookOpen",
    category: "karier",
    id: {
      tagline: "Latihan TOEFL ITP",
      description: "Latihan TOEFL ITP gratis: 450 soal, simulasi penuh berwaktu, dan bisa dipakai offline.",
    },
    en: {
      tagline: "TOEFL ITP practice",
      description: "Free TOEFL ITP practice: 450 questions, full timed simulations, and offline support.",
    },
  },
  {
    slug: "gencv",
    name: "GenCV",
    url: "https://gencv.meowlabs.id/",
    icon: "FileText",
    category: "karier",
    id: {
      tagline: "CV ramah ATS",
      description: "Bikin CV ramah ATS dengan bantuan AI, cocokkan dengan lowongan, lalu ekspor ke PDF atau DOCX.",
    },
    en: {
      tagline: "ATS-friendly CVs",
      description: "Build an ATS-friendly CV with AI, match it to a job posting, then export to PDF or DOCX.",
    },
  },
]

export function isExternalProduct(product: Product) {
  return !product.url.startsWith("/")
}

// Tambahkan UTM agar kunjungan dari website terlihat di analitik produk
// tujuan. medium membedakan asalnya: "produk", "homepage", atau "footer".
export function productHref(product: Product, medium: string) {
  if (!isExternalProduct(product)) return product.url
  const url = new URL(product.url)
  url.searchParams.set("utm_source", "meowlabs-website")
  url.searchParams.set("utm_medium", medium)
  return url.toString()
}
