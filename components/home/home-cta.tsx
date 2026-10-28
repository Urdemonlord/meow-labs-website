import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { GridDisc, PlusMark } from "@/components/ornaments"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function HomeCta() {
  return (
    <section className="bg-ink text-paper-light">
      <div className="ml-container ml-section grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="ml-eyebrow text-dark-muted">08 // Kolaborasi</p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98]">
            Mari membangun sesuatu bersama.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-dark-muted">
            Ceritakan apa yang ingin Anda buat, perbaiki, atau otomatiskan. Kita cari langkah berikutnya yang paling masuk
            akal bersama. Konsultasi awal gratis.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl("Halo MeowLabs, saya ingin mendiskusikan proyek.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-paper-light px-5 py-3.5 font-medium text-ink transition-colors hover:bg-paper"
            >
              Diskusikan via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:admin@meowlabs.id"
              className="inline-flex items-center justify-center rounded-[3px] border border-paper-light/50 px-5 py-3.5 font-medium transition-colors hover:border-paper-light"
            >
              admin@meowlabs.id
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[460px]">
            <GridDisc className="absolute -right-6 -top-8 h-24 w-24 sm:h-28 sm:w-28" />
            <PlusMark className="absolute -left-8 top-6 h-6 w-6 text-paper-light/60" />
            <div className="relative aspect-[42/34] overflow-hidden rounded-[4px]">
              <Image src="/art/cats.webp" alt="" fill loading="lazy" sizes="460px" className="object-cover" />
            </div>
            <div className="relative -mt-10 ml-auto mr-[-1rem] aspect-[295/250] w-40 overflow-hidden rounded-[4px] border-4 border-ink sm:w-48">
              <Image src="/art/stupa.webp" alt="" fill loading="lazy" sizes="192px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
