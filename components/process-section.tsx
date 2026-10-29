import { ArrowUpRight } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { SectionHeading } from "./editorial"

interface ProcessSectionProps {
  // Durasi per tahap menggambarkan proyek custom. Halaman dengan timeline
  // lebih pendek (landing page, paket Starter) menyembunyikannya.
  showDurations?: boolean
  // Nama layanan untuk judul CTA dan pesan WhatsApp, misalnya
  // "Integrasi AI & Otomasi". Default "Website".
  projectName?: string
}

const processes = [
  {
    title: "Konsultasi dan Analisis",
    description: "Kami memetakan tujuan bisnis, audiens, dan scope agar rencana eksekusi jelas sejak awal.",
    duration: "1-2 hari",
    features: ["Analisis kebutuhan bisnis", "Riset kompetitor", "Penentuan target audiens", "Arah konten dan SEO"],
  },
  {
    title: "Desain dan Wireframe",
    description: "Antarmuka dirancang agar selaras dengan identitas brand dan tetap nyaman di semua perangkat.",
    duration: "3-5 hari",
    features: ["Perencanaan UI dan UX", "Wireframe dan layout", "Struktur responsif", "Konsistensi brand"],
  },
  {
    title: "Development",
    description: "Implementasi dibuat dengan fokus pada arsitektur rapi, performa cepat, dan maintainability.",
    duration: "5-15 hari",
    features: ["Codebase rapi", "Pendekatan mobile-first", "SEO baseline", "Security baseline"],
  },
  {
    title: "Testing dan Launch",
    description: "Kami lakukan QA, validasi lintas perangkat, lalu deploy ke production dengan verifikasi final.",
    duration: "2-3 hari",
    features: ["Testing lintas browser", "Validasi mobile", "Cek performa", "Deploy go-live"],
  },
]

const benefits = [
  { title: "Timeline jelas", description: "Milestone dan fase delivery dikomunikasikan dengan jelas." },
  { title: "Tim fokus", description: "Tim yang fokus menangani project Anda dari awal sampai launch." },
  { title: "Quality assurance", description: "Setiap rilis divalidasi sebelum ditayangkan." },
  { title: "Dukungan lanjutan", description: "Dukungan tetap berjalan setelah launch untuk stabilitas dan update." },
]

export function ProcessSection({ showDurations = true, projectName = "Website" }: ProcessSectionProps) {
  const whatsappHref = buildWhatsAppUrl(`Halo Meow Labs, saya ingin memulai project ${projectName}. Mohon info prosesnya.`)

  return (
    <section id="process" className="border-b border-rule">
      <div className="ml-container ml-section">
        <SectionHeading
          eyebrow="// Proses kerja"
          title="Bagaimana proses kami bekerja."
          description="Alur kerja terstruktur agar delivery tetap terukur, efisien, dan sesuai target bisnis."
        />

        <ol className="mt-14 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {processes.map((process, index) => (
            <li
              key={process.title}
              className="ml-reveal border-b border-rule py-8 sm:px-6 sm:[&:nth-child(odd)]:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:pl-6 lg:first:pl-0"
            >
              <div className="flex items-center justify-between">
                <span className="ml-eyebrow text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
                {showDurations && <span className="ml-eyebrow text-forest">{process.duration}</span>}
              </div>
              <h3 className="mt-4 text-xl font-medium text-ink">{process.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{process.description}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-ink-muted">
                {process.features.map((feature) => (
                  <li key={feature} className="flex items-baseline gap-2">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] bg-ink" />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-paper-light p-6">
              <h4 className="ml-eyebrow text-ink">{benefit.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-ink pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Siap memulai project {projectName}?
            </h3>
            <p className="mt-3 max-w-xl text-pretty text-ink-muted">
              Diskusikan kebutuhan Anda untuk menentukan scope, timeline, dan rencana eksekusi terbaik.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[3px] bg-ink px-5 py-3.5 font-medium text-paper-light transition-colors hover:bg-ink/85"
          >
            Mulai Konsultasi Gratis
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
