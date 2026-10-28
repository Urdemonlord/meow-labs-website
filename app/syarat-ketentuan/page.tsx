import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: { canonical: "/syarat-ketentuan" },
  title: "Syarat & Ketentuan | Meow Labs",
  description:
    "Syarat dan Ketentuan penggunaan website dan layanan Meow Labs, termasuk alur konsultasi, pembayaran, revisi, dan tanggung jawab pengguna.",
}

const updatedAt = "16 Mei 2026"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <section className="border-b border-rule">
        <div className="ml-container py-14 sm:py-20">
          <p className="ml-eyebrow text-ink-muted">{"// Dokumen legal"}</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] tracking-tight text-ink">Syarat & Ketentuan</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            Halaman ini mengatur penggunaan website Meow Labs dan ketentuan umum layanan pembuatan website serta
            dukungan digital yang kami berikan.
          </p>
          <p className="ml-eyebrow mt-8 text-ink-muted">Terakhir diperbarui · {updatedAt}</p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <div className="mx-auto max-w-4xl border-t border-ink">
            <LegalBlock title="1. Ruang Lingkup Layanan">
              Meow Labs menyediakan layanan pengembangan website, landing page, optimasi performa, dan layanan terkait
              sesuai kesepakatan proyek. Detail ruang lingkup ditetapkan pada proposal atau brief yang disetujui.
            </LegalBlock>

            <LegalBlock title="2. Alur Konsultasi dan Persetujuan">
              Konsultasi awal dapat dilakukan melalui form, chat assistant, chat, atau WhatsApp. Proyek dianggap berjalan
              setelah ruang lingkup, biaya, dan jadwal disepakati kedua pihak.
            </LegalBlock>

            <LegalBlock title="3. Harga, Pembayaran, dan Revisi">
              Estimasi pada chat assistant bersifat indikatif. Harga final mengikuti kesepakatan proyek. Ketentuan pembayaran
              dan jumlah revisi mengikuti paket atau proposal yang dipilih.
            </LegalBlock>

            <LegalBlock title="4. Konten dan Hak Penggunaan">
              Klien bertanggung jawab atas legalitas konten yang diberikan. Hak penggunaan hasil kerja mengikuti
              kesepakatan tertulis, termasuk lisensi aset pihak ketiga jika digunakan.
            </LegalBlock>

            <LegalBlock title="5. Batas Tanggung Jawab">
              Meow Labs berkomitmen memberikan layanan profesional, namun tidak bertanggung jawab atas kerugian tidak
              langsung akibat gangguan pihak ketiga, force majeure, atau penggunaan di luar spesifikasi yang disepakati.
            </LegalBlock>

            <LegalBlock title="6. Penggunaan Website Meow Labs">
              Pengguna dilarang menyalahgunakan website, termasuk mengirim spam, mencoba bypass keamanan, atau
              melakukan aktivitas yang mengganggu layanan.
            </LegalBlock>

            <LegalBlock title="7. Perubahan Ketentuan">
              Syarat & Ketentuan dapat diperbarui sewaktu-waktu. Versi terbaru akan dipublikasikan di halaman ini.
            </LegalBlock>

            <LegalBlock title="8. Hukum yang Berlaku dan Kontak">
              Ketentuan ini tunduk pada hukum yang berlaku di Indonesia. Untuk pertanyaan, hubungi email{" "}
              <a href="mailto:admin@meowlabs.id" className="text-ink underline underline-offset-2">
                admin@meowlabs.id
              </a>{" "}
              atau WhatsApp{" "}
              <a href="https://wa.me/62895386288683" target="_blank" rel="noreferrer" className="text-ink underline underline-offset-2">
                +62 895-3862-88683
              </a>
              .
            </LegalBlock>

            <div className="mt-10 rounded-[4px] border border-rule bg-paper-light p-5 text-sm leading-relaxed text-ink-muted">
              Dengan mengakses website ini, Anda menyetujui Syarat & Ketentuan yang berlaku. Lihat juga{" "}
              <Link href="/kebijakan-privasi" className="text-ink underline underline-offset-2">
                Kebijakan Privasi
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

// Judul berformat "1. Judul": nomor ditampilkan sebagai label mono.
function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  const [, number, heading] = title.match(/^(\d+)\.\s*(.*)$/) ?? [null, null, title]
  return (
    <article className="grid gap-3 border-b border-rule py-8 sm:grid-cols-12 sm:gap-6">
      <span className="ml-eyebrow text-ink-muted sm:col-span-2 sm:pt-1.5">{number ? number.padStart(2, "0") : ""}</span>
      <div className="sm:col-span-10">
        <h2 className="text-xl font-medium text-ink">{heading}</h2>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted">{children}</p>
      </div>
    </article>
  )
}
