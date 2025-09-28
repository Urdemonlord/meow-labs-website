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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.store"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jasa Pembuatan Website Murah & Profesional | Meow Labs",
  description:
    "Meow Labs melayani jasa pembuatan website murah untuk UMKM, kafe, hingga personal branding. Website responsive & mobile-friendly mulai Rp500 ribu saja! Hubungi kami sekarang ☎️ 0895-3862-88683",
  generator: "Meow Labs",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "jasa pembuatan website murah",
    "jasa website Semarang",
    "bikin web UMKM murah",
    "jasa website mahasiswa",
    "website murah semarang",
    "pembuatan website profesional",
    "web development semarang",
    "buat website murah",
    "jasa pembuatan website semarang",
    "website toko online murah",
    "jasa web design semarang",
    "buat website personal",
    "jasa buat website kafe",
    "website responsive murah",
    "website mobile friendly",
    "jasa pembuatan landing page",
    "website SEO friendly",
    "web developer terbaik semarang",
    "harga website murah berkualitas",
    "bikin website sekolah",
  ],
  authors: [{ name: "Meow Labs" }],
  creator: "Meow Labs",
  publisher: "Meow Labs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Meow Labs - Jasa Website Semarang",
    title: "Jasa Pembuatan Website Murah untuk UMKM & Personal",
    description:
      "Meow Labs melayani jasa pembuatan website murah untuk UMKM, kafe, hingga personal branding di Semarang. Website responsive & mobile-friendly mulai Rp500 ribu saja!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meow Labs - Jasa Website Semarang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah untuk UMKM & Personal",
    description:
      "Meow Labs melayani jasa pembuatan website murah untuk UMKM, kafe, hingga personal branding di Semarang. Website responsive & mobile-friendly mulai Rp500 ribu saja!",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "89bed686282f82f4",
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        {/* Primary favicon information for search engines */}
        {/* <!-- This site's preferred favicon --> */}
        <link rel="canonical" href={siteUrl} />

        {/* Favicon support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#0f172a" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="theme-color" content="#0f172a" />

        <meta name="geo.region" content="ID-JT" />
        <meta name="geo.placename" content="Semarang" />
        <meta name="ICBM" content="-7.0051,110.4381" />
        <meta name="google-site-verification" content="89bed686282f82f4" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Meow Labs",
              description:
                "Jasa pembuatan website murah untuk UMKM & personal di Semarang",
              url: "https://meowlabs.store",
              telephone: "+6289538628863",
              email: "meowlabs.id@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Semarang",
                addressRegion: "Jawa Tengah",
                addressCountry: "Indonesia",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.0051,
                longitude: 110.4381,
              },
              openingHours: "Mo-Su 08:00-22:00",
              priceRange: "Rp 500.000 - Rp 5.000.000",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "100",
              },
              service: [
                "Website Company Profile",
                "Toko Online E-commerce",
                "Landing Page Bisnis",
                "Website Sekolah",
                "Website Custom",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Meow Labs",
              url: "https://meowlabs.store",
              logo: {
                "@type": "ImageObject",
                url: "https://meowlabs.store/images/meow-logo.png",
                width: "512",
                height: "512",
                caption: "Meow Labs Logo",
              },
              sameAs: [
                "https://instagram.com/meowlabs.id",
                "https://facebook.com/meowlabs.id",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
