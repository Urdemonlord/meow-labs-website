"use client"

import Image from "next/image"
import { LoadingState, ErrorBoundary } from "@/components/loading-state"

export function ClientLogosSection() {
  const clientLogos = [
    {
      name: "PWK Consultant",
      url: "/pwk-consultant-logo.svg",
    },
    {
      name: "Sportify",
      url: "/sportify-logo.svg",
    },
    {
      name: "Dedomena",
      url: "/dedomena-logo.svg",
    },
    {
      name: "Kabupaten Grobogan",
      url: "/kabupaten-grobogan-logo.svg",
    },
    {
      name: "RSGM",
      url: "/rsgm-logo.svg",
    },
    {
      name: "BBPMP Jawa Tengah",
      url: "/bbpmp-logo.svg",
    },
    {
      name: "Telkom",
      url: "/logo-telkom.svg",
    }
  ]

  return (
    <ErrorBoundary>
      <LoadingState>
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dipercaya oleh <span className="text-primary">100+ Klien</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Setiap layanan yang kami kembangkan menghasilkan value bisnis yang membuat 
                mereka mempercayakan jasa pembuatan websitenya kepada kami
              </p>
            </div>

            {/* Animated Client Logos - Single Row */}
            <div className="relative mb-16 overflow-hidden">
              <div className="flex items-center justify-center">
                <div className="animate-scroll-horizontal flex space-x-12 whitespace-nowrap">
                  {/* Duplicate logos for seamless loop */}
                  {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                    <div key={index} className="group flex items-center justify-center flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-4 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border hover:border-primary/20 hover:bg-primary/5">
                        <Image
                          src={client.url}
                          alt={`${client.name} Logo`}
                          width={70}
                          height={70}
                          className="max-w-full h-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-primary mb-2 animate-pulse">100+</div>
                <div className="text-muted-foreground">Klien Puas</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-green-600 mb-2 animate-bounce">4.9/5</div>
                <div className="text-muted-foreground">Rating Kepuasan</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">3+ Tahun</div>
                <div className="text-muted-foreground">Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Custom CSS Animations */}
          <style jsx>{`
            @keyframes scroll-horizontal {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .animate-scroll-horizontal {
              animation: scroll-horizontal 40s linear infinite;
            }

            /* Pause animation on hover */
            .animate-scroll-horizontal:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>
      </LoadingState>
    </ErrorBoundary>
  )
}