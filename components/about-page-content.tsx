"use client"

import { useUiPreferences } from "@/components/ui-preferences-provider"
import { Button } from "@/components/ui/button"

const aboutCopy = {
  id: {
    badge: "Tentang Meowlabs.id",
    title: "Studio teknologi independen dari Indonesia",
    intro:
      "Meow Labs membangun produk AI-native, sistem yang aman, dan software yang berguna dari Semarang. Kami mengerjakan proyek untuk klien, membangun produk sendiri, dan mempublikasikan eksperimen teknologi kami.",
    sectionTitle: "Profil dan Pendekatan Kerja",
    sectionBody1:
      "Meow Labs didirikan oleh Hasrinata Arya Afendi, mahasiswa Universitas Muhammadiyah Semarang (Unimus), sebagai jasa pembuatan website untuk UMKM. Sekarang kami berkembang menjadi studio AI engineering dan produk digital, tanpa meninggalkan layanan website yang menjadi awal kami.",
    sectionBody2:
      "Di era AI, membuat website, dashboard, atau chatbot sederhana makin mudah. Karena itu kami tidak menjual baris kode. Nilai yang kami tawarkan ada pada memahami masalah, merancang sistem, mengintegrasikan teknologi, menjaga keandalan, dan menghasilkan dampak bisnis.",
    pillarsTitle: "Tiga pilar Meow Labs",
    pillars: [
      {
        title: "Engineering",
        body: "Membangun sistem untuk pelanggan: website, aplikasi, dan integrasi AI ke proses operasional. Ini yang membiayai studio.",
      },
      {
        title: "Products",
        body: "Mengembangkan sedikit produk unggulan yang menyelesaikan masalah nyata dan dipakai berulang, bukan sebanyak mungkin produk.",
      },
      {
        title: "Research",
        body: "Bereksperimen dengan AI agent, keamanan AI, dan infrastruktur, lalu memublikasikan hasilnya sebagai kode, benchmark, atau artikel.",
      },
    ],
    principlesTitle: "Prinsip yang kami pegang",
    principles: [
      "Mulai dari masalah pelanggan, bukan dari tren teknologi.",
      "Tidak memaksakan AI kalau software biasa sudah cukup.",
      "Mengukur hasil dari masalah yang selesai dan pengguna yang kembali, bukan jumlah fitur.",
      "Keamanan dan keandalan dirancang sejak awal, bukan ditambal belakangan.",
    ],
    identityTitle: "Identitas dari Indonesia",
    identityBody:
      "Arah visual Meow Labs dibangun dari logo kucing, kolase budaya Indonesia, tipografi editorial, dan dokumentasi teknis. Budaya Indonesia menjadi perspektif studio, sementara produk kami tetap dirancang untuk relevan bagi penggunanya.",
    ctaTitle: "Punya masalah yang ingin diselesaikan?",
    ctaBody:
      "Konsultasi awal gratis untuk membahas masalahnya, lalu kami rekomendasikan solusi yang paling masuk akal: website, aplikasi, otomasi, atau integrasi AI.",
    cta: "Konsultasi via WhatsApp",
    whatsappText: "Halo Meowlabs.id, saya ingin konsultasi project",
  },
  en: {
    badge: "About Meowlabs.id",
    title: "An independent technology studio from Indonesia",
    intro:
      "Meow Labs builds AI-native products, secure systems, and useful software from Semarang, Indonesia. We deliver client projects, build our own products, and publish our technology experiments.",
    sectionTitle: "Founder and Working Approach",
    sectionBody1:
      "Meow Labs was founded by Hasrinata Arya Afendi, a student at Universitas Muhammadiyah Semarang (Unimus), as a website service for small businesses. It is now growing into an AI engineering and digital product studio, while keeping the website service it started with.",
    sectionBody2:
      "In the AI era, building a website, dashboard, or simple chatbot keeps getting easier. So we do not sell lines of code. Our value is in understanding the problem, designing the system, integrating technology, keeping it reliable, and creating business impact.",
    pillarsTitle: "The three Meow Labs pillars",
    pillars: [
      {
        title: "Engineering",
        body: "Building systems for clients: websites, apps, and AI integrated into daily operations. This is what funds the studio.",
      },
      {
        title: "Products",
        body: "Developing a few flagship products that solve real problems and get used repeatedly, rather than as many products as possible.",
      },
      {
        title: "Research",
        body: "Experimenting with AI agents, AI security, and infrastructure, then publishing results as code, benchmarks, or articles.",
      },
    ],
    principlesTitle: "Principles we hold",
    principles: [
      "Start from the customer's problem, not from technology trends.",
      "Do not force AI when plain software is enough.",
      "Measure results by problems solved and returning users, not feature count.",
      "Design for security and reliability from day one, not as an afterthought.",
    ],
    identityTitle: "An identity from Indonesia",
    identityBody:
      "The Meow Labs visual direction is built from the cat logo, Indonesian cultural collage, editorial typography, and technical documentation. Indonesian culture shapes the studio's perspective, while our products are designed to stay relevant to the people who use them.",
    ctaTitle: "Have a problem worth solving?",
    ctaBody:
      "Free initial consultation to understand the problem, then we recommend the most sensible solution: a website, an app, automation, or AI integration.",
    cta: "Consult via WhatsApp",
    whatsappText: "Hello Meowlabs.id, I want to discuss a project",
  },
} as const

export function AboutPageContent() {
  const { locale } = useUiPreferences()
  const copy = aboutCopy[locale]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background pb-20 pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              {copy.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{copy.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{copy.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h2 className="text-3xl font-semibold">{copy.sectionTitle}</h2>
            <p className="text-lg text-muted-foreground">{copy.sectionBody1}</p>
            <p className="text-lg text-muted-foreground">{copy.sectionBody2}</p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="text-center text-3xl font-semibold">{copy.pillarsTitle}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {copy.pillars.map((pillar, index) => (
                <div key={pillar.title} className="rounded-2xl border border-border bg-card/70 p-6">
                  <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-muted-foreground">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">{copy.principlesTitle}</h2>
              <ul className="mt-5 space-y-3">
                {copy.principles.map((principle) => (
                  <li key={principle} className="flex items-start text-muted-foreground">
                    <div className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">{copy.identityTitle}</h2>
              <p className="mt-5 text-muted-foreground">{copy.identityBody}</p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card/70 p-6 text-center sm:p-8">
            <h3 className="text-2xl font-semibold text-foreground">{copy.ctaTitle}</h3>
            <p className="mt-3 text-muted-foreground">{copy.ctaBody}</p>
            <div className="mt-6">
              <a
                href={`https://wa.me/62895386288683?text=${encodeURIComponent(copy.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-11 bg-primary text-primary-foreground hover:bg-primary/90">{copy.cta}</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
