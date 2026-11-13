"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy, Loader2 } from "lucide-react"
import { CtaBand, PageHeader } from "@/components/editorial"
import { uiCopy } from "@/lib/ui-copy"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

// Studio Mockup: wizard 3 langkah, tanpa backend. Hasilnya mockup konsep
// berbasis template (bukan generate penuh), plus estimasi paket yang
// diambil dari data harga yang sama dengan halaman harga (lib/ui-copy.json).
type ProjectTypeId = "company" | "toko" | "landing" | "aplikasi"
type StyleId =
  | "neobrutalism"
  | "editorial"
  | "bento"
  | "illustrative"
  | "minimalism"
  | "maximalism"
  | "futuristic"
  | "vector"
  | "collage"
  | "retro"
  | "cyberpunk"
  | "popart"
  | "glassmorphism"
  | "clay"
  | "pixel"
  | "y2k"
  | "swiss"
  | "surreal"
  | "bohemian"
  | "victorian"
  | "graffiti"
  | "aurora"
  | "handwritten"

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

const styles: { id: StyleId; label: string; hint: string; swatch: string }[] = [
  { id: "neobrutalism", label: "Neo-Brutalism", hint: "Tegas dan berani, border tebal, warna kontras tinggi.", swatch: "bg-vermilion" },
  { id: "editorial", label: "Editorial", hint: "Rapi dan tenang, tipografi besar, banyak ruang kosong.", swatch: "bg-paper" },
  { id: "bento", label: "Bento Grid", hint: "Kartu-kartu mosaik, modern dan mudah dipindai.", swatch: "bg-cobalt" },
  { id: "illustrative", label: "Illustrative", hint: "Ramah dan bercerita, ilustrasi kucing Meow Labs.", swatch: "bg-forest" },
  { id: "minimalism", label: "Minimalism", hint: "Bersih dan lega, satu warna aksen, tanpa hiasan.", swatch: "bg-white" },
  { id: "maximalism", label: "Maximalism", hint: "Ramai dan berani, warna tabrak, penuh elemen.", swatch: "bg-[#ff5d8f]" },
  { id: "futuristic", label: "Futuristic", hint: "Gelap dan neon, kesan teknologi masa depan.", swatch: "bg-[#0a0f1e]" },
  { id: "vector", label: "Vector Art", hint: "Flat dan tegas, bentuk geometris warna blok.", swatch: "bg-[#ffd60a]" },
  { id: "collage", label: "Collage Art", hint: "Potongan kertas dan foto, playful dan artsy.", swatch: "bg-[#f5e6c8]" },
  { id: "retro", label: "Retro", hint: "Hangat khas 70an, krem, oranye, dan coklat.", swatch: "bg-[#f4d58d]" },
  { id: "cyberpunk", label: "Cyberpunk", hint: "Neon magenta dan cyan di atas hitam pekat.", swatch: "bg-[#0d0221]" },
  { id: "popart", label: "Pop Art", hint: "Warna komik yang meledak, kuning, merah, biru.", swatch: "bg-[#ffdd00]" },
  { id: "glassmorphism", label: "Glassmorphism", hint: "Panel kaca transparan di atas gradasi warna.", swatch: "bg-gradient-to-br from-[#a78bfa] via-[#f472b6] to-[#38bdf8]" },
  { id: "clay", label: "Clay Style", hint: "Lembut seperti tanah liat, membulat dan empuk.", swatch: "bg-[#f3e9dc]" },
  { id: "pixel", label: "Pixel Art", hint: "Kotak-kotak 8-bit, monospace, hijau terminal.", swatch: "bg-[#1e1e2e]" },
  { id: "y2k", label: "Y2K", hint: "Chrome dan pastel metalik khas awal 2000an.", swatch: "bg-gradient-to-r from-[#ff9de2] to-[#7dd3fc]" },
  { id: "swiss", label: "Swiss Design", hint: "Grid tegas, merah dan hitam di atas putih.", swatch: "bg-[#e2001a]" },
  { id: "surreal", label: "Surreal Design", hint: "Ungu mimpi dan oranye, aneh tapi memikat.", swatch: "bg-[#7c3aed]" },
  { id: "bohemian", label: "Bohemian", hint: "Tanah dan terakota, hangat dan santai.", swatch: "bg-[#c67b5c]" },
  { id: "victorian", label: "Victorian Style", hint: "Gelap elegan dengan aksen emas klasik.", swatch: "bg-[#1c1a17]" },
  { id: "graffiti", label: "Graffiti", hint: "Semprot jalanan, hitam, hijau neon, oranye.", swatch: "bg-[#111111]" },
  { id: "aurora", label: "Aurora", hint: "Gradasi cahaya utara, hijau dan ungu di langit gelap.", swatch: "bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#7b2fbe]" },
  { id: "handwritten", label: "Handwritten", hint: "Coretan tangan di atas kertas, personal dan hangat.", swatch: "bg-[#fffbe6]" },
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
    cardMuted: string
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
    cardMuted: "text-ink-muted",
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
    cardMuted: "text-ink-muted",
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
    cardMuted: "text-ink-muted",
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
    cardMuted: "text-ink-muted",
  },
  minimalism: {
    shell: "border border-rule bg-paper-light",
    hero: "bg-paper-light",
    eyebrow: "ml-eyebrow text-ink-muted",
    title: "font-display text-3xl leading-[1.05] text-ink sm:text-4xl",
    tagline: "text-ink-muted",
    primaryBtn: "bg-ink text-paper-light",
    secondaryBtn: "border border-ink/40 text-ink",
    card: "border border-rule bg-paper-light",
    cardTitle: "text-lg font-medium text-ink",
    cardMuted: "text-ink-muted",
  },
  maximalism: {
    shell: "border-2 border-ink bg-[#ffd6e8] shadow-[6px_6px_0_var(--ink)]",
    hero: "bg-vermilion text-ink",
    eyebrow: "ml-eyebrow text-ink",
    title: "font-display text-3xl leading-[1] text-ink sm:text-4xl",
    tagline: "text-ink",
    primaryBtn: "border-2 border-ink bg-cobalt text-paper-light shadow-[3px_3px_0_var(--ink)]",
    secondaryBtn: "border-2 border-ink bg-[#ffd60a] text-ink shadow-[3px_3px_0_var(--ink)]",
    card: "border-2 border-ink bg-[#fff3b0]",
    cardTitle: "font-display text-lg text-ink",
    cardMuted: "text-ink-muted",
  },
  futuristic: {
    shell: "border border-[#7ef9ff]/40 bg-[#0a0f1e]",
    hero: "bg-[#0a0f1e] text-[#7ef9ff]",
    eyebrow: "ml-eyebrow text-[#7ef9ff]/70",
    title: "font-display text-3xl leading-[1] text-[#eafcff] sm:text-4xl",
    tagline: "text-[#7ef9ff]/80",
    primaryBtn: "bg-[#7ef9ff] text-[#0a0f1e]",
    secondaryBtn: "border border-[#7ef9ff]/60 text-[#7ef9ff]",
    card: "border border-[#7ef9ff]/40 bg-[#111827]",
    cardTitle: "text-lg font-medium text-[#eafcff]",
    cardMuted: "text-[#7ef9ff]/70",
  },
  vector: {
    shell: "border-2 border-ink bg-paper shadow-[6px_6px_0_var(--cobalt)]",
    hero: "bg-cobalt text-paper-light",
    eyebrow: "ml-eyebrow text-paper-light/80",
    title: "font-display text-3xl leading-[1] text-paper-light sm:text-4xl",
    tagline: "text-paper-light/85",
    primaryBtn: "border-2 border-ink bg-[#ffd60a] text-ink",
    secondaryBtn: "border-2 border-paper-light/70 text-paper-light",
    card: "border-2 border-ink bg-paper-light",
    cardTitle: "font-display text-lg text-ink",
    cardMuted: "text-ink-muted",
  },
  collage: {
    shell: "border-2 border-dashed border-ink bg-[#fff8e7]",
    hero: "bg-[#f5e6c8] text-ink",
    eyebrow: "ml-eyebrow text-[#c96f2e]",
    title: "font-display text-3xl leading-[1] text-ink sm:text-4xl",
    tagline: "text-ink-muted",
    primaryBtn: "bg-[#ff8a00] text-ink",
    secondaryBtn: "border-2 border-ink bg-paper-light text-ink",
    card: "border-2 border-dashed border-ink bg-[#fff8e7]",
    cardTitle: "font-display text-lg text-ink",
    cardMuted: "text-ink-muted",
  },
  retro: {
    shell: "border-2 border-[#7c4a1e] bg-[#fff3d6]",
    hero: "bg-[#f4d58d] text-[#7c4a1e]",
    eyebrow: "ml-eyebrow text-[#c96f2e]",
    title: "font-display text-3xl leading-[1] text-[#5c3d1e] sm:text-4xl",
    tagline: "text-[#7c4a1e]",
    primaryBtn: "bg-[#c96f2e] text-ink",
    secondaryBtn: "border-2 border-[#7c4a1e] text-[#5c3d1e]",
    card: "border-2 border-[#7c4a1e] bg-[#fff3d6]",
    cardTitle: "font-display text-lg text-[#5c3d1e]",
    cardMuted: "text-[#7c4a1e]",
  },
  cyberpunk: {
    shell: "border border-[#ff2a6d]/60 bg-[#0d0221]",
    hero: "bg-[#0d0221] text-[#ff2a6d]",
    eyebrow: "ml-eyebrow text-[#05d9e8]",
    title: "font-display text-3xl leading-[1] text-[#f9f0ff] sm:text-4xl",
    tagline: "text-[#05d9e8]/80",
    primaryBtn: "bg-[#ff2a6d] text-ink",
    secondaryBtn: "border border-[#05d9e8] text-[#05d9e8]",
    card: "border border-[#ff2a6d]/60 bg-[#1a0b2e]",
    cardTitle: "text-lg font-medium text-[#05d9e8]",
    cardMuted: "text-[#f9f0ff]/70",
  },
  popart: {
    shell: "border-2 border-ink bg-[#ffdd00] shadow-[6px_6px_0_var(--ink)]",
    hero: "bg-[#ffdd00] text-[#e4002b]",
    eyebrow: "ml-eyebrow text-ink",
    title: "font-display text-3xl leading-[1] text-[#e4002b] sm:text-4xl",
    tagline: "text-ink",
    primaryBtn: "border-2 border-ink bg-[#e4002b] text-white shadow-[3px_3px_0_var(--ink)]",
    secondaryBtn: "border-2 border-ink bg-[#00a8e8] text-ink shadow-[3px_3px_0_var(--ink)]",
    card: "border-2 border-ink bg-paper-light",
    cardTitle: "font-display text-lg text-[#e4002b]",
    cardMuted: "text-ink-muted",
  },
  glassmorphism: {
    shell: "border border-white/60 bg-gradient-to-br from-[#a78bfa] via-[#f472b6] to-[#38bdf8]",
    hero: "bg-gradient-to-br from-[#a78bfa] via-[#f472b6] to-[#38bdf8] text-white",
    eyebrow: "ml-eyebrow text-ink/70",
    title: "font-display text-3xl leading-[1] text-ink sm:text-4xl",
    tagline: "text-ink/80",
    primaryBtn: "bg-white/80 text-ink backdrop-blur",
    secondaryBtn: "border border-ink/50 text-ink backdrop-blur",
    card: "border border-white/60 bg-white/40 backdrop-blur",
    cardTitle: "text-lg font-medium text-ink",
    cardMuted: "text-ink-muted",
  },
  clay: {
    shell: "rounded-[2rem] border border-[#e8d5c0] bg-[#f3e9dc]",
    hero: "rounded-t-[2rem] bg-[#f3e9dc] text-ink",
    eyebrow: "ml-eyebrow text-[#e07856]",
    title: "font-display text-3xl leading-[1.05] text-ink sm:text-4xl",
    tagline: "text-ink-muted",
    primaryBtn: "rounded-full bg-[#e07856] text-ink shadow-[inset_0_-4px_0_rgba(0,0,0,0.15)]",
    secondaryBtn: "rounded-full border-2 border-ink/20 bg-[#fff7ee] text-ink",
    card: "rounded-3xl bg-[#fff7ee] shadow-[8px_8px_16px_rgba(0,0,0,0.08)]",
    cardTitle: "text-lg font-medium text-ink",
    cardMuted: "text-ink-muted",
  },
  pixel: {
    shell: "border-4 border-[#8bff5e] bg-[#1e1e2e]",
    hero: "bg-[#1e1e2e] text-[#8bff5e]",
    eyebrow: "ml-eyebrow text-[#8bff5e]/70",
    title: "font-mono text-3xl leading-[1.1] text-[#8bff5e] sm:text-4xl",
    tagline: "font-mono text-[#8bff5e]/80",
    primaryBtn: "font-mono bg-[#8bff5e] text-ink",
    secondaryBtn: "font-mono border-2 border-[#8bff5e] text-[#8bff5e]",
    card: "border-2 border-[#8bff5e] bg-[#2a2a3a]",
    cardTitle: "font-mono text-lg text-[#8bff5e]",
    cardMuted: "text-[#8bff5e]/70",
  },
  y2k: {
    shell: "rounded-3xl border border-[#ff9de2] bg-gradient-to-r from-[#ff9de2] to-[#7dd3fc]",
    hero: "bg-gradient-to-r from-[#ff9de2] to-[#7dd3fc] text-[#1e1b4b]",
    eyebrow: "ml-eyebrow text-[#1e1b4b]/70",
    title: "font-display text-3xl leading-[1] text-[#1e1b4b] sm:text-4xl",
    tagline: "text-[#1e1b4b]/80",
    primaryBtn: "rounded-full bg-[#c084fc] text-ink",
    secondaryBtn: "rounded-full border border-white/80 text-[#1e1b4b]",
    card: "rounded-3xl border border-[#ff9de2] bg-white/70",
    cardTitle: "text-lg font-medium text-[#1e1b4b]",
    cardMuted: "text-ink-muted",
  },
  swiss: {
    shell: "border border-rule bg-white",
    hero: "bg-white text-ink",
    eyebrow: "ml-eyebrow text-[#e2001a]",
    title: "font-display text-3xl leading-[1] text-ink sm:text-4xl",
    tagline: "text-ink-muted",
    primaryBtn: "bg-[#e2001a] text-white",
    secondaryBtn: "border-2 border-ink text-ink",
    card: "border-t-4 border-[#e2001a] bg-paper-light",
    cardTitle: "text-lg font-medium text-ink",
    cardMuted: "text-ink-muted",
  },
  surreal: {
    shell: "border border-[#7c3aed] bg-[#ede9fe]",
    hero: "bg-[#7c3aed] text-[#fde68a]",
    eyebrow: "ml-eyebrow text-[#fde68a]/80",
    title: "font-display text-3xl leading-[1] text-[#fde68a] sm:text-4xl",
    tagline: "text-[#ede9fe]/85",
    primaryBtn: "bg-[#f59e0b] text-ink",
    secondaryBtn: "border border-[#fde68a]/70 text-[#fde68a]",
    card: "border border-[#7c3aed] bg-[#ede9fe]",
    cardTitle: "font-display text-lg text-[#4c1d95]",
    cardMuted: "text-[#4c1d95]/70",
  },
  bohemian: {
    shell: "border border-[#d9a05b] bg-[#faf3e3]",
    hero: "bg-[#c67b5c] text-[#fff7ed]",
    eyebrow: "ml-eyebrow text-ink/70",
    title: "font-display text-3xl leading-[1.05] text-ink sm:text-4xl",
    tagline: "text-ink/80",
    primaryBtn: "bg-[#7c4a2d] text-paper-light",
    secondaryBtn: "border-2 border-[#7c4a2d] text-ink",
    card: "border border-[#d9a05b] bg-[#faf3e3]",
    cardTitle: "font-display text-lg text-[#7c4a2d]",
    cardMuted: "text-ink-muted",
  },
  victorian: {
    shell: "border-2 border-[#d4af37] bg-[#1c1a17]",
    hero: "bg-[#1c1a17] text-[#d4af37]",
    eyebrow: "ml-eyebrow text-[#d4af37]/70",
    title: "font-display text-3xl leading-[1.05] text-[#f5efe0] sm:text-4xl",
    tagline: "text-[#f5efe0]/75",
    primaryBtn: "bg-[#d4af37] text-[#1c1a17]",
    secondaryBtn: "border border-[#d4af37] text-[#d4af37]",
    card: "border border-[#d4af37] bg-[#f5efe0]",
    cardTitle: "font-display text-lg text-[#1c1a17]",
    cardMuted: "text-ink-muted",
  },
  graffiti: {
    shell: "border-2 border-[#39ff14]/70 bg-[#111111]",
    hero: "bg-[#111111] text-[#39ff14]",
    eyebrow: "ml-eyebrow text-[#ff3d00]",
    title: "font-display text-3xl leading-[1] text-[#f5f5f5] sm:text-4xl",
    tagline: "text-[#f5f5f5]/75",
    primaryBtn: "bg-[#ff3d00] text-ink",
    secondaryBtn: "border-2 border-[#39ff14] text-[#39ff14]",
    card: "border-2 border-[#39ff14]/70 bg-[#1f1f1f]",
    cardTitle: "text-lg font-medium text-[#39ff14]",
    cardMuted: "text-[#f5f5f5]/70",
  },
  aurora: {
    shell: "border border-[#34d399]/50 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#7b2fbe]",
    hero: "bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#7b2fbe] text-[#a7f3d0]",
    eyebrow: "ml-eyebrow text-[#a7f3d0]/70",
    title: "font-display text-3xl leading-[1] text-white sm:text-4xl",
    tagline: "text-[#a7f3d0]/85",
    primaryBtn: "bg-[#34d399] text-[#0f2027]",
    secondaryBtn: "border border-[#a7f3d0]/70 text-[#a7f3d0]",
    card: "border border-[#34d399] bg-[#ecfdf5]",
    cardTitle: "text-lg font-medium text-[#0f2027]",
    cardMuted: "text-ink-muted",
  },
  handwritten: {
    shell: "border-2 border-dashed border-ink bg-[#fffbe6]",
    hero: "bg-[#fffbe6] text-ink",
    eyebrow: "ml-eyebrow text-[#b91c1c]",
    title: "font-display italic text-3xl leading-[1.05] text-ink sm:text-4xl",
    tagline: "text-ink-muted",
    primaryBtn: "rounded-full bg-[#ff6b6b] text-ink",
    secondaryBtn: "rounded-full border-2 border-ink text-ink",
    card: "border-2 border-dashed border-ink bg-[#fffbe6]",
    cardTitle: "font-display italic text-lg text-ink",
    cardMuted: "text-ink-muted",
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

// Urutan kerja tim AI saat mockup dibuat. PROTOTIPE: saat ini dijalankan
// dengan timer, belum terhubung ke API generate ai.meowlabs.id. Tiap langkah
// di bawah memetakan 1:1 ke tahap pipeline aslinya, jadi nanti timer diganti
// progres beneran dari API tanpa mengubah tampilan.
const buildSteps: {
  name: string
  role: string
  image: string
  task: string
  detail: (businessName: string, typeLabel: string, styleLabel: string, businessDesc: string) => string
}[] = [
  {
    name: "Kala",
    role: "Manajer Proyek AI",
    image: "/art/agen-kala.webp",
    task: "Menyusun brief",
    detail: (businessName, typeLabel, styleLabel) =>
      `Brief diterima: ${businessName}, ${typeLabel}, gaya ${styleLabel}.`,
  },
  {
    name: "Saka",
    role: "Desainer AI",
    image: "/art/agen-saka.webp",
    task: "Merancang tampilan",
    detail: (_businessName, _typeLabel, styleLabel) => `Palet dan layout gaya ${styleLabel} disiapkan.`,
  },
  {
    name: "Runa",
    role: "Developer AI",
    image: "/art/agen-runa.webp",
    task: "Membangun mockup",
    detail: (_businessName, typeLabel) => `Struktur ${typeLabel} dirangkai jadi halaman.`,
  },
  {
    name: "Tara",
    role: "QA AI",
    image: "/art/agen-tara.webp",
    task: "Memeriksa hasil",
    detail: () => "Tara memeriksa kontras dan keterbacaan kartu.",
  },
  {
    name: "Nara",
    role: "Copywriter AI",
    image: "/art/agen-nara.webp",
    task: "Menulis copy",
    detail: (_businessName, _typeLabel, _styleLabel, businessDesc) =>
      businessDesc ? `Judul dan deskripsi ditulis dari: "${businessDesc}"` : "Judul dan deskripsi ditulis dari ceritamu.",
  },
]

export function MockupPageContent() {
  const [step, setStep] = useState(1)
  const [businessName, setBusinessName] = useState("")
  const [businessDesc, setBusinessDesc] = useState("")
  const [projectType, setProjectType] = useState<ProjectTypeId | null>(null)
  const [style, setStyle] = useState<StyleId | null>(null)
  const [copied, setCopied] = useState<"idle" | "ok" | "fail">("idle")
  const [loaded, setLoaded] = useState(false)
  const [building, setBuilding] = useState(false)
  const [buildIndex, setBuildIndex] = useState(0)
  const [builtOnce, setBuiltOnce] = useState(false)
  const buildHeadingRef = useRef<HTMLHeadingElement>(null)

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
          (["neobrutalism", "editorial", "bento", "illustrative", "minimalism", "maximalism", "futuristic", "vector", "collage", "retro", "cyberpunk", "popart", "glassmorphism", "clay", "pixel", "y2k", "swiss", "surreal", "bohemian", "victorian", "graffiti", "aurora", "handwritten"] as string[]).includes(draft.style)
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

  // Animasi build: tiap agen bekerja ~1,1 detik, lalu mockup tampil.
  // Lewati animasi atau prefers-reduced-motion langsung ke hasil.
  useEffect(() => {
    if (!building) return
    if (buildIndex >= buildSteps.length) {
      setBuiltOnce(true)
      setBuilding(false)
      return
    }
    const timer = window.setTimeout(() => setBuildIndex((i) => i + 1), 1100)
    return () => window.clearTimeout(timer)
  }, [building, buildIndex])

  // Pindahkan fokus ke heading panel build supaya keyboard dan screen reader
  // tidak kehilangan tempat saat tombol pemicu hilang dari halaman.
  useEffect(() => {
    if (building) buildHeadingRef.current?.focus()
  }, [building])

  function startBuild() {
    // Sekali mockup sudah dibuat, klik berikutnya langsung ke hasil.
    if (builtOnce) {
      setStep(3)
      return
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBuiltOnce(true)
      setStep(3)
      return
    }
    setBuildIndex(0)
    setBuilding(true)
    setStep(3)
  }

  function finishBuild() {
    setBuiltOnce(true)
    setBuilding(false)
    setBuildIndex(buildSteps.length)
    setStep(3)
  }

  // Pengumuman progres build untuk screen reader (selalu ada di halaman).
  const buildStatusText = building
    ? `${buildSteps[Math.min(buildIndex, buildSteps.length - 1)].name} sedang ${buildSteps[Math.min(buildIndex, buildSteps.length - 1)].task.charAt(0).toLowerCase() + buildSteps[Math.min(buildIndex, buildSteps.length - 1)].task.slice(1)}.`
    : builtOnce && step === 3
      ? "Mockupmu sudah siap."
      : ""

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
          <div role="status" className="sr-only">
            {buildStatusText}
          </div>
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

          {step === 2 && !building && (
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
                        className={`flex h-16 items-end gap-1.5 rounded-[3px] border-2 border-ink p-2 ${s.swatch}`}
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

          {building && (
            <div className="mt-10">
              <h2 ref={buildHeadingRef} tabIndex={-1} className="font-display text-3xl leading-tight">
                Tim AI sedang membangun mockupmu.
              </h2>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted">
                {businessName.trim()} sedang dikerjakan Kala, Saka, Runa, Tara, dan Nara, langkah demi
                langkah.
              </p>
              <div
                className="mt-6 h-2 overflow-hidden rounded-[2px] border border-ink bg-paper-light"
                role="progressbar"
                aria-valuenow={Math.min(buildIndex, buildSteps.length)}
                aria-valuemin={0}
                aria-valuemax={buildSteps.length}
                aria-label="Progres pembangunan mockup"
              >
                <div
                  className="h-full bg-vermilion transition-all duration-500"
                  style={{ width: `${(Math.min(buildIndex, buildSteps.length) / buildSteps.length) * 100}%` }}
                />
              </div>
              <ol className="mt-6 space-y-3">
                {buildSteps.map((agent, i) => {
                  const done = i < buildIndex
                  const active = i === buildIndex
                  return (
                    <li
                      key={agent.name}
                      className={`flex items-start gap-4 rounded-[4px] border-2 p-4 ${
                        active
                          ? "border-ink bg-paper-light shadow-[4px_4px_0_var(--vermilion)]"
                          : "border-rule bg-paper-light"
                      }`}
                    >
                      <Image
                        src={agent.image}
                        alt={`Avatar ${agent.name}`}
                        width={48}
                        height={48}
                        className={`h-12 w-12 shrink-0 rounded-full border-2 border-ink object-cover ${
                          active || done ? "" : "opacity-50"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-xl leading-tight">
                          {agent.name}{" "}
                          <span className="text-sm font-normal text-ink-muted">{agent.role}</span>
                        </p>
                        <p className={`mt-1 text-sm leading-relaxed ${active ? "text-ink" : "text-ink-muted"}`}>
                          {agent.task}
                          {(done || active) && (
                            <>
                              {" — "}
                              {agent.detail(
                                businessName.trim(),
                                type?.label ?? "-",
                                styleMeta?.label ?? "-",
                                businessDesc.trim()
                              )}
                            </>
                          )}
                        </p>
                      </div>
                      {done ? (
                        <Check className="mt-1 h-5 w-5 shrink-0 text-forest" aria-label="Selesai" />
                      ) : active ? (
                        <Loader2 className="mt-1 h-5 w-5 shrink-0 animate-spin text-ink" aria-label="Sedang bekerja" />
                      ) : (
                        <span aria-hidden="true" className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full border border-ink-muted" />
                      )}
                    </li>
                  )
                })}
              </ol>
              <button
                type="button"
                onClick={finishBuild}
                className="mt-6 inline-flex items-center gap-2 rounded-[3px] border-2 border-ink bg-paper-light px-5 py-3 font-medium text-ink transition-colors hover:bg-paper"
              >
                Lewati animasi
              </button>
            </div>
          )}

          {step === 3 && !building && type && styleMeta && skin && estimate && (
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
                      <p className={`ml-eyebrow ${skin.cardMuted}`}>{String(index + 1).padStart(2, "0")}</p>
                      <p className={`mt-3 ${skin.cardTitle}`}>{feature}</p>
                      <p className={`mt-2 text-sm leading-relaxed ${skin.cardMuted}`}>
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

          {!building && (
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
            {step === 2 && !building && (
              <button
                type="button"
                onClick={() => canNextStep2 && startBuild()}
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
          )}
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
          type && styleMeta && estimate && businessName.trim()
            ? briefText
            : "Halo MeowLabs, saya sudah buat mockup di Studio Mockup dan mau lanjut jadi proyek."
        }
        whatsappSource="studio mockup"
      />
    </>
  )
}
