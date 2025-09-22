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
  const isBlogPage = pathname === '/blog'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/meow-logo.png" alt="Meow Labs Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold text-foreground">Meow Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={isBlogPage ? "/" : "#home"} className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href={isBlogPage ? "/#services" : "#services"} className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href={isBlogPage ? "/#portfolio" : "#portfolio"} className="text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href={isBlogPage ? "/#contact" : "#contact"} className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <a href="https://wa.me/6289538628863?text=Halo%20Meow%20Labs!%20Saya%20ingin%20konsultasi%20pembuatan%20website">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-animation">Dapatkan Penawaran</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2">
              <Link
                href={isBlogPage ? "/" : "#home"}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href={isBlogPage ? "/#services" : "#services"}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href={isBlogPage ? "/#portfolio" : "#portfolio"}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href={isBlogPage ? "/#contact" : "#contact"}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <a href="https://wa.me/6289538628863?text=Halo%20Meow%20Labs!%20Saya%20ingin%20konsultasi%20pembuatan%20website">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Dapatkan Penawaran</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
