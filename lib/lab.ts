import type { ProductStatus } from "@/lib/products"

// Produk kecil dan eksperimen MeowLabs di luar empat produk utama, untuk
// halaman /lab. Label status harus jujur: "Beta" bila situsnya sendiri
// menyebut beta atau datanya masih sedikit, "Eksperimen" untuk prototipe
// dan demo.

export interface LabProject {
  slug: string
  name: string
  url: string
  status: ProductStatus
  tagline: string
  description: string
  image: string
}

export const labProjects: LabProject[] = [
  {
    slug: "furnirender",
    name: "FurniRender",
    url: "https://furnirender.meowlabs.id/",
    status: "Beta",
    tagline: "Studio 3D untuk seller furniture",
    description:
      "Unggah foto produk, latarnya dihapus otomatis, lalu tata di ruangan 3D dan unduh gambar siap marketplace. Langsung di browser.",
    image: "/lab/furnirender.webp",
  },
  {
    slug: "timeless-media",
    name: "Timeless Media",
    url: "https://timeless.meowlabs.id/",
    status: "Tersedia",
    tagline: "Berita dan pembingkaian media",
    description:
      "Rangkuman berita pasar, kripto, AI, dan politik, plus perbandingan cara tiap media membingkai isu yang sama.",
    image: "/lab/timeless-media.webp",
  },
  {
    slug: "sidangai",
    name: "SidangAI",
    url: "https://sidangah.meowlabs.id/",
    status: "Tersedia",
    tagline: "Latihan sidang skripsi",
    description:
      "Simulasi sidang skripsi dengan AI yang memerankan berbagai karakter dosen penguji, lengkap dengan bank soal. Gratis.",
    image: "/lab/sidangai.webp",
  },
  {
    slug: "kosatlas",
    name: "KosAtlas",
    url: "https://kosatlas.meowlabs.id/",
    status: "Beta",
    tagline: "Cari kos Semarang lewat peta",
    description: "Jelajahi kos per area Semarang di peta, bandingkan lebih cepat, lalu lanjut ke sumber listing aslinya.",
    image: "/lab/kosatlas.webp",
  },
  {
    slug: "finmate",
    name: "FinMate",
    url: "https://finmate.meowlabs.id/",
    status: "Tersedia",
    tagline: "Kelola keuangan pribadi",
    description: "Aplikasi pengelola keuangan dengan akun sendiri. Bisa masuk dengan email atau Google.",
    image: "/lab/finmate.webp",
  },
  {
    slug: "logiclabs",
    name: "LogicLabs",
    url: "https://logiclabs.meowlabs.id/",
    status: "Tersedia",
    tagline: "Belajar logika per jenjang",
    description: "Materi logika yang disesuaikan per jenjang, dari mengenal pola untuk TK sampai algoritma untuk kuliah.",
    image: "/lab/logiclabs.webp",
  },
  {
    slug: "hikmah-verse",
    name: "Hikmah Verse",
    url: "https://hikmah.meowlabs.id/",
    status: "Tersedia",
    tagline: "Al-Qur'an dan jadwal sholat",
    description: "Baca Al-Qur'an dan lihat jadwal sholat dalam satu web yang ringan.",
    image: "/lab/hikmah-verse.webp",
  },
  {
    slug: "teleradiologi-ai",
    name: "Teleradiologi AI",
    url: "https://teleradiologi.meowlabs.id/",
    status: "Eksperimen",
    tagline: "Citra radiologi dibaca dari jauh",
    description:
      "Konsep dan demo pengiriman citra X-ray, CT, dan MRI untuk dibaca dokter ahli dari jarak jauh, dibantu AI.",
    image: "/lab/teleradiologi-ai.webp",
  },
  {
    slug: "satria-iot",
    name: "SATRIA",
    url: "https://satria-iot.meowlabs.id/",
    status: "Eksperimen",
    tagline: "Deteksi hama dengan sensor suara",
    description: "Prototipe perangkat IoT yang mengenali suara tikus dan melaporkan deteksinya ke dashboard.",
    image: "/lab/satria-iot.webp",
  },
  {
    slug: "deteksi-tulisan-tangan",
    name: "Pengenalan Tulisan Tangan",
    url: "https://deteksi-tulis.vercel.app/",
    status: "Eksperimen",
    tagline: "Gambar tulisan jadi teks",
    description: "Unggah atau foto tulisan tangan, olah gambarnya, lalu kenali teksnya langsung di browser.",
    image: "/lab/deteksi-tulisan-tangan.webp",
  },
]
