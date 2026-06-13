"use client"

import Image from "next/image"
import {
  Clock,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
  Star,
} from "lucide-react"
import { useUiText } from "./ui-preferences-provider"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const copy = useUiText()

  const handlePhoneClick = () => {
    const message = encodeURIComponent(
      copy.chat.locale === "en-US"
        ? "Hello Meow Labs, I want to discuss a website project."
        : "Halo Meow Labs, saya ingin konsultasi project website."
    )

    window.open(`https://wa.me/6285117170198?text=${message}`, "_blank")
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
      url: "https://imgur.com/zf6C89Q.jpg",
    },
    {
      name: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PHP",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
  ]

  const paymentMethods = [
    { name: "QRIS", url: "https://imgur.com/YOztJcM.png" },
    { name: "BCA", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
    { name: "Mandiri", url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" },
    { name: "BNI", url: "https://imgur.com/kmNckLb.png" },
    { name: "BRI", url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_2020.svg" },
    { name: "GoPay", url: "https://imgur.com/1drCNcm.png" },
    { name: "OVO", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg" },
    { name: "DANA", url: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg" },
    { name: "ShopeePay", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" },
    { name: "LinkAja", url: "https://upload.wikimedia.org/wikipedia/commons/8/85/LinkAja.svg" },
    { name: "Jenius", url: "https://imgur.com/p2uT769.png" },
    { name: "BSI", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bank_Syariah_Indonesia.svg" },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-12 border-b border-border pb-8">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-lg font-semibold text-foreground">{copy.footer.techTitle}</h3>
            <p className="text-sm text-muted-foreground">{copy.footer.techDescription}</p>
          </div>
          <div className="grid grid-cols-3 items-center gap-6 sm:grid-cols-6">
            {techPartners.map((tech) => (
              <div key={tech.name} className="group flex items-center justify-center">
                <div className="rounded-lg bg-background p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Image
                    src={tech.url}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="h-auto max-w-full opacity-60 transition-opacity filter grayscale group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 border-b border-border pb-8">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-lg font-semibold text-foreground">{copy.footer.paymentTitle}</h3>
            <p className="text-sm text-muted-foreground">{copy.footer.paymentDescription}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
            {paymentMethods.map((payment) => (
              <div key={payment.name} className="group flex items-center justify-center">
                <div className="rounded-lg border border-border/50 bg-background p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Image
                    src={payment.url}
                    alt={payment.name}
                    width={32}
                    height={32}
                    className="h-auto max-w-full opacity-70 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">{copy.footer.paymentSupport}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-3">
              <Image
                src="/images/meow-logo.png"
                alt="Meow Labs Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">{copy.footer.brandTitle}</span>
            </div>
            <p className="mb-6 max-w-md text-pretty text-muted-foreground">{copy.footer.brandDescription}</p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{copy.footer.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <button
                  type="button"
                  onClick={handlePhoneClick}
                  className="text-left text-muted-foreground transition-colors hover:text-green-600"
                >
                  +62 851-1717-0198
                </button>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <a
                  href="mailto:admin@meowlabs.id"
                  className="break-all text-muted-foreground transition-colors hover:text-blue-600"
                >
                  admin@meowlabs.id
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                  <Clock className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-muted-foreground">{copy.footer.responseTime}</span>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{copy.footer.ratingText}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{copy.footer.followUs}</span>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/meowlabs.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 transition-all duration-300 hover:bg-pink-500 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@meowlabs.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-background"
                  aria-label="TikTok"
                >
                  <Music2 className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">{copy.footer.servicesTitle}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {copy.footer.serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#services" className="flex items-center gap-2 transition-colors hover:text-primary">
                    <ExternalLink className="h-3 w-3" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">{copy.footer.companyTitle}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { href: "/resources", label: "Resource Hub" },
                { href: "/resources/bansos-ai", label: "Bansos AI" },
                { href: "/resources/open-source", label: "Open Source Pilihan" },
                { href: "#why-choose-us", label: copy.nav.items.about },
                { href: "#portfolio", label: copy.nav.items.portfolio },
                { href: "#pricing", label: copy.nav.items.pricing },
                { href: "#testimonials", label: copy.footer.testimonialsLabel },
                { href: "#faq", label: "FAQ" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-2 transition-colors hover:text-primary">
                    <ExternalLink className="h-3 w-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} {copy.footer.copyright}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 md:mt-0">
            <a href="/kebijakan-privasi" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {copy.footer.privacy}
            </a>
            <a href="/syarat-ketentuan" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {copy.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
