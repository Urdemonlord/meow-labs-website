import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AiDiagram, ResearchDiagram, SystemDiagram, WebsiteDiagram } from "./capability-diagrams"

// Empat kemampuan studio. Tautan mengarah ke halaman layanan yang sudah ada,
// sekaligus menjaga internal link untuk SEO halaman layanan.
const capabilities = [
  {
    title: "Website & Produk Digital",
    Diagram: WebsiteDiagram,
    body: "Company profile, toko online, dan landing page yang cepat, rapi di HP, dan mudah dikelola sendiri.",
    price: "Mulai Rp500 ribu",
    links: [
      { label: "Company Profile", href: "/layanan/company-profile" },
      { label: "Toko Online", href: "/layanan/toko-online" },
      { label: "Landing Page", href: "/layanan/landing-page" },
      { label: "Sekolah & Yayasan", href: "/layanan/website-sekolah" },
      { label: "Portal Berita", href: "/layanan/portal-berita" },
    ],
  },
  {
    title: "Applied AI",
    Diagram: AiDiagram,
    body: "AI agent, chatbot, dan otomasi yang terhubung ke WhatsApp, data, dan proses bisnis, bukan sekadar chatbot.",
    price: "Mulai Rp4 juta",
    links: [{ label: "Integrasi AI & Otomasi", href: "/layanan/integrasi-ai" }],
  },
  {
    title: "Sistem & Infrastruktur",
    Diagram: SystemDiagram,
    body: "Aplikasi web custom, dashboard internal, integrasi API, dan deployment untuk alur kerja yang spesifik.",
    price: "Mulai Rp4 juta",
    links: [{ label: "Aplikasi Web Custom", href: "/layanan/aplikasi-web" }],
  },
  {
    title: "Riset & Eksperimen",
    Diagram: ResearchDiagram,
    body: "Produk yang kami bangun sendiri dan catatan teknis dari eksperimen yang kami jalankan.",
    price: null,
    links: [
      { label: "Produk", href: "/produk" },
      { label: "Catatan", href: "/blog" },
    ],
  },
]

export function HomeCapabilities() {
  return (
    <section id="layanan" className="border-b border-rule">
      <div className="ml-container ml-section">
        <div className="grid gap-6 lg:grid-cols-12">
          <p className="ml-eyebrow text-ink-muted lg:col-span-4">03 // Apa yang kami bangun</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-ink lg:col-span-8">
            Dari website pertama sampai sistem yang menjalankan operasional.
          </h2>
        </div>

        <div className="mt-14 grid border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="flex flex-col border-b border-rule py-8 sm:px-6 sm:[&:nth-child(odd)]:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:pl-6 lg:first:pl-0"
            >
              <div className="mb-6 aspect-[4/3] overflow-hidden rounded-[4px] border border-rule">
                <capability.Diagram />
              </div>
              <span className="ml-eyebrow text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-medium text-ink">{capability.title}</h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-ink-muted">{capability.body}</p>
              {capability.price && <p className="ml-eyebrow mt-6 text-forest">{capability.price}</p>}
              <ul className="mt-4 space-y-2 text-sm">
                {capability.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center gap-1 text-ink hover:underline">
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
