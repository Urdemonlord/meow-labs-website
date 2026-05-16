import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Meow Labs",
  description:
    "Syarat dan Ketentuan penggunaan website dan layanan Meow Labs, termasuk alur konsultasi, pembayaran, revisi, dan tanggung jawab pengguna.",
}

const updatedAt = "16 Mei 2026"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="border-b border-border bg-gradient-to-b from-background via-muted/20 to-background pt-32 pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
            Dokumen Legal
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Syarat & Ketentuan</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Halaman ini mengatur penggunaan website Meow Labs dan ketentuan umum layanan pembuatan website serta
            dukungan digital yang kami berikan.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Terakhir diperbarui: {updatedAt}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-border bg-card/70 p-6 sm:p-10">
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
              <a href="mailto:admin@meowlabs.id" className="text-primary hover:underline">
                admin@meowlabs.id
              </a>{" "}
              atau WhatsApp{" "}
              <a href="https://wa.me/6285117170198" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                +62 851-1717-0198
              </a>
              .
            </LegalBlock>

            <div className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-muted-foreground">
              Dengan mengakses website ini, Anda menyetujui Syarat & Ketentuan yang berlaku. Lihat juga{" "}
              <Link href="/kebijakan-privasi" className="text-primary hover:underline">
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

function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-2 leading-7 text-muted-foreground">{children}</p>
    </article>
  )
}
