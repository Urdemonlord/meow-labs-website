import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-rule">
      <div className="ml-container grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-6">
          <p className="ml-eyebrow text-ink-muted">01 // Studio teknologi independen</p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6.4vw,5.25rem)] leading-[0.95] tracking-tight text-ink">
            Kami membangun teknologi untuk Indonesia yang <em className="text-forest">lebih mungkin.</em>
          </h1>
          <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-ink-muted">
            Website, aplikasi, dan sistem AI untuk bisnis dan institusi, dikerjakan dari Semarang. Website UMKM mulai
            Rp500 ribu.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl("Halo MeowLabs, saya ingin mendiskusikan proyek.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-forest px-5 py-3.5 font-medium text-paper-light transition-colors hover:bg-forest-dark"
            >
              Diskusikan Proyek
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-ink px-5 py-3.5 font-medium text-ink transition-colors hover:bg-ink hover:text-paper-light"
            >
              Lihat Layanan
            </a>
          </div>
          <p className="ml-eyebrow mt-10 text-ink-muted">Semarang, Indonesia</p>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[61/64] w-full max-w-[560px] overflow-hidden rounded-[4px]">
            <Image
              src="/art/hero.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            <Image
              src="/brand/meowlabs-mark-paper.png"
              alt=""
              width={96}
              height={96}
              className="absolute bottom-6 left-6 h-16 w-16 drop-shadow-lg sm:h-20 sm:w-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="ml-eyebrow mx-auto mt-3 flex max-w-[560px] justify-between gap-4 text-[0.65rem] text-ink-muted"
          >
            <span>Teknologi · Kreativitas · Dampak nyata</span>
            <span>-7.0051° S, 110.4381° E</span>
          </div>
        </div>
      </div>
    </section>
  )
}
