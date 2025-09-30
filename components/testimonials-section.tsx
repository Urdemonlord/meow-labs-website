"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, User } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rizky Prabowo",
      company: "PWK Consultant",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Website company profile kami tampil jauh lebih profesional. Klien mudah menemukan portofolio proyek dan jadwal konsultasi. Tim Meow Labs cepat menindaklanjuti setiap revisi.",
      project: "Company Profile",
    },
    {
      name: "Tim Marketing Sportify",
      company: "Sportify Indonesia",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "E-commerce Sportify kini berjalan stabil dengan katalog produk lengkap dan integrasi pembayaran cashless. Penjualan meningkat karena user experience yang nyaman di mobile.",
      project: "Toko Online",
    },
    {
      name: "Humas RSGM Unimus",
      company: "RSGM Unimus",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Sistem booking pasien dan halaman informasi layanan gigi kini jauh lebih mudah digunakan. Pasien dapat memilih jadwal dokter dan menerima konfirmasi otomatis via WhatsApp.",
      project: "Aplikasi Reservasi",
    },
    {
      name: "Dinas Kominfo Grobogan",
      company: "Pemkab Grobogan",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Portal informasi kabupaten tampil modern dengan aksesibilitas yang baik. Aktualisasi berita dan agenda kegiatan bisa kami kelola sendiri dengan dashboard yang simpel.",
      project: "Portal Pemerintah",
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