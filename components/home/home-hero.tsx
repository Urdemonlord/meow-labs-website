import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { GridDisc, GridTile, PlusMark } from "@/components/ornaments"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-rule">
      <div className="ml-container grid items-center gap-14 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
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
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-5 py-3.5 font-medium text-paper-light transition-colors hover:bg-ink/85"
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
          <div className="relative mx-auto w-full max-w-[560px]">
            <GridDisc className="absolute -left-6 -top-6 h-24 w-24 sm:-left-10 sm:-top-10 sm:h-32 sm:w-32" />
            <GridTile className="absolute -bottom-6 -right-4 h-20 w-20 sm:-right-8 sm:h-28 sm:w-28" />
            <PlusMark className="absolute -right-2 top-8 h-6 w-6 text-ink sm:-right-10" />
            <PlusMark className="absolute -left-8 bottom-16 hidden h-5 w-5 text-ink sm:block" />
            <div className="relative aspect-[64/56] overflow-hidden rounded-[4px] shadow-[0_24px_60px_-30px_rgba(23,25,22,0.6)]">
              <Image
                src="/art/hero-temple.webp"
                alt=""
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <Image
                src="/brand/meowlabs-mark-paper.png"
                alt=""
                width={96}
                height={96}
                className="absolute bottom-5 left-5 h-14 w-14 drop-shadow-lg sm:h-20 sm:w-20"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="ml-eyebrow mx-auto mt-10 flex max-w-[560px] justify-between gap-4 text-[0.65rem] text-ink-muted"
          >
            <span>Teknologi · Kreativitas · Dampak nyata</span>
            <span>-7.0051° S, 110.4381° E</span>
          </div>
        </div>
      </div>
    </section>
  )
}
