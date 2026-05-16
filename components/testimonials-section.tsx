"use client"

import { Quote, Star, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useUiPreferences } from "./ui-preferences-provider"

export function TestimonialsSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

  const testimonials = [
    {
      name: "Ahmad",
      company: "Jeka Towing Service",
      rating: 5,
      review: isEn
        ? "The new website increased trust in our service. More customers now come through web and WhatsApp flow is much easier."
        : "Website baru meningkatkan trust layanan kami. Pelanggan baru datang dari web dan alur WhatsApp jadi jauh lebih mudah.",
      project: isEn ? "Service Website" : "Website Layanan",
    },
    {
      name: "Dr. Ratna",
      company: "RSGM Clinic",
      rating: 5,
      review: isEn
        ? "The app helped patients register online and reduced admin workload through a cleaner queue and notification flow."
        : "Aplikasi membantu pasien mendaftar online dan mengurangi beban administrasi lewat alur antrian serta notifikasi yang lebih rapi.",
      project: isEn ? "RSGM Mobile App" : "Aplikasi Mobile RSGM",
    },
    {
      name: "Sari",
      company: "Kopi Senja",
      rating: 5,
      review: isEn
        ? "Brand presentation is now more modern and online ordering improved after the redesign."
        : "Tampilan brand jadi lebih modern dan order online meningkat setelah redesign website.",
      project: isEn ? "F&B Website and Branding" : "Website dan Branding F&B",
    },
    {
      name: "Dian Prasetyo",
      company: isEn ? "Computer Science Student" : "Mahasiswa Informatika",
      rating: 5,
      review: isEn
        ? "The AI CV generator helped me produce a cleaner ATS-ready CV quickly, and I felt more confident applying for jobs."
        : "AI CV generator membantu saya membuat CV ATS-ready yang lebih rapi dengan cepat, jadi lebih percaya diri saat melamar kerja.",
      project: "AI CV Generator",
    },
  ]

  return (
    <section id="testimonials" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {isEn ? (
                <>
                  What Our <span className="text-primary">Clients Say</span>
                </>
              ) : (
                <>
                  Apa Kata <span className="text-primary">Klien Kami</span>
                </>
              )}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {isEn
                ? "Client outcomes are the most important signal for our work quality."
                : "Hasil dan kepuasan klien adalah indikator kualitas kerja yang paling penting bagi kami."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card
                key={`${testimonial.name}-${testimonial.project}`}
                className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute right-4 top-4 text-primary/10 transition-colors group-hover:text-primary/20">
                  <Quote className="h-12 w-12" />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="truncate text-sm text-muted-foreground">{testimonial.company}</div>
                      <div className="mt-1 flex items-center gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">{testimonial.project}</div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-pretty italic leading-relaxed text-muted-foreground">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 font-medium text-primary">
            <Star className="h-5 w-5 fill-primary" />
            <span>{isEn ? "Rated 4.9/5 from 100+ clients" : "Rating 4.9/5 dari 100+ klien"}</span>
          </div>
          <p className="text-muted-foreground">
            {isEn
              ? "Join teams that already use Meow Labs for their digital growth."
              : "Bergabunglah dengan klien yang sudah mempercayakan pertumbuhan digitalnya ke Meow Labs."}
          </p>
        </div>
      </div>
    </section>
  )
}
