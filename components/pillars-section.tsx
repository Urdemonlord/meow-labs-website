"use client"

import Link from "next/link"
import { ArrowRight, Boxes, FlaskConical, Workflow } from "lucide-react"
import { useUiPreferences } from "./ui-preferences-provider"

// Tiga pilar arah MeowLabs: engineering untuk klien (sumber pendapatan),
// produk sendiri (aset jangka panjang), dan riset/open source (reputasi).
const pillarCopy = {
  id: {
    eyebrow: "Cara Meow Labs bekerja",
    title: "Satu studio, tiga pilar",
    description:
      "Meow Labs adalah studio teknologi independen dari Semarang. Proyek klien membiayai produk dan riset kami, dan pelajaran dari produk serta riset membuat proyek klien lebih baik.",
    pillars: [
      {
        icon: Workflow,
        label: "Engineering",
        title: "Applied AI & Engineering",
        body: "Kami membangun sistem untuk bisnis: website, aplikasi, dan AI yang terhubung ke WhatsApp, database, dan proses operasional. Nilainya diukur dari masalah yang selesai, bukan baris kode.",
        points: ["Integrasi AI & otomasi", "Website dan aplikasi web", "Pemeliharaan dan monitoring"],
        cta: "Lihat layanan integrasi AI",
        href: "/layanan/integrasi-ai",
      },
      {
        icon: Boxes,
        label: "Products",
        title: "MeowLabs Products",
        body: "Produk yang kami bangun dan jalankan sendiri. Kami sengaja fokus pada sedikit produk yang menyelesaikan masalah nyata dan dipakai berulang.",
        points: ["Tool developer dan infrastruktur", "Aplikasi bisnis", "Tool belajar dan karier"],
        cta: "Lihat semua produk",
        href: "/produk",
      },
      {
        icon: FlaskConical,
        label: "Research",
        title: "Research & Open Source",
        body: "Eksperimen AI agent, keamanan AI, dan infrastruktur yang efisien. Setiap eksperimen harus menghasilkan sesuatu yang konkret: kode, benchmark, artikel, atau demo.",
        points: ["Keamanan AI agent", "Evaluasi model dan biaya inferensi", "AI untuk bisnis Indonesia"],
        cta: "Baca catatan teknis",
        href: "/blog",
      },
    ],
  },
  en: {
    eyebrow: "How Meow Labs works",
    title: "One studio, three pillars",
    description:
      "Meow Labs is an independent technology studio from Semarang, Indonesia. Client work funds our products and research, and what we learn from products and research makes client work better.",
    pillars: [
      {
        icon: Workflow,
        label: "Engineering",
        title: "Applied AI & Engineering",
        body: "We build systems for businesses: websites, apps, and AI connected to WhatsApp, databases, and day-to-day operations. Value is measured by problems solved, not lines of code.",
        points: ["AI integration & automation", "Websites and web apps", "Maintenance and monitoring"],
        cta: "See AI integration service",
        href: "/layanan/integrasi-ai",
      },
      {
        icon: Boxes,
        label: "Products",
        title: "MeowLabs Products",
        body: "Products we build and run ourselves. We deliberately focus on a few products that solve real problems and get used again and again.",
        points: ["Developer and infrastructure tools", "Business apps", "Learning and career tools"],
        cta: "See all products",
        href: "/produk",
      },
      {
        icon: FlaskConical,
        label: "Research",
        title: "Research & Open Source",
        body: "Experiments in AI agents, AI security, and efficient infrastructure. Every experiment should ship something concrete: code, a benchmark, an article, or a demo.",
        points: ["AI agent security", "Model evaluation and inference cost", "AI for Indonesian businesses"],
        cta: "Read technical notes",
        href: "/blog",
      },
    ],
  },
} as const

export function PillarsSection() {
  const { locale } = useUiPreferences()
  const copy = pillarCopy[locale]

  return (
    <section id="pilar" className="border-y border-border bg-muted/20 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">{copy.eyebrow}</span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">{copy.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <article key={pillar.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} / {pillar.label}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-pretty text-muted-foreground">{pillar.body}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pillar.href}
                  className="mt-6 inline-flex items-center font-semibold text-primary hover:underline"
                >
                  {pillar.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
