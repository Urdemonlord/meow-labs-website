// Sumber tunggal data layanan: dipakai section layanan di homepage dan
// halaman /layanan/[slug]. Harga dan timeline di sini harus sama dengan
// paket di lib/ui-copy.json dan knowledge.md.

export type ServiceIconName = "Globe" | "Smartphone" | "Database" | "Shield" | "Zap" | "Cpu"

export interface ServiceContent {
  title: string
  description: string
  features: string[]
  detailedDescription: string
  benefits: string[]
  includedFeatures: string[]
  priceRange: string
  timeframe: string
  targetAudience: string
}

export interface ServicePageContent {
  h1: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  intro: string[]
  faqs: { question: string; answer: string }[]
}

export interface ServiceData {
  slug: string
  icon: ServiceIconName
  color: "primary" | "secondary"
  id: ServiceContent
  en: ServiceContent
  // Hanya layanan yang punya halaman sendiri di /layanan/[slug].
  page?: ServicePageContent
}

export const services: ServiceData[] = [
  {
    slug: "company-profile",
    icon: "Globe",
    color: "primary",
    id: {
      title: "Website Company Profile",
      description: "Website profesional untuk meningkatkan kredibilitas dan citra perusahaan Anda.",
      features: [
        "Desain modern",
        "Responsive mobile",
        "SEO optimized",
        "Fast loading"
      ],
      detailedDescription: "Website company profile membantu pengunjung memahami bisnis Anda dengan cepat dan meningkatkan kepercayaan.",
      benefits: [
        "Meningkatkan kredibilitas bisnis",
        "Memperjelas layanan perusahaan",
        "Informasi bisnis tersedia 24/7",
        "Memperkuat kehadiran digital",
        "Meningkatkan peluang lead"
      ],
      includedFeatures: [
        "Halaman About, Services, Portfolio, Contact",
        "Integrasi form kontak",
        "Setup SEO dasar",
        "Layout mobile-first",
        "Integrasi sosial media dan maps",
        "Konten mudah diupdate"
      ],
      priceRange: "Mulai Rp500.000 - Rp5.000.000",
      timeframe: "3-7 hari kerja",
      targetAudience: "UMKM, startup, dan profesional"
    },
    en: {
      title: "Company Profile Website",
      description: "Professional business website to improve brand trust and credibility.",
      features: [
        "Modern design",
        "Responsive layout",
        "SEO-ready",
        "Fast loading"
      ],
      detailedDescription: "A structured company profile helps visitors understand your business quickly and trust your brand.",
      benefits: [
        "Increase business credibility",
        "Present services clearly",
        "Always-on information channel",
        "Stronger digital presence",
        "Improve lead opportunities"
      ],
      includedFeatures: [
        "About, Services, Portfolio, Contact pages",
        "Contact form integration",
        "Basic SEO setup",
        "Mobile-first layout",
        "Social and map integration",
        "Easy content updates"
      ],
      priceRange: "From Rp500,000 - Rp5,000,000",
      timeframe: "3-7 working days",
      targetAudience: "Small business, startup, and professional brands"
    },
    page: {
      h1: "Jasa Pembuatan Website Company Profile di Semarang",
      metaTitle: "Jasa Pembuatan Website Company Profile di Semarang | Meow Labs",
      metaDescription: "Jasa pembuatan website company profile di Semarang mulai Rp500 ribu. Desain profesional, mobile-friendly, SEO dasar, selesai 3-7 hari kerja. Konsultasi gratis via WhatsApp.",
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
          answer: "Setup domain dan publish awal sudah termasuk. Biaya perpanjangan domain dan hosting tahunan dijelaskan admin saat konsultasi sesuai paket yang dipilih."
        }
      ]
    }
  },
  {
    slug: "toko-online",
    icon: "Smartphone",
    color: "secondary",
    id: {
      title: "Website Toko Online",
      description: "Website e-commerce dengan katalog, checkout, dan manajemen pesanan.",
      features: [
        "Katalog produk",
        "Payment gateway",
        "Manajemen order",
        "Integrasi WhatsApp"
      ],
      detailedDescription: "Toko online membantu Anda berjualan tanpa batas waktu dengan alur beli yang rapi.",
      benefits: [
        "Berjualan 24/7",
        "Menjangkau pasar lebih luas",
        "Mengurangi friksi operasional",
        "Monitoring order dan stok lebih mudah",
        "Pengalaman belanja lebih baik"
      ],
      includedFeatures: [
        "Listing produk per kategori",
        "Cart dan checkout",
        "Integrasi pembayaran",
        "Manajemen pesanan dan stok",
        "Dashboard admin",
        "Optimasi mobile shopping"
      ],
      priceRange: "Mulai Rp2.500.000 - Rp10.000.000",
      timeframe: "7-14 hari kerja",
      targetAudience: "Online shop, reseller, distributor, dan bisnis produk"
    },
    en: {
      title: "Online Store Website",
      description: "E-commerce website with catalog, checkout, and order management.",
      features: [
        "Product catalog",
        "Payment options",
        "Order workflow",
        "WhatsApp integration"
      ],
      detailedDescription: "An online store helps you sell continuously with cleaner buying flow and easier product management.",
      benefits: [
        "Sell 24/7",
        "Reach wider market",
        "Reduce operational friction",
        "Track orders and stock easier",
        "Better customer shopping experience"
      ],
      includedFeatures: [
        "Category-based product listing",
        "Cart and checkout flow",
        "Payment integration",
        "Order and stock management",
        "Admin dashboard",
        "Mobile shopping optimization"
      ],
      priceRange: "From Rp2,500,000 - Rp10,000,000",
      timeframe: "7-14 working days",
      targetAudience: "Online stores, distributors, and product-based businesses"
    },
    page: {
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
    }
  },
  {
    slug: "portal-berita",
    icon: "Database",
    color: "primary",
    id: {
      title: "Website Portal Berita",
      description: "Portal konten dengan kategori terstruktur dan alur publikasi yang mudah.",
      features: [
        "Content management",
        "Multi author",
        "Kategori dan tags",
        "SEO tools"
      ],
      detailedDescription: "Website portal memudahkan tim Anda mempublikasikan update rutin dengan struktur konten rapi.",
      benefits: [
        "Publikasi konten lebih cepat",
        "Membangun pembaca loyal",
        "Membuka peluang monetisasi",
        "Memperkuat otoritas niche",
        "Workflow editorial lebih rapi"
      ],
      includedFeatures: [
        "CMS dengan editor tools",
        "Akses author berbasis role",
        "Taxonomy kategori dan tag",
        "Pencarian dan arsip konten",
        "Integrasi sharing sosial",
        "Integrasi analytics"
      ],
      priceRange: "Mulai Rp3.000.000 - Rp8.000.000",
      timeframe: "7-14 hari kerja",
      targetAudience: "Media online, komunitas, dan organisasi"
    },
    en: {
      title: "News and Content Portal",
      description: "Content portal with structured categories and easy publishing workflow.",
      features: [
        "Content CMS",
        "Author roles",
        "Category and tags",
        "SEO tools"
      ],
      detailedDescription: "A portal website helps your team publish updates regularly while keeping content organized and searchable.",
      benefits: [
        "Fast content publishing",
        "Build loyal readers",
        "Open monetization opportunities",
        "Strengthen authority in your niche",
        "Better internal editorial workflow"
      ],
      includedFeatures: [
        "CMS with editor tools",
        "Role-based author access",
        "Category and tag taxonomy",
        "Search and archive navigation",
        "Social sharing integration",
        "Analytics integration"
      ],
      priceRange: "From Rp3,000,000 - Rp8,000,000",
      timeframe: "7-14 working days",
      targetAudience: "Media teams, communities, and organizations"
    },
    page: {
      h1: "Jasa Pembuatan Website Portal Berita di Semarang",
      metaTitle: "Jasa Pembuatan Website Portal Berita & Media Online | Meow Labs",
      metaDescription: "Jasa pembuatan website portal berita dan media online mulai Rp3 juta. CMS dengan editor, akses multi-penulis, kategori dan tag, pencarian arsip, dan integrasi analytics.",
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
    }
  },
  {
    slug: "website-sekolah",
    icon: "Shield",
    color: "secondary",
    id: {
      title: "Website Sekolah dan Yayasan",
      description: "Platform informasi lembaga pendidikan dengan alur administrasi yang praktis.",
      features: [
        "Info akademik",
        "Galeri event",
        "Pengumuman",
        "Form kontak"
      ],
      detailedDescription: "Membantu sekolah dan yayasan menyampaikan update, prestasi, dan informasi pendaftaran dengan jelas.",
      benefits: [
        "Komunikasi lebih baik ke siswa dan orang tua",
        "Citra institusi lebih profesional",
        "Update dan pengumuman terpusat",
        "Mendukung pendaftaran dan pertanyaan",
        "Meningkatkan trust stakeholder"
      ],
      includedFeatures: [
        "Halaman profil institusi",
        "Section program dan kurikulum",
        "Galeri dan publikasi prestasi",
        "Board pengumuman dan berita",
        "Form pendaftaran online",
        "Kalender event dan kontak"
      ],
      priceRange: "Mulai Rp2.500.000 - Rp7.000.000",
      timeframe: "7-14 hari kerja",
      targetAudience: "Sekolah, lembaga pelatihan, dan yayasan"
    },
    en: {
      title: "School and Foundation Website",
      description: "Information platform for educational institutions with practical admin flow.",
      features: [
        "Academic info",
        "Event gallery",
        "Announcements",
        "Contact channel"
      ],
      detailedDescription: "Helps schools and foundations communicate updates, achievements, and registration info clearly.",
      benefits: [
        "Stronger communication with parents and students",
        "Professional institutional presence",
        "Centralized updates and announcements",
        "Support registration and inquiries",
        "Improve trust from stakeholders"
      ],
      includedFeatures: [
        "Institution profile pages",
        "Program and curriculum section",
        "Gallery and achievement feed",
        "Announcement and news board",
        "Online registration form",
        "Event calendar and contact details"
      ],
      priceRange: "From Rp2,500,000 - Rp7,000,000",
      timeframe: "7-14 working days",
      targetAudience: "Schools, training centers, and foundations"
    },
    page: {
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
    }
  },
  {
    slug: "landing-page",
    icon: "Zap",
    color: "primary",
    id: {
      title: "Landing Page Bisnis",
      description: "Halaman fokus konversi untuk campaign, peluncuran, dan pengumpulan lead.",
      features: [
        "Fokus konversi",
        "Lead generation",
        "Analytics",
        "A/B testing ready"
      ],
      detailedDescription: "Landing page dibangun untuk satu aksi utama agar traffic campaign lebih efektif menghasilkan konversi.",
      benefits: [
        "Conversion rate lebih baik",
        "Pengumpulan lead lebih rapi",
        "Selaras dengan performa iklan",
        "Iterasi campaign lebih cepat",
        "Pesan lebih jelas ke audiens"
      ],
      includedFeatures: [
        "Struktur fokus dan CTA jelas",
        "Form lead capture",
        "Optimasi mobile",
        "Baseline performa cepat",
        "Tracking analytics",
        "Setup eksperimen sederhana"
      ],
      priceRange: "Mulai Rp800.000 - Rp3.000.000",
      timeframe: "2-5 hari kerja",
      targetAudience: "Tim campaign, promosi event, dan peluncuran produk"
    },
    en: {
      title: "Business Landing Page",
      description: "Conversion-focused page for campaigns, launches, and lead collection.",
      features: [
        "Conversion-focused",
        "Lead capture",
        "Analytics",
        "A/B ready"
      ],
      detailedDescription: "Landing pages are built for one clear action so campaign traffic converts better.",
      benefits: [
        "Better conversion rates",
        "Cleaner lead collection",
        "Better ad performance alignment",
        "Fast iteration for campaigns",
        "Clear message for target audience"
      ],
      includedFeatures: [
        "Focused structure and CTA",
        "Lead capture form",
        "Mobile optimization",
        "Fast performance baseline",
        "Analytics tracking",
        "Simple experimentation setup"
      ],
      priceRange: "From Rp800,000 - Rp3,000,000",
      timeframe: "2-5 working days",
      targetAudience: "Campaign teams, event promotions, and product launches"
    },
    page: {
      h1: "Jasa Pembuatan Landing Page di Semarang",
      metaTitle: "Jasa Pembuatan Landing Page di Semarang | Meow Labs",
      metaDescription: "Jasa pembuatan landing page di Semarang mulai Rp800 ribu, selesai 2-5 hari kerja. Satu halaman fokus konversi untuk iklan, promo, event, dan peluncuran produk.",
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
          answer: "Umumnya 2-5 hari kerja setelah materi dan brief disepakati."
        }
      ]
    }
  },
  {
    slug: "aplikasi-web",
    icon: "Cpu",
    color: "secondary",
    id: {
      title: "Website Custom",
      description: "Sistem website kustom dengan fitur khusus, integrasi, dan workflow yang scalable.",
      features: [
        "Fitur custom",
        "Integrasi API",
        "Third-party apps",
        "Arsitektur scalable"
      ],
      detailedDescription: "Untuk kebutuhan di atas website standar, termasuk alur data dan logika sistem yang disesuaikan.",
      benefits: [
        "Dibangun sesuai workflow bisnis",
        "Mudah diintegrasikan dengan tools existing",
        "Dirancang agar scalable",
        "Kontrol operasional lebih baik",
        "Kapabilitas digital lebih unggul"
      ],
      includedFeatures: [
        "Analisis kebutuhan dan scope",
        "Desain UI dan UX custom",
        "Backend dan alur database custom",
        "Layer integrasi sistem",
        "Testing dan QA",
        "Handover teknis dan dokumentasi"
      ],
      priceRange: "Mulai Rp4.000.000+",
      timeframe: "14-30 hari kerja",
      targetAudience: "Bisnis berkembang dengan kebutuhan workflow digital spesifik"
    },
    en: {
      title: "Custom Website System",
      description: "Tailored system with custom features, integration, and scalable workflow.",
      features: [
        "Custom features",
        "API integration",
        "Third-party tools",
        "Scalable architecture"
      ],
      detailedDescription: "For businesses that need more than a standard website, including custom data flow and system logic.",
      benefits: [
        "Built around your exact workflow",
        "Easier integration with existing tools",
        "Designed to scale with growth",
        "More control over business operations",
        "Differentiated digital capability"
      ],
      includedFeatures: [
        "Scope and requirement analysis",
        "Custom UI and UX design",
        "Custom backend and database flow",
        "Integration layer",
        "Testing and QA",
        "Technical handover and documentation"
      ],
      priceRange: "From Rp4,000,000+",
      timeframe: "14-30 working days",
      targetAudience: "Growing businesses and teams with specific digital workflows"
    },
    page: {
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
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

export const servicesWithPage = services.filter(
  (service): service is ServiceData & { page: ServicePageContent } => Boolean(service.page)
)
