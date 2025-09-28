"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

// Metadata for this specific page
export const metadata = {
  title: "Web Developer Profesional Semarang | Meow Labs",
  description: "Tim web developer profesional Semarang dengan portofolio terbaik. Ahli dalam pengembangan website modern, aplikasi web, dan solusi e-commerce. Konsultasi gratis!",
  keywords: [
    "web developer semarang", 
    "jasa website semarang",
    "pengembang web semarang",
    "pembuatan website profesional",
    "web development semarang",
    "programmer website semarang",
  ],
}

export default function WebDeveloperSemarang() {
  const router = useRouter()

  // Redirect to homepage with appropriate section focus
  useEffect(() => {
    router.push("/#portfolio")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to homepage...</p>
    </div>
  )
}