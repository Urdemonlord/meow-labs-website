"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Clock,
  Code2,
  Headphones,
  MessageSquare,
  PenTool,
  Rocket,
  Users,
} from "lucide-react"
import { useUiPreferences } from "./ui-preferences-provider"

export function ProcessSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      isEn
        ? "Hello Meow Labs, I want to start a website project. Please share the process."
        : "Halo Meow Labs, saya ingin memulai project website. Mohon info prosesnya."
    )
    window.open(`https://wa.me/6285117170198?text=${message}`, "_blank")
  }

  const processes = [
    {
      step: "01",
      title: isEn ? "Consultation and Discovery" : "Konsultasi dan Analisis",
      description: isEn
        ? "We map business goals, audience, and scope to define a realistic execution plan."
        : "Kami memetakan tujuan bisnis, audiens, dan scope agar rencana eksekusi jelas sejak awal.",
      icon: MessageSquare,
      duration: isEn ? "1-2 days" : "1-2 hari",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      features: isEn
        ? ["Business needs mapping", "Competitor review", "Audience definition", "Content and SEO direction"]
        : ["Analisis kebutuhan bisnis", "Riset kompetitor", "Penentuan target audiens", "Arah konten dan SEO"],
    },
    {
      step: "02",
      title: isEn ? "Design and Wireframe" : "Desain dan Wireframe",
      description: isEn
        ? "The interface is designed to match brand identity with strong readability across devices."
        : "Antarmuka dirancang agar selaras dengan identitas brand dan tetap nyaman di semua perangkat.",
      icon: PenTool,
      duration: isEn ? "3-5 days" : "3-5 hari",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      features: isEn
        ? ["UI and UX planning", "Wireframe and layout", "Responsive structure", "Brand consistency"]
        : ["Perencanaan UI dan UX", "Wireframe dan layout", "Struktur responsif", "Konsistensi brand"],
    },
    {
      step: "03",
      title: isEn ? "Development" : "Development",
      description: isEn
        ? "Build implementation focuses on clean architecture, speed, and long-term maintainability."
        : "Implementasi dibuat dengan fokus pada arsitektur rapi, performa cepat, dan maintainability.",
      icon: Code2,
      duration: isEn ? "5-15 days" : "5-15 hari",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      features: isEn
        ? ["Clean codebase", "Mobile-first approach", "SEO baseline", "Security baseline"]
        : ["Codebase rapi", "Pendekatan mobile-first", "SEO baseline", "Security baseline"],
    },
    {
      step: "04",
      title: isEn ? "Testing and Launch" : "Testing dan Launch",
      description: isEn
        ? "We run QA checks, cross-device validation, and then deploy to production with final verification."
        : "Kami lakukan QA, validasi lintas perangkat, lalu deploy ke production dengan verifikasi final.",
      icon: Rocket,
      duration: isEn ? "2-3 days" : "2-3 hari",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      features: isEn
        ? ["Cross-browser testing", "Mobile validation", "Performance checks", "Go-live deployment"]
        : ["Testing lintas browser", "Validasi mobile", "Cek performa", "Deploy go-live"],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: isEn ? "Clear Timeline" : "Timeline Jelas",
      description: isEn
        ? "Milestones and delivery phases are communicated clearly."
        : "Milestone dan fase delivery dikomunikasikan dengan jelas.",
    },
    {
      icon: Users,
      title: isEn ? "Dedicated Team" : "Tim Fokus",
      description: isEn
        ? "A focused team handles your project from start to launch."
        : "Tim yang fokus menangani project Anda dari awal sampai launch.",
    },
    {
      icon: CheckCircle,
      title: isEn ? "Quality Assurance" : "Quality Assurance",
      description: isEn
        ? "Each release is validated before going live."
        : "Setiap rilis divalidasi sebelum website ditayangkan.",
    },
    {
      icon: Headphones,
      title: isEn ? "Post-Launch Support" : "Dukungan Lanjutan",
      description: isEn
        ? "Support continues after launch for stability and updates."
        : "Dukungan tetap berjalan setelah launch untuk stabilitas dan update.",
    },
  ]

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? (
              <>
                How <span className="text-primary">Our Process</span> Works
              </>
            ) : (
              <>
                Bagaimana <span className="text-primary">Proses Kami</span> Bekerja
              </>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "A structured workflow to keep website delivery predictable, efficient, and aligned with business goals."
              : "Alur kerja terstruktur agar delivery website tetap terukur, efisien, dan sesuai target bisnis."}
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processes.map((process, index) => (
            <Card
              key={process.step}
              className="group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {process.step}
              </div>

              <CardContent className="pb-6 pt-8">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${process.bgColor} transition-transform group-hover:scale-110`}
                >
                  <process.icon className={`h-6 w-6 ${process.color}`} />
                </div>

                <h3 className="mb-2 font-semibold text-foreground">{process.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {process.description}
                </p>

                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-primary">{process.duration}</span>
                </div>

                <ul className="space-y-1">
                  {process.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {index < processes.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-primary to-transparent lg:block" />
              )}
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="mb-12 text-center text-2xl font-bold text-foreground">
            {isEn ? "Why This Process Works" : "Mengapa Proses Ini Efektif"}
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {isEn ? "Ready to Start Your Website Project?" : "Siap Memulai Project Website Anda?"}
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground text-pretty">
              {isEn
                ? "Talk with our team to define the best scope, timeline, and execution plan for your business."
                : "Diskusikan kebutuhan Anda bersama tim kami untuk menentukan scope, timeline, dan rencana eksekusi terbaik."}
            </p>
            <Button onClick={handleWhatsAppContact} size="lg" className="px-8 text-lg">
              {isEn ? "Start Free Consultation" : "Mulai Konsultasi Gratis"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
