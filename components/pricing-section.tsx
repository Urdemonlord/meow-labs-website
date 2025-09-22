"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle } from "lucide-react"

export function PricingSection() {
  const packages = [
    {
      name: "Paket Hemat UMKM",
      price: "525.000",
      renewalPrice: "500.000",
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
      whatsappMessage: "Hallo admin saya ingin konsultasi pembuatan website paket hemat UMKM",
    },
    {
      name: "Paket UMKM",
      price: "1.000.000",
      renewalPrice: "700.000",
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
      whatsappMessage: "Hallo admin saya ingin konsultasi pembuatan website paket UMKM",
    },
    {
      name: "Paket Bisnis",
      price: "2.525.000",
      renewalPrice: "1.000.000",
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
      whatsappMessage: "Hallo admin saya ingin konsultasi pembuatan website paket bisnis",
    },
    {
      name: "Paket Bisnis Plus",
      price: "5.000.000",
      renewalPrice: "2.000.000",
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
      whatsappMessage: "Hallo admin saya ingin konsultasi pembuatan website paket bisnis plus",
    },
  ]

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "62895386288683" // Update dengan nomor WhatsApp yang benar
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

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
                    <span className="text-3xl font-bold text-primary">
                      Rp. {pkg.price.toLocaleString()}
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

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Butuh fitur khusus atau paket custom?
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleWhatsAppContact("Hallo admin saya ingin konsultasi pembuatan website paket custom")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Konsultasi Custom Package
            </Button>
          </motion.div>
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
                    <span className="text-3xl font-bold text-primary">Rp. 150.000</span>
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
                    <span className="text-3xl font-bold text-secondary">Rp. 500.000</span>
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