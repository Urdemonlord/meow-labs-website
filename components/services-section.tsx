"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Cpu, Smartphone, Database, Shield, Zap, X, CheckCircle, LucideIcon } from "lucide-react"

// Define interfaces for type safety
interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "primary" | "secondary";
  detailedDescription: string;
  benefits: string[];
  includedFeatures: string[];
  priceRange: string;
  timeframe: string;
  targetAudience: string;
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceFeature | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMoreClick = (service: ServiceFeature) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleWhatsAppContact = (serviceName: string) => {
    const phoneNumber = "62895386288683" // Nomor WhatsApp admin
    const message = `Halo admin saya ingin konsultasi gratis tentang pembuatan website ${serviceName}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }
  const services: ServiceFeature[] = [
    {
      icon: Globe,
      title: "Website Company Profile",
      description: "Website profesional untuk meningkatkan kredibilitas dan citra perusahaan Anda",
      features: ["Design Modern", "Responsive Mobile", "SEO Optimized", "Fast Loading"],
      color: "primary",
      detailedDescription: "Website company profile profesional adalah wajah digital bisnis Anda. Dengan desain yang menarik dan informasi yang terstruktur, website ini akan membantu meningkatkan kredibilitas perusahaan Anda di mata pelanggan potensial.",
      benefits: [
        "Meningkatkan kredibilitas dan citra perusahaan",
        "Menjangkau audiens yang lebih luas",
        "Menyediakan informasi bisnis 24/7",
        "Mendukung strategi marketing digital",
        "Meningkatkan peluang mendapatkan klien baru"
      ],
      includedFeatures: [
        "Desain modern dan profesional",
        "Halaman About Us, Services, Portfolio, Contact",
        "Form kontak yang terhubung dengan email",
        "Optimasi SEO dasar",
        "Mobile responsive design",
        "Social media integration",
        "Google Maps location",
        "Galeri foto/portfolio"
      ],
      priceRange: "Mulai dari Rp500.000 - Rp5.000.000",
      timeframe: "3-7 hari kerja",
      targetAudience: "UMKM, Startup, Profesional, Perusahaan Menengah"
    },
    {
      icon: Smartphone,
      title: "Website Toko Online",
      description: "E-commerce lengkap dengan sistem pembayaran dan manajemen produk",
      features: ["Katalog Produk", "Payment Gateway", "Order Management", "WhatsApp Integration"],
      color: "secondary",
      detailedDescription: "Website toko online memungkinkan Anda menjual produk secara online 24/7. Dengan fitur katalog produk, sistem pembayaran terintegrasi, dan manajemen pesanan yang mudah, Anda dapat memperluas jangkauan pasar dan meningkatkan penjualan.",
      benefits: [
        "Berjualan 24/7 tanpa batasan waktu",
        "Menjangkau pasar yang lebih luas",
        "Mengurangi biaya operasional",
        "Melacak penjualan dan inventori dengan mudah",
        "Memberikan pengalaman belanja yang nyaman bagi pelanggan"
      ],
      includedFeatures: [
        "Katalog produk dengan kategori",
        "Shopping cart & checkout system",
        "Integrasi payment gateway",
        "Manajemen order & inventori",
        "Notifikasi WhatsApp otomatis",
        "Dashboard admin yang mudah digunakan",
        "Product search & filtering",
        "Responsive design untuk mobile shopping"
      ],
      priceRange: "Mulai dari Rp2.500.000 - Rp10.000.000",
      timeframe: "7-14 hari kerja",
      targetAudience: "UMKM, Online Shop, Reseller, Distributor"
    },
    {
      icon: Database,
      title: "Website Portal Berita",
      description: "CMS portal berita dengan sistem admin yang mudah digunakan",
      features: ["Content Management", "Multi Author", "Category System", "SEO Tools"],
      color: "primary",
      detailedDescription: "Website portal berita memberikan platform untuk mempublikasikan dan mengelola konten berita atau artikel dengan mudah. Dengan sistem manajemen konten yang user-friendly, Anda dapat memperbarui website dengan konten terbaru secara reguler.",
      benefits: [
        "Menyebarkan informasi dengan cepat",
        "Membangun komunitas pembaca setia",
        "Potensi monetisasi melalui iklan",
        "Meningkatkan brand awareness",
        "Posisi sebagai thought leader di industri"
      ],
      includedFeatures: [
        "Content Management System (CMS)",
        "Multi-author support dengan role management",
        "Sistem kategori & tag untuk organisasi konten",
        "Fitur pencarian konten",
        "Social media sharing",
        "SEO optimization tools",
        "Komentar & engagement tools",
        "Analytics integration"
      ],
      priceRange: "Mulai dari Rp3.000.000 - Rp8.000.000",
      timeframe: "7-14 hari kerja",
      targetAudience: "Media Online, Komunitas, Organisasi, Blogger"
    },
    {
      icon: Shield,
      title: "Website Sekolah/Yayasan",
      description: "Platform informasi untuk lembaga pendidikan dengan fitur lengkap",
      features: ["Info Akademik", "Gallery Event", "Pengumuman", "Contact Form"],
      color: "secondary",
      detailedDescription: "Website sekolah atau yayasan membantu lembaga pendidikan untuk mengkomunikasikan informasi penting kepada siswa, orang tua, dan stakeholder lainnya. Website ini juga dapat meningkatkan citra dan profesionalisme lembaga pendidikan Anda.",
      benefits: [
        "Meningkatkan komunikasi dengan siswa & orang tua",
        "Mempromosikan program & keunggulan sekolah",
        "Menyediakan informasi terkini tentang kegiatan sekolah",
        "Meningkatkan citra profesional lembaga",
        "Memfasilitasi pendaftaran siswa baru"
      ],
      includedFeatures: [
        "Profil sekolah/yayasan",
        "Info program akademik",
        "Galeri kegiatan & prestasi",
        "Pengumuman & berita sekolah",
        "Sistem pendaftaran online",
        "Calendar of events",
        "Staff & faculty directory",
        "Contact form & information"
      ],
      priceRange: "Mulai dari Rp2.500.000 - Rp7.000.000",
      timeframe: "7-14 hari kerja",
      targetAudience: "Sekolah, Perguruan Tinggi, Yayasan Pendidikan, Lembaga Pelatihan"
    },
    {
      icon: Zap,
      title: "Landing Page Bisnis",
      description: "Halaman pendaratan yang menarik untuk kampanye marketing Anda",
      features: ["Conversion Focused", "Lead Generation", "Analytics", "A/B Testing Ready"],
      color: "primary",
      detailedDescription: "Landing page adalah halaman web yang dirancang khusus untuk kampanye marketing dengan tujuan mengkonversi pengunjung menjadi leads atau pelanggan. Dengan fokus pada satu tujuan spesifik, landing page dapat meningkatkan efektivitas kampanye digital Anda.",
      benefits: [
        "Meningkatkan conversion rate kampanye",
        "Mengumpulkan leads berkualitas",
        "Mempromosikan produk/layanan spesifik",
        "Mendukung kampanye iklan digital",
        "Mengukur efektivitas marketing dengan mudah"
      ],
      includedFeatures: [
        "Design yang fokus pada konversi",
        "Call-to-action yang jelas",
        "Form lead capture",
        "Mobile optimization",
        "Fast loading speed",
        "Integrasi dengan email marketing",
        "Analytics tracking",
        "A/B testing capability"
      ],
      priceRange: "Mulai dari Rp800.000 - Rp3.000.000",
      timeframe: "2-5 hari kerja",
      targetAudience: "Bisnis dengan kampanye marketing digital, Event organizer, Peluncuran produk baru"
    },
    {
      icon: Cpu,
      title: "Website Custom",
      description: "Solusi website dengan fitur khusus sesuai kebutuhan bisnis unik Anda",
      features: ["Custom Features", "API Integration", "Third-party Apps", "Scalable Architecture"],
      color: "secondary",
      detailedDescription: "Website custom dirancang sesuai dengan kebutuhan spesifik bisnis Anda. Dengan pengembangan yang disesuaikan, Anda bisa mendapatkan fitur-fitur yang tidak tersedia pada website template standar, sehingga memberikan solusi yang tepat untuk bisnis Anda.",
      benefits: [
        "Mendapatkan fitur yang sesuai kebutuhan spesifik",
        "Integrasi dengan sistem yang sudah ada",
        "Solusi yang scalable untuk pertumbuhan bisnis",
        "Keunggulan kompetitif dengan fitur unik",
        "Pengalaman user yang disesuaikan dengan target audience"
      ],
      includedFeatures: [
        "Analisis kebutuhan mendalam",
        "Desain UI/UX custom",
        "Pengembangan fitur khusus",
        "API integration",
        "Sistem backend yang scalable",
        "Database custom",
        "Testing & quality assurance",
        "Dokumentasi teknis"
      ],
      priceRange: "Mulai dari Rp5.000.000+",
      timeframe: "14-30 hari kerja (tergantung kompleksitas)",
      targetAudience: "Perusahaan dengan kebutuhan spesifik, Startup dengan model bisnis unik, Enterprise"
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Jenis Website yang <span className="text-primary">Kami Layani</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami menyediakan berbagai jenis website profesional untuk membantu bisnis Anda berkembang di era digital.
            Dari company profile hingga toko online, semuanya dikerjakan dengan standar kualitas terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: ServiceFeature, index: number) => {
            const IconComponent = service.icon
            const isSecondary = service.color === "secondary"

            return (
              <Card
                key={index}
                className={`bg-card border-border hover:border-${service.color}/50 transition-all duration-300 group hover:scale-105`}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${service.color}/20 transition-colors`}
                  >
                    <IconComponent className={`h-6 w-6 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full mr-2`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-1 border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-${service.color === "primary" ? "primary-foreground" : "secondary-foreground"}`}
                      onClick={() => handleLearnMoreClick(service)}
                    >
                      Learn More
                    </Button>
                    <Button
                      size="sm"
                      variant="default" 
                      className={`flex-1 bg-${service.color} text-${service.color === "primary" ? "primary-foreground" : "secondary-foreground"} hover:bg-${service.color}/90`}
                      onClick={() => handleWhatsAppContact(service.title)}
                    >
                      Hubungi Kami
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Butuh Solusi Custom?</h3>
            <p className="text-muted-foreground text-pretty mb-6 max-w-2xl mx-auto">
              Setiap bisnis memiliki kebutuhan yang unik. Mari diskusikan bagaimana kami dapat membantu mewujudkan visi
              teknologi Anda dengan solusi yang tepat sasaran.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-animation"
              onClick={() => handleWhatsAppContact("Custom Solution")}
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>

      {/* Modal for Service Details */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {selectedService.icon && (
                    <div className={`w-12 h-12 bg-${selectedService.color}/10 rounded-lg flex items-center justify-center`}>
                      <selectedService.icon className={`h-6 w-6 text-${selectedService.color}`} />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-muted/50 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-lg text-muted-foreground mb-4">{selectedService.detailedDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Manfaat</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`h-5 w-5 text-${selectedService.color} mr-2 shrink-0 mt-0.5`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Fitur yang Disertakan</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.includedFeatures.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`h-5 w-5 text-${selectedService.color} mr-2 shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  <div className="border border-border rounded-lg p-4">
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">Rentang Harga</h5>
                    <p className="text-foreground font-medium">{selectedService.priceRange}</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">Waktu Pengerjaan</h5>
                    <p className="text-foreground font-medium">{selectedService.timeframe}</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">Target Pengguna</h5>
                    <p className="text-foreground font-medium">{selectedService.targetAudience}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className={`w-full bg-${selectedService.color} text-${selectedService.color === "primary" ? "primary-foreground" : "secondary-foreground"} hover:bg-${selectedService.color}/90`}
                    onClick={() => {
                      handleWhatsAppContact(selectedService.title)
                      handleCloseModal()
                    }}
                  >
                    Konsultasi via WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={handleCloseModal}
                  >
                    Tutup
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
