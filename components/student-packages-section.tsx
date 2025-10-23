"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, ArrowRight } from 'lucide-react'
import { useCallback } from 'react'
import { openBookingPage } from '@/lib/booking'

export function StudentPackagesSection() {
  const handleBookingContact = useCallback((message: string) => {
    openBookingPage({ message })
  }, [])

  const packages = [
    {
      name: "Paket Tugas Kuliah Lite",
      originalPrice: "399.000",
      price: "300.000",
      description: "Untuk tugas kuliah sederhana (website tugas, mini project coding).",
      features: [
        "Website statis 1–2 halaman (HTML/React sederhana)",
        "Basic desain (template standar)",
        "Tanpa maintenance",
        "Waktu pengerjaan cepat (2–3 hari)",
      ],
      popular: false,
      color: "primary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Tugas Kuliah Lite",
      discount: "25%",
      deliveryTime: "2-3 hari"
    },
    {
      name: "Paket Skripsi / Data Lite",
      originalPrice: "1.999.000",
      price: "1.500.000",
      description: "Untuk mahasiswa skripsi yang butuh bantuan data atau AI dasar.",
      features: [
        "Preprocessing dataset",
        "Model machine learning sederhana (klasifikasi/regresi)",
        "Dokumentasi dasar untuk laporan skripsi",
        "Revisi 1x",
      ],
      popular: true,
      color: "secondary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Skripsi / Data Lite",
      discount: "25%",
      deliveryTime: "7-14 hari"
    },
    {
      name: "Paket Aplikasi Mini",
      originalPrice: "2.499.000",
      price: "2.000.000",
      description: "Untuk project akhir mata kuliah atau prototype startup mahasiswa.",
      features: [
        "Aplikasi web sederhana (login, CRUD, dashboard)",
        "Database (MySQL/Postgres)",
        "Hosting gratisan (Heroku/Vercel)",
        "Dokumentasi singkat + presentasi",
      ],
      popular: false,
      color: "primary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Aplikasi Mini",
      discount: "20%",
      deliveryTime: "14-21 hari"
    },
    {
      name: "Paket Skripsi Premium",
      originalPrice: "5.000.000",
      price: "4.000.000",
      description: "Untuk skripsi/tesis dengan AI/Data lebih kompleks.",
      features: [
        "Full pipeline: data preprocessing, model training, evaluasi",
        "Bisa custom (NLP, Computer Vision, Recommender)",
        "Laporan teknis detail (grafik evaluasi)",
        "2x revisi + support 1 bulan",
      ],
      popular: false,
      color: "secondary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Skripsi Premium",
      discount: "20%",
      deliveryTime: "21-30 hari"
    },
    {
      name: "Paket Branding Mahasiswa",
      originalPrice: "1.999.000",
      price: "1.500.000",
      description: "Untuk mahasiswa/fresh graduate yang ingin punya website personal untuk CV/portofolio.",
      features: [
        "Website personal (3–4 halaman)",
        "Domain .com 1 tahun",
        "Showcase project & skill",
        "Integrasi LinkedIn/GitHub",
      ],
      popular: false,
      color: "primary",
      whatsappMessage: "Hallo admin saya ingin konsultasi gratis untuk paket Branding Mahasiswa",
      discount: "25%",
      deliveryTime: "7-14 hari"
    },
  ]

  return (
    <section id="student-packages" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Khusus Mahasiswa
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            📦 Paket Mahasiswa – <span className="text-primary">Meow Labs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Paket khusus untuk membantu kebutuhan akademis dan portofolio mahasiswa dengan harga spesial
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden border-2 ${pkg.popular ? 'border-secondary shadow-lg scale-105' : 'border-border'}`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULER
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">🎓 {pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-muted-foreground line-through text-sm">Rp{pkg.originalPrice}</span>
                  <span className="ml-2 inline-block bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-md">
                    HEMAT {pkg.discount}
                  </span>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-3xl font-bold text-primary">Rp{pkg.price}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">
                  📌 {pkg.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="text-sm font-medium">Fitur:</div>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start mt-4">
                    <span className="text-xs text-muted-foreground">⏱️ Estimasi waktu pengerjaan: {pkg.deliveryTime}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  onClick={() => handleBookingContact(pkg.whatsappMessage)}
                >
                  Booking Konsultasi
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Butuh paket custom untuk tugas akademik lainnya? Hubungi kami untuk diskusi lebih lanjut.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => handleBookingContact("Saya ingin booking konsultasi untuk kebutuhan project akademik custom")}
          >
            Diskusi Kebutuhan Custom
          </Button>
        </div>
      </div>
    </section>
  )
}