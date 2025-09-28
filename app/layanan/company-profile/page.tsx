import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific service page
export const metadata: Metadata = {
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
  return <RedirectMessage href="/#services" message="Redirecting to services section..." />
}
