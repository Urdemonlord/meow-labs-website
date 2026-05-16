"use client"

import { motion } from "framer-motion"
import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useUiText } from "./ui-preferences-provider"

export function PricingSection() {
  const copy = useUiText()

  const handleWhatsAppContact = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://api.whatsapp.com/send?phone=6285117170198&text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="pricing" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mx-auto mb-4 max-w-4xl text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {copy.pricing.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {copy.pricing.description}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.pricing.packages.map((pkg, index) => {
            const isHighlighted = index === 1

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`relative h-full overflow-hidden border-border/80 bg-card/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    isHighlighted ? "ring-2 ring-primary/45" : ""
                  }`}
                >
                  {isHighlighted && (
                    <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground">
                      {copy.pricing.highlight}
                    </Badge>
                  )}

                  <CardHeader className="space-y-4 pb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                      <div className="text-sm font-medium text-secondary">{pkg.timeline}</div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{pkg.audience}</p>
                  </CardHeader>

                  <CardContent className="flex h-full flex-col gap-6">
                    <div className="space-y-3">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed text-foreground/90">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleWhatsAppContact(pkg.whatsappMessage)}
                      className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {copy.pricing.selectCta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
