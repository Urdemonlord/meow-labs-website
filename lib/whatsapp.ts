export const MEOWLABS_ADMIN_PHONE = "62895386288683"
export const MEOWLABS_ADMIN_PHONE_DISPLAY = "+62 895-3862-88683"

export const MEOWLABS_ADMIN2_PHONE = "6281325476958"
export const MEOWLABS_ADMIN2_PHONE_DISPLAY = "+62 813-2547-6958"
export const MEOWLABS_ADMIN2_NAME = "Sahad"

export function buildWhatsAppUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${MEOWLABS_ADMIN_PHONE}&text=${encodeURIComponent(message)}`
}

export function buildWhatsAppUrl2(message: string) {
  return `https://api.whatsapp.com/send?phone=${MEOWLABS_ADMIN2_PHONE}&text=${encodeURIComponent(message)}`
}
