# Meow Labs Website

Website resmi Meow Labs untuk layanan pembuatan website profesional di Semarang. Proyek ini dibangun dengan Next.js App Router, memiliki homepage editorial multi-section, chatbot AI berbasis `knowledge.md`, halaman produk, serta halaman legal.

## Overview

- Framework: Next.js 16 + React 18 + TypeScript
- Styling: Tailwind CSS + komponen UI lokal (`components/ui`)
- Chat AI: Google Gemini (`@google/genai`) dengan guard keamanan
- Knowledge source: `knowledge.md`
- Deployment target: Vercel

## Fitur Aktif

### 1. Homepage Marketing
- Hero, manifesto, layanan, produk, proses, klien, catatan, kontak (`components/home/`)
- Design system editorial: token warna dan font di `app/globals.css`, artwork kolase di `public/art/`
- Bahasa Indonesia; harga paket dan FAQ ada di halaman `/layanan/*` dan `/jasa-pembuatan-website-semarang`
- Floating chat yang konsisten dengan tema website

### 2. Chatbot AI
- Route API: `POST /api/chat`
- Prompt injection guard + sanitasi input/output
- Jawaban ringkas, manusiawi, tanpa karakter dekoratif berlebihan
- Fallback kontak otomatis ke WhatsApp dan email jika AI gagal

### 3. Produk
- Daftar produk di `lib/products.ts`, tampil di homepage dan `/produk`
- Setiap produk punya label status yang jujur (`Tersedia`, `Beta`, `Eksperimen`)

### 4. Halaman Legal
- ` /kebijakan-privasi`
- ` /syarat-ketentuan`

### 5. SEO dan Metadata
- Metadata utama di `app/layout.tsx`
- Sitemap dan robots di `app/sitemap.ts` dan `app/robots.ts`

## Setup Lokal

### Prasyarat
- Node.js 18+
- npm 9+

### Instalasi
```bash
npm install
```

### Jalankan Development
```bash
npm run dev
```

### Build Production
```bash
npm run build
npm run start
```

## Environment Variables

Buat file `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SITE_URL=https://meowlabs.id
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Catatan:
- `GEMINI_API_KEY` wajib untuk chatbot AI.
- `NEXT_PUBLIC_SITE_URL` dipakai untuk metadata, sitemap, dan robots.
- `NEXT_PUBLIC_APP_URL` dipakai pada validasi origin di `proxy.ts`.

## Quality Gate

```bash
npm run check:text-integrity
npm run lint
npm run build
```

Perintah `check:text-integrity` akan gagal jika ditemukan pola karakter rusak (mojibake) di:
- `README.md`
- folder `app`
- folder `components`
- folder `lib`

## Struktur Project

```txt
app/
  api/
    chat/route.ts
    csrf-token/route.ts
  blog/
  chatbot/
  kebijakan-privasi/
  syarat-ketentuan/
  layout.tsx
  page.tsx
components/
  navigation.tsx
  home/
  pricing-section.tsx
  working-chat-interface.tsx
  working-floating-chat.tsx
  ui-preferences-provider.tsx
lib/
  ui-copy.json
  security-utils.ts
  chat-helper.ts
  gemini-helper.ts
knowledge.md
```

## Deploy

Alur deploy standar:

```bash
npm run build
```

Lalu deploy ke Vercel sesuai workflow tim/repository.

## Kontak

- WhatsApp: [https://wa.me/62895386288683](https://wa.me/62895386288683)
- Email: admin@meowlabs.id
- Instagram: [https://instagram.com/meowlabs.id](https://instagram.com/meowlabs.id)
- TikTok: [https://www.tiktok.com/@meowlabs.id](https://www.tiktok.com/@meowlabs.id)

## Lisensi

Hak cipta 2026 Meow Labs. All rights reserved.
