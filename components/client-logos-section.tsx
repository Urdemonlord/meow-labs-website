"use client"

import Image from "next/image"
import { ErrorBoundary, LoadingState } from "@/components/loading-state"
import { useUiPreferences } from "./ui-preferences-provider"

export function ClientLogosSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"

  const clientLogos = [
    { name: "PWK Consultant", url: "/pwk-consultant-logo.svg" },
    { name: "Sportify", url: "/sportify-logo.svg" },
    { name: "Dedomena", url: "/dedomena-logo.svg" },
    { name: "Kabupaten Grobogan", url: "/kabupaten-grobogan-logo.svg" },
    { name: "RSGM", url: "/rsgm-logo.svg" },
    { name: "BBPMP Jawa Tengah", url: "/bbpmp-logo.svg" },
    { name: "Telkom", url: "/logo-telkom.svg" },
    { name: "Jeka Towing", url: "/logo-jeka-towing.webp" },
  ]

  return (
    <ErrorBoundary>
      <LoadingState>
        <section className="overflow-hidden bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {isEn ? (
                  <>
                    Trusted by <span className="text-primary">100+ Clients</span>
                  </>
                ) : (
                  <>
                    Dipercaya oleh <span className="text-primary">100+ Klien</span>
                  </>
                )}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                {isEn
                  ? "Our execution is trusted by companies, institutions, and business teams across industries."
                  : "Eksekusi kami dipercaya oleh perusahaan, institusi, dan tim bisnis dari berbagai industri."}
              </p>
            </div>

            <div className="relative mb-16 overflow-hidden">
              <div className="flex items-center justify-center">
                <div className="animate-scroll-horizontal flex whitespace-nowrap space-x-12">
                  {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                    <div key={`${client.name}-${index}`} className="group flex shrink-0 items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:shadow-lg md:h-24 md:w-24">
                        <Image
                          src={client.url}
                          alt={`${client.name} Logo`}
                          width={70}
                          height={70}
                          className="h-auto max-w-full opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-2 text-3xl font-bold text-primary">100+</div>
                <div className="text-muted-foreground">{isEn ? "Satisfied Clients" : "Klien Puas"}</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-2 text-3xl font-bold text-green-600">4.9/5</div>
                <div className="text-muted-foreground">{isEn ? "Client Rating" : "Rating Kepuasan"}</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-2 text-3xl font-bold text-blue-600">3+ years</div>
                <div className="text-muted-foreground">{isEn ? "Delivery Experience" : "Pengalaman Delivery"}</div>
              </div>
            </div>
          </div>

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

            .animate-scroll-horizontal:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>
      </LoadingState>
    </ErrorBoundary>
  )
}
