import Image from "next/image"
import { clientLogos } from "@/lib/client-logos"

export function HomeClients() {
  return (
    <section id="klien" className="border-b border-rule">
      <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="ml-eyebrow text-ink-muted">06 // Klien</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-ink">
            Dipercaya UMKM, institusi, dan perusahaan.
          </h2>
          <p className="mt-6 text-ink-muted">Lebih dari 30 website klien sudah online.</p>
          <div className="relative mt-10 aspect-[3/1] overflow-hidden rounded-[4px] bg-ink">
            <Image
              src="/art/indonesia-map.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-contain p-3"
            />
          </div>
          <p className="ml-eyebrow mt-3 text-ink-muted">Semarang → Indonesia</p>
        </div>
        <ul className="grid grid-cols-2 self-start border-l border-t border-rule sm:grid-cols-4 lg:col-span-8">
          {clientLogos.map((client) => (
            <li
              key={client.name}
              className="flex aspect-[3/2] items-center justify-center border-b border-r border-rule bg-paper-light p-6"
            >
              <Image
                src={client.url}
                alt={client.name}
                width={120}
                height={60}
                loading="lazy"
                className="max-h-14 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
