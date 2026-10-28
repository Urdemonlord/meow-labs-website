import Link from "next/link"
import { BrandLogo } from "./brand-logo"
import { buildWhatsAppUrl, MEOWLABS_ADMIN_PHONE_DISPLAY } from "@/lib/whatsapp"

const columns = [
  {
    title: "Layanan",
    links: [
      { label: "Integrasi AI & Otomasi", href: "/layanan/integrasi-ai" },
      { label: "Aplikasi Web Custom", href: "/layanan/aplikasi-web" },
      { label: "Website Company Profile", href: "/layanan/company-profile" },
      { label: "Website Toko Online", href: "/layanan/toko-online" },
      { label: "Landing Page", href: "/layanan/landing-page" },
      { label: "Website Sekolah", href: "/layanan/website-sekolah" },
      { label: "Jasa Website Semarang", href: "/jasa-pembuatan-website-semarang" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Produk", href: "/produk" },
      { label: "Catatan", href: "/blog" },
      { label: "Tentang", href: "/about" },
      { label: "Resources", href: "/resources" },
    ],
  },
]

const socials = [
  { label: "Instagram", href: "https://instagram.com/meowlabs.id" },
  { label: "TikTok", href: "https://www.tiktok.com/@meowlabs.id" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappHref = buildWhatsAppUrl("Halo MeowLabs, saya ingin mendiskusikan proyek.")

  return (
    <footer className="border-t border-rule bg-paper text-ink">
      <div className="ml-container grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandLogo size={34} />
          <p className="mt-5 max-w-sm text-pretty text-ink-muted">
            Studio teknologi independen yang membangun sistem AI, produk digital, dan software yang berguna.
          </p>
          <p className="ml-eyebrow mt-6 text-ink-muted">Semarang, Indonesia</p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="md:col-span-2">
            <h2 className="ml-eyebrow text-ink-muted">{column.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-3">
          <h2 className="ml-eyebrow text-ink-muted">Kontak</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp {MEOWLABS_ADMIN_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href="mailto:admin@meowlabs.id" className="hover:underline">
                admin@meowlabs.id
              </a>
            </li>
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {social.label} @meowlabs.id
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="ml-container flex flex-col gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} MeowLabs. Semarang, Indonesia.</p>
          <div className="flex gap-6">
            <Link href="/kebijakan-privasi" className="hover:text-ink">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-ink">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
