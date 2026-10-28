import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: { canonical: "/kebijakan-privasi" },
  title: "Kebijakan Privasi | Meow Labs",
  description:
    "Kebijakan Privasi Meow Labs menjelaskan data apa yang dikumpulkan, bagaimana data dipakai, dan hak pengguna terkait layanan kami.",
}

const updatedAt = "16 Mei 2026"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <section className="border-b border-rule">
        <div className="ml-container py-14 sm:py-20">
          <p className="ml-eyebrow text-ink-muted">{"// Dokumen legal"}</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] tracking-tight text-ink">Kebijakan Privasi</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            Kami menghargai privasi Anda. Dokumen ini menjelaskan bagaimana Meow Labs mengelola data saat Anda
            menggunakan website, formulir konsultasi, chat assistant, dan komunikasi WhatsApp.
          </p>
          <p className="ml-eyebrow mt-8 text-ink-muted">Terakhir diperbarui · {updatedAt}</p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <div className="mx-auto max-w-4xl border-t border-ink">
            <LegalBlock title="1. Data yang Kami Kumpulkan">
              Kami dapat mengumpulkan data yang Anda kirimkan secara sukarela, seperti nama, email, nomor WhatsApp,
              nama bisnis, dan detail kebutuhan proyek melalui form kontak, chat assistant, atau chat.
            </LegalBlock>

            <LegalBlock title="2. Tujuan Penggunaan Data">
              Data digunakan untuk menanggapi konsultasi, menyusun penawaran, memberikan rekomendasi website, dan
              meningkatkan kualitas layanan kami. Kami tidak menjual data pribadi Anda ke pihak ketiga.
            </LegalBlock>

            <LegalBlock title="3. Penyimpanan dan Keamanan">
              Kami menerapkan langkah teknis yang wajar untuk melindungi data dari akses tidak sah. Data hanya
              diakses oleh pihak internal yang membutuhkan untuk keperluan operasional layanan.
            </LegalBlock>

            <LegalBlock title="4. Cookie dan Analitik">
              Website ini dapat menggunakan cookie dan analitik untuk memahami performa halaman dan pengalaman
              pengguna. Anda dapat mengatur browser untuk menolak cookie, namun beberapa fitur mungkin tidak optimal.
            </LegalBlock>

            <LegalBlock title="5. Layanan Pihak Ketiga">
              Kami dapat menggunakan layanan pihak ketiga seperti hosting, analitik, dan kanal komunikasi. Setiap
              layanan tersebut memiliki kebijakan privasi masing-masing.
            </LegalBlock>

            <LegalBlock title="6. Hak Pengguna">
              Anda dapat meminta perbaikan atau penghapusan data yang pernah Anda kirimkan, selama tidak bertentangan
              dengan kewajiban hukum atau kebutuhan administrasi proyek yang masih berjalan.
            </LegalBlock>

            <LegalBlock title="7. Perubahan Kebijakan">
              Kami dapat memperbarui kebijakan ini sewaktu-waktu. Versi terbaru selalu tersedia di halaman ini.
            </LegalBlock>

            <LegalBlock title="8. Kontak">
              Jika ada pertanyaan tentang privasi data, hubungi kami melalui email{" "}
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
              Dengan menggunakan website ini, Anda dianggap telah membaca dan memahami Kebijakan Privasi Meow Labs.
              Lihat juga{" "}
              <Link href="/syarat-ketentuan" className="text-ink underline underline-offset-2">
                Syarat & Ketentuan
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
