"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { openBookingPage } from "@/lib/booking"

export function HeroSection() {
  function handleBookingClick() {
    openBookingPage({
      message: "Saya ingin booking konsultasi pembuatan website dengan Meow Labs",
    })
  }

  function handlePortfolioClick() {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left pt-8 sm:pt-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 mt-8 sm:mt-0">
                🥇 Jasa Pembuatan Website #1 Semarang
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">Jasa Pembuatan Website</span>
                <br />
                <span className="text-primary">Murah untuk UMKM</span>
                <br />
                <span className="text-secondary">& Personal</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl">
              Layanan pembuatan website murah untuk UMKM, kafe, hingga personal branding dengan
              <span className="text-primary font-medium"> desain profesional</span> mulai dari 
              <span className="text-secondary font-bold"> 500 ribuan</span>. Website responsive, SEO friendly,
              dan maintenance gratis selama 1 tahun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-animation group"
                onClick={handleBookingClick}
              >
                Booking Konsultasi
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                onClick={handlePortfolioClick}
              >
                <Mail className="mr-2 h-4 w-4" />
                Lihat Portofolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Website Online</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Klien Repeat Order</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Layanan Nonstop</div>
              </div>
            </div>
          </div>

          {/* Right side - Mascot image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110"></div>
              <Image
                src="/images/meow-mascot.png"
                alt="Meow Labs - Jasa Pembuatan Website Murah Semarang - Maskot Kucing Developer"
                width={400}
                height={400}
                className="relative z-10 float-animation"
                priority
              />
              {/* Floating code elements */}
              <div className="absolute top-10 -left-10 bg-card border border-border rounded-lg p-3 text-xs font-mono text-primary opacity-80">
                {"<MeowLabs />"}
              </div>
              <div className="absolute bottom-20 -right-10 bg-card border border-border rounded-lg p-3 text-xs font-mono text-secondary opacity-80">
                {"curiosity++"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
