import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific service page
export const metadata: Metadata = {
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
  return <RedirectMessage href="/#services" message="Redirecting to services section..." />
}
