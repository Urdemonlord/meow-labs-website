"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Cpu, Database, Globe, Shield, Smartphone, X, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { services as servicesData } from "@/lib/services-data"
import type { ServiceContent, ServiceData, ServiceIconName } from "@/lib/services-data"
import { useUiPreferences } from "./ui-preferences-provider"

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  Cpu,
}

interface ServiceFeature extends ServiceContent {
  icon: LucideIcon
  color: ServiceData["color"]
  href: string
}

export function ServicesSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"
  const [selectedService, setSelectedService] = useState<ServiceFeature | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = useMemo<ServiceFeature[]>(
    () =>
      servicesData.map((service) => ({
        ...(isEn ? service.en : service.id),
        icon: serviceIcons[service.icon],
        color: service.color,
        href: `/layanan/${service.slug}`,
      })),
    [isEn]
  )

  const handleLearnMoreClick = (service: ServiceFeature) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  const handleWhatsAppContact = (serviceName: string) => {
    const message = isEn
      ? `Hello admin, I want a free consultation for ${serviceName}.`
      : `Halo admin, saya ingin konsultasi gratis untuk ${serviceName}.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://api.whatsapp.com/send?phone=62895386288683&text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? (
              <>
                Website Services <span className="text-primary">We Deliver</span>
              </>
            ) : (
              <>
                Jenis Website yang <span className="text-primary">Kami Layani</span>
              </>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "From company profiles to custom systems, each service is built with clear scope, performance, and business outcomes in mind."
              : "Mulai dari company profile hingga sistem custom, setiap layanan dibangun dengan scope jelas, performa baik, dan fokus hasil bisnis."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const isPrimary = service.color === "primary"
            const borderClass = isPrimary ? "hover:border-primary/50" : "hover:border-secondary/50"
            const iconWrapClass = isPrimary
              ? "bg-primary/10 text-primary group-hover:bg-primary/20"
              : "bg-secondary/10 text-secondary group-hover:bg-secondary/20"
            const outlineButtonClass = isPrimary
              ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            const solidButtonClass = isPrimary
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/90"

            return (
              <Card
                key={service.title}
                className={`group border-border bg-card transition-all duration-300 hover:scale-[1.02] ${borderClass}`}
              >
                <CardHeader>
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${iconWrapClass}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-pretty text-muted-foreground">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`mr-2 h-1.5 w-1.5 rounded-full ${isPrimary ? "bg-primary" : "bg-secondary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-1 bg-transparent ${outlineButtonClass}`}
                      onClick={() => handleLearnMoreClick(service)}
                    >
                      {isEn ? "Learn More" : "Pelajari"}
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 ${solidButtonClass}`}
                      onClick={() => handleWhatsAppContact(service.title)}
                    >
                      {isEn ? "Contact" : "Hubungi"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {isEn ? "Need a Custom Scope?" : "Butuh Scope Khusus?"}
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-pretty text-muted-foreground">
              {isEn
                ? "Every business has different constraints. We can design a tailored implementation plan for your exact needs."
                : "Setiap bisnis punya kebutuhan berbeda. Kami bisa susun rencana implementasi yang sesuai konteks bisnis Anda."}
            </p>
            <Button
              size="lg"
              className="glow-animation bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => handleWhatsAppContact(isEn ? "Custom website solution" : "Solusi website custom")}
            >
              {isEn ? "Free Consultation" : "Konsultasi Gratis"}
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-background shadow-xl">
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                      selectedService.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <selectedService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedService.title}</h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">{selectedService.detailedDescription}</p>

                <div>
                  <h4 className="mb-2 text-lg font-medium">{isEn ? "Benefits" : "Manfaat"}</h4>
                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {selectedService.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <CheckCircle
                          className={`mr-2 mt-0.5 h-5 w-5 shrink-0 ${
                            selectedService.color === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-medium">{isEn ? "Included Features" : "Fitur yang Disertakan"}</h4>
                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {selectedService.includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle
                          className={`mr-2 mt-0.5 h-5 w-5 shrink-0 ${
                            selectedService.color === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg border border-border p-4">
                    <h5 className="mb-1 text-sm font-medium text-muted-foreground">
                      {isEn ? "Price Range" : "Rentang Harga"}
                    </h5>
                    <p className="font-medium text-foreground">{selectedService.priceRange}</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h5 className="mb-1 text-sm font-medium text-muted-foreground">
                      {isEn ? "Timeline" : "Waktu Pengerjaan"}
                    </h5>
                    <p className="font-medium text-foreground">{selectedService.timeframe}</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h5 className="mb-1 text-sm font-medium text-muted-foreground">
                      {isEn ? "Best For" : "Target Pengguna"}
                    </h5>
                    <p className="font-medium text-foreground">{selectedService.targetAudience}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button
                    size="lg"
                    className={`w-full ${
                      selectedService.color === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                    onClick={() => {
                      handleWhatsAppContact(selectedService.title)
                      handleCloseModal()
                    }}
                  >
                    {isEn ? "Consult via WhatsApp" : "Konsultasi via WhatsApp"}
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link href={selectedService.href}>{isEn ? "View service page" : "Lihat halaman layanan"}</Link>
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
