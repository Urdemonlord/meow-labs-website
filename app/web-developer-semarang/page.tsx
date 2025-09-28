import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific page
export const metadata: Metadata = {
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
  return <RedirectMessage href="/#portfolio" message="Redirecting to homepage..." />
}
