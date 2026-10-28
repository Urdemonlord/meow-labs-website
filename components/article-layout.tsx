import Link from "next/link"
import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NoteCard } from "@/components/note-card"
import { CtaBand } from "@/components/editorial"
import { blogPosts } from "@/lib/blog-posts"

interface ArticleLayoutProps {
  postId: number
  title: string
  cta: { title: string; body: string; whatsappMessage: string }
  structuredData: object
  children: ReactNode
}

// Layout bersama artikel /blog/[id]: header editorial, isi bergaya .ml-prose,
// artikel terkait, dan CTA WhatsApp.
export function ArticleLayout({ postId, title, cta, structuredData, children }: ArticleLayoutProps) {
  const post = blogPosts.find((item) => item.id === postId)
  const related = blogPosts.filter((item) => item.id !== postId)

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />

      <article>
        <header className="border-b border-rule">
          <div className="ml-container py-14 sm:py-20">
            <nav aria-label="Breadcrumb" className="ml-eyebrow mb-8 flex flex-wrap gap-2 text-ink-muted">
              <Link href="/" className="hover:text-ink hover:underline">
                Beranda
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-ink hover:underline">
                Catatan
              </Link>
            </nav>
            <p className="ml-eyebrow ml-rise flex flex-wrap gap-x-4 gap-y-1 text-ink-muted">
              <span>Catatan {String(postId).padStart(3, "0")}</span>
              {post && <span className="text-forest">{post.category}</span>}
            </p>
            <h1 className="ml-lift mt-6 max-w-4xl text-balance font-display [--ml-delay:80ms] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-tight text-ink">
              {title}
            </h1>
            {post && (
              <dl className="ml-eyebrow ml-rise mt-10 flex [--ml-delay:160ms] flex-wrap gap-x-10 gap-y-3 border-t border-ink pt-5 text-ink-muted">
                <div className="flex gap-2">
                  <dt>Ditulis</dt>
                  <dd className="text-ink">Tim Meow Labs</dd>
                </div>
                <div className="flex gap-2">
                  <dt>Tanggal</dt>
                  <dd className="text-ink">
                    <time dateTime={post.isoDate}>{post.date}</time>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt>Baca</dt>
                  <dd className="text-ink">{post.readTime}</dd>
                </div>
              </dl>
            )}
          </div>
        </header>

        <div className="ml-container py-14 sm:py-20">
          <div className="ml-prose mx-auto max-w-[68ch]">{children}</div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-rule">
          <div className="ml-container ml-section">
            <h2 className="ml-eyebrow text-ink-muted">{"// Catatan lain"}</h2>
            <div className="mt-8 grid border-t border-ink md:grid-cols-2">
              {related.map((item) => (
                <NoteCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={cta.title} body={cta.body} whatsappMessage={cta.whatsappMessage} buttonLabel="Konsultasi Gratis" />
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
