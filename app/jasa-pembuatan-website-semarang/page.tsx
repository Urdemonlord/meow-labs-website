import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific page
export const metadata: Metadata = {
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
  return <RedirectMessage href="/#services" message="Redirecting to homepage..." />
}
