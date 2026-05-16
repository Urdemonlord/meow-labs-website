"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar } from "lucide-react"
import { ErrorBoundary, LoadingState } from "@/components/loading-state"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useUiPreferences } from "./ui-preferences-provider"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
  featured: boolean
}

export function BlogSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: isEn
        ? "10 Website Development Trends in 2025 for Small Businesses"
        : "10 Tren Website Development 2025 untuk UMKM di Indonesia",
      excerpt: isEn
        ? "Web technology keeps evolving. In 2025, AI personalization, modular architecture, and WebAssembly are becoming practical for growth-focused teams."
        : "Teknologi web terus berkembang pesat. Tahun 2025 membawa inovasi seperti AI personalization, arsitektur modular, dan WebAssembly untuk tim bisnis yang ingin tumbuh.",
      date: isEn ? "September 29, 2025" : "29 September 2025",
      category: "Web Development",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
      featured: true,
    },
    {
      id: 2,
      title: isEn
        ? "Local SEO Strategy for Semarang Businesses in 2025"
        : "Strategi SEO Lokal untuk Bisnis di Semarang",
      excerpt: isEn
        ? "Improve local ranking by optimizing business profile, reviews, and local backlinks that match your service area."
        : "Tingkatkan ranking lokal dengan optimasi business profile, review, dan backlink lokal yang relevan dengan area layanan Anda.",
      date: isEn ? "September 20, 2025" : "20 September 2025",
      category: "SEO",
      readTime: "8 min",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
      featured: false,
    },
    {
      id: 3,
      title: isEn
        ? "Website vs Mobile App for Small Business: Which One First?"
        : "Website atau Aplikasi Mobile: Mana yang Tepat untuk UMKM?",
      excerpt: isEn
        ? "A practical comparison between website and mobile app based on budget, goals, and launch speed."
        : "Perbandingan praktis website vs aplikasi mobile berdasarkan budget, tujuan, dan kecepatan peluncuran.",
      date: isEn ? "September 15, 2025" : "15 September 2025",
      category: "Business",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      featured: false,
    },
    {
      id: 4,
      title: isEn
        ? "5 WordPress Plugins for Better Online Store Operations"
        : "5 Plugin WordPress untuk Toko Online yang Lebih Efisien",
      excerpt: isEn
        ? "A concise selection of plugins that improve checkout flow, catalog handling, and payment experience."
        : "Pilihan plugin yang membantu alur checkout, manajemen katalog, dan pengalaman pembayaran jadi lebih baik.",
      date: isEn ? "September 10, 2025" : "10 September 2025",
      category: "E-Commerce",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      featured: false,
    },
    {
      id: 5,
      title: isEn
        ? "How to Improve Website Speed for Better Conversion"
        : "Cara Meningkatkan Kecepatan Website untuk Konversi",
      excerpt: isEn
        ? "Speed affects conversion directly. Learn practical steps for image optimization, CDN, and hosting decisions."
        : "Kecepatan website berdampak langsung ke konversi. Pelajari langkah praktis optimasi gambar, CDN, dan hosting.",
      date: isEn ? "September 5, 2025" : "5 September 2025",
      category: "Performance",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      featured: false,
    },
    {
      id: 6,
      title: isEn
        ? "UI and UX Trends for Modern Business Websites"
        : "Tren UI dan UX untuk Website Bisnis Modern",
      excerpt: isEn
        ? "Modern layout, clear typography, and conversion-first content hierarchy remain key in 2025."
        : "Layout modern, tipografi jelas, dan hirarki konten yang fokus konversi tetap jadi kunci di 2025.",
      date: isEn ? "September 1, 2025" : "1 September 2025",
      category: "Design",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1636&q=80",
      featured: false,
    },
  ]

  return (
    <ErrorBoundary>
      <LoadingState>
        <section id="blog" className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <Badge variant="secondary" className="text-sm">
                  {isEn ? "Blog and Insights" : "Blog dan Insight"}
                </Badge>
              </div>
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                {isEn ? "Latest Articles and Insights" : "Artikel dan Tips Terbaru"}
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                {isEn
                  ? "Practical guides about web development, SEO, and digital strategy for business growth."
                  : "Panduan praktis seputar web development, SEO, dan strategi digital untuk pertumbuhan bisnis."}
              </p>
            </div>

            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div key={post.id} className="mb-12">
                  <Card className="group overflow-hidden border-border bg-card shadow-lg transition-shadow hover:shadow-xl">
                    <div className="grid gap-0 md:grid-cols-2">
                      <div className="relative h-80 overflow-hidden md:h-auto">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute left-4 top-4 bg-primary">
                          {isEn ? "Featured" : "Unggulan"}
                        </Badge>
                      </div>
                      <div className="flex flex-col justify-center p-6 sm:p-8">
                        <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-4">
                          <Badge variant="outline" className="whitespace-nowrap">
                            {post.category}
                          </Badge>
                          <div className="flex items-center whitespace-nowrap text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            {post.date}
                          </div>
                          <span className="whitespace-nowrap text-sm text-muted-foreground">
                            {post.readTime} {isEn ? "read" : "baca"}
                          </span>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-foreground">{post.title}</h3>
                        <p className="mb-6 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                        <Button asChild variant="default" className="w-fit">
                          <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                            {isEn ? "Read More" : "Baca Selengkapnya"} <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}

            <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card
                    key={post.id}
                    className="group overflow-hidden border-border bg-card shadow-md transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge variant="outline" className="absolute left-3 top-3 border-none bg-black/40 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center whitespace-nowrap">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span className="whitespace-nowrap">
                          {post.readTime} {isEn ? "read" : "baca"}
                        </span>
                      </div>
                      <h4 className="mb-3 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h4>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      <Button asChild variant="ghost" size="sm" className="p-0 text-primary hover:text-primary/80">
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                          {isEn ? "Read Article" : "Baca Artikel"} <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="mb-14 text-center">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8 shadow-lg md:p-10">
                <BookOpen className="mx-auto mb-6 h-10 w-10 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  {isEn ? "Get Updates and Practical Tips" : "Dapatkan Update dan Tips Praktis"}
                </h3>
                <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
                  {isEn
                    ? "Subscribe to receive fresh insights from Meow Labs."
                    : "Subscribe untuk mendapatkan insight terbaru dari Meow Labs."}
                </p>
                <div className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder={isEn ? "Enter your email..." : "Masukkan email Anda..."}
                    className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <Button className="group relative overflow-hidden bg-primary px-6 hover:bg-primary/90">
                    <span className="relative z-10">{isEn ? "Subscribe" : "Berlangganan"}</span>
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  {isEn
                    ? "We respect your privacy. Unsubscribe anytime."
                    : "Privasi Anda kami jaga. Unsubscribe kapan saja."}
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" className="px-8">
                {isEn ? "View All Articles" : "Lihat Semua Artikel"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </LoadingState>
    </ErrorBoundary>
  )
}
