// Kanal luar yang membawa pengunjung ke website (utm_source atau ref di URL),
// mis. Google Business Profile, Instagram, atau produk MeowLabs. Disimpan per
// sesi lalu ditambahkan ke pesan WhatsApp sebagai "via <kanal>".
// Hanya dipanggil di browser: saat klik atau window.open, bukan saat render.

const STORAGE_KEY = "ml_visit_source"

function clean(value: string | null) {
  if (!value) return null
  const cleaned = value.toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 40)
  return cleaned || null
}

export function rememberVisitSource() {
  try {
    const params = new URLSearchParams(window.location.search)
    const source = clean(params.get("utm_source")) ?? clean(params.get("ref"))
    // Sentuhan pertama dalam sesi yang dipakai; kunjungan berikutnya tidak menimpa.
    if (source && !window.sessionStorage.getItem(STORAGE_KEY)) {
      window.sessionStorage.setItem(STORAGE_KEY, source)
    }
  } catch {
    // Storage bisa diblokir (mode privat, pengaturan browser); abaikan saja.
  }
}

function getVisitSource() {
  try {
    return clean(window.sessionStorage.getItem(STORAGE_KEY))
  } catch {
    return null
  }
}

export function isWhatsAppHref(href: string) {
  return /^https:\/\/(api\.whatsapp\.com\/send|wa\.me\/)/.test(href)
}

export function applyVisitSource(href: string) {
  const via = getVisitSource()
  if (!via || !isWhatsAppHref(href)) return href
  try {
    const url = new URL(href)
    const text = url.searchParams.get("text")
    // Tautan polos tanpa pesan (mis. di halaman kebijakan) tidak diberi label.
    if (!text) return href
    // Hanya akhiran label buatan helper ini yang dicek, bukan isi pesan pengunjung.
    if (/(· via [^)]*\)|\(via [^)]*\))$/.test(text)) return href
    const tagged = /\(dari: [^)]*\)$/.test(text)
      ? text.replace(/\(dari: ([^)]*)\)$/, `(dari: $1 · via ${via})`)
      : `${text}\n\n(via ${via})`
    url.searchParams.set("text", tagged)
    return url.toString()
  } catch {
    return href
  }
}

export function openWhatsApp(href: string) {
  window.open(applyVisitSource(href), "_blank", "noopener,noreferrer")
}
