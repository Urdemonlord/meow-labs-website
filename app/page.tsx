import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HomeHero } from "@/components/home/home-hero"
import { HomeLogoStrip } from "@/components/home/home-logo-strip"
import { HomeManifesto } from "@/components/home/home-manifesto"
import { HomeCapabilities } from "@/components/home/home-capabilities"
import { HomeProducts } from "@/components/home/home-products"
import { HomeChangelog } from "@/components/home/home-changelog"
import { HomeProcess } from "@/components/home/home-process"
import { HomeClients } from "@/components/home/home-clients"
import { HomeNotes } from "@/components/home/home-notes"
import { HomeCta } from "@/components/home/home-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <HomeHero />
      <HomeLogoStrip />
      <HomeManifesto />
      <HomeCapabilities />
      <HomeProducts />
      <HomeChangelog />
      <HomeProcess />
      <HomeClients />
      <HomeNotes />
      <HomeCta />
      <Footer />
    </main>
  )
}
