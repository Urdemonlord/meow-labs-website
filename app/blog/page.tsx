import type { Metadata } from "next"
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
    title: "Blog Web Development & SEO 2025 | Meow Labs Semarang",
    description: "Kumpulan artikel dan tips terbaru 2025 seputar pembuatan website, SEO lokal, dan strategi digital marketing untuk UMKM di Semarang.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Blog Meow Labs Semarang - Web Development & SEO Tips 2025"
      }
    ]
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "headline": "Blog Meow Labs - Tips & Artikel Web Development",
  "description": "Kumpulan artikel dan tips terbaru seputar pembuatan website, SEO, dan digital marketing dari Meow Labs Semarang.",
  "image": "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
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
      "image": "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      "datePublished": "2025-09-29T08:00:00+07:00",
      "dateModified": "2025-09-29T08:00:00+07:00",
      "author": {"@type": "Organization", "name": "Meow Labs"},
      "url": "https://meowlabs.id/blog/1"
    },
    {
      "@type": "BlogPosting",
      "headline": "Strategi SEO Lokal untuk Bisnis di Semarang: Panduan Lengkap 2025",
      "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      "datePublished": "2025-09-20T08:00:00+07:00",
      "dateModified": "2025-09-20T08:00:00+07:00",
      "author": {"@type": "Organization", "name": "Meow Labs"},
      "url": "https://meowlabs.id/blog/2"
    },
    {
      "@type": "BlogPosting",
      "headline": "Website atau Aplikasi Mobile: Mana yang Tepat untuk Bisnis UMKM Anda?",
      "image": "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
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
