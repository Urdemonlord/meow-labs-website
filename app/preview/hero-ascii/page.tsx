import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { HomeHero } from "@/components/home/home-hero";
import { HeroAsciiArt } from "@/components/preview/hero-ascii-art";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <HomeHero visual={<HeroAsciiArt />} />
    </main>
  );
}
