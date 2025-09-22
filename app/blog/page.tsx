import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { LoadingState } from "@/components/loading-state"

export const metadata = {
  title: "Blog - Tips & Artikel Web Development | Meow Labs",
  description: "Baca artikel terbaru tentang web development, SEO tips, dan strategi digital marketing dari tim ahli Meow Labs Semarang.",
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
    </main>
  )
}