import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
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
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Tim lokal di Semarang
          </span>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-5xl">
            Jasa Pembuatan Website di Semarang
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
            Meow Labs adalah studio web dan aplikasi yang berbasis di Semarang. Kami membuat website company profile,
            toko online, landing page, sampai sistem custom untuk UMKM, sekolah, rumah sakit, dan instansi di Jawa
            Tengah, mulai dari Rp500 ribu.
          </p>
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
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Lihat Paket Harga
            </a>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-muted-foreground">
            Klien yang pernah bekerja sama dengan Meow Labs
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {clientLogos.map((client) => (
              <li
                key={client.name}
                className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card p-4"
              >
                <Image src={client.url} alt={`Logo ${client.name}`} width={64} height={64} className="h-auto max-w-full" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Layanan website untuk bisnis di Semarang</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Pilih titik mulai yang paling sesuai. Setiap layanan punya halaman detail berisi fitur, harga, dan timeline.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {servicesWithPage.map((service) => (
              <Link
                key={service.slug}
                href={`/layanan/${service.slug}`}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{service.id.title}</h3>
                  <span className="text-sm text-primary">{service.id.priceRange}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{service.id.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Kenapa memilih tim web lokal?</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Paham konteks bisnis lokal.</span> Kami mengerti cara
                pelanggan di Semarang mencari dan memilih jasa, jadi struktur dan bahasa website disesuaikan dengan
                mereka.
              </li>
              <li>
                <span className="font-semibold text-foreground">Mudah dihubungi.</span> Admin aktif setiap hari pukul
                08:00-22:00 WIB dengan respons awal kurang dari 2 jam.
              </li>
              <li>
                <span className="font-semibold text-foreground">Bisa bertemu bila perlu.</span> Untuk proyek yang lebih
                besar, diskusi tatap muka di Semarang bisa diatur.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Area layanan</h2>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Klien dari kota lain dilayani penuh secara online.</p>
          </div>
        </div>
      </section>

      <PricingSection />
      <ProcessSection showDurations={false} />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Pertanyaan seputar jasa website di Semarang</h2>
          <div className="mt-6 space-y-3">
            {localFaqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">{faq.question}</summary>
                <p className="mt-3 text-pretty text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
