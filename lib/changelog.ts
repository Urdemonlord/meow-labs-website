import { products, type Product } from "@/lib/products"

// Catatan rilis untuk /changelog dan section "Yang baru" di homepage.
// Setiap entri harus berasal dari rilis yang sudah live, dengan tanggal
// rilis sebenarnya (diambil dari riwayat repo produk). Entri terbaru di atas.

export interface ChangelogEntry {
  // Tanggal rilis, format YYYY-MM-DD.
  date: string
  // Slug produk dari lib/products, atau "website" untuk meowlabs.id.
  product: string
  title: string
  summary: string
  items?: string[]
}

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-10-29",
    product: "website",
    title: "Wajah baru meowlabs.id",
    summary: "Website MeowLabs didesain ulang sebagai studio teknologi, dengan halaman produk tersendiri.",
    items: [
      "Tampilan editorial baru di semua halaman.",
      "Halaman Produk untuk meowlabs ai, Academy, TOEFL, dan GenCV.",
      "Homepage lebih ringan di HP: waktu blokir main thread turun dari 1.050 ms ke 100 ms.",
      "Animasi ringan yang otomatis mati bila perangkat meminta gerak minimal.",
    ],
  },
  {
    date: "2026-10-26",
    product: "academy",
    title: "Masuk dengan passkey",
    summary: "Akun MeowLabs Academy kini bisa dibuka dengan passkey, tanpa kata sandi, lengkap dengan kode pemulihan.",
  },
  {
    date: "2026-10-24",
    product: "academy",
    title: "Empat course baru dan playground kode",
    summary: "Materi baru untuk pemula, plus tempat mencoba kode langsung di browser.",
    items: [
      "Course Ngoding Bareng AI, Git dan GitHub untuk Pemula, Python untuk Mengolah Data, dan Membuat Halaman Web dengan HTML, CSS, dan JavaScript.",
      "Playground kode dengan latihan yang dicek otomatis dan kuis singkat di tengah materi.",
      "Progres latihan, kuis, dan XP tersimpan ke akun.",
      "Masuk dengan Google atau tautan email.",
    ],
  },
  {
    date: "2026-10-14",
    product: "gencv",
    title: "Panduan CV dan preset region",
    summary: "GenCV kini punya halaman Artikel yang ditulis dari aturan yang benar-benar dipakai produknya.",
    items: [
      "Lima panduan, termasuk arti skor ATS dan cara membaca Job Match.",
      "Feed RSS untuk artikel baru.",
      "Preset region Inggris (UK) dan Eropa (EU).",
    ],
  },
  {
    date: "2026-10-06",
    product: "gencv",
    title: "GenCV versi baru",
    summary: "GenCV dibangun ulang dari generator sekali jalan menjadi workspace CV.",
    items: [
      "Editor dengan pratinjau PDF asli, menggantikan wizard langkah demi langkah.",
      "Analisis ATS yang bisa dijelaskan dan Job Match per lowongan.",
      "Enam template satu kolom yang ramah ATS.",
      "Saran AI yang ditinjau dulu sebelum dipakai dan tidak mengarang angka.",
      "Banyak CV dalam satu dashboard, tersimpan di perangkat.",
    ],
  },
]

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
]

// Diformat manual agar hasilnya sama di server dan browser, tanpa
// bergantung pada zona waktu atau data locale Intl.
export function formatChangelogDate(date: string) {
  const [year, month, day] = date.split("-").map(Number)
  return `${day} ${months[month - 1]} ${year}`
}

export function changelogEntryId(entry: ChangelogEntry) {
  return `${entry.date}-${entry.product}`
}

export function changelogProduct(entry: ChangelogEntry): Product | undefined {
  return products.find((product) => product.slug === entry.product)
}

export function changelogProductName(entry: ChangelogEntry) {
  return changelogProduct(entry)?.name ?? "meowlabs.id"
}
