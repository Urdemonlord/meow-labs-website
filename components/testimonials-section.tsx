"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, User } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      company: "CV Maju Bersama",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review: "Pelayanan sangat memuaskan! Website company profile kami jadi terlihat profesional dan banyak inquiry masuk dari website. Tim Meow Labs sangat responsif dan hasil sesuai ekspektasi.",
      project: "Company Profile",
    },
    {
      name: "Sarah Wijaya",
      company: "Toko Busana Sarah",
      avatar: "/placeholder-user.jpg", 
      rating: 5,
      review: "Toko online kami sekarang ramai pembeli! Fitur WhatsApp checkout sangat membantu. Maintenance gratis juga benar-benar dilakukan dengan baik. Recommended banget!",
      project: "Toko Online",
    },
    {
      name: "Dr. Ahmad Fauzi",
      company: "Klinik Sehat Sentosa",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review: "Website klinik kami sekarang terlihat modern dan mudah digunakan pasien. Fitur booking online sangat membantu mengurangi antrian. Terima kasih Meow Labs!",
      project: "Website Klinik",
    },
    {
      name: "Rina Kartika",
      company: "SD Harapan Bangsa",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review: "Website sekolah kami jadi lebih informatif dan mudah diakses orang tua siswa. Tim sangat sabar dalam memberikan tutorial cara mengelola konten. Excellent service!",
      project: "Website Sekolah",
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