import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Cpu, Smartphone, Database, Shield, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Company profile, e-commerce, dan SaaS applications dengan teknologi modern",
      features: ["Next.js & React", "Responsive Design", "SEO Optimized", "Fast Performance"],
      color: "primary",
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Smart devices, sensor integration, dan dashboard monitoring real-time",
      features: ["Sensor Integration", "Real-time Dashboard", "Cloud Connectivity", "Data Analytics"],
      color: "secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications untuk iOS dan Android",
      features: ["React Native", "Cross Platform", "Native Performance", "App Store Ready"],
      color: "primary",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "API development, database design, dan cloud infrastructure",
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Scalable Architecture"],
      color: "secondary",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Authentication, authorization, dan security best practices",
      features: ["OAuth Integration", "Data Encryption", "Security Audit", "Compliance Ready"],
      color: "primary",
    },
    {
      icon: Zap,
      title: "AI & Automation",
      description: "Machine learning integration dan process automation",
      features: ["AI Integration", "Process Automation", "Data Processing", "Smart Analytics"],
      color: "secondary",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami menyediakan solusi teknologi lengkap untuk membantu bisnis Anda berkembang di era digital dengan
            pendekatan yang inovatif dan hasil yang terukur.
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
