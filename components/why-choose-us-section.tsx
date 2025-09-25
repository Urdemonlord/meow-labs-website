"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Wrench, Palette, Zap, Video, Award } from "lucide-react"

export function WhyChooseUsSection() {
  const advantages = [
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Kami memiliki tim developer profesional yang siap mengerjakan berbagai kebutuhan website Anda dengan kualitas terjamin",
      color: "primary",
    },
    {
      icon: Wrench,
      title: "Layanan Maintenance Gratis",
      description: "Jangan khawatir bingung pengelolaan websitenya, kami berikan pelayanan maintenance GRATIS selama web aktif",
      color: "secondary",
    },
    {
      icon: Palette,
      title: "Design Website Profesional & Responsif",
      description: "Website yang kami buat selalu menggunakan desain modern, profesional, dan dapat diakses dengan baik di semua device",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Website Anti Lemot & SEO Friendly",
      description: "Nikmati kecepatan website yang stabil dan copywriting yang efektif untuk meningkatkan ranking di Google",
      color: "secondary",
    },
    {
      icon: Video,
      title: "Video Tutorial Penggunaan",
      description: "Kami buatkan modul atau video tutorial untuk mempermudah Anda dalam mengelola website sendiri",
      color: "primary",
    },
    {
      icon: Award,
      title: "Jaminan Kepuasan 100%",
      description: "Kami berkomitmen memberikan hasil terbaik dengan garansi revisi dan dukungan penuh hingga Anda puas",
      color: "secondary",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Mengapa Pilih Jasa Pembuatan Website di <span className="text-primary">Meow Labs</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami adalah pilihan terbaik untuk kebutuhan website profesional Anda di Semarang. 
            Dengan pengalaman dan dedikasi tinggi, kami siap wujudkan website impian Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  advantage.color === 'primary' 
                    ? 'from-primary/5 via-primary/3 to-transparent' 
                    : 'from-secondary/5 via-secondary/3 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                    advantage.color === 'primary'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-secondary/10 text-secondary'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-balance leading-tight">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${
                  advantage.color === 'primary'
                    ? 'bg-primary/5'
                    : 'bg-secondary/5'
                } rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full font-medium">
            <Award className="h-5 w-5" />
            <span>Dipercaya oleh 100+ klien di Semarang dan sekitarnya</span>
          </div>
        </div>
      </div>
    </section>
  )
}