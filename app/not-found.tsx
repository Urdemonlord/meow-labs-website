import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >

      <section className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter">404</h1>
            <p className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
              Halaman tidak ditemukan
            </p>
          </div>

          <p className="text-lg leading-7 text-muted-foreground max-w-xl mx-auto">
            Sepertinya link yang Anda cari sudah tidak ada atau telah dipindahkan. Tidak perlu khawatir, kami siap membantu.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 max-w-sm mx-auto">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <Home className="h-5 w-5" />
                Kembali ke beranda
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/layanan/aplikasi-web">
                Lihat layanan
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-border/70 bg-muted/30 p-6 space-y-4 text-left">
            <h2 className="font-semibold text-lg">Navigasi cepat</h2>
            <ul className="grid gap-2 text-sm leading-7">
              <li>
                <Link href="/layanan/aplikasi-web" className="text-primary hover:underline">
                  → Jasa pembuatan website
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-primary hover:underline">
                  → Resource hub
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary hover:underline">
                  → Blog dan artikel
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary hover:underline">
                  → Tentang Meow Labs
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-3">Butuh bantuan lain?</p>
            <Button asChild size="lg" variant="default">
              <a href="https://wa.me/6285117170198?text=Halo%20Meow%20Labs!%20Saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
                Hubungi kami via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/20 py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Meow Labs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
