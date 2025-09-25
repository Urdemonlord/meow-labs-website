import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ClientLogosSection } from "@/components/client-logos-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { StudentPackagesSection } from "@/components/student-packages-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { DiscountPopup } from "@/components/discount-popup"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <ClientLogosSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <StudentPackagesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <SocialMediaSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
      <DiscountPopup />
    </main>
  )
}
