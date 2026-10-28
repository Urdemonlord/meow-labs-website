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
          {/* Maskot ditampilkan seukuran aslinya (326px) agar tidak buram. */}
          <div className="relative mx-auto w-full max-w-[326px]">
            <GridDisc className="absolute -right-2 -top-10 h-20 w-20 sm:-right-10 sm:-top-12 sm:h-28 sm:w-28" />
            <PlusMark className="absolute left-0 top-2 h-6 w-6 text-paper-light/60 sm:-left-10 sm:top-6" />
            <Image
              src="/art/mascot-laptop.webp"
              alt=""
              width={326}
              height={250}
              loading="lazy"
              className="relative h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
