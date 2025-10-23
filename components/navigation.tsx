"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = !pathname || pathname === "/"

  const createSectionHref = (section: string) =>
    isHomePage ? `#${section}` : `/#${section}`

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // lock body scroll ketika menu terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenuOpen])

  const navItems = [
    { label: "Home", href: isHomePage ? "#home" : "/#home" },
    { label: "About", href: "/about" },
    { label: "Services", href: createSectionHref("services") },
    { label: "Package", href: createSectionHref("pricing") },
    { label: "For Students", href: createSectionHref("student-packages") },
    { label: "Portfolio", href: createSectionHref("portfolio") },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: createSectionHref("contact") },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/meow-logo.png"
              alt="Meow Labs Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="text-xl font-bold text-foreground">Meow Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a href="https://booking.meowlabs.id/" rel="noopener noreferrer" target="_blank">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-animation">
                Booking Sekarang
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
          >
            <div className="mt-2 space-y-1 rounded-lg bg-card px-2 pt-2 pb-3 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a href="https://booking.meowlabs.id/" rel="noopener noreferrer" target="_blank">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Booking Sekarang
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
