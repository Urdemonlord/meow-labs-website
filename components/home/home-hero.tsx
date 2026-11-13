import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { GridDisc, GridTile, PlusMark } from "@/components/ornaments"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-rule">
      <div className="ml-container grid items-center gap-14 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-6">
          <p className="ml-eyebrow ml-rise text-ink-muted">01 // Studio teknologi independen</p>
          <h1 className="ml-lift mt-6 font-display [--ml-delay:80ms] text-[clamp(2.75rem,6.4vw,5.25rem)] leading-[0.95] tracking-tight text-ink">
            Kami membangun teknologi untuk Indonesia yang <em className="text-forest">lebih maju.</em>
          </h1>
          <p className="ml-lift mt-7 max-w-md text-pretty text-lg leading-relaxed text-ink-muted [--ml-delay:160ms]">
            Website, aplikasi, dan sistem AI untuk bisnis dan institusi, dikerjakan dari Semarang. Website UMKM mulai
            Rp500 ribu.
          </p>
          <div className="ml-rise mt-9 flex flex-col gap-3 sm:flex-row [--ml-delay:240ms]">
            <a
              href={buildWhatsAppUrl("Halo MeowLabs, saya ingin mendiskusikan proyek.", "beranda, bagian atas")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-5 py-3.5 font-medium text-paper-light shadow-[4px_4px_0_var(--vermilion)] transition-colors hover:bg-ink/85"
            >
              Diskusikan Proyek
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] border-2 border-ink px-5 py-3.5 font-medium text-ink shadow-[4px_4px_0_var(--ink)] transition-colors hover:bg-ink hover:text-paper-light"
            >
              Lihat Layanan
            </a>
          </div>
          <p className="ml-eyebrow ml-rise mt-10 text-ink-muted [--ml-delay:320ms]">Semarang, Indonesia</p>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[560px]">
            <GridDisc className="ml-spin-slow absolute -left-6 -top-6 h-24 w-24 sm:-left-10 sm:-top-10 sm:h-32 sm:w-32" />
            <GridTile className="ml-float absolute -bottom-6 -right-4 h-20 w-20 sm:-right-8 sm:h-28 sm:w-28" />
            <PlusMark className="ml-svg-spin absolute -right-2 top-8 h-6 w-6 text-ink sm:-right-10" />
            <PlusMark className="ml-svg-spin absolute -left-8 bottom-16 hidden h-5 w-5 text-ink sm:block" />
            <div className="relative aspect-[64/56] overflow-hidden rounded-[4px] border-2 border-ink shadow-[8px_8px_0_0_var(--ink)]">
              <Image
                src="/art/hero-cat.webp"
                alt="Maskot kucing Meow Labs sedang ngoding di depan laptop"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 560px"
                className="ml-settle object-cover"
              />
              <Image
                src="/brand/meowlabs-mark-paper.webp"
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
