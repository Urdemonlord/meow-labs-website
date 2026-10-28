import { ArrowUpRight } from "lucide-react"
import { uiCopy } from "@/lib/ui-copy"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { SectionHeading } from "./editorial"

// Paket website. Harga dan isi paket bersumber dari lib/ui-copy.json agar
// sama dengan knowledge.md dan halaman layanan.
export function PricingSection() {
  const copy = uiCopy.id.pricing

  return (
    <section id="pricing" className="border-b border-rule">
      <div className="ml-container ml-section">
        <SectionHeading eyebrow="// Paket" title={copy.title} description={copy.description} />

        <div className="ml-reveal mt-14 grid gap-px overflow-hidden rounded-[4px] border border-ink bg-ink lg:grid-cols-3">
          {copy.packages.map((pkg, index) => {
            const isHighlighted = index === 1
            return (
              <article
                key={pkg.name}
                className={`flex flex-col p-7 sm:p-8 ${isHighlighted ? "bg-ink text-paper-light" : "bg-paper-light text-ink"}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`ml-eyebrow ${isHighlighted ? "text-dark-muted" : "text-ink-muted"}`}>
                    Paket {String(index + 1).padStart(2, "0")}
                  </span>
                  {isHighlighted && (
                    <span className="ml-eyebrow rounded-[2px] border border-paper-light/40 px-2 py-0.5 text-[0.65rem]">
                      {copy.highlight}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-display text-3xl leading-none">{pkg.name}</h3>
                <p className="mt-4 text-2xl font-medium">{pkg.price}</p>
                <p className={`ml-eyebrow mt-2 ${isHighlighted ? "text-dark-muted" : "text-forest"}`}>{pkg.timeline}</p>
                <p className={`mt-5 text-pretty leading-relaxed ${isHighlighted ? "text-dark-muted" : "text-ink-muted"}`}>
                  {pkg.audience}
                </p>
                <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 ${isHighlighted ? "border-paper-light/20" : "border-rule"}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-baseline gap-3 text-sm">
                      <span aria-hidden="true">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  aria-label={`${copy.selectCta}: ${pkg.name}`}
                  href={buildWhatsAppUrl(pkg.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-[3px] px-5 py-3 font-medium transition-colors ${
                    isHighlighted
                      ? "bg-paper-light text-ink hover:bg-paper"
                      : "border border-ink text-ink hover:bg-ink hover:text-paper-light"
                  }`}
                >
                  {copy.selectCta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
