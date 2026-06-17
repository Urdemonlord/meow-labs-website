import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DiscountPopup } from "@/components/discount-popup"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { DomainPromoSection } from "@/components/domain-promo-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DiscountPopup />
      <HeroSection />
      <DomainPromoSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
