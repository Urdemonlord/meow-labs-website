"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, BookOpen, TrendingUp, Code2 } from 'lucide-react'
import Link from "next/link"
import { LoadingState, ErrorBoundary } from "@/components/loading-state"

const blogPosts = [
  {
    id: 1,
    title: "10 Tren Website Development 2025 untuk UMKM di Indonesia",
    excerpt: "Teknologi web terus berkembang dengan pesat. Tahun 2025 akan membawa inovasi baru seperti AI-powered personalization, microservices architecture, dan WebAssembly yang perlu diketahui pelaku UMKM.",
    date: "29 September 2025",
    category: "Web Development",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Strategi SEO Lokal untuk Bisnis di Semarang: Panduan Lengkap 2025",
    excerpt: "Tingkatkan peringkat bisnis Anda di pencarian Google lokal Semarang dengan optimasi Google Business Profile, manajemen review, dan backlink dari portal lokal terpercaya.",
    date: "20 September 2025",
    category: "SEO",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Website atau Aplikasi Mobile: Mana yang Tepat untuk Bisnis UMKM Anda?",
    excerpt: "Membandingkan kelebihan dan kekurangan website vs aplikasi mobile untuk UMKM dengan budget terbatas. Temukan solusi yang sesuai dengan kebutuhan bisnis dan target pasar Anda.",
    date: "15 September 2025",
    category: "Business",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    featured: false
  },
  {
    id: 4,
    title: "5 Plugin WordPress Terbaik untuk Toko Online UMKM Tahun 2025",
    excerpt: "Ulasan mendalam tentang plugin WordPress terbaru yang dapat meningkatkan performa toko online Anda, mulai dari WooCommerce Plus hingga solusi pembayaran terintegrasi QRIS.",
    date: "10 September 2025",
    category: "E-Commerce",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Cara Meningkatkan Kecepatan Website: Panduan Praktis untuk UMKM",
    excerpt: "Website lambat bisa menurunkan konversi hingga 70%. Pelajari cara mengoptimalkan gambar, menggunakan CDN, dan memilih hosting yang tepat untuk kecepatan maksimal.",
    date: "5 September 2025",
    category: "Performance",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Tren Desain UI/UX 2025 untuk Website Bisnis Lokal",
    excerpt: "Desain minimalis, dark mode, dan tipografi bold menjadi tren utama tahun ini. Pelajari cara menerapkannya untuk meningkatkan user experience dan konversi pada website bisnis Anda.",
    date: "1 September 2025",
    category: "Design",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    featured: false
  }
]

export function BlogSection() {
  return (
    <ErrorBoundary>
      <LoadingState>
        <section id="blog" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <Badge variant="secondary" className="text-sm">
                  Blog & Tips
                </Badge>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Artikel & Tips <span className="text-primary">Terbaru</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Pelajari tips dan trik web development, SEO, dan strategi digital marketing 
                untuk mengembangkan bisnis Anda lebih baik
              </p>
            </div>

            {/* Featured Article */}
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="mb-12">
                <Card className="overflow-hidden border-border shadow-lg hover:shadow-xl transition-shadow bg-card group">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-none"></div>
                      <div className="absolute top-0 left-0 w-full h-full md:hidden flex items-center">
                        <div className="p-6">
                          <Badge className="mb-4 bg-primary">Featured</Badge>
                          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                            {post.title}
                          </h3>
                        </div>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-primary hidden md:flex">
                        Featured
                      </Badge>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <span className="text-muted-foreground text-sm">{post.readTime} baca</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight md:block hidden">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="default" className="w-fit">
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                          Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}

            {/* Regular Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden border-border shadow-md hover:shadow-lg transition-shadow group bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge variant="outline" className="absolute top-3 left-3 bg-black/40 text-white border-none">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-muted-foreground text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <span className="text-muted-foreground text-xs">•</span>
                        <span className="text-muted-foreground text-xs">{post.readTime} baca</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="ghost" size="sm" className="p-0 text-primary hover:text-primary/80">
                      <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                        Baca Artikel <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mb-16">
              <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-2xl p-8 md:p-10 shadow-lg border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Dapatkan Tips & Update Web Terbaru
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Subscribe newsletter Meow Labs untuk mendapatkan artikel terbaru, tutorial, dan tips strategi digital marketing untuk UMKM Semarang
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Masukkan email Anda..."
                    className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground"
                  />
                  <Button className="bg-primary hover:bg-primary/90 px-6 relative overflow-hidden group">
                    <span className="relative z-10">Subscribe</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <p className="text-xs text-muted-foreground">
                    Kami menjaga privasi Anda. Unsubscribe kapan saja.
                  </p>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Jelajahi Kategori
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Temukan artikel berdasarkan topik yang Anda minati
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
                  <Link 
                    href={`/blog/category/${category.toLowerCase()}`} 
                    key={category}
                    className="bg-card hover:bg-muted/50 transition-colors border border-border rounded-lg p-4 text-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      {category === "Web Development" && <Code2 className="h-5 w-5 text-primary" />}
                      {category === "SEO" && <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>}
                      {category === "Business" && <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                      {category === "E-Commerce" && <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
                      {category === "Performance" && <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                      {category === "Design" && <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>}
                    </div>
                    <h4 className="font-medium text-foreground">{category}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {blogPosts.filter(post => post.category === category).length} artikel
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* View More Posts Button */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" className="px-8">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </LoadingState>
    </ErrorBoundary>
  )
}