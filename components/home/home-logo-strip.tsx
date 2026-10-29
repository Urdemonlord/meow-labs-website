import Image from "next/image"
import { clientLogos } from "@/lib/client-logos"

// Strip logo klien tepat di bawah hero: bukti kepercayaan yang langsung
// terlihat sebelum pengunjung menggulir lebih jauh. mix-blend-multiply
// menyamarkan latar putih pada beberapa file logo.
export function HomeLogoStrip() {
  return (
    <section aria-labelledby="logo-strip-label" className="border-b border-rule bg-paper-light">
      <div className="ml-container flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-12">
        <p id="logo-strip-label" className="ml-eyebrow shrink-0 text-ink-muted">
          Dipercaya oleh
        </p>
        <ul className="grid flex-1 grid-cols-4 items-center gap-x-6 gap-y-6 sm:grid-cols-8">
          {clientLogos.map((client) => (
            <li key={client.name} className="flex h-10 items-center justify-center">
              <Image
                src={client.url}
                alt={client.name}
                width={120}
                height={60}
                loading="lazy"
                className="max-h-10 w-auto max-w-full object-contain opacity-70 mix-blend-multiply grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
