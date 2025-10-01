import Image from "next/image"
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tentang Kami | Meow Labs Semarang - Web Developer Terbaik",
  description:
    "Kenali tim profesional Meow Labs Semarang yang dipimpin oleh Hasrinata Arya Afendi. Tim kami terdiri dari developer, designer, dan strategist yang siap membantu UMKM dan bisnis lokal dengan website murah dan berkualitas.",
  keywords: [
    "web developer semarang", 
    "tim pengembang website", 
    "jasa pembuatan website murah",
    "desainer web profesional semarang",
    "about meow labs"
  ],
  openGraph: {
    title: "Tentang Meow Labs - Web Developer Profesional Semarang",
    description: "Tim profesional Meow Labs Semarang dipimpin oleh Hasrinata Arya Afendi siap membantu bisnis Anda dengan layanan pembuatan website murah namun berkualitas.",
    type: "website",
  }
}

const teamMembers = [
  {
    name: "Hasrinata Arya Afendi",
    role: "Founder",
    imageUrl: "https://imgur.com/tHtY3Pj.jpg",
    description:
      "Visioner di balik berdirinya Meow Labs, yang memimpin arah dan strategi perusahaan dengan fokus pada solusi teknologi inovatif untuk UMKM.",
  },
  {
    name: "Yusuf Nur Cahyo",
    role: "IOT Developer & Social Media Strategist",
    imageUrl: "https://imgur.com/7XzbPIr.jpg",
    description:
      "Menggabungkan keahlian teknologi IoT dengan strategi media sosial untuk memberikan solusi terintegrasi bagi klien.",
  },
  {
    name: "Habib Khulafa Panji Langit",
    role: "Project Manager",
    imageUrl: "https://imgur.com/Xg6O7p6.jpg",
    description:
      "Mengkoordinasikan tim dan mengelola timeline proyek untuk memastikan setiap website selesai tepat waktu dan sesuai ekspektasi klien.",
  },
  {
    name: "Muhammad Fikar Firdiansyah",
    role: "UI/UX Designer",
    imageUrl: "https://imgur.com/wVBOb4J.jpg",
    description:
      "Merancang pengalaman pengguna yang intuitif dan desain antarmuka yang memanjakan mata di setiap perangkat.",
  },
  {
    name: "Alfian Nugroho Jati",
    role: "Social Media Strategist",
    imageUrl: "https://imgur.com/kIIHtGT.jpg",
    description:
      "Mengembangkan strategi media sosial yang efektif untuk meningkatkan visibilitas brand dan mendukung tujuan pemasaran digital.",
  },
  {
    name: "Ahmad Munip",
    role: "Backend Developer",
    imageUrl: "https://imgur.com/nUm81fY.jpg",
    description:
      "Membangun infrastruktur dan logika backend yang kuat dan aman untuk mendukung berbagai fitur website dan aplikasi.",
  },
  {
    name: "Arisyad Faizon",
    role: "Executive Assistant",
    imageUrl: "https://imgur.com/3rCw03l.jpg",
    description:
      "Mendukung operasional dan manajemen proyek, memastikan semua kegiatan internal dan eksternal berjalan dengan lancar.",
  },
  {
    name: "Sahad Ibrohim",
    role: "Growth Strategist",
    imageUrl: "https://imgur.com/4N4UJoX.jpg",
    description:
      "Menganalisis data dan tren pasar untuk mengembangkan strategi pertumbuhan bisnis yang berkelanjutan bagi klien.",
  },
  {
    name: "Rafi Yudha",
    role: "Growth Strategist",
    imageUrl: "https://imgur.com/9pPmM6Z.jpg",
    description:
      "Merancang dan mengimplementasikan strategi pertumbuhan digital untuk memaksimalkan ROI dan kehadiran online klien.",
  },
  {
    name: "Herinta Armantya",
    role: "Frontend Developer",
    imageUrl: "https://imgur.com/Ps9ixUw.jpg",
    description:
      "Mengembangkan antarmuka pengguna yang responsif, cepat dan menarik dengan fokus pada pengalaman pengguna yang optimal.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Tentang Kami
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Tim Profesional di Balik Meow Labs
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Kami adalah tim profesional yang terdiri dari developer, designer, dan strategist yang berdedikasi 
              untuk memberikan solusi digital terbaik dengan harga terjangkau. Di bawah kepemimpinan Hasrinata Arya Afendi, 
              kami bekerja sama untuk memastikan website Anda tidak hanya tampil menarik, tetapi juga mendukung 
              pertumbuhan bisnis UMKM dan bisnis lokal di Semarang.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-center">Tim Profesional Meow Labs</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Para profesional yang memimpin pengembangan website dan strategi digital untuk memajukan bisnis Anda.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className="group rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33.3vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary/80">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl font-semibold">Filosofi Kolaborasi Kami</h2>
            <p className="text-lg text-muted-foreground">
              Kami percaya setiap brand memiliki cerita yang unik. Dengan mendengarkan kebutuhan Anda secara mendalam, kami
              menyusun strategi personal untuk menghadirkan pengalaman digital yang relevan dan berdampak.
            </p>
            <p className="text-lg text-muted-foreground">
              Tim Meow Labs bekerja secara agile, memadukan keahlian kreatif dan teknis, agar setiap detail mulai dari visual
              hingga performa website dapat memberikan hasil terbaik bagi bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Schema.org structured data for about page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Meow Labs",
              "description": "Tim pengembang website profesional di Semarang yang dipimpin oleh Hasrinata Arya Afendi, menyediakan jasa pembuatan website murah untuk UMKM dan bisnis lokal.",
              "url": "https://meowlabs.store",
              "logo": "https://meowlabs.store/images/meow-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Semarang",
                "addressRegion": "Jawa Tengah",
                "addressCountry": "Indonesia"
              },
              "member": teamMembers.map(member => ({
                "@type": "Person",
                "name": member.name,
                "jobTitle": member.role,
                "description": member.description
              }))
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".about-intro"]
            }
          })
        }}
      />
    </main>
  )
}
