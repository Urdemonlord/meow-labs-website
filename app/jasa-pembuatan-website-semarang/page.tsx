import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific page
export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional #1 di Semarang | Meow Labs",
  description: "Layanan jasa pembuatan website profesional terbaik dan termurah di Semarang. Desain modern, responsive, dan SEO friendly. Hubungi Meow Labs sekarang untuk konsultasi gratis!",
  keywords: [
    "jasa pembuatan website semarang",
    "web developer semarang",
    "jasa website semarang",
    "jasa web semarang terbaik",
    "website murah semarang",
    "web design semarang",
  ],
}

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function JasaPembuatanWebsiteSemarang() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
      
      {/* Schema.org structured data for this specific service page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jasa Pembuatan Website Semarang",
            "serviceType": "Website Development",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Meow Labs",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Semarang",
                "addressRegion": "Jawa Tengah",
                "addressCountry": "Indonesia"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Semarang"
            },
            "description": "Layanan jasa pembuatan website profesional terbaik dan termurah di Semarang. Desain modern, responsive, dan SEO friendly.",
            "offers": {
              "@type": "Offer",
              "price": "500000",
              "priceCurrency": "IDR",
              "priceValidUntil": "2024-12-31"
            }
          })
        }}
      />
    </main>
  )
}
