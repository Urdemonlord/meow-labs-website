"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

// Metadata for this specific service page
export const metadata = {
  title: "Jasa Pembuatan Aplikasi Web Custom di Semarang | Meow Labs",
  description: "Jasa pembuatan aplikasi web custom untuk kebutuhan bisnis di Semarang. Kembangkan sistem informasi, CRM, atau aplikasi khusus untuk meningkatkan efisiensi perusahaan Anda.",
  keywords: [
    "aplikasi web semarang",
    "jasa pembuatan aplikasi", 
    "web application development",
    "aplikasi custom semarang",
    "sistem informasi web",
    "pengembangan software semarang",
  ],
}

export default function AplikasiWebService() {
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