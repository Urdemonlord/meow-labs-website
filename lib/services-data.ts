// Data layanan untuk halaman /layanan/[slug]. Konten halaman detail ada di
// lib/service-pages.ts.
// Harga dan timeline di sini harus sama dengan paket di lib/ui-copy.json
// dan knowledge.md.

export type ServiceIconName = "Globe" | "Smartphone" | "Database" | "Shield" | "Zap" | "Cpu" | "Bot"

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

export interface ServiceData {
  slug: string
  icon: ServiceIconName
  color: "primary" | "secondary"
  id: ServiceContent
  en: ServiceContent
}

export const services: ServiceData[] = [
  {
    slug: "integrasi-ai",
    icon: "Bot",
    color: "primary",
    id: {
      title: "Integrasi AI & Otomasi",
      description: "AI agent dan otomasi yang terhubung ke WhatsApp, database, dan sistem bisnis Anda, bukan sekadar chatbot.",
      features: [
        "AI agent WhatsApp",
        "Integrasi LLM ke data internal",
        "Otomasi proses operasional",
        "Evaluasi dan monitoring"
      ],
      detailedDescription: "Kami mulai dari proses bisnis yang ingin diperbaiki, lalu merancang AI atau otomasi yang terhubung ke data dan sistem yang sudah Anda pakai. Kalau masalahnya cukup diselesaikan dengan software biasa, kami sarankan itu.",
      benefits: [
        "Pekerjaan berulang berkurang",
        "Respons pelanggan lebih cepat dan konsisten",
        "Data pesanan dan dokumen tidak tercecer",
        "AI dibatasi dan diawasi agar aman dipakai",
        "Hasil diukur dari masalah yang selesai"
      ],
      includedFeatures: [
        "Pemetaan proses dan analisis kebutuhan",
        "AI agent untuk WhatsApp atau web",
        "Integrasi dengan database dan API internal",
        "Workflow penjualan, layanan pelanggan, dan dokumen",
        "Pengamanan prompt dan batasan akses data",
        "Monitoring, evaluasi, dan handover"
      ],
      priceRange: "Mulai Rp4.000.000+",
      timeframe: "2-6 minggu",
      targetAudience: "UMKM dan perusahaan yang ingin AI benar-benar masuk ke operasional"
    },
    en: {
      title: "AI Integration & Automation",
      description: "AI agents and automation connected to WhatsApp, your database, and business systems, not just a chatbot.",
      features: [
        "WhatsApp AI agent",
        "LLM integration with internal data",
        "Operational automation",
        "Evaluation and monitoring"
      ],
      detailedDescription: "We start from the business process you want to improve, then design AI or automation connected to the data and systems you already use. If plain software solves the problem, we recommend that instead.",
      benefits: [
        "Less repetitive work",
        "Faster, more consistent customer replies",
        "Orders and documents stop getting scattered",
        "AI is constrained and monitored to stay safe",
        "Results measured by problems solved"
      ],
      includedFeatures: [
        "Process mapping and requirement analysis",
        "AI agent for WhatsApp or web",
        "Integration with internal database and APIs",
        "Sales, customer service, and document workflows",
        "Prompt hardening and data access limits",
        "Monitoring, evaluation, and handover"
      ],
      priceRange: "From Rp4,000,000+",
      timeframe: "2-6 weeks",
      targetAudience: "Small businesses and companies that want AI inside real operations"
    }
  },
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
      timeframe: "3-14 hari kerja",
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
      timeframe: "3-14 working days",
      targetAudience: "Small business, startup, and professional brands"
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
      timeframe: "3-5 hari kerja",
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
      timeframe: "3-5 working days",
      targetAudience: "Campaign teams, event promotions, and product launches"
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
      timeframe: "2-6 minggu",
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
      timeframe: "2-6 weeks",
      targetAudience: "Growing businesses and teams with specific digital workflows"
    }
  }
]
