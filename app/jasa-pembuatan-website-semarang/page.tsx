import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { buttonPrimary, buttonSecondary, FaqList, PageHeader, SectionHeading } from "@/components/editorial"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { clientLogos } from "@/lib/client-logos"
import { servicesWithPage } from "@/lib/service-pages"
import { sharedOpenGraph } from "@/lib/seo"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.id"

const description =
  "Jasa pembuatan website di Semarang mulai Rp500 ribu: company profile, toko online, landing page, hingga aplikasi web custom. Tim lokal, respons awal kurang dari 2 jam. Konsultasi gratis."

export const metadata: Metadata = {
  alternates: { canonical: "/jasa-pembuatan-website-semarang" },
  title: "Jasa Pembuatan Website Semarang untuk UMKM & Instansi | Meow Labs",
  description,
  keywords: [
    "jasa pembuatan website semarang",
    "jasa website semarang",
    "web developer semarang",
    "jasa web design semarang",
    "website murah semarang",
    "web development semarang",
    "programmer website semarang",
  ],
  openGraph: {
    ...sharedOpenGraph,
    title: "Jasa Pembuatan Website Semarang | Meow Labs",
    description,
    url: "/jasa-pembuatan-website-semarang",
  },
}

// Halaman ini membidik pencarian jasa website, jadi layanan non-website
// (integrasi AI) tidak ikut ditampilkan di daftar layanannya.
const websiteServices = servicesWithPage.filter((service) => service.slug !== "integrasi-ai")

const serviceAreas = ["Kota Semarang", "Kabupaten Semarang & Ungaran", "Kendal", "Demak", "Salatiga", "Grobogan"]

const localFaqs = [
  {
    question: "Berapa biaya jasa pembuatan website di Semarang?",
    answer:
      "Di Meow Labs, website mulai Rp500 ribu untuk 1-3 halaman, mulai Rp1,5 juta untuk company profile dan katalog yang lebih lengkap, dan mulai Rp4 juta untuk sistem atau aplikasi web custom. Harga final mengikuti scope yang disepakati saat konsultasi.",
  },
  {
    question: "Apakah harus bertemu langsung untuk membuat website?",
    answer:
      "Tidak harus. Sebagian besar proyek berjalan lancar lewat WhatsApp dan video call. Karena tim kami berbasis di Semarang, diskusi tatap muka bisa diatur untuk proyek yang membutuhkannya.",
  },
  {
    question: "Apakah melayani klien di luar Kota Semarang?",
    answer:
      "Ya. Kami melayani klien di Semarang dan sekitarnya seperti Ungaran, Kendal, Demak, Salatiga, dan Grobogan, serta klien dari kota lain secara online.",
  },
  {
    question: "Berapa lama website bisa online?",
    answer:
      "Landing page dan website sederhana umumnya tayang dalam 3-5 hari kerja. Company profile dan toko online 7-14 hari kerja, sedangkan sistem custom mengikuti milestone yang disepakati.",
  },
]

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Pembuatan Website Semarang",
    serviceType: "Website Development",
    description,
    url: `${siteUrl}/jasa-pembuatan-website-semarang`,
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
    areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
    offers: {
      "@type": "Offer",
      price: "500000",
      priceCurrency: "IDR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
]

export default function JasaPembuatanWebsiteSemarang() {
  const whatsappHref = buildWhatsAppUrl("Halo admin Meow Labs, saya dari Semarang dan ingin konsultasi pembuatan website.")

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <PageHeader
        eyebrow="// Tim lokal di Semarang"
        title="Jasa Pembuatan Website di Semarang"
        intro="Meow Labs adalah studio web dan aplikasi yang berbasis di Semarang. Kami membuat website company profile, toko online, landing page, sampai sistem custom untuk UMKM, sekolah, rumah sakit, dan instansi di Jawa Tengah, mulai dari Rp500 ribu."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
            Konsultasi Gratis
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#pricing" className={buttonSecondary}>
            Lihat Paket Harga
          </a>
        </div>
      </PageHeader>

      <section className="border-b border-rule">
        <div className="ml-container py-12">
          <p className="ml-eyebrow text-ink-muted">Klien yang pernah bekerja sama dengan Meow Labs</p>
          <ul className="mt-6 grid grid-cols-2 border-l border-t border-rule sm:grid-cols-4 lg:grid-cols-8">
            {clientLogos.map((client) => (
              <li
                key={client.name}
                className="flex aspect-[3/2] items-center justify-center border-b border-r border-rule bg-paper-light p-4"
              >
                <Image
                  src={client.url}
                  alt={`Logo ${client.name}`}
                  width={96}
                  height={48}
                  className="max-h-10 w-auto object-contain opacity-80 grayscale"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <SectionHeading
            eyebrow="// Layanan"
            title="Layanan website untuk bisnis di Semarang."
            description="Pilih titik mulai yang paling sesuai. Setiap layanan punya halaman detail berisi fitur, harga, dan timeline."
          />
          <ul className="mt-12 grid border-t border-ink sm:grid-cols-2">
            {websiteServices.map((service) => (
              <li key={service.slug} className="border-b border-rule sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
                <Link href={`/layanan/${service.slug}`} className="group block py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-medium text-ink group-hover:underline">{service.id.title}</h3>
                    <span className="ml-eyebrow text-forest">{service.id.priceRange}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-muted">{service.id.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="ml-eyebrow text-ink-muted">{"// Kenapa lokal"}</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] text-ink">
              Kenapa memilih tim web lokal?
            </h2>
            <ul className="mt-8 border-t border-rule">
              {[
                {
                  title: "Paham konteks bisnis lokal.",
                  body: "Kami mengerti cara pelanggan di Semarang mencari dan memilih jasa, jadi struktur dan bahasa website disesuaikan dengan mereka.",
                },
                {
                  title: "Mudah dihubungi.",
                  body: "Admin aktif setiap hari pukul 08:00-22:00 WIB dengan respons awal kurang dari 2 jam.",
                },
                {
                  title: "Bisa bertemu bila perlu.",
                  body: "Untuk proyek yang lebih besar, diskusi tatap muka di Semarang bisa diatur.",
                },
              ].map((item) => (
                <li key={item.title} className="border-b border-rule py-5 text-ink-muted">
                  <span className="font-medium text-ink">{item.title}</span> {item.body}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[4px] bg-ink p-8 text-paper-light lg:col-span-5 sm:p-10">
            <p className="ml-eyebrow text-dark-muted">{"// Area layanan"}</p>
            <ul className="mt-6 space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={area} className="flex gap-4 border-b border-paper-light/15 pb-3 last:border-b-0">
                  <span className="ml-eyebrow pt-1 text-dark-muted">{String(index + 1).padStart(2, "0")}</span>
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-dark-muted">Klien dari kota lain dilayani penuh secara online.</p>
          </div>
        </div>
      </section>

      <PricingSection />
      <ProcessSection showDurations={false} />

      <section className="border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="ml-eyebrow text-ink-muted">{"// FAQ"}</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1] text-ink">
              Pertanyaan seputar jasa website di Semarang.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={localFaqs} />
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
