"use client"

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
    const phoneNumber = "6289538628863" // Update dengan nomor WhatsApp yang benar
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Pilih Paket yang Cocok untuk <span className="text-primary">Website Anda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tim profesional kami akan bantu wujudkan website Anda dengan memilih paket yang tepat. 
            <span className="text-primary font-medium"> Konsultasi Gratis!</span> hingga website Anda tayang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                pkg.popular 
                  ? "ring-2 ring-primary/50 shadow-xl scale-105" 
                  : "hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold mb-2">{pkg.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">
                    Rp. {pkg.price.toLocaleString()}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pkg.renewalPrice} di tahun berikutnya
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                  onClick={() => handleWhatsAppContact(pkg.whatsappMessage)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  PILIH PAKET
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Butuh fitur khusus atau paket custom?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => handleWhatsAppContact("Hallo admin saya ingin konsultasi pembuatan website paket custom")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Konsultasi Custom Package
          </Button>
        </div>
      </div>
    </section>
  )
}