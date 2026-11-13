"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react"
import { CtaBand, PageHeader } from "@/components/editorial"
import { uiCopy } from "@/lib/ui-copy"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

// Studio Mockup: wizard 3 langkah, tanpa backend. Hasilnya mockup konsep
// berbasis template (bukan generate penuh), plus estimasi paket yang
// diambil dari data harga yang sama dengan halaman harga (lib/ui-copy.json).
type ProjectTypeId = "company" | "toko" | "landing" | "aplikasi"
type StyleId = "neobrutalism" | "editorial" | "bento" | "illustrative"

const projectTypes: {
  id: ProjectTypeId
  label: string
  hint: string
  features: [string, string, string]
  // Indeks ke uiCopy.id.pricing.packages, supaya harga dan timeline
  // selalu ikut data yang sama dengan halaman harga.
  packageIndex: number
  estimateNote?: string
}[] = [
  {
    id: "company",
    label: "Company Profile",
    hint: "Profil usaha, layanan, dan portofolio.",
    features: ["Tentang Kami", "Layanan", "Portofolio"],
    packageIndex: 1,
  },
  {
    id: "toko",
    label: "Toko Online",
    hint: "Katalog produk dan pemesanan.",
    features: ["Katalog Produk", "Pembayaran", "Pengiriman"],
    packageIndex: 1,
    estimateNote: "Pembayaran dan pengiriman dibahas terpisah, di luar paket Growth Website.",
  },
  {
    id: "landing",
    label: "Landing Page",
    hint: "Satu halaman fokus untuk satu penawaran.",
    features: ["Manfaat", "Harga", "Testimoni"],
    packageIndex: 0,
  },
  {
    id: "aplikasi",
    label: "Aplikasi Web",
    hint: "Dashboard, akun pengguna, dan fitur khusus.",
    features: ["Dashboard", "Fitur Utama", "Keamanan"],
    packageIndex: 2,
  },
]

const styles: { id: StyleId; label: string; hint: string }[] = [
  { id: "neobrutalism", label: "Neo-Brutalism", hint: "Tegas dan berani, border tebal, warna kontras tinggi." },
  { id: "editorial", label: "Editorial", hint: "Rapi dan tenang, tipografi besar, banyak ruang kosong." },
  { id: "bento", label: "Bento Grid", hint: "Kartu-kartu mosaik, modern dan mudah dipindai." },
  { id: "illustrative", label: "Illustrative", hint: "Ramah dan bercerita, ilustrasi kucing Meow Labs." },
]

// Token visual tiap gaya untuk pratinjau mockup.
const skins: Record<
  StyleId,
  {
    shell: string
    hero: string
    eyebrow: string
    title: string
    tagline: string
    primaryBtn: string
    secondaryBtn: string
    card: string
    cardTitle: string
  }
> = {
  neobrutalism: {
    shell: "border-2 border-ink bg-paper shadow-[6px_6px_0_var(--ink)]",
    hero: "bg-paper",
    eyebrow: "ml-eyebrow text-vermilion",
    title: "font-display text-3xl leading-[1] text-ink sm:text-4xl",
    tagline: "text-ink-muted",
    primaryBtn: "border-2 border-ink bg-vermilion text-ink shadow-[3px_3px_0_var(--ink)]",
    secondaryBtn: "border-2 border-ink bg-paper-light text-ink shadow-[3px_3px_0_var(--ink)]",
    card: "border-2 border-ink bg-paper-light shadow-[4px_4px_0_var(--ink)]",
    cardTitle: "font-display text-lg text-ink",
  },
  editorial: {
    shell: "border border-rule bg-paper",
    hero: "bg-paper",
    eyebrow: "ml-eyebrow text-ink-muted",
    title: "font-display text-3xl leading-[1.05] text-ink sm:text-4xl",
    tagline: "text-ink-muted",
    primaryBtn: "bg-ink text-paper-light",
    secondaryBtn: "border border-ink text-ink",
    card: "border-t border-rule bg-paper",
    cardTitle: "font-display text-lg text-ink",
  },
  bento: {
    shell: "border border-rule bg-paper",
    hero: "rounded-2xl bg-cobalt text-paper-light",
    eyebrow: "ml-eyebrow text-paper-light/80",
    title: "font-display text-3xl leading-[1] text-paper-light sm:text-4xl",
    tagline: "text-paper-light/80",
    primaryBtn: "rounded-full bg-vermilion text-ink",
    secondaryBtn: "rounded-full border border-paper-light/60 text-paper-light",
    card: "rounded-2xl border border-rule bg-paper-light",
    cardTitle: "text-lg font-medium text-ink",
  },
  illustrative: {
    shell: "border-2 border-ink bg-paper shadow-[6px_6px_0_var(--vermilion)]",
    hero: "bg-forest text-paper-light",
    eyebrow: "ml-eyebrow text-paper-light/80",
    title: "font-display text-3xl leading-[1] text-paper-light sm:text-4xl",
    tagline: "text-paper-light/85",
    primaryBtn: "border-2 border-ink bg-vermilion text-ink shadow-[3px_3px_0_var(--paper-light)]",
    secondaryBtn: "border-2 border-paper-light/70 text-paper-light",
    card: "border-2 border-ink bg-paper-light shadow-[4px_4px_0_var(--ink)]",
    cardTitle: "font-display text-lg text-ink",
  },
}

