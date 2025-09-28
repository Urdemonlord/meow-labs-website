"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

// Metadata for this specific service page
export const metadata = {
  title: "Jasa Pembuatan Landing Page Profesional di Semarang | Meow Labs",
  description: "Jasa pembuatan landing page konversi tinggi di Semarang. Desain modern, responsif, dan fokus pada CTA untuk meningkatkan penjualan dan lead bisnis Anda.",
  keywords: [
    "landing page semarang",
    "jasa landing page", 
    "pembuatan landing page profesional",
    "landing page konversi tinggi",
    "landing page digital marketing",
    "landing page bisnis",
  ],
}

export default function LandingPageService() {
  const router = useRouter()

  // Redirect to services section
  useEffect(() => {
    router.push("/#services")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to services section...</p>
    </div>
  )
}