"use client"

import { useUiPreferences } from "@/components/ui-preferences-provider"
import { Button } from "@/components/ui/button"

const aboutCopy = {
  id: {
    badge: "Tentang Meowlabs.id",
    title: "UMKM Jasa Website oleh Mahasiswa Unimus",
    intro:
      "Meowlabs.id adalah UMKM jasa pembuatan website yang dibangun oleh mahasiswa Universitas Muhammadiyah Semarang (Unimus). Fokus kami membantu UMKM, personal brand, dan organisasi kecil punya website yang rapi, cepat, dan siap dipakai untuk kebutuhan bisnis.",
    sectionTitle: "Profil dan Pendekatan Kerja",
    sectionBody1:
      "Founder Meowlabs.id adalah Hasrinata Arya Afendi. Kami menggabungkan proses development modern, automation, dan AI assistance untuk mempercepat delivery tanpa mengorbankan kualitas struktur kode maupun pengalaman pengguna.",
    sectionBody2:
      "Setiap project dikerjakan dengan alur yang jelas: discovery kebutuhan, desain yang relevan, implementasi teknis, lalu optimasi performa dan handover yang mudah dipahami klien.",
    ctaTitle: "Siap diskusi kebutuhan website?",
    ctaBody:
      "Konsultasi awal gratis untuk membahas scope, timeline, dan rekomendasi paket yang paling sesuai.",
    cta: "Konsultasi via WhatsApp",
  },
  en: {
    badge: "About Meowlabs.id",
    title: "Student-led Website Service for Small Businesses",
    intro:
      "Meowlabs.id is a small business website service founded by a student from Universitas Muhammadiyah Semarang (Unimus). We help small businesses, personal brands, and local organizations launch clean, fast, and practical websites for real business needs.",
    sectionTitle: "Founder and Working Approach",
    sectionBody1:
      "Meowlabs.id was founded by Hasrinata Arya Afendi. We combine modern development workflow, automation, and AI assistance to improve delivery speed while keeping code quality and user experience consistent.",
    sectionBody2:
      "Each project follows a clear path: requirement discovery, relevant design direction, technical implementation, then performance optimization and an easy client handover.",
    ctaTitle: "Ready to discuss your website needs?",
    ctaBody:
      "Free initial consultation to align scope, timeline, and the most suitable package recommendation.",
    cta: "Consult via WhatsApp",
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

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card/70 p-6 text-center sm:p-8">
            <h3 className="text-2xl font-semibold text-foreground">{copy.ctaTitle}</h3>
            <p className="mt-3 text-muted-foreground">{copy.ctaBody}</p>
            <div className="mt-6">
              <a
                href="https://wa.me/6285117170198?text=Halo%20Meowlabs.id%2C%20saya%20ingin%20konsultasi%20website"
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
