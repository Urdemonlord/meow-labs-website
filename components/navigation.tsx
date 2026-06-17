"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Menu, MessageCircle, Snowflake, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { useUiPreferences, useUiText } from "./ui-preferences-provider"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = !pathname || pathname === "/"
  const { locale, toggleLocale, santaMode, toggleSantaMode } = useUiPreferences()
  const copy = useUiText()

  const createSectionHref = (section: string) => (isHomePage ? `#${section}` : `/#${section}`)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen)
    return () => document.body.classList.remove("overflow-hidden")
  }, [isMenuOpen])

  const navItems = useMemo(
    () => [
      { label: copy.nav.items.home, href: isHomePage ? "#home" : "/#home" },
      { label: locale === "en" ? "Domain promo" : "Promo domain", href: createSectionHref("promo-domain") },
      { label: copy.nav.items.services, href: createSectionHref("services") },
      { label: copy.nav.items.pricing, href: createSectionHref("pricing") },
      { label: copy.nav.items.portfolio, href: createSectionHref("portfolio") },
      { label: copy.nav.items.contact, href: createSectionHref("contact") },
    ],
    [copy.nav.items, createSectionHref, isHomePage, locale]
  )

  const whatsappHref = buildWhatsAppUrl(
    locale === "en"
      ? "Hello Meow Labs, I want to discuss a website project."
      : "Halo Meow Labs, saya ingin konsultasi project website."
  )

  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/78">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image src="/images/meow-logo.webp" alt="Meow Labs Logo" width={38} height={38} className="rounded-lg" priority />
            <div className="min-w-0">
              <div className="truncate text-base font-semibold text-foreground sm:text-lg">Meow Labs</div>
              <div className="hidden text-xs text-muted-foreground lg:block">
                {locale === "en" ? "Websites and digital systems" : "Website dan sistem digital"}
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleLocale}
              className="h-10 w-10 rounded-full border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label={copy.nav.language}
              title={copy.nav.language}
            >
              <Globe className="h-4 w-4" />
            </Button>

            <a href={whatsappHref} rel="noopener noreferrer" target="_blank">
              <Button className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90">
                <MessageCircle className="mr-2 h-4 w-4" />
                {copy.nav.contactCta}
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border border-border/70"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" role="dialog" aria-modal="true" className="pb-4 md:hidden">
            <div className="mt-2 rounded-3xl border border-border/70 bg-card p-4 shadow-xl">
              <div className="mb-4 flex items-center gap-2">
                <Button type="button" variant="outline" size="sm" onClick={toggleLocale} className="rounded-full">
                  <Globe className="mr-2 h-4 w-4" />
                  {locale.toUpperCase()}
                </Button>
                <Button
                  type="button"
                  variant={santaMode ? "default" : "outline"}
                  size="sm"
                  onClick={toggleSantaMode}
                  className="rounded-full"
                  aria-pressed={santaMode}
                >
                  <Snowflake className="mr-2 h-4 w-4" />
                  {copy.nav.santaMode}
                </Button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a href={whatsappHref} rel="noopener noreferrer" target="_blank" className="mt-4 block">
                <Button className="h-11 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {copy.nav.contactCta}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
