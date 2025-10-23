"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { openBookingPage } from "@/lib/booking"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    organization: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    openBookingPage({
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      message: formData.message,
    })
  }

  const handleBookingContact = () => {
    openBookingPage({
      message: "Saya ingin booking konsultasi cepat dengan tim Meow Labs",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Konsultasikan kebutuhan website Anda sekarang. <span className="text-primary">Gratis!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tim profesional kami siap membantu mewujudkan website impian Anda. 
            Konsultasi gratis tanpa komitmen - mulai dari analisa kebutuhan hingga website Anda tayang!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-border text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Perusahaan/Organisasi
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-input border-border text-foreground"
                    placeholder="PT. Example Indonesia"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input border-border text-foreground"
                    placeholder="Ceritakan tentang proyek yang ingin Anda kerjakan..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-animation"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Lanjut ke Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Jasa Pembuatan Website #1 Semarang</h3>
                <p className="text-muted-foreground text-pretty mb-6">
                  Kami melayani seluruh wilayah Semarang dan sekitarnya dengan komitmen memberikan layanan terbaik 
                  untuk kebutuhan website bisnis Anda. Konsultasi gratis sekarang juga!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">admin@meowlabs.id</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-muted-foreground">+62 895386288683</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Lokasi Layanan</div>
                      <div className="text-muted-foreground">Semarang & Sekitarnya</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border text-center p-6">
                <div className="text-2xl font-bold text-primary mb-1">{"<2h"}</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </Card>
              <Card className="bg-card border-border text-center p-6">
                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Konsultasi Gratis</div>
              </Card>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 text-center">
              <h4 className="font-semibold text-foreground mb-2">Siap Mulai Sekarang?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Booking jadwal konsultasi gratis dan pilih waktu yang paling cocok untuk Anda.
              </p>
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={handleBookingContact}
              >
                <Phone className="mr-2 h-4 w-4" />
                Booking Konsultasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
