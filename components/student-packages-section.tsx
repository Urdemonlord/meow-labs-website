"use client"

import { ArrowRight, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useUiText } from "./ui-preferences-provider"

export function StudentPackagesSection() {
  const copy = useUiText()

  const handleWhatsAppContact = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://api.whatsapp.com/send?phone=6285117170198&text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="student-packages" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            {copy.student.badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{copy.student.title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {copy.student.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.student.packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={`overflow-hidden border-border bg-card/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 1 ? "ring-2 ring-secondary/40" : ""
              }`}
            >
              <div className="mb-4 flex min-h-[5.5rem] flex-col justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                <div className="text-sm font-medium text-secondary">{pkg.timeline}</div>
              </div>

              <div className="mb-6 space-y-3">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleWhatsAppContact(pkg.whatsappMessage)}
              >
                {copy.student.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {copy.student.description}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => handleWhatsAppContact(copy.student.customMessage)}
          >
            {copy.student.customCta}
          </Button>
        </div>
      </div>
    </section>
  )
}
