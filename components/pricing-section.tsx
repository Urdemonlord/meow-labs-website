"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle, ExternalLink, Users, Code2, Brain } from "lucide-react"
import { useCallback } from "react"

export function PricingSection() {
  const handleWhatsAppContact = useCallback((message: string) => {
    const phoneNumber = "62895386288683"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }, [])

  const handlePortfolioClick = useCallback(() => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleServicesClick = useCallback(() => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const packages = [
    {
      name: "Paket Hemat UMKM",
      originalPrice: "749.000",
      price: "525.000",
      renewalPrice: "500.000",
      discount: "30%",
      description: "Rekomendasi untuk UMKM/Yayasan yang baru memulai Go-Digital",
      features: [
        "1 Halaman Website",
        "Free Domain .com",
        "Aktif 1 Tahun",
        "Basic Landing Page Design",
        "Basic Copy Writing",
        "Maintenance Gratis",
        "Video Tutorial",
      ],
      popular: false,
      color: "primary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket hemat UMKM",
    },
    {
      name: "Paket UMKM",
      originalPrice: "1.499.000",
      price: "1.000.000",
      renewalPrice: "700.000",
      discount: "33%",
      description: "Rekomendasi untuk UMKM yang ingin mengoptimalkan produknya dengan catalog lengkap",
      features: [
        "3 Halaman Website",
        "Free Domain .com",
        "Aktif 1 Tahun",
        "Basic Web Design",
        "Advanced Copy Writing",
        "Maintenance Gratis",
        "Video Tutorial",
        "SEO Basic",
      ],
      popular: true,
      color: "secondary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket UMKM",
    },
    {
      name: "Paket Bisnis",
      originalPrice: "3.599.000",
      price: "2.525.000",
      renewalPrice: "1.000.000",
      discount: "30%",
      description: "Cocok untuk Profile Bisnis, Portal Berita, Sekolah/Yayasan, Portofolio",
      features: [
        "10 Halaman Website",
        "Free Domain .com .id .org .or.id",
        "Shared Hosting Premium",
        "Aktif 1 Tahun",
        "Custom Web Design",
        "Free Logo Design",
        "Advanced Copy Writing",
        "SEO Optimized",
        "Maintenance Gratis",
        "Live Chat Support",
      ],
      popular: false,
      color: "primary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis pembuatan website paket bisnis",
    },
    {
      name: "Paket Bisnis Plus",
      originalPrice: "7.499.000",
      price: "5.000.000",
      renewalPrice: "2.000.000",
      discount: "33%",
      description: "Cocok untuk Profesional Bisnis Website dengan fitur advanced",
      features: [
        "20 Halaman Website",
        "Free Domain Premium",
        "Dedicated Hosting",
        "Aktif 1 Tahun",
        "Custom Professional Design",
        "Free Logo & Brand Identity",
        "Advanced Copy Writing",
        "SEO Advanced",
        "Google Ads Setup",
        "Maintenance Premium",
        "Priority Support 24/7",
        "Multi Language",
      ],
      popular: false,
      color: "secondary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis pembuatan website paket bisnis plus",
    },
  ]

  const personalBrandingPackages = [
    {
      name: "Personal Branding Lite",
      originalPrice: "1.999.000",
      price: "1.500.000",
      renewalPrice: "800.000",
      discount: "25%",
      description: "Cocok untuk content creator, KOL, dan profesional yang ingin memulai personal branding",
      features: [
        "Subdomain gratis (atau domain add-on)",
        "2-3 Halaman (Profil, Portofolio, Kontak)",
        "Template elegan & mobile friendly",
        "Desain modern untuk personal brand",
        "Konten basic copy writing",
        "Maintenance 3 bulan",
      ],
      popular: false,
      color: "primary",
      icon: "Users",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Personal Branding Lite",
    },
    {
      name: "Personal Branding Pro",
      originalPrice: "5.999.000",
      price: "4.000.000",
      renewalPrice: "1.500.000",
      discount: "33%",
      description: "Untuk influencer dan profesional yang ingin tampil eksklusif dengan branding kuat",
      features: [
        "Domain .com pribadi",
        "4-6 Halaman (Home, Profil, Portofolio, Blog mini, Kontak)",
        "Desain semi-custom sesuai branding",
        "Warna & style personal branding",
        "1x revisi besar",
        "Support 1 bulan",
        "SEO Basic",
      ],
      popular: true,
      color: "secondary",
      icon: "Users",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Personal Branding Pro",
    },
    {
      name: "Personal Branding Premium",
      originalPrice: "10.999.000",
      price: "8.000.000",
      renewalPrice: "2.500.000",
      discount: "27%",
      description: "Solusi premium untuk dosen, seniman, dan profesional high-profile",
      features: [
        "Semua fitur Pro",
        "Desain full custom eksklusif",
        "Integrasi LinkedIn, GitHub, Instagram",
        "Blog aktif + SEO advanced",
        "Personal portfolio showcase",
        "Support 3 bulan",
        "Priority support 24/7",
      ],
      popular: false,
      color: "primary",
      icon: "Users",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Personal Branding Premium",
    },
  ]

  const toolsPackages = [
    {
      name: "Tools Lite",
      originalPrice: "3.499.000",
      price: "2.500.000",
      renewalPrice: "1.000.000",
      discount: "28%",
      description: "Web app sederhana untuk mahasiswa, startup kecil, dan mini project",
      features: [
        "Web app sederhana",
        "Kalkulator atau sistem booking kecil",
        "Todo app atau tools simple",
        "Cocok untuk demo startup",
        "Basic database integration",
        "Mobile responsive",
      ],
      popular: false,
      color: "primary",
      icon: "Code2",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Tools Lite",
    },
    {
      name: "POS / Aplikasi Bisnis Standard",
      originalPrice: "9.999.000",
      price: "7.500.000",
      renewalPrice: "2.500.000",
      discount: "25%",
      description: "Sistem Point of Sale (kasir digital) untuk UMKM dan bisnis kecil",
      features: [
        "Sistem Point of Sale lengkap",
        "Manajemen produk & stok",
        "Laporan transaksi & penjualan",
        "Multi-user login",
        "Web atau mobile app",
        "Training & support 2 bulan",
      ],
      popular: true,
      color: "secondary",
      icon: "Code2",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket POS / Aplikasi Bisnis",
    },
    {
      name: "IoT Integration Apps",
      originalPrice: "15.999.000",
      price: "12.000.000",
      renewalPrice: "4.000.000",
      discount: "25%",
      description: "Aplikasi monitoring sensor IoT dengan dashboard realtime",
      features: [
        "Monitoring sensor IoT (suhu, pintu, listrik)",
        "Dashboard realtime + notifikasi",
        "Integrasi hardware IoT",
        "ESP32, Raspberry Pi support",
        "Mobile & web dashboard",
        "Setup hardware assistance",
        "Support 3 bulan",
      ],
      popular: false,
      color: "primary",
      icon: "Code2",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket IoT Integration Apps",
    },
    {
      name: "Custom Enterprise Apps",
      originalPrice: "27.999.000",
      price: "20.000.000",
      renewalPrice: "8.000.000",
      discount: "28%",
      description: "Sistem besar untuk perusahaan: inventaris, sekolah, dashboard enterprise",
      features: [
        "Sistem manajemen inventaris",
        "Sistem sekolah / dashboard perusahaan",
        "Integrasi API khusus",
        "Multi-role user management",
        "Advanced reporting system",
        "Custom workflow",
        "Support 6 bulan",
        "Training team",
      ],
      popular: false,
      color: "primary",
      icon: "Code2",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Custom Enterprise Apps",
    },
  ]

  const aiPackages = [
    {
      name: "AI Project Lite",
      originalPrice: "2.999.000",
      price: "2.000.000",
      renewalPrice: "800.000",
      discount: "33%",
      description: "Setup model ML untuk skripsi, tugas kuliah, dan project penelitian",
      features: [
        "Setup model ML untuk skripsi",
        "Data preprocessing basic",
        "Model training & evaluation",
        "Documentation lengkap",
        "Konsultasi methodology",
        "Support 1 bulan",
      ],
      popular: false,
      color: "primary",
      icon: "Brain",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket AI Project Lite",
    },
    {
      name: "AI/ML Standard",
      originalPrice: "9.499.000",
      price: "7.000.000",
      renewalPrice: "2.500.000",
      discount: "26%",
      description: "Proyek AI end-to-end: rekomendasi produk, image classification, chatbot",
      features: [
        "Data cleaning & preprocessing",
        "Model training & evaluation",
        "Rekomendasi produk / image classification",
        "Chatbot dasar implementation",
        "Web interface untuk model",
        "Support 2 bulan",
        "Performance optimization",
      ],
      popular: true,
      color: "secondary",
      icon: "Brain",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket AI/ML Standard",
    },
    {
      name: "Data Services",
      originalPrice: "1.499.000",
      price: "1.000.000",
      renewalPrice: "500.000",
      discount: "33%",
      description: "Layanan data cleaning, analisis deskriptif, dan visualisasi data",
      features: [
        "Data cleaning & normalisasi",
        "Split training/testing dataset",
        "Analisis deskriptif lengkap",
        "Visualisasi data (Excel, PowerBI, Python)",
        "Statistical analysis",
        "Report & documentation",
      ],
      popular: false,
      color: "primary",
      icon: "Brain",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Data Services",
    },
    {
      name: "AI Custom Enterprise",
      originalPrice: "35.000.000",
      price: "25.000.000",
      renewalPrice: "10.000.000",
      discount: "29%",
      description: "Solusi AI enterprise: chatbot custom, forecasting, NLP, IoT + AI",
      features: [
        "Chatbot custom untuk instansi/UMKM",
        "Forecasting penjualan dengan AI",
        "Natural Language Processing (NLP)",
        "IoT + AI integration",
        "Dashboard AI analytics",
        "Custom AI solutions",
        "Support 6 bulan",
        "Training & maintenance",
      ],
      popular: false,
      color: "primary",
      icon: "Brain",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket AI Custom Enterprise",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pilih Paket yang Cocok untuk <span className="text-primary">Website Anda</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Tim profesional kami akan bantu wujudkan website Anda dengan memilih paket yang tepat. 
            <span className="text-primary font-medium"> Konsultasi Gratis!</span> hingga website Anda tayang
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl h-full ${
                  pkg.popular 
                    ? "ring-2 ring-primary/50 shadow-xl" 
                    : "hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground animate-pulse">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold mb-2">{pkg.name}</CardTitle>
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-muted-foreground line-through text-sm">Rp{pkg.originalPrice}</span>
                      <span className="inline-block bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-md">
                        HEMAT {pkg.discount}
                      </span>
                    </div>
                    <span className="text-3xl font-bold text-primary">
                      Rp{pkg.price}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pkg.renewalPrice} di tahun berikutnya
                    </p>
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => handleWhatsAppContact(pkg.whatsappMessage)}
                      className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      PILIH PAKET
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

          <motion.div
            className="text-center mt-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              Butuh fitur khusus atau paket custom?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={() => handleWhatsAppContact("Hallo admin saya ingin konsultasi gratis pembuatan website paket custom")}
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Konsultasi Gratis
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handlePortfolioClick}
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Lihat Portfolio
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4"
            >
              <Button 
                variant="link" 
                size="lg"
                onClick={handleServicesClick}
                className="text-muted-foreground hover:text-primary underline"
              >
                Pelajari Lebih Lanjut Tentang Services Kami
              </Button>
            </motion.div>
          </motion.div>

        {/* Personal Branding Packages Section */}
        <motion.div 
          className="mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              👤 Paket <span className="text-primary">Personal Branding</span>
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Khusus untuk content creator, KOL, influencer, profesional, dan seniman yang ingin tampil eksklusif dengan branding kuat
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalBrandingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl h-full ${
                    pkg.popular 
                      ? "ring-2 ring-primary/50 shadow-xl" 
                      : "hover:shadow-xl"
                  }`}
                >
                  {pkg.popular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground animate-pulse">
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-2">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{pkg.name}</CardTitle>
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-muted-foreground line-through text-sm">Rp{pkg.originalPrice}</span>
                        <span className="inline-block bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-md">
                          HEMAT {pkg.discount}
                        </span>
                      </div>
                      <span className="text-3xl font-bold text-primary">
                        Rp{pkg.price}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pkg.renewalPrice} di tahun berikutnya
                      </p>
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                        onClick={() => handleWhatsAppContact(pkg.whatsappMessage)}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        PILIH PAKET
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Applications Packages Section */}
        <motion.div 
          className="mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🛠️ Paket <span className="text-primary">Tools & Aplikasi</span>
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Aplikasi fungsional untuk mahasiswa, startup kecil, instansi sekolah/kampus, dan bisnis yang membutuhkan sistem khusus
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolsPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl h-full ${
                    pkg.popular 
                      ? "ring-2 ring-primary/50 shadow-xl" 
                      : "hover:shadow-xl"
                  }`}
                >
                  {pkg.popular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground animate-pulse">
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-2">
                      <Code2 className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{pkg.name}</CardTitle>
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-muted-foreground line-through text-sm">Rp{pkg.originalPrice}</span>
                        <span className="inline-block bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-md">
                          HEMAT {pkg.discount}
                        </span>
                      </div>
                      <span className="text-3xl font-bold text-primary">
                        Rp{pkg.price}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pkg.renewalPrice} di tahun berikutnya
                      </p>
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                        onClick={() => handleWhatsAppContact(pkg.whatsappMessage)}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        PILIH PAKET
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI & Machine Learning Packages Section */}
        <motion.div 
          className="mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🤖 Paket <span className="text-primary">AI & Machine Learning</span>
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Solusi AI dan ML untuk mahasiswa (skripsi), dosen, peneliti, dan instansi yang ingin mengadopsi teknologi AI
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl h-full ${
                    pkg.popular 
                      ? "ring-2 ring-primary/50 shadow-xl" 
                      : "hover:shadow-xl"
                  }`}
                >
                  {pkg.popular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground animate-pulse">
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-2">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{pkg.name}</CardTitle>
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-muted-foreground line-through text-sm">Rp{pkg.originalPrice}</span>
                        <span className="inline-block bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-md">
                          HEMAT {pkg.discount}
                        </span>
                      </div>
                      <span className="text-3xl font-bold text-primary">
                        Rp{pkg.price}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pkg.renewalPrice} di tahun berikutnya
                      </p>
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                        onClick={() => handleWhatsAppContact(pkg.whatsappMessage)}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        PILIH PAKET
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Maintenance Packages Section */}
        <motion.div 
          className="mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🛠️ Paket <span className="text-primary">Maintenance Website</span>
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Sudah punya website tapi butuh perawatan rutin? Kami siap membantu menjaga website Anda tetap optimal!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paket Basic */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold mb-2">Paket Basic</CardTitle>
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-muted-foreground line-through text-sm">Rp250.000</span>
                      <span className="inline-block bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-md">
                        HEMAT 40%
                      </span>
                    </div>
                    <span className="text-3xl font-bold text-primary">Rp150.000</span>
                    <p className="text-sm text-muted-foreground mt-1">per bulan</p>
                  </motion.div>
                  <p className="text-sm text-muted-foreground">
                    Paket maintenance dasar untuk menjaga website tetap berjalan lancar
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Monitoring uptime website 24/7",
                      "Backup data website rutin", 
                      "1 revisi konten kecil per bulan",
                      "Laporan bulanan"
                    ].map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => handleWhatsAppContact("Hallo admin saya ingin berlangganan paket maintenance basic untuk website saya")}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      PILIH BASIC
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Paket Pro */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl ring-2 ring-secondary/50 shadow-xl h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground animate-pulse">
                    Recommended
                  </Badge>
                </motion.div>
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold mb-2">Paket Pro</CardTitle>
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-muted-foreground line-through text-sm">Rp750.000</span>
                      <span className="inline-block bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-md">
                        HEMAT 33%
                      </span>
                    </div>
                    <span className="text-3xl font-bold text-secondary">Rp500.000</span>
                    <p className="text-sm text-muted-foreground mt-1">per bulan</p>
                  </motion.div>
                  <p className="text-sm text-muted-foreground">
                    Paket maintenance lengkap dengan update dan keamanan premium
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Semua fitur Paket Basic",
                      "Update produk & konten berkala",
                      "Keamanan website & malware scan", 
                      "3 revisi besar per bulan",
                      "SEO optimization rutin",
                      "Priority support via WhatsApp"
                    ].map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      onClick={() => handleWhatsAppContact("Hallo admin saya ingin berlangganan paket maintenance pro untuk website saya")}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      PILIH PRO
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-medium">Tips:</span> Paket maintenance dapat disesuaikan dengan kebutuhan website Anda. 
              <Button 
                variant="link" 
                className="text-primary p-0 h-auto font-medium underline"
                onClick={() => handleWhatsAppContact("Hallo admin saya ingin konsultasi paket maintenance custom untuk website saya")}
              >
                Konsultasi gratis untuk paket custom
              </Button>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
