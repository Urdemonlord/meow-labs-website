"use client"

import { Award, Palette, Users, Video, Wrench, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useUiPreferences } from "./ui-preferences-provider"

export function WhyChooseUsSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

  const advantages = [
    {
      icon: Users,
      title: isEn ? "Affordable and Clear Pricing" : "Harga Murah dan Terjangkau",
      description: isEn
        ? "A professional website does not need to be expensive. Start from Rp500,000 for small businesses and personal brands."
        : "Website berkualitas tidak harus mahal. Mulai dari Rp500.000 saja untuk UMKM dan kebutuhan personal.",
      color: "primary",
    },
    {
      icon: Wrench,
      title: isEn ? "1 Year Free Maintenance" : "Maintenance Gratis 1 Tahun",
      description: isEn
        ? "We include one-year maintenance so your site stays stable, secure, and updated after launch."
        : "Kami berikan maintenance gratis selama 1 tahun agar website tetap stabil, aman, dan terbarui.",
      color: "secondary",
    },
    {
      icon: Palette,
      title: isEn ? "Professional Responsive Design" : "Desain Profesional dan Responsif",
      description: isEn
        ? "Modern visual style that works well across mobile, tablet, and desktop for better trust and usability."
        : "Desain modern yang tampil baik di mobile, tablet, dan desktop untuk meningkatkan trust pengguna.",
      color: "primary",
    },
    {
      icon: Zap,
      title: isEn ? "Fast and SEO-Friendly Build" : "Performa Cepat dan SEO Friendly",
      description: isEn
        ? "Performance and SEO are optimized from the start so your site loads fast and is easier to find."
        : "Performa dan SEO dioptimalkan sejak awal agar website cepat dan lebih mudah ditemukan di pencarian.",
      color: "secondary",
    },
    {
      icon: Video,
      title: isEn ? "Usage Guide Included" : "Panduan Penggunaan Disertakan",
      description: isEn
        ? "We provide practical guidance so your team can manage content and updates without friction."
        : "Kami sediakan panduan praktis agar Anda bisa mengelola konten dan update website dengan mudah.",
      color: "primary",
    },
    {
      icon: Award,
      title: isEn ? "Satisfaction Commitment" : "Komitmen Kepuasan Klien",
      description: isEn
        ? "We focus on measurable outcomes and keep refining until the solution matches your business needs."
        : "Kami fokus pada hasil nyata dan terus menyempurnakan sampai solusi sesuai kebutuhan bisnis Anda.",
      color: "secondary",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? "Why Choose " : "Mengapa Pilih "}
            <span className="text-primary">Meow Labs</span>
            {isEn ? " for Your Website Project?" : " untuk Proyek Website Anda?"}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "We build practical digital solutions with clear scope, reliable execution, and business-first priorities."
              : "Kami membangun solusi digital yang praktis dengan scope jelas, eksekusi rapi, dan fokus pada kebutuhan bisnis."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => {
            const IconComponent = advantage.icon
            const toneClass =
              advantage.color === "primary"
                ? "from-primary/5 via-primary/3 to-transparent"
                : "from-secondary/5 via-secondary/3 to-transparent"
            const iconClass =
              advantage.color === "primary"
                ? "bg-primary/10 text-primary"
                : "bg-secondary/10 text-secondary"

            return (
              <Card
                key={advantage.title}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${toneClass} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <CardHeader className="relative z-10">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${iconClass} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-balance text-xl font-bold leading-tight">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 font-medium text-primary">
            <Award className="h-5 w-5" />
            <span>
              {isEn
                ? "Trusted by 100+ clients in Semarang and beyond"
                : "Dipercaya oleh 100+ klien di Semarang dan sekitarnya"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
