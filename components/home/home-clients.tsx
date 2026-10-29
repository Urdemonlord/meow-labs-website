import Image from "next/image"

// Logo klien tampil di strip bawah hero; section ini menonjolkan jangkauan
// klien lewat peta.
export function HomeClients() {
  return (
    <section id="klien" className="border-b border-rule">
      <div className="ml-container ml-section grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="ml-reveal lg:col-span-4">
          <p className="ml-eyebrow text-ink-muted">07 // Klien</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-ink">
            Dipercaya UMKM, institusi, dan perusahaan.
          </h2>
          <p className="mt-6 text-ink-muted">Lebih dari 30 website klien sudah online.</p>
        </div>
        <figure className="ml-reveal lg:col-span-8">
          <div className="relative aspect-[3/1] overflow-hidden rounded-[4px] bg-ink">
            <Image
              src="/art/indonesia-map.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-contain p-3"
            />
          </div>
          <figcaption className="ml-eyebrow mt-3 text-ink-muted">Semarang → Indonesia</figcaption>
        </figure>
      </div>
    </section>
  )
}
