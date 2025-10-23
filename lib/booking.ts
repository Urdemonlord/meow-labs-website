export const BOOKING_URL = "https://booking.meowlabs.id/"

export type BookingParams = {
  name?: string
  email?: string
  organization?: string
  message?: string
}

export function buildBookingUrl(params?: BookingParams) {
  const url = new URL(BOOKING_URL)

  if (params) {
    const searchParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value)
      }
    })

    const queryString = searchParams.toString()
    if (queryString) {
      url.search = queryString
    }
  }

  return url.toString()
}

export function openBookingPage(params?: BookingParams) {
  const bookingUrl = buildBookingUrl(params)

  if (typeof window !== "undefined") {
    window.open(bookingUrl, "_blank", "noopener")
  }

  return bookingUrl
}
