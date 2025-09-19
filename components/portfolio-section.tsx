"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web",
      description: "Modern e-commerce platform dengan fitur lengkap untuk UMKM",
      image: "/modern-ecommerce-website.png",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart Home Dashboard",
      category: "IoT",
      description: "Dashboard monitoring untuk smart home devices dengan real-time data",
      image: "/smart-home-dashboard.png",
      tags: ["React", "IoT", "WebSocket"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Analytics Tool",
      category: "Web",
      description: "Analytics platform untuk tracking business metrics",
      image: "/analytics-dashboard-dark-theme.png",
      tags: ["Next.js", "Chart.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "IoT Sensor Network",
      category: "IoT",
      description: "Network monitoring system untuk industrial IoT sensors",
      image: "/industrial-iot-sensors-network.jpg",
      tags: ["Arduino", "MQTT", "InfluxDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chat Assistant",
      category: "AI",
      description: "Intelligent chatbot dengan natural language processing",
      image: "/ai-chatbot-interface.png",
      tags: ["OpenAI", "Node.js", "WebSocket"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile",
      description: "Secure mobile banking application dengan biometric auth",
      image: "/mobile-banking-app.png",
      tags: ["React Native", "Biometric", "Encryption"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const filters = ["All", "Web", "IoT", "AI", "Mobile"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Lihat beberapa proyek yang telah kami kerjakan dengan berbagai teknologi dan solusi inovatif untuk klien
            dari berbagai industri.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-secondary text-secondary-foreground">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary bg-transparent">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <Badge variant="outline" className="border-primary text-primary">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-pretty mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
