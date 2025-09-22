import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Meow Labs - Jasa Pembuatan Website Profesional Termurah di Semarang",
  description:
    "Jasa pembuatan website profesional #1 di Semarang mulai 500rb. Company Profile, Toko Online, Landing Page. Maintenance Gratis, SEO Friendly, Response <2 jam. ☎️ 0895-3862-88683",
  generator: "Meow Labs",
  icons: {
    icon: "/images/meow-logo.png",
    shortcut: "/images/meow-logo.png",
    apple: "/images/meow-logo.png",
  },
  keywords: [
    "jasa pembuatan website semarang",
    "web developer semarang", 
    "website murah semarang",
    "toko online semarang",
    "company profile semarang",
    "landing page semarang",
    "jasa website termurah",
    "pembuatan website profesional",
    "web development semarang",
    "website responsive semarang",
    "jasa web design semarang"
  ],
  authors: [{ name: "Meow Labs" }],
  creator: "Meow Labs",
  publisher: "Meow Labs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://meowlabs.id",
    siteName: "Meow Labs - Jasa Website Semarang",
    title: "Jasa Pembuatan Website Profesional Termurah di Semarang",
    description: "Pembuatan website profesional mulai 500rb. Company Profile, Toko Online, Landing Page. Maintenance Gratis, SEO Friendly, Response <2 jam.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meow Labs - Jasa Website Semarang"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional Termurah di Semarang",
    description: "Pembuatan website profesional mulai 500rb. Company Profile, Toko Online, Landing Page. Maintenance Gratis, SEO Friendly, Response <2 jam.",
    images: ["/images/og-image.jpg"]
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://meowlabs.id"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="canonical" href="https://meowlabs.id" />
        <meta name="geo.region" content="ID-JT" />
        <meta name="geo.placename" content="Semarang" />
        <meta name="ICBM" content="-7.0051,110.4381" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Meow Labs",
              "description": "Jasa pembuatan website profesional termurah di Semarang",
              "url": "https://meowlabs.id",
              "telephone": "+6289538628863",
              "email": "meowlabs.id@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Semarang",
                "addressRegion": "Jawa Tengah",
                "addressCountry": "Indonesia"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.0051,
                "longitude": 110.4381
              },
              "openingHours": "Mo-Su 08:00-22:00",
              "priceRange": "Rp 500.000 - Rp 5.000.000",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "100"
              },
              "service": [
                "Website Company Profile",
                "Toko Online E-commerce", 
                "Landing Page Bisnis",
                "Website Sekolah",
                "Website Custom"
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
