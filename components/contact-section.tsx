"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useUiPreferences } from "./ui-preferences-provider"

export function ContactSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    organization: "",
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const message = isEn
      ? `Hello admin, I want to consult about website development.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AOrganization: ${formData.organization}%0A%0AMessage: ${formData.message}`
      : `Halo admin, saya ingin konsultasi pembuatan website.%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0AOrganisasi: ${formData.organization}%0A%0APesan: ${formData.message}`
    window.open(`https://api.whatsapp.com/send?phone=6285117170198&text=${message}`, "_blank")
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      isEn
        ? "Hello admin, I want a quick website consultation."
        : "Halo admin, saya ingin konsultasi cepat terkait website."
    )
    window.open(`https://api.whatsapp.com/send?phone=6285117170198&text=${message}`, "_blank")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? (
              <>
                Discuss Your Website Needs <span className="text-primary">for Free</span>
              </>
            ) : (
              <>
                Konsultasikan Kebutuhan Website Anda <span className="text-primary">Gratis</span>
              </>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "Our team will help define the right scope, timeline, and implementation direction for your business."
              : "Tim kami siap membantu menentukan scope, timeline, dan arah implementasi terbaik untuk kebutuhan bisnis Anda."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                {isEn ? "Contact Form" : "Form Konsultasi"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      {isEn ? "Full Name" : "Nama Lengkap"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-border bg-input text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-border bg-input text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="mb-2 block text-sm font-medium text-foreground">
                    {isEn ? "Company or Organization" : "Perusahaan atau Organisasi"}
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="border-border bg-input text-foreground"
                    placeholder={isEn ? "Your organization" : "Nama organisasi Anda"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    {isEn ? "Message" : "Pesan"}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-border bg-input text-foreground"
                    placeholder={
                      isEn
                        ? "Tell us the project you want to build..."
                        : "Ceritakan project yang ingin Anda kerjakan..."
                    }
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="glow-animation w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isEn ? "Send Message" : "Kirim Pesan"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {isEn ? "Professional Website Partner in Semarang" : "Partner Website Profesional di Semarang"}
                </h3>
                <p className="mb-6 text-pretty text-muted-foreground">
                  {isEn
                    ? "We support clients in Semarang and across Indonesia with practical website execution and clear communication."
                    : "Kami melayani klien di Semarang dan seluruh Indonesia dengan eksekusi website yang praktis dan komunikasi yang jelas."}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">admin@meowlabs.id</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-muted-foreground">+62 851-1717-0198</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{isEn ? "Service Area" : "Lokasi Layanan"}</div>
                      <div className="text-muted-foreground">{isEn ? "Semarang and beyond" : "Semarang dan sekitarnya"}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="border-border bg-card p-4 text-center sm:p-6">
                <div className="mb-1 text-2xl font-bold text-primary">{"<2h"}</div>
                <div className="text-sm text-muted-foreground">{isEn ? "Response Time" : "Respons Awal"}</div>
              </Card>
              <Card className="border-border bg-card p-4 text-center sm:p-6">
                <div className="mb-1 text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">{isEn ? "Free Consultation" : "Konsultasi Gratis"}</div>
              </Card>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 p-5 text-center sm:p-6">
              <h4 className="mb-2 font-semibold text-foreground">
                {isEn ? "Need a Fast Response?" : "Butuh Respons Cepat?"}
              </h4>
              <p className="mb-4 text-sm text-muted-foreground">
                {isEn
                  ? "Chat directly with our team through WhatsApp."
                  : "Chat langsung dengan tim kami melalui WhatsApp."}
              </p>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={handleWhatsAppContact}>
                <Phone className="mr-2 h-4 w-4" />
                {isEn ? "WhatsApp Now" : "WhatsApp Sekarang"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
