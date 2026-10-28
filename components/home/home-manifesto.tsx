import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PlusMark } from "@/components/ornaments"

export function HomeManifesto() {
  return (
    <section className="bg-ink text-paper-light">
      <div className="ml-container ml-section grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="ml-eyebrow text-dark-muted">02 // Manifesto</p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98]">
            Teknologi adalah alat. Imaginasi adalah titik awal.
          </h2>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-dark-muted">
            Kami mulai dari masalah, bukan dari tren. Teknologi yang baik tidak cukup hanya dibangun: ia harus dipahami,
            diuji di alur kerja nyata, lalu benar-benar dipakai.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-paper-light/40 pb-1 text-sm hover:border-paper-light"
          >
            Tentang MeowLabs
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative ml-auto aspect-[29/31] w-full max-w-[440px] overflow-hidden rounded-[4px]">
            <Image
              src="/art/arca-head.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-0 aspect-square w-28 overflow-hidden rounded-full sm:w-36 lg:left-4">
            <Image src="/art/moon.webp" alt="" fill loading="lazy" sizes="144px" className="object-cover" />
          </div>
          <PlusMark className="absolute right-0 top-[-1.5rem] h-6 w-6 text-paper-light/60" />
        </div>
      </div>
    </section>
  )
}
