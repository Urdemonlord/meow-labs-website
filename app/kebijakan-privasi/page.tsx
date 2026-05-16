import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Meow Labs",
  description:
    "Kebijakan Privasi Meow Labs menjelaskan data apa yang dikumpulkan, bagaimana data dipakai, dan hak pengguna terkait layanan kami.",
}

const updatedAt = "16 Mei 2026"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="border-b border-border bg-gradient-to-b from-background via-muted/20 to-background pt-32 pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Dokumen Legal
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Kebijakan Privasi</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Kami menghargai privasi Anda. Dokumen ini menjelaskan bagaimana Meow Labs mengelola data saat Anda
            menggunakan website, formulir konsultasi, chat assistant, dan komunikasi WhatsApp.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Terakhir diperbarui: {updatedAt}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-border bg-card/70 p-6 sm:p-10">
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
              Dengan menggunakan website ini, Anda dianggap telah membaca dan memahami Kebijakan Privasi Meow Labs.
              Lihat juga{" "}
              <Link href="/syarat-ketentuan" className="text-primary hover:underline">
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

function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-2 leading-7 text-muted-foreground">{children}</p>
    </article>
  )
}
