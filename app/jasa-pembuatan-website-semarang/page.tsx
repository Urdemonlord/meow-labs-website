"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

// Metadata for this specific page
export const metadata = {
  title: "Jasa Pembuatan Website Profesional #1 di Semarang | Meow Labs",
  description: "Layanan jasa pembuatan website profesional terbaik dan termurah di Semarang. Desain modern, responsive, dan SEO friendly. Hubungi Meow Labs sekarang untuk konsultasi gratis!",
  keywords: [
    "jasa pembuatan website semarang",
    "web developer semarang", 
    "jasa website semarang",
    "jasa web semarang terbaik",
    "website murah semarang",
    "web design semarang",
  ],
}

export default function JasaPembuatanWebsiteSemarang() {
  const router = useRouter()

  // Redirect to homepage with appropriate section focus
  useEffect(() => {
    router.push("/#services")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to homepage...</p>
    </div>
  )
}