const STORAGE_KEY = "meowlabs-mockup-draft"

function slugify(name: string) {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "usahamu"
  )
}

export function MockupPageContent() {
  const [step, setStep] = useState(1)
  const [businessName, setBusinessName] = useState("")
  const [businessDesc, setBusinessDesc] = useState("")
  const [projectType, setProjectType] = useState<ProjectTypeId | null>(null)
  const [style, setStyle] = useState<StyleId | null>(null)
  const [copied, setCopied] = useState<"idle" | "ok" | "fail">("idle")
  const [loaded, setLoaded] = useState(false)

  // Muat draf terakhir dari localStorage setelah mount (hindari beda render SSR).
  // Nilai draf divalidasi dulu: localStorage bisa berisi apa saja, dan nilai
  // yang tidak dikenal tidak boleh masuk ke state.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const draft = JSON.parse(raw) as {
          businessName?: unknown
          businessDesc?: unknown
          projectType?: unknown
          style?: unknown
        }
        if (typeof draft.businessName === "string") setBusinessName(draft.businessName)
        if (typeof draft.businessDesc === "string") setBusinessDesc(draft.businessDesc)
        if (
          typeof draft.projectType === "string" &&
          (["company", "toko", "landing", "aplikasi"] as string[]).includes(draft.projectType)
        ) {
          setProjectType(draft.projectType as ProjectTypeId)
        }
        if (
          typeof draft.style === "string" &&
          (["neobrutalism", "editorial", "bento", "illustrative"] as string[]).includes(draft.style)
        ) {
          setStyle(draft.style as StyleId)
        }
      }
    } catch {
      // Draf rusak diabaikan, wizard tetap jalan dari awal.
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ businessName, businessDesc, projectType, style })
      )
    } catch {
      // Penyimpanan penuh atau diblokir, abaikan saja.
    }
  }, [businessName, businessDesc, projectType, style, loaded])

  const type = projectTypes.find((t) => t.id === projectType) ?? null
  const styleMeta = styles.find((s) => s.id === style) ?? null
  const skin = style ? skins[style] : null
  const estimate = type ? uiCopy.id.pricing.packages[type.packageIndex] : null
  const canNextStep1 = businessName.trim().length > 0 && type !== null
  const canNextStep2 = style !== null

  const briefText = [
    "Halo MeowLabs, saya sudah buat mockup di Studio Mockup dan mau lanjut jadi proyek.",
    `Usaha: ${businessName.trim()}`,
    `Jenis: ${type?.label ?? "-"}`,
    `Gaya: ${styleMeta?.label ?? "-"}`,
    businessDesc.trim() ? `Deskripsi: ${businessDesc.trim()}` : null,
    estimate ? `Paket perkiraan: ${estimate.name} (${estimate.price}, ${estimate.timeline})` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n")

  async function copyBrief() {
    let ok = false
    try {
      await navigator.clipboard.writeText(briefText)
      ok = true
    } catch {
      const area = document.createElement("textarea")
      area.value = briefText
      document.body.appendChild(area)
      area.select()
      // execCommand mengembalikan false kalau salin gagal; jangan laporkan sukses.
      ok = document.execCommand("copy")
      document.body.removeChild(area)
    }
    setCopied(ok ? "ok" : "fail")
    window.setTimeout(() => setCopied("idle"), 2500)
  }

  return (
    <>
      <PageHeader
        eyebrow="// Studio Mockup"
        title="Lihat dulu websitemu sebelum memutuskan."
        intro="Ceritakan usahamu, pilih gaya, dan dapatkan mockup konsep gratis dalam semenit. Kalau cocok, mockup ini jadi brief proyekmu."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Studio Mockup" },
        ]}
      />

      <section className="border-b border-rule">
        <div className="ml-container ml-section">
          <ol className="flex flex-wrap items-center gap-2">
            {["Ceritakan usahamu", "Pilih gaya", "Lihat mockup"].map((label, index) => {
              const n = index + 1
              const active = step === n
              const done = step > n
              return (
                <li key={label} className="flex items-center gap-2">
                  <span
                    className={`ml-eyebrow inline-flex rounded-[2px] px-2 py-1 ${
                      active
                        ? "bg-vermilion text-ink"
                        : done
                          ? "bg-forest text-paper-light"
                          : "border border-rule text-ink-muted"
                    }`}
                  >
                    {done ? "✓" : String(n).padStart(2, "0")}
                  </span>
                  <span className={`text-sm ${active ? "font-medium text-ink" : "text-ink-muted"}`}>{label}</span>
                  {n < 3 && <span aria-hidden="true" className="mx-2 text-ink-muted">→</span>}
                </li>
              )
            })}
          </ol>

          {step === 1 && (
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl leading-tight">Langkah 1: ceritakan usahamu.</h2>
                <div className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="business-name" className="ml-eyebrow block text-ink-muted">
                      Nama usaha
                    </label>
                    <input
                      id="business-name"
                      type="text"
                      value={businessName}
                      onChange={(event) => setBusinessName(event.target.value)}
                      placeholder="Mis. Kopi Senja, Toko Bunga Rina"
                      maxLength={60}
                      className="mt-3 w-full rounded-[3px] border-2 border-ink bg-paper-light px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:shadow-[4px_4px_0_var(--vermilion)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="business-desc" className="ml-eyebrow block text-ink-muted">
                      Usahamu tentang apa? (satu kalimat)
                    </label>
                    <textarea
                      id="business-desc"
                      value={businessDesc}
                      onChange={(event) => setBusinessDesc(event.target.value)}
                      placeholder="Mis. Kopi susu gula aren dari Semarang, buka tiap hari 08.00-22.00"
                      maxLength={140}
                      rows={3}
                      className="mt-3 w-full resize-none rounded-[3px] border-2 border-ink bg-paper-light px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:shadow-[4px_4px_0_var(--vermilion)]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="ml-eyebrow text-ink-muted">Jenis proyek</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {projectTypes.map((t) => {
                    const selected = projectType === t.id
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setProjectType(t.id)}
                        aria-pressed={selected}
                        className={`rounded-[4px] border-2 p-5 text-left transition-shadow ${
                          selected
                            ? "border-ink bg-paper-light shadow-[4px_4px_0_var(--vermilion)]"
                            : "border-rule bg-paper-light hover:border-ink"
                        }`}
                      >
                        <span className="flex items-center justify-between gap-2 font-display text-xl leading-tight">
                          {t.label}
                          {selected && <Check className="h-5 w-5 shrink-0 text-forest" />}
                        </span>
                        <span className="mt-2 block text-sm leading-relaxed text-ink-muted">{t.hint}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-10">
              <h2 className="font-display text-3xl leading-tight">Langkah 2: pilih gaya.</h2>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted">
                Gaya menentukan tampilan mockupmu. Nanti di hasil, kamu bisa ganti gaya kapan saja tanpa mengulang
                dari awal.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {styles.map((s) => {
                  const selected = style === s.id
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setStyle(s.id)}
                      aria-pressed={selected}
                      className={`flex flex-col rounded-[4px] border-2 p-5 text-left transition-shadow ${
                        selected
                          ? "border-ink bg-paper-light shadow-[4px_4px_0_var(--vermilion)]"
                          : "border-rule bg-paper-light hover:border-ink"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-16 items-end gap-1.5 rounded-[3px] border-2 border-ink p-2 ${
                          s.id === "neobrutalism"
                            ? "bg-vermilion"
                            : s.id === "editorial"
                              ? "bg-paper"
                              : s.id === "bento"
                                ? "bg-cobalt"
                                : "bg-forest"
                        }`}
                      >
                        <span className="h-8 w-2/3 rounded-[2px] bg-paper-light" />
                        <span className="h-5 w-1/3 rounded-[2px] bg-ink" />
                      </span>
                      <span className="mt-4 flex items-center justify-between gap-2 font-display text-xl leading-tight">
                        {s.label}
                        {selected && <Check className="h-5 w-5 shrink-0 text-forest" />}
                      </span>
                      <span className="mt-2 text-sm leading-relaxed text-ink-muted">{s.hint}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {step === 3 && type && styleMeta && skin && estimate && (
            <div className="mt-10">
              <h2 className="font-display text-3xl leading-tight">Langkah 3: ini mockupmu.</h2>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted">
                Mockup konsep untuk <strong className="font-medium text-ink">{businessName.trim()}</strong>, gaya{" "}
                {styleMeta.label}. Ganti gaya di bawah untuk membandingkan, tanpa mengulang isi.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {styles.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStyle(s.id)}
                    aria-pressed={style === s.id}
                    className={`ml-eyebrow rounded-[2px] px-3 py-1.5 ${
                      style === s.id ? "bg-ink text-paper-light" : "border border-rule text-ink-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className={`mt-6 overflow-hidden rounded-[4px] ${skin.shell}`}>
                <div className="flex items-center gap-2 border-b-2 border-ink bg-paper-light px-4 py-2.5">
                  <span aria-hidden="true" className="h-3 w-3 rounded-full bg-vermilion ring-1 ring-ink" />
                  <span aria-hidden="true" className="h-3 w-3 rounded-full bg-cobalt ring-1 ring-ink" />
                  <span aria-hidden="true" className="h-3 w-3 rounded-full bg-forest ring-1 ring-ink" />
                  <span className="ml-2 truncate rounded-[2px] bg-paper px-3 py-1 font-mono text-xs text-ink-muted">
                    {slugify(businessName)}.meowlabs.id
                  </span>
                </div>

                <div className={`px-5 py-8 sm:px-8 ${skin.hero}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-lg leading-none">{businessName.trim()}</span>
                    <span className="hidden gap-4 text-xs sm:flex">
                      <span>Beranda</span>
                      <span>Layanan</span>
                      <span>Kontak</span>
                    </span>
                  </div>
                  <div className={`mt-8 ${style === "illustrative" ? "grid items-center gap-6 sm:grid-cols-2" : ""}`}>
                    <div>
                      <p className={skin.eyebrow}>
                        {type.label}
                        {" // "}
                        {styleMeta.label}
                      </p>
                      <h3 className={`mt-4 ${skin.title}`}>{businessName.trim()}</h3>
                      <p className={`mt-4 max-w-md text-pretty leading-relaxed ${skin.tagline}`}>
                        {businessDesc.trim() || type.hint}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className={`inline-flex items-center justify-center rounded-[3px] px-4 py-2.5 text-sm font-medium ${skin.primaryBtn}`}>
                          Lihat Layanan
                        </span>
                        <span className={`inline-flex items-center justify-center rounded-[3px] px-4 py-2.5 text-sm font-medium ${skin.secondaryBtn}`}>
                          Hubungi Kami
                        </span>
                      </div>
                    </div>
                    {style === "illustrative" && (
                      <Image
                        src="/art/hero-cat.webp"
                        alt="Ilustrasi maskot kucing Meow Labs"
                        width={800}
                        height={600}
                        loading="lazy"
                        className="hidden h-auto w-full rounded-[3px] border-2 border-ink sm:block"
                      />
                    )}
                  </div>
                </div>

                <div className="grid gap-4 bg-paper px-5 py-6 sm:grid-cols-3 sm:px-8">
                  {type.features.map((feature, index) => (
                    <div
                      key={feature}
                      className={`p-4 ${skin.card} ${
                        style === "bento"
                          ? index === 0
                            ? "sm:col-span-2"
                            : index === 2
                              ? "sm:col-span-3"
                              : ""
                          : ""
                      }`}
                    >
                      <p className="ml-eyebrow text-ink-muted">{String(index + 1).padStart(2, "0")}</p>
                      <p className={`mt-3 ${skin.cardTitle}`}>{feature}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {businessDesc.trim() || type.hint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-12">
                <div className="rounded-[4px] border-2 border-ink bg-paper-light p-6 shadow-[6px_6px_0_var(--vermilion)] sm:p-7 lg:col-span-7">
                  <p className="ml-eyebrow text-ink-muted">Perkiraan paket</p>
                  <h3 className="mt-4 font-display text-3xl leading-none">{estimate.name}</h3>
                  <p className="mt-3 text-2xl font-medium">{estimate.price}</p>
                  <p className="ml-eyebrow mt-2 text-forest">{estimate.timeline}</p>
                  <p className="mt-4 text-pretty leading-relaxed text-ink-muted">
                    Ini perkiraan awal dari mockupmu. Harga dan waktu final ditentukan setelah brief lengkap dan
                    disepakati sebelum pengerjaan dimulai.
                  </p>
                  {type.estimateNote && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      Catatan: {type.estimateNote}
                    </p>
                  )}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppUrl(briefText, "studio mockup")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-[3px] border-2 border-ink bg-ink px-5 py-3.5 font-medium text-paper-light shadow-[4px_4px_0_var(--vermilion)] transition-colors hover:bg-ink/85"
                    >
                      Lanjutkan via WhatsApp
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={copyBrief}
                      className="inline-flex items-center justify-center gap-2 rounded-[3px] border-2 border-ink bg-paper-light px-5 py-3.5 font-medium text-ink transition-colors hover:bg-paper"
                    >
                      {copied === "ok" ? (
                        <Check className="h-4 w-4 text-forest" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied === "ok"
                        ? "Ringkasan disalin"
                        : copied === "fail"
                          ? "Gagal menyalin, coba lagi"
                          : "Salin ringkasan brief"}
                    </button>
                  </div>
                </div>
                <div className="rounded-[4px] border-2 border-ink bg-cobalt p-6 text-paper-light shadow-[6px_6px_0_var(--ink)] sm:p-7 lg:col-span-5">
                  <p className="ml-eyebrow text-paper-light">Yang terjadi selanjutnya</p>
                  <ol className="mt-5 space-y-3 leading-relaxed text-paper-light/90">
                    <li className="flex gap-3">
                      <span aria-hidden="true">1.</span>
                      Kala menyusun brief dan timeline dari mockup ini.
                    </li>
                    <li className="flex gap-3">
                      <span aria-hidden="true">2.</span>
                      Saka merapikan mockup jadi desain final.
                    </li>
                    <li className="flex gap-3">
                      <span aria-hidden="true">3.</span>
                      Runa membangun, Tara memeriksa, lalu diserahkan.
                    </li>
                  </ol>
                  <p className="mt-6 text-sm leading-relaxed text-paper-light/75">
                    Mockup ini tersimpan di browsermu sebagai draf, jadi kamu bisa kembali kapan saja tanpa mengulang
                    dari awal.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 rounded-[3px] border-2 border-ink bg-paper-light px-5 py-3 font-medium text-ink transition-colors hover:bg-paper"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Kembali
                </button>
              )}
            </div>
            {step === 1 && (
              <button
                type="button"
                onClick={() => canNextStep1 && setStep(2)}
                disabled={!canNextStep1}
                className="inline-flex items-center justify-center gap-2 rounded-[3px] border-2 border-ink bg-ink px-5 py-3.5 font-medium text-paper-light shadow-[4px_4px_0_var(--vermilion)] transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                Lanjut pilih gaya
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
            {step === 2 && (
              <button
                type="button"
                onClick={() => canNextStep2 && setStep(3)}
                disabled={!canNextStep2}
                className="inline-flex items-center justify-center gap-2 rounded-[3px] border-2 border-ink bg-ink px-5 py-3.5 font-medium text-paper-light shadow-[4px_4px_0_var(--vermilion)] transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                Lihat mockupku
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
            {step === 3 && (
              <Link
                href="/agen"
                className="inline-flex items-center justify-center gap-2 rounded-[3px] border-2 border-ink bg-paper-light px-5 py-3.5 font-medium text-ink transition-colors hover:bg-paper"
              >
                Kenalan dengan tim AI
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
          {step === 1 && !canNextStep1 && (
            <p className="mt-4 text-sm text-ink-muted">
              Isi nama usaha dan pilih jenis proyek dulu untuk lanjut.
            </p>
          )}
          {step === 2 && !canNextStep2 && (
            <p className="mt-4 text-sm text-ink-muted">Pilih satu gaya dulu untuk melihat mockupmu.</p>
          )}
        </div>
      </section>

      <CtaBand
        title="Mockup sudah cocok? Wujudkan jadi website beneran."
        body="Bawa mockup ini ke WhatsApp, atau ceritakan proyekmu dari awal. Tim AI kami yang mulai bekerja."
        whatsappMessage={
          type && styleMeta && estimate
            ? briefText
            : "Halo MeowLabs, saya sudah buat mockup di Studio Mockup dan mau lanjut jadi proyek."
        }
        whatsappSource="studio mockup"
      />
    </>
  )
}
