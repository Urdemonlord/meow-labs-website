"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'
import Link from "next/link"
import { LoadingState, ErrorBoundary } from "@/components/loading-state"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Tren Website Development 2024: Yang Perlu Anda Ketahui",
    excerpt: "Pelajari tren terbaru dalam pengembangan website yang akan mendominasi industri di tahun 2024, mulai dari AI integration hingga Web3 technologies.",
    date: "15 Desember 2023",
    category: "Web Development",
    readTime: "5 min",
    image: "/images/blog/tren-web-2024.svg",
    featured: true
  },
  {
    id: 2,
    title: "SEO untuk Bisnis Lokal Semarang: Tips Praktis",
    excerpt: "Strategi SEO khusus untuk bisnis lokal di Semarang agar website Anda muncul di halaman pertama Google Maps dan pencarian lokal.",
    date: "10 Desember 2023",
    category: "SEO",
    readTime: "7 min",
    image: "/images/blog/seo-bisnis-semarang.svg",
    featured: false
  },
  {
    id: 3,
    title: "Cara Memilih Web Developer yang Tepat untuk Bisnis Anda",
    excerpt: "Panduan lengkap memilih web developer profesional yang sesuai dengan kebutuhan dan budget bisnis Anda di Semarang.",
    date: "5 Desember 2023",
    category: "Business",
    readTime: "6 min",
    image: "/images/blog/memilih-web-developer.svg",
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
                <Card className="overflow-hidden border-border shadow-lg hover:shadow-xl transition-shadow bg-card">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
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
                      <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="outline" className="w-fit">
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
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden border-border shadow-md hover:shadow-lg transition-shadow group bg-card">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <span className="text-muted-foreground text-xs">{post.readTime} baca</span>
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
            <div className="text-center">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Dapatkan Tips & Update Terbaru
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Subscribe newsletter kami untuk mendapatkan artikel terbaru tentang 
                  web development, SEO tips, dan strategi digital marketing
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Masukkan email Anda..."
                    className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:border-primary bg-background text-foreground"
                  />
                  <Button className="bg-primary hover:bg-primary/90 px-6">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  * Kami tidak akan spam. Unsubscribe kapan saja.
                </p>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-8 text-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🚀 Blog section coming soon - Stay tuned!
              </Badge>
            </div>
          </div>
        </section>
      </LoadingState>
    </ErrorBoundary>
  )
}