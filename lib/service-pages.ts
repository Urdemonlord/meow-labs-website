// Konten halaman detail /layanan/[slug]. Hanya diimpor dari server
// component, jadi tidak masuk bundle client homepage.
import { services } from "./services-data"
import type { ServiceData } from "./services-data"

export interface ServicePageContent {
  h1: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  intro: string[]
  faqs: { question: string; answer: string }[]
}

export type ServiceWithPage = ServiceData & { page: ServicePageContent }

const servicePages: Record<string, ServicePageContent> = {
  "integrasi-ai": {
    h1: "Jasa Integrasi AI dan Otomasi Bisnis di Semarang",
    metaTitle: "Jasa Integrasi AI, AI Agent WhatsApp & Otomasi Bisnis | Meow Labs",
    metaDescription: "Jasa integrasi AI untuk bisnis: AI agent WhatsApp, integrasi LLM dengan database dan API internal, otomasi pesanan dan dokumen, plus pengamanan dan monitoring. Mulai Rp4 juta, diawali analisis proses.",
    keywords: [
      "jasa integrasi ai",
      "ai agent whatsapp",
      "otomasi bisnis ai",
      "chatbot whatsapp bisnis",
      "integrasi llm",
      "jasa ai semarang"
    ],
    intro: [
      "Banyak bisnis sudah mencoba AI, tapi berhenti di chatbot yang tidak tahu stok, tidak bisa mencatat pesanan, dan tidak terhubung ke sistem apa pun. Nilainya baru terasa ketika AI masuk ke proses kerja: membaca data produk, mencatat pesanan, menyusun dokumen, lalu menyerahkan kasus sulit ke manusia.",
      "Meow Labs merancang sistem seperti itu dari awal sampai berjalan: memetakan proses, menghubungkan AI ke WhatsApp, database, dan API internal, membatasi data yang boleh diakses, lalu memantau hasilnya. Kalau masalah Anda lebih cocok diselesaikan dengan software biasa, kami akan bilang begitu."
    ],
    faqs: [
      {
        question: "Apa bedanya dengan chatbot biasa?",
        answer: "Chatbot biasa hanya menjawab pertanyaan. Integrasi AI menghubungkan model ke data dan sistem Anda, misalnya mengecek stok, mencatat pesanan ke database, atau mengisi dokumen administrasi, dengan aturan dan batasan yang jelas."
      },
      {
        question: "Berapa biaya integrasi AI?",
        answer: "Mulai Rp4 juta, sama dengan titik mulai paket Custom Build. Biaya final ditentukan setelah analisis proses, karena bergantung pada jumlah integrasi, volume pesan, dan biaya pemakaian model AI yang dipilih."
      },
      {
        question: "Apakah data bisnis saya aman?",
        answer: "Kami membatasi data yang bisa diakses AI, memasang pengamanan terhadap prompt injection, dan mencatat aktivitas sistem untuk monitoring. Detail penyimpanan data dan penyedia model dibahas dan disepakati sebelum pengerjaan."
      },
      {
        question: "Apakah bisnis saya harus pakai AI?",
        answer: "Tidak selalu. Banyak masalah operasional lebih murah dan lebih andal diselesaikan dengan software atau otomasi biasa. Kami mulai dari masalahnya, bukan dari teknologinya."
      }
    ]
  },
  "company-profile": {
    h1: "Jasa Pembuatan Website Company Profile di Semarang",
    metaTitle: "Jasa Pembuatan Website Company Profile di Semarang | Meow Labs",
    metaDescription: "Jasa pembuatan website company profile di Semarang mulai Rp500 ribu. Desain profesional, mobile-friendly, SEO dasar, bisa tayang mulai 3 hari kerja. Konsultasi gratis via WhatsApp.",
    keywords: [
      "company profile website semarang",
      "jasa website company profile",
      "website perusahaan semarang",
      "website bisnis semarang",
      "pembuatan website profesional",
      "web company profile"
    ],
    intro: [
      "Calon klien, investor, dan mitra hampir selalu mengecek bisnis Anda di Google sebelum menghubungi. Website company profile memastikan yang mereka temukan adalah informasi resmi: siapa Anda, apa layanan Anda, dan bagaimana cara menghubungi Anda.",
      "Meow Labs membangun company profile yang rapi di layar HP, cepat dibuka, dan mudah Anda perbarui sendiri. Cocok untuk UMKM, perusahaan jasa, konsultan, kontraktor, hingga instansi di Semarang dan sekitarnya."
    ],
    faqs: [
      {
        question: "Berapa biaya website company profile?",
        answer: "Mulai Rp500 ribu untuk 1-3 halaman (paket Starter Launch) dan mulai Rp1,5 juta untuk 4-8 halaman dengan struktur konten lebih lengkap (paket Growth Website). Harga final mengikuti jumlah halaman dan fitur yang disepakati saat konsultasi."
      },
      {
        question: "Apakah saya perlu menyiapkan konten sendiri?",
        answer: "Cukup siapkan informasi dasar bisnis, logo, dan foto yang sudah ada. Kami bantu menyusun struktur halaman dan merapikan teksnya."
      },
      {
        question: "Apakah sudah termasuk domain dan hosting?",
        answer: "Paket Starter Launch sudah termasuk setup domain dan publish awal. Untuk paket lain, cakupan domain dan hosting disepakati saat konsultasi, begitu juga biaya perpanjangan tahunannya."
      }
    ]
  },
  "toko-online": {
    h1: "Jasa Pembuatan Website Toko Online di Semarang",
    metaTitle: "Jasa Pembuatan Toko Online di Semarang | Meow Labs",
    metaDescription: "Jasa pembuatan website toko online di Semarang mulai Rp2,5 juta. Katalog produk, keranjang, checkout, integrasi pembayaran, dan dashboard admin. Konsultasi gratis.",
    keywords: [
      "toko online semarang",
      "jasa pembuatan e-commerce",
      "website toko online semarang",
      "jasa website e-commerce",
      "pembuatan online shop",
      "website jualan online"
    ],
    intro: [
      "Berjualan lewat marketplace dan chat memang mudah dimulai, tapi potongan komisi, aturan platform, dan pesanan yang tercecer di banyak chat cepat menjadi beban. Website toko online memberi Anda etalase sendiri, dengan data pelanggan dan pesanan di satu tempat.",
      "Meow Labs membangun toko online lengkap dengan katalog, keranjang, checkout, dan dashboard admin untuk mengelola pesanan dan stok. Kalau Anda juga punya toko fisik, tanyakan MeowLabs POS, aplikasi kasir Android kami dengan QRIS dan deteksi otomatis notifikasi bank."
    ],
    faqs: [
      {
        question: "Berapa biaya website toko online?",
        answer: "Mulai Rp2,5 juta hingga sekitar Rp10 juta, tergantung jumlah produk, integrasi pembayaran, dan fitur tambahan seperti manajemen stok."
      },
      {
        question: "Apakah bisa menerima pembayaran online?",
        answer: "Bisa. Toko online dapat diintegrasikan dengan pembayaran online sehingga pelanggan bisa checkout dan membayar langsung di website."
      },
      {
        question: "Apakah saya bisa menambah produk sendiri?",
        answer: "Bisa. Dashboard admin dibuat agar Anda bisa menambah produk, mengubah harga, dan memproses pesanan tanpa bantuan developer."
      }
    ]
  },
  "portal-berita": {
    h1: "Jasa Pembuatan Website Portal Berita di Semarang",
    metaTitle: "Jasa Pembuatan Website Portal Berita di Semarang | Meow Labs",
    metaDescription: "Jasa pembuatan website portal berita dan media online di Semarang mulai Rp3 juta. CMS dengan editor, akses multi-penulis, kategori dan tag, pencarian arsip, dan integrasi analytics.",
    keywords: [
      "jasa pembuatan portal berita",
      "website berita online",
      "website media online",
      "website portal berita semarang",
      "cms berita",
      "website multi author"
    ],
    intro: [
      "Media online, komunitas, dan humas instansi membutuhkan lebih dari blog biasa: banyak penulis, alur editorial yang jelas, kategori yang rapi, dan halaman yang tetap cepat saat arsip artikel terus bertambah.",
      "Meow Labs membangun portal berita dengan CMS yang nyaman untuk redaksi, akses penulis berbasis peran, kategori dan tag, pencarian arsip, tombol berbagi ke media sosial, serta analytics untuk memantau artikel yang paling banyak dibaca."
    ],
    faqs: [
      {
        question: "Berapa biaya website portal berita?",
        answer: "Mulai Rp3 juta hingga sekitar Rp8 juta, tergantung jumlah rubrik, peran pengguna, dan kebutuhan tambahan seperti slot iklan atau integrasi khusus."
      },
      {
        question: "Apakah bisa dipakai banyak penulis dan editor?",
        answer: "Bisa. Setiap pengguna mendapat akses sesuai perannya, misalnya penulis menyiapkan draf dan editor yang menerbitkan artikel."
      },
      {
        question: "Apakah cocok untuk humas instansi atau kampus?",
        answer: "Cocok. Struktur portal berita bisa dipakai sebagai kanal berita resmi instansi, kampus, atau organisasi yang rutin menerbitkan rilis dan liputan kegiatan."
      }
    ]
  },
  "website-sekolah": {
    h1: "Jasa Pembuatan Website Sekolah dan Yayasan di Semarang",
    metaTitle: "Jasa Pembuatan Website Sekolah & Yayasan di Semarang | Meow Labs",
    metaDescription: "Jasa pembuatan website sekolah dan yayasan di Semarang mulai Rp2,5 juta. Profil institusi, berita dan pengumuman, galeri prestasi, hingga form pendaftaran siswa baru online.",
    keywords: [
      "website sekolah semarang",
      "jasa pembuatan website sekolah",
      "website yayasan",
      "website pendaftaran siswa baru",
      "website madrasah",
      "website profil sekolah"
    ],
    intro: [
      "Orang tua calon siswa kini mencari informasi sekolah lewat Google sebelum datang langsung. Website sekolah yang rapi menjadi sumber resmi untuk profil, program, prestasi, pengumuman, dan informasi pendaftaran, sehingga pertanyaan yang sama tidak perlu dijawab berulang kali lewat chat.",
      "Meow Labs membangun website untuk sekolah, madrasah, dan yayasan dengan konten yang bisa diperbarui sendiri. Berita, pengumuman, dan galeri kegiatan bisa ditambahkan operator sekolah, dan pendaftaran siswa baru bisa dibuka lewat form online."
    ],
    faqs: [
      {
        question: "Berapa biaya website sekolah?",
        answer: "Mulai Rp2,5 juta hingga sekitar Rp7 juta, tergantung jumlah halaman, kebutuhan pendaftaran online, dan fitur tambahan seperti kalender kegiatan."
      },
      {
        question: "Apakah operator sekolah bisa mengunggah berita dan pengumuman sendiri?",
        answer: "Bisa. Kami siapkan panel pengelolaan konten beserta panduan penggunaan agar operator bisa menambah berita, pengumuman, dan galeri tanpa bantuan developer."
      },
      {
        question: "Apakah bisa memakai domain .sch.id atau .or.id?",
        answer: "Bisa. Domain .sch.id khusus untuk sekolah dan .or.id untuk organisasi atau yayasan, dan keduanya memerlukan dokumen resmi institusi. Admin kami akan memandu persyaratannya saat konsultasi."
      }
    ]
  },
  "landing-page": {
    h1: "Jasa Pembuatan Landing Page di Semarang",
    metaTitle: "Jasa Pembuatan Landing Page di Semarang | Meow Labs",
    metaDescription: "Jasa pembuatan landing page di Semarang mulai Rp800 ribu, selesai 3-5 hari kerja. Satu halaman fokus konversi untuk iklan, promo, event, dan peluncuran produk.",
    keywords: [
      "landing page semarang",
      "jasa landing page",
      "pembuatan landing page profesional",
      "landing page digital marketing",
      "landing page bisnis",
      "landing page iklan"
    ],
    intro: [
      "Iklan yang diarahkan ke beranda website atau profil Instagram sering kehilangan calon pembeli di tengah jalan. Landing page adalah satu halaman yang dibuat untuk satu tujuan: membuat pengunjung chat, mendaftar, atau membeli.",
      "Meow Labs menyusun landing page dengan alur yang jelas dari masalah, solusi, bukti, sampai tombol aksi, lalu memasang tracking analytics agar Anda tahu berapa banyak pengunjung yang benar-benar menghubungi."
    ],
    faqs: [
      {
        question: "Berapa biaya landing page?",
        answer: "Mulai Rp800 ribu hingga sekitar Rp3 juta, tergantung panjang halaman, kebutuhan copywriting, dan integrasi yang dibutuhkan."
      },
      {
        question: "Apa bedanya landing page dengan website company profile?",
        answer: "Company profile menjelaskan bisnis Anda secara keseluruhan dalam beberapa halaman. Landing page fokus pada satu penawaran atau kampanye dengan satu tujuan aksi."
      },
      {
        question: "Berapa lama pengerjaannya?",
        answer: "Umumnya 3-5 hari kerja setelah materi dan brief disepakati."
      }
    ]
  },
  "aplikasi-web": {
    h1: "Jasa Pembuatan Aplikasi Web Custom di Semarang",
    metaTitle: "Jasa Pembuatan Aplikasi Web Custom di Semarang | Meow Labs",
    metaDescription: "Jasa pembuatan aplikasi web dan sistem custom di Semarang: dashboard, sistem informasi internal, integrasi API, dan otomasi. Mulai Rp4 juta, diawali analisis kebutuhan.",
    keywords: [
      "aplikasi web semarang",
      "jasa pembuatan aplikasi",
      "aplikasi custom semarang",
      "sistem informasi web",
      "dashboard custom",
      "pengembangan software semarang"
    ],
    intro: [
      "Ketika pekerjaan tim masih berjalan di spreadsheet, grup chat, dan formulir kertas, data mudah tercecer dan laporan lambat dibuat. Aplikasi web custom memindahkan alur kerja itu ke satu sistem yang bisa diakses dari browser, dengan hak akses sesuai peran.",
      "Meow Labs mengerjakan dashboard, sistem informasi internal, portal data, hingga integrasi API dan fitur AI. Kami memulai dari analisis kebutuhan dan scope, lalu membangun secara bertahap agar sistem sudah bisa dipakai sejak versi awal."
    ],
    faqs: [
      {
        question: "Berapa biaya aplikasi web custom?",
        answer: "Mulai Rp4 juta. Biaya final ditentukan setelah analisis kebutuhan, karena bergantung pada jumlah modul, peran pengguna, dan integrasi."
      },
      {
        question: "Apakah bisa untuk instansi, sekolah, atau rumah sakit?",
        answer: "Bisa. Kami menangani kebutuhan institusi seperti sistem data internal, portal informasi, dan dashboard pelaporan."
      },
      {
        question: "Apakah ada dokumentasi dan serah terima?",
        answer: "Ada. Setiap proyek custom diakhiri dengan handover teknis dan dokumentasi, sehingga sistem bisa dirawat tim Anda sendiri atau oleh kami lewat kontrak maintenance."
      }
    ]
  }
}

export const servicesWithPage: ServiceWithPage[] = services.flatMap((service) => {
  const page = servicePages[service.slug]
  return page ? [{ ...service, page }] : []
})

export function getServiceWithPage(slug: string) {
  return servicesWithPage.find((service) => service.slug === slug)
}
