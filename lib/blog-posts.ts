// Daftar artikel yang benar-benar ada di /blog/[id]. Dipakai homepage,
// halaman /blog, dan bagian artikel terkait agar tidak ada link ke artikel
// yang tidak ada.
export interface BlogPost {
  id: number
  href: string
  title: string
  excerpt: string
  date: string
  isoDate: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    href: "/blog/1",
    title: "10 Tren Website Development 2025 untuk UMKM di Indonesia",
    excerpt:
      "Teknologi web terus berkembang pesat. Tahun 2025 membawa inovasi seperti AI personalization, arsitektur modular, dan WebAssembly untuk tim bisnis yang ingin tumbuh.",
    date: "29 Sep 2025",
    isoDate: "2025-09-29",
    category: "Web Development",
    readTime: "6 menit",
  },
  {
    id: 2,
    href: "/blog/2",
    title: "Strategi SEO Lokal untuk Bisnis di Semarang",
    excerpt:
      "Tingkatkan ranking lokal dengan optimasi business profile, review, dan backlink lokal yang relevan dengan area layanan Anda.",
    date: "20 Sep 2025",
    isoDate: "2025-09-20",
    category: "SEO",
    readTime: "8 menit",
  },
  {
    id: 3,
    href: "/blog/3",
    title: "Website atau Aplikasi Mobile: Mana yang Tepat untuk UMKM?",
    excerpt: "Perbandingan praktis website vs aplikasi mobile berdasarkan budget, tujuan, dan kecepatan peluncuran.",
    date: "15 Sep 2025",
    isoDate: "2025-09-15",
    category: "Bisnis",
    readTime: "7 menit",
  },
]
