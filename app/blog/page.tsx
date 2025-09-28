import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { LoadingState } from "@/components/loading-state"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Tips & Artikel Web Development | Meow Labs Semarang",
  description: "Baca artikel terbaru tentang web development, SEO tips, dan strategi digital marketing dari tim ahli Meow Labs Semarang. Update terbaru seputar pembuatan website murah.",
  keywords: [
    "blog web development", 
    "artikel seo semarang", 
    "tips website bisnis", 
    "strategi digital marketing",
    "tutorial pembuatan website murah"
  ],
  openGraph: {
    title: "Blog Web Development & SEO | Meow Labs Semarang",
    description: "Kumpulan artikel dan tips terbaru seputar pembuatan website, SEO, dan digital marketing dari Meow Labs Semarang.",
    type: "website",
  }
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading navigation...</div>}>
        <Navigation />
      </Suspense>
      <div className="pt-16">
        <Suspense fallback={
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }>
          <LoadingState>
            <BlogSection />
          </LoadingState>
        </Suspense>
      </div>
      <Footer />
      <LiveChatWidget />
      
      {/* Schema.org structured data for blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "Blog Meow Labs - Tips & Artikel Web Development",
            "description": "Kumpulan artikel dan tips terbaru seputar pembuatan website, SEO, dan digital marketing dari Meow Labs Semarang.",
            "author": {
              "@type": "Organization",
              "name": "Meow Labs",
              "url": "https://meowlabs.store"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Meow Labs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://meowlabs.store/images/meow-logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://meowlabs.store/blog"
            }
          })
        }}
      />
    </main>
  )
}