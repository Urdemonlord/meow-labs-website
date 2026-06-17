export const MEOWLABS_ADMIN_PHONE = "6285117170198"
export const MEOWLABS_ADMIN_PHONE_DISPLAY = "+62 851-1717-0198"

export function buildWhatsAppUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${MEOWLABS_ADMIN_PHONE}&text=${encodeURIComponent(message)}`
}
