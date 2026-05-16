"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { useUiText } from "./ui-preferences-provider"

export function HeroSection() {
  const copy = useUiText()

  function handleWhatsAppContact() {
    const phoneNumber = "6285117170198"
    const message = copy.hero.whatsappMessage
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  function handlePortfolioClick() {
    const portfolioSection = document.getElementById("portfolio")
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-16 sm:min-h-screen sm:py-20 grid-bg"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl sm:block" />
        <div className="absolute bottom-20 right-10 hidden h-40 w-40 rounded-full bg-secondary/10 blur-3xl sm:block" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="pt-4 text-center lg:pt-0 lg:text-left">
            <div className="mb-5">
              <span className="mb-3 mt-2 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:mt-0 sm:px-4 sm:py-2 sm:text-sm">
                {copy.hero.badge}
              </span>
              <h1 className="text-balance text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                <span className="text-foreground">{copy.hero.titleLines[0]}</span>
                <br />
                <span className="text-primary">{copy.hero.titleLines[1]}</span>
                <br />
                <span className="text-secondary">{copy.hero.titleLines[2]}</span>
              </h1>
            </div>

            <p className="mb-6 max-w-2xl text-pretty text-base text-muted-foreground sm:mb-8 sm:text-lg">
              {copy.hero.description}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Button
                size="lg"
                className="group w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto glow-animation"
                onClick={handleWhatsAppContact}
              >
                {copy.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground sm:w-auto"
                onClick={handlePortfolioClick}
              >
                <Mail className="mr-2 h-4 w-4" />
                {copy.hero.secondaryCta}
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 sm:mt-12 sm:gap-6 sm:pt-8">
              {copy.hero.stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className={`text-xl font-bold sm:text-2xl ${index === 1 ? "text-secondary" : "text-primary"}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-primary/20 blur-2xl" />
              <Image
                src="/images/meow-mascot.png"
                alt="Meow Labs - Jasa Pembuatan Website Murah Semarang - Maskot Kucing Developer"
                width={400}
                height={400}
                className="relative z-10 h-auto w-[280px] float-animation sm:w-[360px] lg:w-[400px]"
                priority
              />
              <div className="absolute -left-10 top-10 hidden rounded-lg border border-border bg-card p-3 font-mono text-xs text-primary opacity-80 sm:block">
                {"<MeowLabs />"}
              </div>
              <div className="absolute -right-10 bottom-20 hidden rounded-lg border border-border bg-card p-3 font-mono text-xs text-secondary opacity-80 sm:block">
                {"curiosity++"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
