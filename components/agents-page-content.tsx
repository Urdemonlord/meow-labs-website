import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CtaBand, PageHeader, SectionHeading } from "@/components/editorial"

// Tim AI Meow Labs: lima agen dengan peran yang jelas. Teks di tiap chip
// dipilih per latar supaya kontras lolos WCAG AA (paper-light di vermilion
// hanya 3,4:1, jadi chip vermilion pakai teks ink).
const agents = [
  {
    name: "Kala",
    role: "Manajer Proyek AI",
    chip: { bg: "bg-vermilion", text: "text-ink" },
    image: "/art/agen-kala.webp",
    alt: "Kala, kucing hitam memegang papan klip",
    jobdesk:
      "Menerima brief, menyusun timeline, dan memberi update progres ke klien. Kala yang memastikan tidak ada permintaan yang hilang di tengah jalan.",
    delivers: ["Ringkasan brief yang rapi", "Timeline dan tahapan kerja", "Laporan progres berkala"],
  },
  {
    name: "Saka",
    role: "Desainer AI",
    chip: { bg: "bg-cobalt", text: "text-paper-light" },
    image: "/art/agen-saka.webp",
    alt: "Saka, kucing hitam memegang pensil dan palet warna",
    jobdesk:
      "Menggambar mockup, menyusun sistem warna, dan merapikan layout. Saka yang mengubah cerita usahamu jadi tampilan yang bisa dilihat dan diklik.",
    delivers: ["Mockup halaman", "Palet warna dan tipografi", "Panduan gaya visual"],
  },
  {
    name: "Runa",
    role: "Developer AI",
    chip: { bg: "bg-forest", text: "text-paper-light" },
    image: "/art/agen-runa.webp",
    alt: "Runa, kucing hitam mengetik di laptop",
    jobdesk:
      "Membangun website dan aplikasi dari mockup yang sudah disetujui, plus integrasi yang dibutuhkan, sampai siap dipakai.",
    delivers: ["Website responsif", "Integrasi API dan layanan", "Deploy dan serah terima"],
  },
  {
    name: "Tara",
    role: "QA AI",
    chip: { bg: "bg-ink", text: "text-paper-light" },
    image: "/art/agen-tara.webp",
    alt: "Tara, kucing hitam memegang kaca pembesar",
    jobdesk:
      "Memeriksa semuanya sebelum diserahkan: tampilan di HP dan laptop, kecepatan, tautan, dan formulir. Kalau ada yang janggal, Tara yang pertama tahu.",
    delivers: ["Cek responsif di berbagai layar", "Cek kecepatan dan tautan", "Daftar perbaikan sebelum rilis"],
  },
  {
    name: "Nara",
    role: "Copywriter AI",
    chip: { bg: "bg-paper-light", text: "text-ink", border: true },
    image: "/art/agen-nara.webp",
    alt: "Nara, kucing hitam menulis di buku dengan pena",
    jobdesk:
      "Menulis teks landing, deskripsi produk, dan optimasi SEO supaya websitemu tidak cuma bagus dilihat, tapi juga mudah ditemukan.",
    delivers: ["Headline dan teks halaman", "Deskripsi produk", "Judul dan deskripsi SEO"],
  },
]

// Warna chip nomor langkah: teks dipilih per latar supaya kontras lolos WCAG AA.
const stepChipStyles = [
  { bg: "bg-vermilion", text: "text-ink" },
  { bg: "bg-cobalt", text: "text-paper-light" },
  { bg: "bg-forest", text: "text-paper-light" },
  { bg: "bg-paper-light", text: "text-ink" },
]

const steps = [
  {
    title: "Ceritakan kebutuhanmu",
    body: "Sampaikan lewat WhatsApp atau Studio Mockup: usahamu apa, websitenya untuk apa, dan contoh yang kamu suka.",
  },
  {
    title: "Agen bekerja",
    body: "Kala menyusun rencana, Saka menggambar mockup, Nara menulis teksnya.",
  },
  {
    title: "Manusia memeriksa",
    body: "Founder dan tim memeriksa hasil kerja agen sebelum sampai ke kamu. Yang tidak masuk akal dikembalikan, bukan diteruskan.",
  },
  {
    title: "Serah terima",
    body: "Runa membangun, Tara memeriksa, lalu website diserahkan. Revisi jalan sampai hasilnya cocok dengan brief awal.",
  },
]

