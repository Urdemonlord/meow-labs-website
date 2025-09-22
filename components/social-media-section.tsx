"use client"

import { Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SocialMediaSection() {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@meowlabs.id",
      url: "https://instagram.com/meowlabs.id",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      description: "Follow our latest projects, behind-the-scenes content, dan tips web development!"
    },
    {
      name: "Facebook",
      handle: "Meow Labs",
      url: "https://facebook.com/meowlabs.id",
      icon: Facebook,
      color: "from-blue-600 to-blue-500",
      description: "Join our community untuk diskusi, sharing tips, dan update layanan terbaru"
    },
    {
      name: "LinkedIn",
      handle: "Meow Labs",
      url: "https://linkedin.com/company/meowlabs",
      icon: Linkedin,
      color: "from-blue-700 to-blue-600",
      description: "Connect with us untuk networking profesional dan business opportunities"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Follow Our <span className="text-primary">Social Media</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay updated dengan project terbaru, tips web development, dan behind-the-scenes content dari tim Meow Labs!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.handle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  <Button 
                    asChild
                    className="w-full group-hover:scale-105 transition-transform"
                  >
                    <a 
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Follow <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
              </div>
    </section>
  )
}