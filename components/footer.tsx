"use client"

import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Star, ExternalLink, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Halo Meow Labs! Saya tertarik dengan layanan pembuatan website. Mohon info lebih lanjut.")
    window.open(`https://wa.me/62895386288683?text=${message}`, '_blank')
  }

  const handlePhoneClick = () => {
    const message = encodeURIComponent("Halo Meow Labs! Saya tertarik dengan layanan pembuatan website dan ingin konsultasi.")
    window.open(`https://wa.me/62895386288683?text=${message}`, '_blank')
  }

  const techPartners = [
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "WordPress",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    {
      name: "Laravel",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    },
    {
      name: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PHP",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    }
  ]

  const paymentMethods = [
    {
      name: "QRIS",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/QRIS_logo.svg/512px-QRIS_logo.svg.png",
    },
    {
      name: "BCA",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/512px-Bank_Central_Asia.svg.png",
    },
    {
      name: "Mandiri",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/512px-Bank_Mandiri_logo_2016.svg.png",
    },
    {
      name: "BNI",
      url: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/512px-BNI_logo.svg.png",
    },
    {
      name: "BRI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/512px-BRI_2020.svg.png",
    },
    {
      name: "GoPay",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/512px-Gopay_logo.svg.png",
    },
    {
      name: "OVO",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/512px-Logo_ovo_purple.svg.png",
    },
    {
      name: "DANA",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/512px-Logo_dana_blue.svg.png",
    },
    {
      name: "ShopeePay",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/512px-Shopee.svg.png",
    },
    {
      name: "LinkAja",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/LinkAja.svg/512px-LinkAja.svg.png",
    },
    {
      name: "Jenius",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jenius_logo.svg/512px-Jenius_logo.svg.png",
    },
    {
      name: "BSI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/512px-Bank_Syariah_Indonesia.svg.png",
    }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Teknologi Partner Section */}
        <div className="mb-12 border-b border-border pb-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Teknologi & Platform Yang Kami Kuasai
            </h3>
            <p className="text-muted-foreground text-sm">
              Menggunakan teknologi terdepan untuk hasil terbaik
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
            {techPartners.map((tech, index) => (
              <div key={index} className="flex items-center justify-center group">
                <div className="p-3 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <Image
                    src={tech.url}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metode Pembayaran Section */}
        <div className="mb-12 border-b border-border pb-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              💳 Metode Pembayaran Yang Didukung
            </h3>
            <p className="text-muted-foreground text-sm">
              Pembayaran mudah dengan berbagai pilihan metode yang tersedia
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 items-center">
            {paymentMethods.map((payment, index) => (
              <div key={index} className="flex items-center justify-center group">
                <div className="p-3 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50">
                  <Image
                    src={payment.url}
                    alt={payment.name}
                    width={32}
                    height={32}
                    className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              ✅ Transfer Bank • ✅ E-Wallet • ✅ QRIS • ✅ Virtual Account
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Contact Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/meow-logo.png" alt="Meow Labs Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-foreground">Meow Labs</span>
            </div>
            <p className="text-muted-foreground text-pretty mb-6 max-w-md">
              <span className="font-semibold text-primary">Jasa Pembuatan Website #1 di Semarang</span>
              <br />
              Menciptakan solusi web profesional untuk mengembangkan bisnis Anda dengan teknologi terdepan.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Semarang & Sekitarnya</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <span 
                  onClick={handlePhoneClick}
                  className="text-muted-foreground hover:text-green-600 transition-colors cursor-pointer"
                >
                  +62 895-3862-88683
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <a 
                  href="mailto:meowlabs.id@gmail.com"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  meowlabs.store@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-muted-foreground">Response Time: &lt;2 Jam</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 dari 100+ klien</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/meowlabs.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-600 hover:bg-pink-500 hover:text-white transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com/meowlabs.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/company/meowlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Layanan Kami</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <a href="#services" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Website Company Profile
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Toko Online/E-commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Landing Page Bisnis
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Website Sekolah/Yayasan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Website Custom
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Perusahaan</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <a href="#why-choose-us" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Harga & Paket
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  Testimoni Klien
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Meow Labs - Jasa Pembuatan Website Profesional Semarang. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
