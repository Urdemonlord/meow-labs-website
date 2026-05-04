import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tentang Kami | Meow Labs - Web Developer",
  description:
    "Meow Labs adalah studio web development independen yang didukung oleh teknologi AI modern, memberikan solusi digital cerdas dan efisien untuk UMKM.",
  keywords: [
    "web developer", 
    "ai assisted development", 
    "jasa pembuatan website",
    "solo developer",
    "about meow labs"
  ],
  openGraph: {
    title: "Tentang Meow Labs - Solo Developer with AI",
    description: "Studio web development yang memadukan keahlian coding dengan kekuatan AI untuk hasil yang cepat dan berkualitas.",
    type: "website",
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Tentang Meow Labs
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Solo Developer with AI
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Saya percaya bahwa teknologi terbaik tidak harus rumit dan mahal. Meow Labs adalah sebuah studio independen di mana satu pengembang yang berdedikasi bekerja berdampingan dengan kecerdasan buatan (AI) modern untuk membangun website yang cepat, aman, dan indah.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl font-semibold">Mengapa "Solo + AI"?</h2>
            <p className="text-lg text-muted-foreground">
              Dengan mengintegrasikan AI ke dalam alur kerja pengembangan (coding, desain, hingga copywriting), proses pembuatan website menjadi jauh lebih efisien. Ini berarti UMKM dapat memiliki website berkualitas tinggi dan fitur lengkap dengan biaya yang lebih masuk akal, tanpa mengorbankan kualitas.
            </p>
            <p className="text-lg text-muted-foreground">
              Pendekatan ini menghilangkan hambatan komunikasi antar tim besar, memastikan setiap detail sesuai dengan visi Anda secara langsung, sementara AI menangani pekerjaan teknis yang repetitif dengan presisi tinggi.
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
              "description": "Studio web development independen yang didukung oleh teknologi AI modern.",
              "url": "https://meowlabs.id",
              "logo": "https://meowlabs.id/images/meow-logo.png"
            }
          })
        }}
      />
    </main>
  )
}
