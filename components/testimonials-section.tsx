"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, User } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Pak Ahmad",
      company: "Jeka Towing Service",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Website Jeka Towing kini membuat layanan kami lebih terpercaya. Banyak pelanggan baru lewat web, dan integrasi nomor WhatsApp memudahkan pemesanan. Tim MeowLabs sangat responsif.",
      project: "Website Layanan Towing",
    },
    {
      name: "Dr. Ratna",
      company: "RSGM Klinik",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Aplikasi mobile dari MeowLabs sangat membantu pasien mendaftar secara online. Fitur antrian & notifikasi mengurangi beban administrasi klinik kami.",
      project: "RSGM Mobile App",
    },
    {
      name: "Ibu Sari",
      company: "Kopi Senja",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Website dan brand Kopi Senja jadi makin menarik & modern. Order online naik, dan konten visual tampak profesional. Sangat puas dengan hasilnya!",
      project: "Website & Branding F&B",
    },
    {
      name: "Dian Prasetyo",
      company: "Mahasiswa Informatika",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "AI CV Generator dari MeowLabs sangat membantu saya membuat CV profesional dengan cepat. Hasilnya ATS-friendly dan terlihat modern, sehingga saya lebih percaya diri melamar kerja.",
      project: "AI CV Generator",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Apa Kata <span className="text-primary">Klien Kami</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari berbagai klien 
              yang telah merasakan layanan profesional kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative quote */}
                <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote className="h-12 w-12" />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {testimonial.project}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground text-pretty leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full font-medium mb-4">
            <Star className="h-5 w-5 fill-primary" />
            <span>Rating 4.9/5 dari 100+ klien puas</span>
          </div>
          <p className="text-muted-foreground">
            Bergabunglah dengan klien-klien yang sudah merasakan layanan terbaik kami!
          </p>
        </div>
      </div>
    </section>
  )
}