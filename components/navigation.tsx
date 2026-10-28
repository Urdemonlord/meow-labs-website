"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { BrandLogo } from "./brand-logo"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const navItems = [
  { label: "Layanan", href: "/#layanan" },
  { label: "Produk", href: "/produk" },
  { label: "Klien", href: "/#klien" },
  { label: "Catatan", href: "/blog" },
  { label: "Tentang", href: "/about" },
]

const whatsappHref = buildWhatsAppUrl("Halo MeowLabs, saya ingin mendiskusikan proyek.")

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen)
    return () => document.body.classList.remove("overflow-hidden")
  }, [isMenuOpen])

  return (
    <nav className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="ml-container flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="MeowLabs, ke beranda" className="shrink-0">
          <BrandLogo size={30} />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-ink transition-colors hover:text-ink-muted">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-[3px] bg-ink px-4 py-2.5 text-sm font-medium text-paper-light transition-colors hover:bg-ink/85 sm:inline-flex"
          >
            Diskusikan Proyek
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] text-ink hover:bg-muted md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-rule bg-paper md:hidden">
          <div className="ml-container flex flex-col py-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-rule py-4 font-display text-3xl text-ink"
              >
                <span className="ml-eyebrow text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-5 py-3.5 font-medium text-paper-light"
            >
              Diskusikan Proyek
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
