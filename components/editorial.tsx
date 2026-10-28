import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

// Komponen editorial bersama untuk halaman selain homepage, supaya semua
// halaman memakai header, tombol, dan band CTA yang sama.

export const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-5 py-3.5 font-medium text-paper-light transition-colors hover:bg-ink/85"
export const buttonSecondary =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border border-ink px-5 py-3.5 font-medium text-ink transition-colors hover:bg-ink hover:text-paper-light"

interface Crumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  breadcrumb?: Crumb[]
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, intro, breadcrumb, children }: PageHeaderProps) {
  return (
    <section className="border-b border-rule">
      <div className="ml-container py-14 sm:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="ml-eyebrow mb-8 flex flex-wrap gap-2 text-ink-muted">
            {breadcrumb.map((crumb, index) => (
              <span key={crumb.label} className="flex gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-ink hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ink" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="ml-eyebrow text-ink-muted">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-balance font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] tracking-tight text-ink">
          {title}
        </h1>
        {intro && <div className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">{intro}</div>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <p className="ml-eyebrow text-ink-muted lg:col-span-4">{eyebrow}</p>
      <div className="lg:col-span-8">
        <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] text-ink">{title}</h2>
        {description && <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-muted">{description}</p>}
      </div>
    </div>
  )
}

interface CtaBandProps {
  title: ReactNode
  body?: ReactNode
  whatsappMessage: string
  buttonLabel?: string
}

export function CtaBand({ title, body, whatsappMessage, buttonLabel = "Diskusikan via WhatsApp" }: CtaBandProps) {
  return (
    <section className="bg-ink text-paper-light">
      <div className="ml-container ml-section">
        <p className="ml-eyebrow text-dark-muted">{"// Kolaborasi"}</p>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1]">{title}</h2>
        {body && <p className="mt-5 max-w-xl text-pretty leading-relaxed text-dark-muted">{body}</p>}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-paper-light px-5 py-3.5 font-medium text-ink transition-colors hover:bg-paper"
          >
            {buttonLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:admin@meowlabs.id"
            className="inline-flex items-center justify-center rounded-[3px] border border-paper-light/50 px-5 py-3.5 font-medium transition-colors hover:border-paper-light"
          >
            admin@meowlabs.id
          </a>
        </div>
      </div>
    </section>
  )
}

// FAQ bergaya editorial memakai <details> agar tetap terbaca mesin pencari
// dan berfungsi tanpa JavaScript.
export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="border-t border-ink">
      {faqs.map((faq, index) => (
        <details key={faq.question} className="group border-b border-rule py-6">
          <summary className="flex cursor-pointer list-none items-baseline gap-5 marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="ml-eyebrow shrink-0 text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
            <span className="flex-1 text-lg font-medium text-ink">{faq.question}</span>
            <span aria-hidden="true" className="font-mono text-xl text-ink-muted transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-2xl pl-10 text-pretty leading-relaxed text-ink-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
