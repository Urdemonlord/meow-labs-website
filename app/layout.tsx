import type React from "react"
import type { Metadata } from "next"
import { Geist, IBM_Plex_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import ClientComponents from "../components/client-components"
import { UiPreferencesProvider } from "../components/ui-preferences-provider"
import { sharedOpenGraph } from "@/lib/seo"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.id"
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe6",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Meow Labs | Studio AI Engineering & Jasa Pembuatan Website Semarang",
  description:
    "Meow Labs adalah studio teknologi independen dari Semarang: integrasi AI dan otomasi bisnis, produk digital, serta jasa pembuatan website untuk UMKM mulai Rp500 ribu. Hubungi kami di 0895-3862-88683.",
  generator: "Meow Labs",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "jasa pembuatan website murah",
    "jasa integrasi ai",
    "ai agent whatsapp",
    "otomasi bisnis ai",
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
    ...sharedOpenGraph,
    url: siteUrl,
    title: "Meow Labs | AI Engineering, Produk Digital & Jasa Website",
    description:
      "Studio teknologi independen dari Semarang yang membangun sistem AI, produk digital, dan software yang berguna. Jasa website UMKM mulai Rp500 ribu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meow Labs | AI Engineering, Produk Digital & Jasa Website",
    description:
      "Studio teknologi independen dari Semarang yang membangun sistem AI, produk digital, dan software yang berguna. Jasa website UMKM mulai Rp500 ribu.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "89bed686282f82f4",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        {/* Primary favicon information for search engines */}
        {/* <!-- This site's preferred favicon --> */}

        {/* Favicon support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#f2efe6" />
        <meta name="theme-color" content="#f2efe6" />

        <meta name="geo.region" content="ID-JT" />
        <meta name="geo.placename" content="Semarang" />
        <meta name="ICBM" content="-7.0051,110.4381" />
        <meta name="google-site-verification" content="89bed686282f82f4" />
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
                "Studio teknologi independen di Semarang yang dipimpin Hasrinata Arya Afendi: integrasi AI dan otomasi bisnis, produk digital, serta jasa pembuatan website untuk UMKM dan institusi",
              url: siteUrl,
              telephone: "+62895386288683",
              email: "admin@meowlabs.id",
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
              service: [
                "Integrasi AI & Otomasi",
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
              url: siteUrl,
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/images/meow-logo.webp`,
                width: "512",
                height: "512",
                caption: "Meow Labs Logo",
              },
              sameAs: [
                "https://instagram.com/meowlabs.id",
                "https://www.tiktok.com/@meowlabs.id",
              ],
            }),
          }}
        />

        {/* GA4 tracking (conditional) */}
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                    page_title: document.title,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geist.variable} ${instrumentSerif.variable} ${plexMono.variable} font-sans antialiased`}
      >
        <UiPreferencesProvider>
          <Suspense fallback={null}>
            <ClientComponents />
          </Suspense>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </UiPreferencesProvider>
      </body>
    </html>
  )
}
