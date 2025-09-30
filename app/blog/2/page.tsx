import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategi SEO Lokal untuk Bisnis di Semarang: Panduan Lengkap 2025 | Meow Labs",
  description: "Pelajari strategi SEO lokal terbaru untuk bisnis di Semarang tahun 2025. Tips dari ahli Meow Labs untuk meningkatkan peringkat Google Map dan pencarian lokal.",
  keywords: [
    "SEO lokal Semarang", 
    "optimasi Google Map",
    "peringkat bisnis lokal",
    "SEO untuk UMKM",
    "strategi digital marketing lokal",
    "Google My Business optimization"
  ],
  openGraph: {
    title: "Strategi SEO Lokal untuk Bisnis di Semarang: Panduan Lengkap 2025 | Meow Labs",
    description: "Panduan lengkap strategi SEO lokal terbaru untuk bisnis di Semarang yang membantu meningkatkan visibilitas online dan menarik pelanggan lokal.",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Strategi SEO Lokal untuk Bisnis di Semarang"
      }
    ]
  }
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-6">
          <Link href="/blog" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Kembali ke Blog
          </Link>
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Strategi SEO Lokal untuk Bisnis di Semarang: Panduan Lengkap 2025</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <span className="mr-4">Ditulis oleh Tim Meow Labs</span>
              <span>20 September 2025</span>
            </div>
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80" 
                alt="Strategi SEO Lokal untuk Bisnis di Semarang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>

          <p className="lead">
            Dalam era digital yang kompetitif, bisnis lokal di Semarang perlu strategi SEO yang tepat untuk menonjol di pencarian Google. 
            Panduan ini menyajikan teknik SEO lokal terbaru yang relevan untuk bisnis di Semarang tahun 2025.
          </p>

          <h2>Pentingnya SEO Lokal untuk Bisnis di Semarang</h2>
          <p>
            SEO lokal adalah strategi untuk meningkatkan visibilitas bisnis Anda di hasil pencarian berbasis lokasi. 
            Di kota Semarang yang berkembang pesat, konsumen semakin mengandalkan pencarian online untuk menemukan 
            produk dan layanan lokal. Statistik menunjukkan bahwa 76% pengguna yang melakukan pencarian lokal di 
            smartphone mereka mengunjungi bisnis tersebut dalam waktu 24 jam.
          </p>

          <h2>1. Optimalkan Google Business Profile Anda</h2>
          <p>
            Langkah pertama dan paling penting dalam SEO lokal adalah mengoptimalkan Google Business Profile 
            (sebelumnya dikenal sebagai Google My Business) Anda:
          </p>
          <ul>
            <li>Verifikasi dan klaim listing bisnis Anda</li>
            <li>Lengkapi semua informasi kontak dan jam operasional</li>
            <li>Tambahkan foto berkualitas tinggi dari lokasi bisnis, produk, dan tim Anda</li>
            <li>Pilih kategori yang tepat dan spesifik untuk bisnis Anda</li>
            <li>Tambahkan layanan atau menu produk dengan harga jika memungkinkan</li>
            <li>Tanggapi ulasan secara profesional dan tepat waktu</li>
          </ul>

          <h2>2. Konsistensi NAP di Seluruh Web</h2>
          <p>
            NAP (Name, Address, Phone Number) adalah informasi bisnis dasar yang harus konsisten di seluruh web. 
            Pastikan nama bisnis, alamat, dan nomor telepon Anda sama persis di seluruh platform, termasuk:
          </p>
          <ul>
            <li>Website Anda</li>
            <li>Google Business Profile</li>
            <li>Direktori bisnis lokal (seperti Indolist, Yelp, TripAdvisor)</li>
            <li>Media sosial</li>
            <li>Situs ulasan</li>
          </ul>
          <p>
            Ketidakkonsistenan NAP dapat membingungkan algoritma Google dan menurunkan peringkat lokal Anda.
          </p>

          <h2>3. Konten Lokal yang Relevan dengan Semarang</h2>
          <p>
            Buat konten yang secara spesifik ditargetkan untuk audiens Semarang:
          </p>
          <ul>
            <li>Blog tentang acara lokal atau berita di Semarang</li>
            <li>Panduan area lokal atau landmark di dekat bisnis Anda</li>
            <li>Studi kasus atau testimonial dari pelanggan lokal</li>
            <li>Halaman landing khusus untuk layanan di area spesifik Semarang (misal: Simpang Lima, Tembalang, Banyumanik)</li>
          </ul>

          <h2>4. Optimasi Kata Kunci Lokal</h2>
          <p>
            Lakukan riset kata kunci yang spesifik untuk Semarang dan integrasikan ke dalam konten Anda:
          </p>
          <ul>
            <li>Kata kunci utama + lokasi (contoh: "jasa desain website Semarang")</li>
            <li>Kata kunci long-tail dengan variasi lokasi (contoh: "jasa pembuatan website toko online murah di Semarang")</li>
            <li>Frasa pencarian lokal (contoh: "web developer terdekat di Tembalang")</li>
            <li>Gunakan kata kunci lokal di judul halaman, meta deskripsi, heading, dan konten</li>
          </ul>

          <h2>5. Membangun Backlink Lokal</h2>
          <p>
            Backlink dari situs lokal yang terpercaya dapat meningkatkan otoritas lokal Anda:
          </p>
          <ul>
            <li>Berpartisipasi dalam kamar dagang Semarang atau asosiasi bisnis lokal</li>
            <li>Sponsori acara komunitas atau organisasi nirlaba lokal</li>
            <li>Wawancara dengan media lokal atau blog</li>
            <li>Kerjasama dengan bisnis lokal lain untuk pertukaran tautan</li>
            <li>Daftar ke direktori bisnis lokal Semarang yang kredibel</li>
          </ul>

          <h2>6. Optimasi Mobile dan Kecepatan Website</h2>
          <p>
            Dengan meningkatnya penggunaan ponsel untuk pencarian lokal, pastikan website Anda:
          </p>
          <ul>
            <li>Responsif dan mobile-friendly</li>
            <li>Memiliki waktu loading cepat (idealnya di bawah 3 detik)</li>
            <li>Menerapkan AMP (Accelerated Mobile Pages) jika memungkinkan</li>
            <li>Navigasi yang intuitif pada perangkat mobile</li>
            <li>Tombol call-to-action (CTA) yang mudah diklik pada layar kecil</li>
          </ul>

          <h2>7. Manajemen Reputasi dan Ulasan</h2>
          <p>
            Ulasan positif adalah faktor ranking penting untuk SEO lokal:
          </p>
          <ul>
            <li>Secara aktif mendorong pelanggan puas untuk memberikan ulasan</li>
            <li>Tanggapi semua ulasan, positif maupun negatif</li>
            <li>Ciptakan strategi untuk menangani ulasan negatif secara profesional</li>
            <li>Monitor dan kelola reputasi online Anda secara konsisten</li>
          </ul>

          <h2>8. Optimasi Schema Markup Lokal</h2>
          <p>
            Implementasikan structured data dengan schema markup untuk membantu Google memahami bisnis lokal Anda:
          </p>
          <ul>
            <li>LocalBusiness schema</li>
            <li>Review schema</li>
            <li>Service schema</li>
            <li>Product schema</li>
            <li>FAQPage schema untuk pertanyaan umum tentang bisnis Anda</li>
          </ul>

          <h2>9. Strategi Media Sosial Lokal</h2>
          <p>
            Integrasi media sosial dengan SEO lokal Anda:
          </p>
          <ul>
            <li>Gunakan geotag pada posting di Instagram, Facebook, dan platform lain</li>
            <li>Posting konten yang relevan dengan komunitas Semarang</li>
            <li>Berinteraksi dengan bisnis lokal dan influencer Semarang</li>
            <li>Promosikan acara lokal atau keterlibatan komunitas Anda</li>
          </ul>

          <h2>10. Analisis dan Penyesuaian Berkelanjutan</h2>
          <p>
            SEO lokal bukan strategi sekali jalan:
          </p>
          <ul>
            <li>Monitor peringkat lokal Anda secara teratur</li>
            <li>Analisis metrik bisnis lokal di Google Analytics</li>
            <li>Bandingkan performa Anda dengan kompetitor lokal</li>
            <li>Sesuaikan strategi berdasarkan perubahan algoritma dan tren pasar</li>
          </ul>

          <h2>Kesimpulan</h2>
          <p>
            Dengan implementasi strategi SEO lokal yang tepat, bisnis di Semarang dapat meningkatkan visibilitas online 
            mereka, menarik lebih banyak pelanggan lokal, dan memenangkan persaingan di pasar digital. Yang terpenting 
            adalah konsistensi dan kesabaran, karena hasil SEO lokal yang optimal membutuhkan waktu dan usaha yang berkelanjutan.
          </p>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Butuh bantuan dengan SEO lokal bisnis Anda di Semarang?</h3>
            <p className="mb-4">Tim Meow Labs memiliki pengalaman luas dalam mengoptimalkan SEO lokal untuk bisnis di Semarang. Hubungi kami untuk konsultasi!</p>
            <Link href="/contact">
              <Button size="lg">Konsultasi Gratis</Button>
            </Link>
          </div>
        </article>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Artikel Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <Link href="/blog/1" className="block">
                <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
                  <Image 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80" 
                    alt="Tren Website Development 2025" 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="font-medium group-hover:text-primary transition-colors">10 Tren Website Development 2025 untuk UMKM di Indonesia</h4>
              </Link>
            </div>
            <div className="group">
              <Link href="/blog/3" className="block">
                <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
                  <Image 
                    src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                    alt="Website atau Aplikasi Mobile" 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="font-medium group-hover:text-primary transition-colors">Website atau Aplikasi Mobile: Mana yang Tepat untuk Bisnis UMKM Anda?</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <LiveChatWidget />
      
      {/* Schema.org structured data for article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://meowlabs.store/blog/2"
            },
            "headline": "Strategi SEO Lokal untuk Bisnis di Semarang: Panduan Lengkap 2025",
            "description": "Panduan lengkap strategi SEO lokal terbaru untuk bisnis di Semarang yang membantu meningkatkan visibilitas online dan menarik pelanggan lokal.",
            "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
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
            "datePublished": "2025-09-20T08:00:00+07:00",
            "dateModified": "2025-09-20T08:00:00+07:00"
          })
        }}
      />
    </main>
  )
}