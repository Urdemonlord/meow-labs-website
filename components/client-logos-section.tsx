"use client"

import Image from "next/image"
import { LoadingState, ErrorBoundary } from "@/components/loading-state"

export function ClientLogosSection() {
  const clientLogos = [
    {
      name: "Google",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "Microsoft",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      name: "GitHub",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "AWS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Figma",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Canva",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "Meta",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    },
    {
      name: "Shopify",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
    }
  ]

  return (
    <ErrorBoundary>
      <LoadingState>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dipercaya oleh <span className="text-primary">100+ Klien</span> di Semarang
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Setiap layanan yang kami kembangkan menghasilkan value bisnis yang membuat 
                mereka mempercayakan jasa pembuatan websitenya kepada kami
              </p>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="group flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-4 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border hover:border-primary/20">
                    <Image
                      src={client.url}
                      alt={`${client.name} Logo`}
                      width={60}
                      height={60}
                      className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Klien Puas</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
                <div className="text-muted-foreground">Rating Kepuasan</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+ Tahun</div>
                <div className="text-muted-foreground">Pengalaman</div>
              </div>
            </div>
          </div>
        </section>
      </LoadingState>
    </ErrorBoundary>
  )
}