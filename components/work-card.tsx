import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"

interface WorkCardProps {
  name: string
  url: string
  image: string
  description: string
  // Label di atas nama: kategori karya atau status proyek lab.
  label: ReactNode
  // Kalimat pendek di bawah nama, misalnya tagline proyek lab.
  tagline?: string
  headingLevel?: "h2" | "h3" | "h4"
  // Lebar gambar per breakpoint; default untuk grid tiga kolom.
  sizes?: string
}

// Kartu karya dan proyek lab: screenshot asli situsnya, lalu nama dan
// deskripsi singkat. Seluruh kartu menaut ke situs aslinya.
export function WorkCard({
  name,
  url,
  image,
  description,
  label,
  tagline,
  headingLevel = "h3",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: WorkCardProps) {
  const Heading = headingLevel
  const host = new URL(url).hostname.replace(/^www\./, "")

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border border-rule bg-paper-light">
        <Image
          src={image}
          alt=""
          fill
          loading="lazy"
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="ml-eyebrow mt-5 text-ink-muted">{label}</div>
      <Heading className="mt-3 font-display text-3xl leading-[1.05] text-ink group-hover:underline">{name}</Heading>
      {tagline && <p className="ml-eyebrow mt-2 text-ink-muted">{tagline}</p>}
      <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm text-ink">
        {host}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      <span className="sr-only">(buka di tab baru)</span>
    </a>
  )
}
