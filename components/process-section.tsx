"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageSquare, 
  PenTool, 
  Code2, 
  Rocket, 
  CheckCircle,
  Clock,
  Users,
  Headphones
} from "lucide-react"

export function ProcessSection() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Halo Meow Labs! Saya ingin memulai project website. Mohon info prosesnya.")
    window.open(`https://wa.me/6289538628863?text=${message}`, '_blank')
  }

  const processes = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description: "Kami akan memahami kebutuhan bisnis, target audience, dan goals website Anda secara detail melalui konsultasi mendalam.",
      icon: MessageSquare,
      duration: "1-2 Hari",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      features: ["Analisis kebutuhan bisnis", "Riset kompetitor", "Penentuan target audience", "Strategi konten & SEO"]
    },
    {
      step: "02", 
      title: "Design & Wireframe",
      description: "Tim designer kami akan membuat mockup dan wireframe yang sesuai dengan brand identity dan preferensi visual Anda.",
      icon: PenTool,
      duration: "3-5 Hari",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      features: ["UI/UX Design professional", "Wireframe & mockup", "Responsive design", "Brand integration"]
    },
    {
      step: "03",
      title: "Development & Coding", 
      description: "Proses coding menggunakan teknologi terdepan dengan fokus pada performance, security, dan SEO optimization.",
      icon: Code2,
      duration: "5-15 Hari",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      features: ["Clean code structure", "Mobile-first approach", "SEO optimization", "Security implementation"]
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Quality assurance menyeluruh, testing di berbagai device dan browser, kemudian deploy ke server production.",
      icon: Rocket,
      duration: "2-3 Hari",
      color: "text-orange-600", 
      bgColor: "bg-orange-500/10",
      features: ["Cross-browser testing", "Mobile responsiveness", "Performance optimization", "Go-live deployment"]
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Timeline Jelas",
      description: "Jadwal pengerjaan transparan dengan milestone yang terukur"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Tim khusus yang handle project Anda dari awal hingga selesai"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance", 
      description: "Testing menyeluruh sebelum website live untuk memastikan kualitas"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Dukungan teknis berkelanjutan bahkan setelah website live"
    }
  ]

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bagaimana <span className="text-primary">Cara Kerja</span> Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Proses pembuatan website yang terstruktur dan profesional untuk memastikan 
            hasil terbaik sesuai kebutuhan bisnis Anda
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processes.map((process, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                {process.step}
              </div>
              
              <CardContent className="pt-8 pb-6">
                {/* Icon */}
                <div className={`w-12 h-12 ${process.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <process.icon className={`h-6 w-6 ${process.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty leading-relaxed">
                  {process.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-primary">{process.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-1">
                  {process.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Connector Line (hidden on last item) */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Mengapa Memilih <span className="text-primary">Proses Kami</span>?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Siap Memulai Project Website Anda?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Konsultasi gratis untuk membahas kebutuhan website Anda. 
              Tim kami siap membantu mewujudkan website impian bisnis Anda!
            </p>
            <Button onClick={handleWhatsAppContact} size="lg" className="text-lg px-8">
              Mulai Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}