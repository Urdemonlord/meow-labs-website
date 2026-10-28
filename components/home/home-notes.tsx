import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

// Hanya artikel yang benar-benar ada di /blog/[id]. Ditampilkan sebagai
// kartu tipografi seperti publikasi teknis, tanpa gambar dekoratif.
const notes = [
  {
    href: "/blog/1",
    title: "10 Tren Website Development 2025 untuk UMKM di Indonesia",
    date: "29 Sep 2025",
    category: "Web Development",
    readTime: "6 menit",
  },
  {
    href: "/blog/2",
    title: "Strategi SEO Lokal untuk Bisnis di Semarang",
    date: "20 Sep 2025",
    category: "SEO",
    readTime: "8 menit",
  },
  {
    href: "/blog/3",
    title: "Website atau Aplikasi Mobile: Mana yang Tepat untuk UMKM?",
    date: "15 Sep 2025",
    category: "Bisnis",
    readTime: "7 menit",
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

        <div className="mt-12 grid border-t border-ink md:grid-cols-3">
          {notes.map((note, index) => (
            <Link
              key={note.href}
              href={note.href}
              className="group flex min-h-[260px] flex-col border-b border-rule py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="ml-eyebrow text-ink-muted">Catatan {String(index + 1).padStart(3, "0")}</span>
                <span className="ml-eyebrow text-forest">{note.category}</span>
              </div>
              <h3 className="mt-8 flex-1 font-display text-3xl leading-[1.05] text-ink group-hover:underline">
                {note.title}
              </h3>
              <div className="ml-eyebrow mt-8 flex items-center justify-between text-ink-muted">
                <span>
                  {note.date} · {note.readTime}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
