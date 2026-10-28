import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { buttonPrimary, buttonSecondary, CtaBand, FaqList, PageHeader } from "@/components/editorial"
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
        { "@type": "ListItem", position: 2, name: "Layanan", item: `${siteUrl}/#layanan` },
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
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <PageHeader
        eyebrow="// Layanan"
        title={page.h1}
        intro={page.intro[0]}
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Layanan", href: "/#layanan" },
          { label: content.title },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
            Konsultasi Gratis
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link href="/jasa-pembuatan-website-semarang#pricing" className={buttonSecondary}>
            Lihat Paket Harga
          </Link>
        </div>
        <dl className="mt-12 grid border-t border-ink sm:grid-cols-3">
          {[
            { label: "Rentang harga", value: content.priceRange },
            { label: "Waktu pengerjaan", value: content.timeframe },
            { label: "Cocok untuk", value: content.targetAudience },
          ].map((item) => (
            <div key={item.label} className="border-b border-rule py-5 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <dt className="ml-eyebrow text-ink-muted">{item.label}</dt>
              <dd className="mt-2 text-lg font-medium text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="ml-eyebrow text-ink-muted">{"// Kenapa"}</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] text-ink">
              Kenapa {content.title}?
            </h2>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-muted">{page.intro[1]}</p>
            <ul className="mt-8 border-t border-rule">
              {content.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4 border-b border-rule py-3.5 text-ink">
                  <span aria-hidden="true" className="ml-eyebrow pt-1 text-forest">
                    +
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[4px] bg-ink p-8 text-paper-light lg:col-span-6 sm:p-10">
            <h2 className="ml-eyebrow text-dark-muted">{"// Yang Anda dapatkan"}</h2>
            <ol className="mt-6 space-y-4">
              {content.includedFeatures.map((feature, index) => (
                <li key={feature} className="flex gap-4 border-b border-paper-light/15 pb-4 last:border-b-0">
                  <span className="ml-eyebrow pt-1 text-dark-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ProcessSection showDurations={false} projectName={content.title} />

      <section className="border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="ml-eyebrow text-ink-muted">{"// FAQ"}</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] text-ink">
              Pertanyaan yang sering diajukan.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={page.faqs} />
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <h2 className="ml-eyebrow text-ink-muted">{"// Layanan lainnya"}</h2>
          <ul className="mt-8 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <li key={item.slug} className="border-b border-rule">
                <Link href={`/layanan/${item.slug}`} className="group flex h-full flex-col py-6 pr-6">
                  <span className="flex items-center justify-between text-lg font-medium text-ink group-hover:underline">
                    {item.id.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </span>
                  <span className="mt-2 text-sm text-ink-muted">{item.id.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Siap mulai ${ctaServiceName}?`}
        body="Ceritakan kebutuhan Anda. Kami bantu tentukan scope, estimasi biaya, dan timeline secara gratis."
        whatsappMessage={`Halo admin Meow Labs, saya ingin konsultasi ${content.title}.`}
      />

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
