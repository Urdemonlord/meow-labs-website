import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Cpu, Smartphone, Database, Shield, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Website Company Profile",
      description: "Website profesional untuk meningkatkan kredibilitas dan citra perusahaan Anda",
      features: ["Design Modern", "Responsive Mobile", "SEO Optimized", "Fast Loading"],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Website Toko Online",
      description: "E-commerce lengkap dengan sistem pembayaran dan manajemen produk",
      features: ["Katalog Produk", "Payment Gateway", "Order Management", "WhatsApp Integration"],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Website Portal Berita",
      description: "CMS portal berita dengan sistem admin yang mudah digunakan",
      features: ["Content Management", "Multi Author", "Category System", "SEO Tools"],
      color: "primary",
    },
    {
      icon: Shield,
      title: "Website Sekolah/Yayasan",
      description: "Platform informasi untuk lembaga pendidikan dengan fitur lengkap",
      features: ["Info Akademik", "Gallery Event", "Pengumuman", "Contact Form"],
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Landing Page Bisnis",
      description: "Halaman pendaratan yang menarik untuk kampanye marketing Anda",
      features: ["Conversion Focused", "Lead Generation", "Analytics", "A/B Testing Ready"],
      color: "primary",
    },
    {
      icon: Cpu,
      title: "Website Custom",
      description: "Solusi website dengan fitur khusus sesuai kebutuhan bisnis unik Anda",
      features: ["Custom Features", "API Integration", "Third-party Apps", "Scalable Architecture"],
      color: "secondary",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Jenis Website yang <span className="text-primary">Kami Layani</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami menyediakan berbagai jenis website profesional untuk membantu bisnis Anda berkembang di era digital.
            Dari company profile hingga toko online, semuanya dikerjakan dengan standar kualitas terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isSecondary = service.color === "secondary"

            return (
              <Card
                key={index}
                className={`bg-card border-border hover:border-${service.color}/50 transition-all duration-300 group hover:scale-105`}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${service.color}/20 transition-colors`}
                  >
                    <IconComponent className={`h-6 w-6 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full mr-2`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-${service.color === "primary" ? "primary-foreground" : "secondary-foreground"}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Butuh Solusi Custom?</h3>
            <p className="text-muted-foreground text-pretty mb-6 max-w-2xl mx-auto">
              Setiap bisnis memiliki kebutuhan yang unik. Mari diskusikan bagaimana kami dapat membantu mewujudkan visi
              teknologi Anda dengan solusi yang tepat sasaran.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-animation">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
