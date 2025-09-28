"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

// Metadata for this specific service page
export const metadata = {
  title: "Jasa Pembuatan Toko Online di Semarang | Meow Labs",
  description: "Jasa pembuatan website toko online dan e-commerce di Semarang. Tingkatkan penjualan bisnis Anda dengan website e-commerce yang profesional dan user-friendly.",
  keywords: [
    "toko online semarang",
    "jasa pembuatan e-commerce", 
    "website toko online semarang",
    "jasa website e-commerce",
    "pembuatan online shop",
    "website jualan online",
  ],
}

export default function TokoOnlinePage() {
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