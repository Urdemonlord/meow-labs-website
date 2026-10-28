import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { servicesWithPage } from "@/lib/service-pages"
import type { ServiceWithPage } from "@/lib/service-pages"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.id"

interface ServicePageProps {
  service: ServiceWithPage
}

// Halaman layanan dirender di server agar seluruh isinya terbaca mesin
// pencari. Konten berbahasa Indonesia mengikuti target kata kunci lokal.
export function ServicePage({ service }: ServicePageProps) {
  const { page } = service
  const content = service.id
  const pageUrl = `${siteUrl}/layanan/${service.slug}`
  const whatsappHref = buildWhatsAppUrl(`Halo admin Meow Labs, saya ingin konsultasi ${content.title}.`)
  const otherServices = servicesWithPage.filter((item) => item.slug !== service.slug)
  // Huruf kecil untuk kalimat CTA, tapi singkatan seperti "AI" tetap kapital.
  const ctaServiceName = content.title
    .split(" ")
    .map((word) => (word === word.toUpperCase() ? word : word.toLowerCase()))
    .join(" ")

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: content.title,
      description: page.metaDescription,
      url: pageUrl,
      provider: {
        "@type": "LocalBusiness",
        name: "Meow Labs",
        url: siteUrl,
        telephone: "+62895386288683",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Semarang",
          addressRegion: "Jawa Tengah",
          addressCountry: "Indonesia",
        },
      },
      areaServed: { "@type": "City", name: "Semarang" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Layanan", item: `${siteUrl}/#services` },
        { "@type": "ListItem", position: 3, name: content.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-primary">
              Layanan
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{content.title}</span>
          </nav>

          <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-5xl">{page.h1}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">{page.intro[0]}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Konsultasi Gratis
            </a>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Lihat Paket Harga
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-sm text-muted-foreground">Rentang Harga</dt>
              <dd className="mt-1 font-semibold">{content.priceRange}</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-sm text-muted-foreground">Waktu Pengerjaan</dt>
              <dd className="mt-1 font-semibold">{content.timeframe}</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-sm text-muted-foreground">Cocok Untuk</dt>
              <dd className="mt-1 font-semibold">{content.targetAudience}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Kenapa {content.title}?</h2>
            <p className="mt-4 text-pretty text-muted-foreground">{page.intro[1]}</p>
            <ul className="mt-6 space-y-3">
              {content.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Yang Anda Dapatkan</h2>
            <ul className="mt-6 space-y-3">
              {content.includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcessSection showDurations={false} />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Pertanyaan yang Sering Diajukan</h2>
          <div className="mt-6 space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">{faq.question}</summary>
                <p className="mt-3 text-pretty text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Layanan Lainnya</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/layanan/${item.slug}`}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <div className="font-semibold">{item.id.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.id.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold">Siap mulai {ctaServiceName}?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Ceritakan kebutuhan Anda. Kami bantu tentukan scope, estimasi biaya, dan timeline secara gratis.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
