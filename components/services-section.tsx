"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Cpu, Database, Globe, Shield, Smartphone, X, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useUiPreferences } from "./ui-preferences-provider"

interface ServiceFeature {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: "primary" | "secondary"
  detailedDescription: string
  benefits: string[]
  includedFeatures: string[]
  priceRange: string
  timeframe: string
  targetAudience: string
}

export function ServicesSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"
  const [selectedService, setSelectedService] = useState<ServiceFeature | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = useMemo<ServiceFeature[]>(
    () => [
      {
        icon: Globe,
        title: isEn ? "Company Profile Website" : "Website Company Profile",
        description: isEn
          ? "Professional business website to improve brand trust and credibility."
          : "Website profesional untuk meningkatkan kredibilitas dan citra perusahaan Anda.",
        features: isEn
          ? ["Modern design", "Responsive layout", "SEO-ready", "Fast loading"]
          : ["Desain modern", "Responsive mobile", "SEO optimized", "Fast loading"],
        color: "primary",
        detailedDescription: isEn
          ? "A structured company profile helps visitors understand your business quickly and trust your brand."
          : "Website company profile membantu pengunjung memahami bisnis Anda dengan cepat dan meningkatkan kepercayaan.",
        benefits: isEn
          ? [
              "Increase business credibility",
              "Present services clearly",
              "Always-on information channel",
              "Stronger digital presence",
              "Improve lead opportunities",
            ]
          : [
              "Meningkatkan kredibilitas bisnis",
              "Memperjelas layanan perusahaan",
              "Informasi bisnis tersedia 24/7",
              "Memperkuat kehadiran digital",
              "Meningkatkan peluang lead",
            ],
        includedFeatures: isEn
          ? [
              "About, Services, Portfolio, Contact pages",
              "Contact form integration",
              "Basic SEO setup",
              "Mobile-first layout",
              "Social and map integration",
              "Easy content updates",
            ]
          : [
              "Halaman About, Services, Portfolio, Contact",
              "Integrasi form kontak",
              "Setup SEO dasar",
              "Layout mobile-first",
              "Integrasi sosial media dan maps",
              "Konten mudah diupdate",
            ],
        priceRange: isEn ? "From Rp500,000 - Rp5,000,000" : "Mulai Rp500.000 - Rp5.000.000",
        timeframe: isEn ? "3-7 working days" : "3-7 hari kerja",
        targetAudience: isEn
          ? "Small business, startup, and professional brands"
          : "UMKM, startup, dan profesional",
      },
      {
        icon: Smartphone,
        title: isEn ? "Online Store Website" : "Website Toko Online",
        description: isEn
          ? "E-commerce website with catalog, checkout, and order management."
          : "Website e-commerce dengan katalog, checkout, dan manajemen pesanan.",
        features: isEn
          ? ["Product catalog", "Payment options", "Order workflow", "WhatsApp integration"]
          : ["Katalog produk", "Payment gateway", "Manajemen order", "Integrasi WhatsApp"],
        color: "secondary",
        detailedDescription: isEn
          ? "An online store helps you sell continuously with cleaner buying flow and easier product management."
          : "Toko online membantu Anda berjualan tanpa batas waktu dengan alur beli yang rapi.",
        benefits: isEn
          ? [
              "Sell 24/7",
              "Reach wider market",
              "Reduce operational friction",
              "Track orders and stock easier",
              "Better customer shopping experience",
            ]
          : [
              "Berjualan 24/7",
              "Menjangkau pasar lebih luas",
              "Mengurangi friksi operasional",
              "Monitoring order dan stok lebih mudah",
              "Pengalaman belanja lebih baik",
            ],
        includedFeatures: isEn
          ? [
              "Category-based product listing",
              "Cart and checkout flow",
              "Payment integration",
              "Order and stock management",
              "Admin dashboard",
              "Mobile shopping optimization",
            ]
          : [
              "Listing produk per kategori",
              "Cart dan checkout",
              "Integrasi pembayaran",
              "Manajemen pesanan dan stok",
              "Dashboard admin",
              "Optimasi mobile shopping",
            ],
        priceRange: isEn ? "From Rp2,500,000 - Rp10,000,000" : "Mulai Rp2.500.000 - Rp10.000.000",
        timeframe: isEn ? "7-14 working days" : "7-14 hari kerja",
        targetAudience: isEn
          ? "Online stores, distributors, and product-based businesses"
          : "Online shop, reseller, distributor, dan bisnis produk",
      },
      {
        icon: Database,
        title: isEn ? "News and Content Portal" : "Website Portal Berita",
        description: isEn
          ? "Content portal with structured categories and easy publishing workflow."
          : "Portal konten dengan kategori terstruktur dan alur publikasi yang mudah.",
        features: isEn
          ? ["Content CMS", "Author roles", "Category and tags", "SEO tools"]
          : ["Content management", "Multi author", "Kategori dan tags", "SEO tools"],
        color: "primary",
        detailedDescription: isEn
          ? "A portal website helps your team publish updates regularly while keeping content organized and searchable."
          : "Website portal memudahkan tim Anda mempublikasikan update rutin dengan struktur konten rapi.",
        benefits: isEn
          ? [
              "Fast content publishing",
              "Build loyal readers",
              "Open monetization opportunities",
              "Strengthen authority in your niche",
              "Better internal editorial workflow",
            ]
          : [
              "Publikasi konten lebih cepat",
              "Membangun pembaca loyal",
              "Membuka peluang monetisasi",
              "Memperkuat otoritas niche",
              "Workflow editorial lebih rapi",
            ],
        includedFeatures: isEn
          ? [
              "CMS with editor tools",
              "Role-based author access",
              "Category and tag taxonomy",
              "Search and archive navigation",
              "Social sharing integration",
              "Analytics integration",
            ]
          : [
              "CMS dengan editor tools",
              "Akses author berbasis role",
              "Taxonomy kategori dan tag",
              "Pencarian dan arsip konten",
              "Integrasi sharing sosial",
              "Integrasi analytics",
            ],
        priceRange: isEn ? "From Rp3,000,000 - Rp8,000,000" : "Mulai Rp3.000.000 - Rp8.000.000",
        timeframe: isEn ? "7-14 working days" : "7-14 hari kerja",
        targetAudience: isEn
          ? "Media teams, communities, and organizations"
          : "Media online, komunitas, dan organisasi",
      },
      {
        icon: Shield,
        title: isEn ? "School and Foundation Website" : "Website Sekolah dan Yayasan",
        description: isEn
          ? "Information platform for educational institutions with practical admin flow."
          : "Platform informasi lembaga pendidikan dengan alur administrasi yang praktis.",
        features: isEn
          ? ["Academic info", "Event gallery", "Announcements", "Contact channel"]
          : ["Info akademik", "Galeri event", "Pengumuman", "Form kontak"],
        color: "secondary",
        detailedDescription: isEn
          ? "Helps schools and foundations communicate updates, achievements, and registration info clearly."
          : "Membantu sekolah dan yayasan menyampaikan update, prestasi, dan informasi pendaftaran dengan jelas.",
        benefits: isEn
          ? [
              "Stronger communication with parents and students",
              "Professional institutional presence",
              "Centralized updates and announcements",
              "Support registration and inquiries",
              "Improve trust from stakeholders",
            ]
          : [
              "Komunikasi lebih baik ke siswa dan orang tua",
              "Citra institusi lebih profesional",
              "Update dan pengumuman terpusat",
              "Mendukung pendaftaran dan pertanyaan",
              "Meningkatkan trust stakeholder",
            ],
        includedFeatures: isEn
          ? [
              "Institution profile pages",
              "Program and curriculum section",
              "Gallery and achievement feed",
              "Announcement and news board",
              "Online registration form",
              "Event calendar and contact details",
            ]
          : [
              "Halaman profil institusi",
              "Section program dan kurikulum",
              "Galeri dan publikasi prestasi",
              "Board pengumuman dan berita",
              "Form pendaftaran online",
              "Kalender event dan kontak",
            ],
        priceRange: isEn ? "From Rp2,500,000 - Rp7,000,000" : "Mulai Rp2.500.000 - Rp7.000.000",
        timeframe: isEn ? "7-14 working days" : "7-14 hari kerja",
        targetAudience: isEn
          ? "Schools, training centers, and foundations"
          : "Sekolah, lembaga pelatihan, dan yayasan",
      },
      {
        icon: Zap,
        title: isEn ? "Business Landing Page" : "Landing Page Bisnis",
        description: isEn
          ? "Conversion-focused page for campaigns, launches, and lead collection."
          : "Halaman fokus konversi untuk campaign, peluncuran, dan pengumpulan lead.",
        features: isEn
          ? ["Conversion-focused", "Lead capture", "Analytics", "A/B ready"]
          : ["Fokus konversi", "Lead generation", "Analytics", "A/B testing ready"],
        color: "primary",
        detailedDescription: isEn
          ? "Landing pages are built for one clear action so campaign traffic converts better."
          : "Landing page dibangun untuk satu aksi utama agar traffic campaign lebih efektif menghasilkan konversi.",
        benefits: isEn
          ? [
              "Better conversion rates",
              "Cleaner lead collection",
              "Better ad performance alignment",
              "Fast iteration for campaigns",
              "Clear message for target audience",
            ]
          : [
              "Conversion rate lebih baik",
              "Pengumpulan lead lebih rapi",
              "Selaras dengan performa iklan",
              "Iterasi campaign lebih cepat",
              "Pesan lebih jelas ke audiens",
            ],
        includedFeatures: isEn
          ? [
              "Focused structure and CTA",
              "Lead capture form",
              "Mobile optimization",
              "Fast performance baseline",
              "Analytics tracking",
              "Simple experimentation setup",
            ]
          : [
              "Struktur fokus dan CTA jelas",
              "Form lead capture",
              "Optimasi mobile",
              "Baseline performa cepat",
              "Tracking analytics",
              "Setup eksperimen sederhana",
            ],
        priceRange: isEn ? "From Rp800,000 - Rp3,000,000" : "Mulai Rp800.000 - Rp3.000.000",
        timeframe: isEn ? "2-5 working days" : "2-5 hari kerja",
        targetAudience: isEn
          ? "Campaign teams, event promotions, and product launches"
          : "Tim campaign, promosi event, dan peluncuran produk",
      },
      {
        icon: Cpu,
        title: isEn ? "Custom Website System" : "Website Custom",
        description: isEn
          ? "Tailored system with custom features, integration, and scalable workflow."
          : "Sistem website kustom dengan fitur khusus, integrasi, dan workflow yang scalable.",
        features: isEn
          ? ["Custom features", "API integration", "Third-party tools", "Scalable architecture"]
          : ["Fitur custom", "Integrasi API", "Third-party apps", "Arsitektur scalable"],
        color: "secondary",
        detailedDescription: isEn
          ? "For businesses that need more than a standard website, including custom data flow and system logic."
          : "Untuk kebutuhan di atas website standar, termasuk alur data dan logika sistem yang disesuaikan.",
        benefits: isEn
          ? [
              "Built around your exact workflow",
              "Easier integration with existing tools",
              "Designed to scale with growth",
              "More control over business operations",
              "Differentiated digital capability",
            ]
          : [
              "Dibangun sesuai workflow bisnis",
              "Mudah diintegrasikan dengan tools existing",
              "Dirancang agar scalable",
              "Kontrol operasional lebih baik",
              "Kapabilitas digital lebih unggul",
            ],
        includedFeatures: isEn
          ? [
              "Scope and requirement analysis",
              "Custom UI and UX design",
              "Custom backend and database flow",
              "Integration layer",
              "Testing and QA",
              "Technical handover and documentation",
            ]
          : [
              "Analisis kebutuhan dan scope",
              "Desain UI dan UX custom",
              "Backend dan alur database custom",
              "Layer integrasi sistem",
              "Testing dan QA",
              "Handover teknis dan dokumentasi",
            ],
        priceRange: isEn ? "From Rp5,000,000+" : "Mulai Rp5.000.000+",
        timeframe: isEn ? "14-30 working days" : "14-30 hari kerja",
        targetAudience: isEn
          ? "Growing businesses and teams with specific digital workflows"
          : "Bisnis berkembang dengan kebutuhan workflow digital spesifik",
      },
    ],
    [isEn]
  )

  const handleLearnMoreClick = (service: ServiceFeature) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  const handleWhatsAppContact = (serviceName: string) => {
    const message = isEn
      ? `Hello admin, I want a free consultation for ${serviceName}.`
      : `Halo admin, saya ingin konsultasi gratis untuk ${serviceName}.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://api.whatsapp.com/send?phone=6285117170198&text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? (
              <>
                Website Services <span className="text-primary">We Deliver</span>
              </>
            ) : (
              <>
                Jenis Website yang <span className="text-primary">Kami Layani</span>
              </>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "From company profiles to custom systems, each service is built with clear scope, performance, and business outcomes in mind."
              : "Mulai dari company profile hingga sistem custom, setiap layanan dibangun dengan scope jelas, performa baik, dan fokus hasil bisnis."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const isPrimary = service.color === "primary"
            const borderClass = isPrimary ? "hover:border-primary/50" : "hover:border-secondary/50"
            const iconWrapClass = isPrimary
              ? "bg-primary/10 text-primary group-hover:bg-primary/20"
              : "bg-secondary/10 text-secondary group-hover:bg-secondary/20"
            const outlineButtonClass = isPrimary
              ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            const solidButtonClass = isPrimary
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/90"

            return (
              <Card
                key={service.title}
                className={`group border-border bg-card transition-all duration-300 hover:scale-[1.02] ${borderClass}`}
              >
                <CardHeader>
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${iconWrapClass}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-pretty text-muted-foreground">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`mr-2 h-1.5 w-1.5 rounded-full ${isPrimary ? "bg-primary" : "bg-secondary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-1 bg-transparent ${outlineButtonClass}`}
                      onClick={() => handleLearnMoreClick(service)}
                    >
                      {isEn ? "Learn More" : "Pelajari"}
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 ${solidButtonClass}`}
                      onClick={() => handleWhatsAppContact(service.title)}
                    >
                      {isEn ? "Contact" : "Hubungi"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {isEn ? "Need a Custom Scope?" : "Butuh Scope Khusus?"}
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-pretty text-muted-foreground">
              {isEn
                ? "Every business has different constraints. We can design a tailored implementation plan for your exact needs."
                : "Setiap bisnis punya kebutuhan berbeda. Kami bisa susun rencana implementasi yang sesuai konteks bisnis Anda."}
            </p>
            <Button
              size="lg"
              className="glow-animation bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => handleWhatsAppContact(isEn ? "Custom website solution" : "Solusi website custom")}
            >
              {isEn ? "Free Consultation" : "Konsultasi Gratis"}
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-background shadow-xl">
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                      selectedService.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <selectedService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedService.title}</h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">{selectedService.detailedDescription}</p>

                <div>
                  <h4 className="mb-2 text-lg font-medium">{isEn ? "Benefits" : "Manfaat"}</h4>
                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {selectedService.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <CheckCircle
                          className={`mr-2 mt-0.5 h-5 w-5 shrink-0 ${
                            selectedService.color === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-medium">{isEn ? "Included Features" : "Fitur yang Disertakan"}</h4>
                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {selectedService.includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle
                          className={`mr-2 mt-0.5 h-5 w-5 shrink-0 ${
                            selectedService.color === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg border border-border p-4">
                    <h5 className="mb-1 text-sm font-medium text-muted-foreground">
                      {isEn ? "Price Range" : "Rentang Harga"}
                    </h5>
                    <p className="font-medium text-foreground">{selectedService.priceRange}</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h5 className="mb-1 text-sm font-medium text-muted-foreground">
                      {isEn ? "Timeline" : "Waktu Pengerjaan"}
                    </h5>
                    <p className="font-medium text-foreground">{selectedService.timeframe}</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h5 className="mb-1 text-sm font-medium text-muted-foreground">
                      {isEn ? "Best For" : "Target Pengguna"}
                    </h5>
                    <p className="font-medium text-foreground">{selectedService.targetAudience}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button
                    size="lg"
                    className={`w-full ${
                      selectedService.color === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                    onClick={() => {
                      handleWhatsAppContact(selectedService.title)
                      handleCloseModal()
                    }}
                  >
                    {isEn ? "Consult via WhatsApp" : "Konsultasi via WhatsApp"}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" onClick={handleCloseModal}>
                    {isEn ? "Close" : "Tutup"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
