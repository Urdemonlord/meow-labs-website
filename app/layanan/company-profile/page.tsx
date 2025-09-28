"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

// Metadata for this specific service page
export const metadata = {
  title: "Jasa Pembuatan Website Company Profile di Semarang | Meow Labs",
  description: "Jasa pembuatan website company profile profesional di Semarang. Tingkatkan citra perusahaan Anda dengan website yang elegan dan informatif. Mulai dari Rp 500rb!",
  keywords: [
    "company profile website semarang",
    "jasa website company profile", 
    "website perusahaan semarang",
    "website bisnis semarang",
    "pembuatan website profesional",
    "web company profile",
  ],
}

export default function CompanyProfilePage() {
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