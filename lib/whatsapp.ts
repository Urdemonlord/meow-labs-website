export const MEOWLABS_ADMIN_PHONE = "62895386288683"
export const MEOWLABS_ADMIN_PHONE_DISPLAY = "+62 895-3862-88683"

export const MEOWLABS_ADMIN2_PHONE = "6281325476958"
export const MEOWLABS_ADMIN2_PHONE_DISPLAY = "+62 813-2547-6958"
export const MEOWLABS_ADMIN2_NAME = "Sahad"

// Label asal chat ditempel di akhir pesan, mis. "(dari: halaman produk)",
// supaya admin bisa mencatat sumber setiap chat di sheet lead.
export function withSource(message: string, source?: string) {
  return source ? `${message}\n\n(dari: ${source})` : message
}

export function buildWhatsAppUrl(message: string, source?: string) {
  return `https://api.whatsapp.com/send?phone=${MEOWLABS_ADMIN_PHONE}&text=${encodeURIComponent(withSource(message, source))}`
}

export function buildWhatsAppUrl2(message: string, source?: string) {
  return `https://api.whatsapp.com/send?phone=${MEOWLABS_ADMIN2_PHONE}&text=${encodeURIComponent(withSource(message, source))}`
}
