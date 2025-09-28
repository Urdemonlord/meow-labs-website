"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

// Metadata for this specific page
export const metadata = {
  title: "Jasa Web Design Semarang Terbaik | Meow Labs",
  description: "Jasa web design Semarang dengan desain UI/UX modern dan profesional. Tingkatkan kesan pertama bisnis Anda dengan website yang menarik dan responsif. Hubungi Meow Labs sekarang!",
  keywords: [
    "jasa web design semarang",
    "desain website semarang", 
    "web designer semarang",
    "UI/UX design semarang",
    "desain website profesional",
    "jasa desain web semarang",
  ],
}

export default function JasaWebDesignSemarang() {
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