import { Navigation } from "@/components/navigation"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { LiveChatWidget } from "@/components/live-chat-widget"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <BlogSection />
      </div>
      <Footer />
      <LiveChatWidget />
    </main>
  )
}

export const metadata = {
  title: "Blog - Tips & Artikel Web Development | Meow Labs",
  description: "Baca artikel terbaru tentang web development, SEO tips, dan strategi digital marketing dari tim ahli Meow Labs Semarang.",
}