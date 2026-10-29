// Karya klien untuk /karya dan section Klien di homepage. Diambil dari
// showcase proyek MeowLabs; screenshot disalin ke public/karya agar halaman
// tidak bergantung pada layanan luar. Proyek demo tidak dimasukkan.

export interface Work {
  slug: string
  name: string
  url: string
  // Jenis pekerjaan, ditampilkan sebagai label.
  category: string
  description: string
  image: string
  // Ditampilkan di homepage.
  featured?: boolean
}

export const works: Work[] = [
  {
    slug: "krisna-kencana",
    name: "PT Krisna Kencana Indonesia",
    url: "https://krisnakencana.web.id/",
    category: "Company profile",
    description:
      "Website perusahaan pengadaan barang dan jasa untuk industri: layanan, portofolio, klien, dan legalitas dalam satu situs.",
    image: "/karya/krisna-kencana.webp",
    featured: true,
  },
  {
    slug: "alair-ethnic",
    name: "ALAIR Ethnic",
    url: "https://alairethnic.id/",
    category: "Toko online",
    description: "Toko online kain tenun buatan tangan, dengan katalog koleksi, keranjang belanja, dan lacak pesanan.",
    image: "/karya/alair-ethnic.webp",
    featured: true,
  },
  {
    slug: "najstore",
    name: "Najstore",
    url: "https://www.najstore.id/",
    category: "Toko online",
    description: "Toko top up Robux dan gamepass Roblox dengan pembayaran QRIS dan cek pesanan mandiri.",
    image: "/karya/najstore.webp",
    featured: true,
  },
  {
    slug: "sicerdas-plamongansari",
    name: "SiCerdas Plamongansari",
    url: "https://www.sicerdasplamongansari.com/",
    category: "Sistem informasi",
    description:
      "Sistem informasi kesehatan untuk kader dan puskesmas di Plamongansari, Semarang: memantau gizi dari balita hingga lansia dan membantu deteksi dini stunting.",
    image: "/karya/sicerdas-plamongansari.webp",
    featured: true,
  },
  {
    slug: "jeka-towing",
    name: "Jeka Towing Service",
    url: "https://www.jekatowingservice.com/",
    category: "Company profile",
    description: "Website jasa towing 24 jam yang berbasis di Jepara, dengan jalur cepat ke WhatsApp dan telepon.",
    image: "/karya/jeka-towing.webp",
  },
  {
    slug: "iki-tenun",
    name: "IKI TENUN",
    url: "https://ikitenun.id/",
    category: "Toko online",
    description: "Toko online tenun ikat dari pengrajin Jepara, dengan koleksi dress dan kemeja serta lacak pesanan.",
    image: "/karya/iki-tenun.webp",
  },
  {
    slug: "kelasin",
    name: "Kelasin.id",
    url: "https://www.kelasin.id/",
    category: "Platform kursus",
    description: "Platform pelatihan bisnis B2B dengan katalog pelatihan, profil trainer, dan sertifikat untuk peserta.",
    image: "/karya/kelasin.webp",
  },
  {
    slug: "simpus",
    name: "SIMPUS",
    url: "https://simpus.meowlabs.id/",
    category: "Sistem informasi",
    description: "Sistem manajemen puskesmas berbasis web untuk petugas kesehatan, dengan akses per akun.",
    image: "/karya/simpus.webp",
  },
  {
    slug: "rsgm-unimus-chatbot",
    name: "Chatbot RSGM Unimus",
    url: "https://chatbotrsgm.meowlabs.id/",
    category: "Chatbot AI",
    description: "Chatbot informasi layanan untuk Rumah Sakit Gigi dan Mulut Universitas Muhammadiyah Semarang.",
    image: "/karya/rsgm-unimus-chatbot.webp",
  },
  {
    slug: "putra-waluya-karya",
    name: "CV Putra Waluya Karya",
    url: "https://pwkconsultant.id/",
    category: "Company profile",
    description: "Website konsultan arsitektur dan teknik sipil, lengkap dengan proyek, galeri, dan blog.",
    image: "/karya/putra-waluya-karya.webp",
  },
  {
    slug: "ppk-ormawa-himatikro",
    name: "PPK Ormawa Himatikro",
    url: "https://www.ppkohimatikro.my.id/",
    category: "Website program",
    description: "Website program smart farming kebun cabai: pemantauan lahan berbasis IoT untuk petani.",
    image: "/karya/ppk-ormawa-himatikro.webp",
  },
  {
    slug: "muda-manunggal-roso",
    name: "Kelompok Tani Muda Manunggal Roso",
    url: "https://www.mudamanunggalroso.my.id/",
    category: "Company profile",
    description: "Website kelompok tani yang berdiri sejak 2008, menampilkan profil dan produk pertaniannya.",
    image: "/karya/muda-manunggal-roso.webp",
  },
  {
    slug: "piscok-nona-manis",
    name: "Piscok Nona Manis",
    url: "https://nonamanis.meowlabs.id/",
    category: "Toko online",
    description: "Toko online UMKM pisang cokelat dengan katalog produk, ulasan, dan keranjang belanja.",
    image: "/karya/piscok-nona-manis.webp",
  },
]

export const featuredWorks = works.filter((work) => work.featured)
