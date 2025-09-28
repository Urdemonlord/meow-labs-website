import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific service page
export const metadata: Metadata = {
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
  return <RedirectMessage href="/#services" message="Redirecting to services section..." />
}
