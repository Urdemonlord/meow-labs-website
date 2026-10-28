import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

// Hanya artikel yang benar-benar ada di /blog/[id].
const notes = [
  {
    href: "/blog/1",
    title: "10 Tren Website Development 2025 untuk UMKM di Indonesia",
    date: "29 Sep 2025",
    category: "Web Development",
    image: "/art/arca-dewi.webp",
  },
  {
    href: "/blog/2",
    title: "Strategi SEO Lokal untuk Bisnis di Semarang",
    date: "20 Sep 2025",
    category: "SEO",
    image: "/art/mountain-small.webp",
  },
  {
    href: "/blog/3",
    title: "Website atau Aplikasi Mobile: Mana yang Tepat untuk UMKM?",
    date: "15 Sep 2025",
    category: "Bisnis",
    image: "/art/trees.webp",
  },
]

export function HomeNotes() {
  return (
    <section className="border-b border-rule">
      <div className="ml-container ml-section">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="ml-eyebrow text-ink-muted">07 // Catatan</p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-ink">
              Yang kami pelajari dari lapangan.
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-ink hover:underline">
            Semua catatan
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {notes.map((note) => (
            <Link key={note.href} href={note.href} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-ink">
                <Image
                  src={note.image}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="ml-eyebrow mt-4 text-ink-muted">
                {note.date} · {note.category}
              </p>
              <h3 className="mt-2 text-lg font-medium leading-snug text-ink group-hover:underline">{note.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
