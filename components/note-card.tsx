import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-posts"

// Kartu catatan tipografi, dipakai di homepage, /blog, dan artikel terkait.
// `illustration` hanya diisi homepage; /blog tetap tanpa gambar.
export function NoteCard({
  post,
  showExcerpt = false,
  illustration,
}: {
  post: BlogPost
  showExcerpt?: boolean
  illustration?: React.ReactNode
}) {
  return (
    <Link
      href={post.href}
      className="group flex min-h-[260px] flex-col border-b border-rule py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
    >
      {illustration ? (
        <div className="mb-6 aspect-[5/3] overflow-hidden rounded-[4px] border border-rule transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {illustration}
        </div>
      ) : null}
      <div className="flex items-center justify-between">
        <span className="ml-eyebrow text-ink-muted">Catatan {String(post.id).padStart(3, "0")}</span>
        <span className="ml-eyebrow text-forest">{post.category}</span>
      </div>
      <h3 className="mt-8 font-display text-3xl leading-[1.05] text-ink group-hover:underline">{post.title}</h3>
      {showExcerpt && <p className="mt-4 text-pretty leading-relaxed text-ink-muted">{post.excerpt}</p>}
      <div className="ml-eyebrow mt-auto flex items-center justify-between pt-8 text-ink-muted">
        <span>
          {post.date} · {post.readTime}
        </span>
        <ArrowUpRight className="h-4 w-4 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
