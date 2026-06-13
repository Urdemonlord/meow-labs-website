"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Languages, Menu, Snowflake, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUiPreferences, useUiText } from "./ui-preferences-provider"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = !pathname || pathname === "/"
  const { locale, toggleLocale, santaMode, toggleSantaMode } = useUiPreferences()
  const copy = useUiText()

  const createSectionHref = (section: string) =>
    isHomePage ? `#${section}` : `/#${section}`

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen)
    return () => document.body.classList.remove("overflow-hidden")
  }, [isMenuOpen])

  const navItems = [
    { label: copy.nav.items.home, href: isHomePage ? "#home" : "/#home" },
    { label: copy.nav.items.about, href: "/about" },
    { label: copy.nav.items.services, href: createSectionHref("services") },
    { label: copy.nav.items.pricing, href: createSectionHref("pricing") },
    { label: copy.nav.items.students, href: createSectionHref("student-packages") },
    { label: copy.nav.items.portfolio, href: createSectionHref("portfolio") },
    { label: copy.nav.items.resources, href: "/resources" },
    { label: copy.nav.items.blog, href: "/blog" },
    { label: copy.nav.items.contact, href: createSectionHref("contact") },
  ]

  const preferences = (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={toggleLocale}
        className="border-border bg-card/70 text-foreground hover:bg-muted"
        aria-label={copy.nav.language}
      >
        <Languages className="mr-2 h-4 w-4" />
        {locale.toUpperCase()}
      </Button>
      <Button
        type="button"
        variant={santaMode ? "default" : "outline"}
        size="sm"
        onClick={toggleSantaMode}
        className={santaMode ? "" : "border-border bg-card/70 text-foreground hover:bg-muted"}
        aria-pressed={santaMode}
      >
        <Snowflake className="mr-2 h-4 w-4" />
        {copy.nav.santaMode}
      </Button>
    </>
  )

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center space-x-2 sm:space-x-3">
            <Image
              src="/images/meow-logo.png"
              alt="Meow Labs Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="truncate text-lg font-bold text-foreground sm:text-xl">Meow Labs</span>
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">{preferences}</div>
            <a
              href="https://wa.me/6285117170198?text=Halo%20Meow%20Labs!%20Saya%20ingin%20konsultasi%20pembuatan%20website"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-animation">
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
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-1 mt-2 space-y-1 rounded-lg bg-card px-2 pb-3 pt-2 shadow-lg">
              <div className="grid grid-cols-2 gap-2 px-3 py-2">{preferences}</div>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a
                  href="https://wa.me/6285117170198?text=Halo%20Meow%20Labs!%20Saya%20ingin%20konsultasi%20pembuatan%20website"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {copy.nav.contactCta}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
