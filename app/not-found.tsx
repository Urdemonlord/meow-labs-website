import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { buttonPrimary, buttonSecondary } from "@/components/editorial"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const quickLinks = [
  { href: "/#layanan", label: "Layanan" },
  { href: "/produk", label: "Produk" },
  { href: "/blog", label: "Catatan" },
  { href: "/about", label: "Tentang Meow Labs" },
]

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-paper text-ink">
      <Navigation />

      <section className="flex-1 border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="ml-eyebrow text-ink-muted">{"// Error 404"}</p>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
              Halaman tidak ditemukan.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
              Link yang Anda buka sudah tidak ada atau telah dipindahkan.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className={buttonPrimary}>
                Kembali ke beranda
              </Link>
              <a
                href={buildWhatsAppUrl("Halo Meow Labs, saya ingin konsultasi.")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonSecondary}
              >
                Hubungi via WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Navigasi cepat" className="lg:col-span-4 lg:col-start-9">
            <Image src="/art/mascot-box.webp" alt="" width={290} height={238} className="mb-10 h-auto w-[220px]" />
            <p className="ml-eyebrow text-ink-muted">Navigasi cepat</p>
            <ul className="mt-5 border-t border-ink">
              {quickLinks.map((link) => (
                <li key={link.href} className="border-b border-rule">
                  <Link href={link.href} className="group flex items-center justify-between py-4 text-lg hover:underline">
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <Footer />
    </main>
  )
}
