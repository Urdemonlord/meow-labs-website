import type { Metadata } from "next"

import RedirectMessage from "@/components/redirect-message"

// Metadata for this specific service page
export const metadata: Metadata = {
  title: "Jasa Pembuatan Toko Online di Semarang | Meow Labs",
  description: "Jasa pembuatan website toko online dan e-commerce di Semarang. Tingkatkan penjualan bisnis Anda dengan website e-commerce yang profesional dan user-friendly.",
  keywords: [
    "toko online semarang",
    "jasa pembuatan e-commerce", 
    "website toko online semarang",
    "jasa website e-commerce",
    "pembuatan online shop",
    "website jualan online",
  ],
}

export default function TokoOnlinePage() {
  return <RedirectMessage href="/#services" message="Redirecting to services section..." />
}
