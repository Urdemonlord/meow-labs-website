import Image from "next/image"
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tentang Kami | Meow Labs",
  description:
    "Kenali tim kreatif Meow Labs yang terdiri dari desainer, developer, dan strategist yang siap membantu bisnis Anda bersinar di dunia digital.",
}

const teamMembers = [
  {
    name: "Alya Pradipta",
    role: "Creative Director",
    imageUrl: "https://i.imgur.com/MeowLabs01.jpg",
    description:
      "Visioner di balik setiap konsep kreatif yang kami jalankan, memastikan setiap proyek memiliki cerita yang kuat dan visual yang memikat.",
  },
  {
    name: "Raka Maheswara",
    role: "Lead Developer",
    imageUrl: "https://i.imgur.com/MeowLabs02.jpg",
    description:
      "Membangun fondasi teknologi yang solid agar website Anda cepat, aman, dan mudah digunakan oleh setiap pengunjung.",
  },
  {
    name: "Sasha Andini",
    role: "UI/UX Designer",
    imageUrl: "https://i.imgur.com/MeowLabs03.jpg",
    description:
      "Merancang pengalaman pengguna yang intuitif dan desain antarmuka yang memanjakan mata di setiap perangkat.",
  },
  {
    name: "Bima Aryantara",
    role: "Motion & Visual Artist",
    imageUrl: "https://i.imgur.com/MeowLabs04.jpg",
    description:
      "Menghidupkan brand melalui animasi dan visual yang berani, menciptakan interaksi yang berkesan untuk audiens Anda.",
  },
]

const supportTeam = [
  {
    name: "Naya Kusuma",
    role: "Project Manager",
    imageUrl: "https://i.imgur.com/MeowLabs05.jpg",
  },
  {
    name: "Dimas Rahadian",
    role: "Content Strategist",
    imageUrl: "https://i.imgur.com/MeowLabs06.jpg",
  },
  {
    name: "Tara Mutiara",
    role: "Client Success Lead",
    imageUrl: "https://i.imgur.com/MeowLabs07.jpg",
  },
  {
    name: "Rafi Suryajaya",
    role: "Full-stack Developer",
    imageUrl: "https://i.imgur.com/MeowLabs08.jpg",
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
              Wajah kreatif di balik Meow Labs
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Kami adalah studio digital yang menggabungkan strategi, desain, dan teknologi untuk membangun pengalaman
              online yang memukau. Kenali tim inti kami yang setiap harinya menuangkan ide dan energi agar brand Anda
              tampil menonjol.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-center">Tim Inti Kami</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Para talent yang memimpin proses kreatif dari perencanaan hingga eksekusi.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article key={member.name} className="group rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
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

      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold">Orang-orang di balik layar</h2>
            <p className="mt-4 text-muted-foreground">
              Mereka memastikan setiap proyek berjalan mulus, klien merasa didampingi, dan hasil akhir tetap konsisten dengan
              standar Meow Labs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {supportTeam.map((member) => (
              <article key={member.name} className="rounded-3xl border border-border bg-background p-6 text-center shadow-sm">
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </article>
            ))}
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
    </main>
  )
}
