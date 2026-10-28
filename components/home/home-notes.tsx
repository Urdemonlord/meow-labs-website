import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { NoteCard } from "@/components/note-card"
import { blogPosts } from "@/lib/blog-posts"

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
          {blogPosts.map((post) => (
            <NoteCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
