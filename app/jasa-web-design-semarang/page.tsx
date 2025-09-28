import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific page
export const metadata: Metadata = {
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
  return <RedirectMessage href="/#services" message="Redirecting to homepage..." />
}
