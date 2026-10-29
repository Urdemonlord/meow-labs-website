import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { WorkCard } from "@/components/work-card"
import { featuredWorks } from "@/lib/works"

// Logo klien tampil di strip bawah hero; section ini menonjolkan jangkauan
// klien lewat peta dan beberapa karya pilihan.
export function HomeClients() {
  return (
    <section id="klien" className="border-b border-rule">
      <div className="ml-container ml-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="ml-reveal lg:col-span-4">
            <p className="ml-eyebrow text-ink-muted">07 // Klien</p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-ink">
              Dipercaya UMKM, institusi, dan perusahaan.
            </h2>
            <p className="mt-6 text-ink-muted">Lebih dari 30 website klien sudah online.</p>
          </div>
          <figure className="ml-reveal lg:col-span-8">
            <div className="relative aspect-[3/1] overflow-hidden rounded-[4px] bg-ink">
              <Image
                src="/art/indonesia-map.webp"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain p-3"
              />
            </div>
            <figcaption className="ml-eyebrow mt-3 text-ink-muted">Semarang → Indonesia</figcaption>
          </figure>
        </div>

        <div className="ml-reveal mt-20 flex items-end justify-between gap-6 border-b border-ink pb-5">
          <h3 className="ml-eyebrow text-ink-muted">Karya pilihan</h3>
          <Link href="/karya" className="inline-flex items-center gap-1 text-sm text-ink hover:underline">
            Semua karya
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="ml-reveal mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWorks.map((work) => (
            <li key={work.slug}>
              <WorkCard
                name={work.name}
                url={work.url}
                image={work.image}
                description={work.description}
                label={work.category}
                headingLevel="h4"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
