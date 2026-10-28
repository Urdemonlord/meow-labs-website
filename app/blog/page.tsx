import type { Metadata } from "next"
import { sharedOpenGraph } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NoteCard } from "@/components/note-card"
import { CtaBand, PageHeader } from "@/components/editorial"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog - Tips & Artikel Web Development 2025 | Meow Labs Semarang",
  description: "Baca artikel terbaru tentang web development, SEO tips, dan strategi digital marketing dari tim ahli Meow Labs Semarang. Update 2025 seputar pembuatan website murah untuk UMKM.",
  keywords: [
    "blog web development 2025", 
    "artikel seo semarang", 
    "tips website bisnis UMKM", 
    "strategi digital marketing terbaru",
    "tutorial pembuatan website murah",
    "tren website 2025",
    "optimasi SEO lokal semarang"
  ],
  openGraph: {
    ...sharedOpenGraph,
    title: "Blog Web Development & SEO 2025 | Meow Labs Semarang",
    description: "Kumpulan artikel dan tips terbaru 2025 seputar pembuatan website, SEO lokal, dan strategi digital marketing untuk UMKM di Semarang.",
    type: "website"
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "headline": "Blog Meow Labs - Tips & Artikel Web Development",
  "description": "Kumpulan artikel dan tips terbaru seputar pembuatan website, SEO, dan digital marketing dari Meow Labs Semarang.",
  "image": "https://meowlabs.id/images/og-image.jpg",
  "datePublished": "2025-09-29T08:00:00+07:00",
  "dateModified": "2025-10-01T10:00:00+07:00",
  "author": {
    "@type": "Organization",
    "name": "Meow Labs",
    "url": "https://meowlabs.id",
    "logo": {
      "@type": "ImageObject",
      "url": "https://meowlabs.id/images/meow-logo.png"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Meow Labs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://meowlabs.id/images/meow-logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://meowlabs.id/blog"
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "10 Tren Website Development 2025 untuk UMKM di Indonesia",
      "image": "https://meowlabs.id/images/og-image.jpg",
      "datePublished": "2025-09-29T08:00:00+07:00",
      "dateModified": "2025-09-29T08:00:00+07:00",
      "author": {"@type": "Organization", "name": "Meow Labs"},
      "url": "https://meowlabs.id/blog/1"
    },
    {
      "@type": "BlogPosting",
      "headline": "Strategi SEO Lokal untuk Bisnis di Semarang: Panduan Lengkap 2025",
      "image": "https://meowlabs.id/images/og-image.jpg",
      "datePublished": "2025-09-20T08:00:00+07:00",
      "dateModified": "2025-09-20T08:00:00+07:00",
      "author": {"@type": "Organization", "name": "Meow Labs"},
      "url": "https://meowlabs.id/blog/2"
    },
    {
      "@type": "BlogPosting",
      "headline": "Website atau Aplikasi Mobile: Mana yang Tepat untuk Bisnis UMKM Anda?",
      "image": "https://meowlabs.id/images/og-image.jpg",
      "datePublished": "2025-09-15T08:00:00+07:00",
      "dateModified": "2025-09-15T08:00:00+07:00",
      "author": {"@type": "Organization", "name": "Meow Labs"},
      "url": "https://meowlabs.id/blog/3"
    }
  ]
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <PageHeader
        eyebrow="// Catatan"
        title="Catatan dari studio."
        intro="Tulisan singkat tentang website, SEO lokal, dan keputusan teknologi untuk bisnis, dari pekerjaan yang kami kerjakan sehari-hari."
      />

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <h2 className="sr-only">Daftar catatan</h2>
          <div className="grid border-t border-ink md:grid-cols-3">
            {blogPosts.map((post) => (
              <NoteCard key={post.id} post={post} showExcerpt />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Punya pertanyaan soal website bisnis Anda?"
        body="Ceritakan kondisi bisnis Anda, kami bantu menentukan langkah teknis yang masuk akal."
        whatsappMessage="Halo Meow Labs, saya membaca blog dan ingin konsultasi soal website bisnis saya."
      />
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
