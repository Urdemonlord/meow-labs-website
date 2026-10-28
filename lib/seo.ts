import type { Metadata } from "next"

// Field Open Graph bersama. Next.js mengganti objek openGraph secara utuh
// (bukan merge) saat halaman menimpanya, jadi halaman yang mengatur
// openGraph sendiri perlu menyebarkan nilai ini agar gambar preview tetap ada.
export const sharedOpenGraph = {
  type: "website",
  locale: "id_ID",
  siteName: "Meow Labs - Jasa Website Semarang",
  images: [
    {
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "MeowLabs: sistem AI, produk digital, dan software yang berguna",
    },
  ],
} satisfies Metadata["openGraph"]