export function AgentsPageContent() {
  return (
    <>
      <PageHeader
        eyebrow="// Agen AI MeowLabs"
        title="Tim yang tidak pernah tidur, diawasi manusia."
        intro="Lima agen AI mengerjakan proyek klien Meow Labs: dari brief sampai serah terima. Mereka cepat dan konsisten, dan setiap hasilnya diperiksa manusia sebelum sampai ke kamu."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Agen AI" },
        ]}
      />

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <SectionHeading
            eyebrow="// Kenalan dulu"
            title="Lima agen, lima pekerjaan."
            description="Tiap agen punya satu peran dan tidak merangkap. Kamu selalu tahu siapa yang mengerjakan bagian apa dari proyekmu."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, index) => (
              <article
                key={agent.name}
                className="flex flex-col overflow-hidden rounded-[4px] border-2 border-ink bg-paper-light shadow-[6px_6px_0_var(--vermilion)]"
              >
                <div className="border-b-2 border-ink bg-paper">
                  <Image
                    src={agent.image}
                    alt={agent.alt}
                    width={572}
                    height={572}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="h-auto w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-3xl leading-none">{agent.name}</h3>
                    <span className="ml-eyebrow shrink-0 text-ink-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4">
                    <span
                      className={`ml-eyebrow inline-flex rounded-[2px] px-2 py-1 ${agent.chip.bg} ${agent.chip.text} ${agent.chip.border ? "border-2 border-ink" : ""}`}
                    >
                      {agent.role}
                    </span>
                  </p>
                  <p className="mt-5 flex-1 text-pretty leading-relaxed text-ink-muted">{agent.jobdesk}</p>
                  <div className="mt-6 border-t border-rule pt-5">
                    <p className="ml-eyebrow text-ink-muted">Yang dia hasilkan</p>
                    <ul className="mt-3 space-y-2">
                      {agent.delivers.map((item) => (
                        <li key={item} className="flex items-baseline gap-3 text-sm">
                          <span aria-hidden="true">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="ml-eyebrow mt-6 text-forest">Diawasi manusia</p>
                </div>
              </article>
            ))}

            <article className="flex flex-col justify-between rounded-[4px] border-2 border-ink bg-cobalt p-6 text-paper-light shadow-[6px_6px_0_var(--ink)] sm:p-7">
              <div>
                <p className="ml-eyebrow text-paper-light">06 // Manusia di balik layar</p>
                <h3 className="mt-6 font-display text-3xl leading-tight">
                  Agen bekerja, manusia yang bertanggung jawab.
                </h3>
                <p className="mt-5 text-pretty leading-relaxed text-paper-light/85">
                  Arya, founder Meow Labs, memeriksa hasil kerja agen di setiap tahapan penting. Keputusan akhir,
                  harga, dan janji ke klien selalu dari manusia, bukan dari mesin.
                </p>
                <ul className="mt-6 space-y-2 border-t border-paper-light/20 pt-5 text-sm text-paper-light/85">
                  <li className="flex items-baseline gap-3">
                    <span aria-hidden="true">+</span>
                    Harga dan penawaran
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span aria-hidden="true">+</span>
                    Janji dan prioritas proyek
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span aria-hidden="true">+</span>
                    Keputusan akhir sebelum rilis
                  </li>
                </ul>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-medium text-paper-light underline decoration-paper-light/50 underline-offset-4 hover:decoration-paper-light"
              >
                Kenalan dengan founder
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-ink text-paper-light">
        <div className="ml-container ml-section">
          <SectionHeading
            eyebrow="// Cara kerja"
            title="Dari brief sampai serah terima."
            description="Alurnya sama untuk semua proyek, mau website company profile atau aplikasi custom."
            tone="light"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-paper-light/20 bg-paper-light/20 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="flex flex-col gap-4 bg-ink p-6 sm:p-7">
                <span
                  className={`ml-eyebrow inline-flex w-fit rounded-[2px] px-2 py-1 ${stepChipStyles[index].bg} ${stepChipStyles[index].text}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl leading-tight">{step.title}</h3>
                <p className="text-pretty leading-relaxed text-paper-light/75">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-pretty leading-relaxed text-paper-light/75">
            Mau lihat dulu hasilnya sebelum memutuskan? Buat mockup gratis di Studio Mockup, lalu bawa mockup itu
            jadi brief proyekmu.
          </p>
          <div className="mt-6">
            <Link
              href="/mockup"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] border-2 border-ink bg-vermilion px-5 py-3.5 font-medium text-ink shadow-[4px_4px_0_var(--paper-light)] transition-colors hover:bg-vermilion/85"
            >
              Buat mockup gratis
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ceritakan proyekmu, tim AI kami yang mulai bekerja."
        body="Sampaikan kebutuhanmu lewat WhatsApp. Kala akan menyusun brief dan timeline-nya, lalu kamu dapat kabar progresnya."
        whatsappMessage="Halo MeowLabs, saya ingin mendiskusikan proyek dengan tim AI."
        whatsappSource="halaman agen AI"
      />
    </>
  )
}
