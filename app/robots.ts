import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.store"
const siteUrl = new URL(baseUrl)

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "*.js$", "*.css$"],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/admin/", "/api/", "/private/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/public/images/"],
      },
    ],
    sitemap: `${siteUrl.origin}/sitemap.xml`,
    host: siteUrl.host,
  }
}
