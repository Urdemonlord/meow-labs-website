import Image from "next/image"
import { CtaBand, PageHeader } from "@/components/editorial"

const pillars = [
  {
    title: "Engineering",
    body: "Membangun sistem untuk pelanggan: website, aplikasi, dan integrasi AI ke proses operasional. Ini yang membiayai studio.",
  },
  {
    title: "Products",
    body: "Mengembangkan sedikit produk unggulan yang menyelesaikan masalah nyata dan dipakai berulang, bukan sebanyak mungkin produk.",
  },
  {
    title: "Research",
    body: "Bereksperimen dengan AI agent, keamanan AI, dan infrastruktur, lalu memublikasikan hasilnya sebagai kode, benchmark, atau artikel.",
  },
]

const principles = [
  "Mulai dari masalah pelanggan, bukan dari tren teknologi.",
  "Tidak memaksakan AI kalau software biasa sudah cukup.",
  "Mengukur hasil dari masalah yang selesai dan pengguna yang kembali, bukan jumlah fitur.",
  "Keamanan dan keandalan dirancang sejak awal, bukan ditambal belakangan.",
]

export function AboutPageContent() {
  return (
    <>
      <PageHeader
        eyebrow="// Tentang Meowlabs.id"
        title="Studio teknologi independen dari Indonesia."
        intro="Meow Labs membangun produk AI-native, sistem yang aman, dan software yang berguna dari Semarang. Kami mengerjakan proyek untuk klien, membangun produk sendiri, dan mempublikasikan eksperimen teknologi kami."
      />

      <section className="border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="ml-eyebrow text-ink-muted">{"// Profil dan pendekatan kerja"}</p>
            <Image src="/art/mascot-sitting.webp" alt="" width={233} height={280} loading="lazy" className="mt-10 h-auto w-[180px]" />
          </div>
          <div className="space-y-6 text-pretty text-xl leading-relaxed text-ink lg:col-span-8">
            <p>
              Meow Labs didirikan oleh{" "}
              <a
                href="https://hasrinata.meowlabs.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rule underline-offset-4 hover:decoration-ink"
              >
                Hasrinata Arya Afendi
              </a>
              , mahasiswa Universitas Muhammadiyah Semarang (Unimus),
              sebagai jasa pembuatan website untuk UMKM. Sekarang kami berkembang menjadi studio AI engineering dan produk
              digital, tanpa meninggalkan layanan website yang menjadi awal kami.
            </p>
            <p className="text-ink-muted">
              Di era AI, membuat website, dashboard, atau chatbot sederhana makin mudah. Karena itu kami tidak menjual baris
              kode. Nilai yang kami tawarkan ada pada memahami masalah, merancang sistem, mengintegrasikan teknologi, menjaga
              keandalan, dan menghasilkan dampak bisnis.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <p className="ml-eyebrow text-ink-muted">{"// Tiga pilar"}</p>
          <div className="mt-10 grid border-t border-ink md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="border-b border-rule py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="ml-eyebrow text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 font-display text-4xl leading-none text-ink">{pillar.title}</h2>
                <p className="mt-4 text-pretty leading-relaxed text-ink-muted">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="ml-container ml-section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="ml-eyebrow text-ink-muted">{"// Prinsip yang kami pegang"}</p>
            <ol className="mt-8 border-t border-ink">
              {principles.map((principle, index) => (
                <li key={principle} className="flex gap-5 border-b border-rule py-5 text-lg text-ink">
                  <span className="ml-eyebrow pt-1.5 text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
                  {principle}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[4px] bg-ink p-8 text-paper-light lg:col-span-5 sm:p-10">
            <p className="ml-eyebrow text-dark-muted">{"// Identitas dari Indonesia"}</p>
            <p className="mt-6 text-pretty leading-relaxed">
              Arah visual Meow Labs dibangun dari logo kucing, kolase budaya Indonesia, tipografi editorial, dan dokumentasi
              teknis. Budaya Indonesia menjadi perspektif studio, sementara produk kami tetap dirancang untuk relevan bagi
              penggunanya.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Punya masalah yang ingin diselesaikan?"
        body="Konsultasi awal gratis untuk membahas masalahnya, lalu kami rekomendasikan solusi yang paling masuk akal: website, aplikasi, otomasi, atau integrasi AI."
        whatsappMessage="Halo Meowlabs.id, saya ingin konsultasi project"
      />
    </>
  )
}
