import type { MetadataRoute } from "next"

const fallbackBaseUrl = "https://meowlabs.id"
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackBaseUrl).replace(/\/$/, "")
const siteUrl = new URL(baseUrl)

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Main pages
  const primaryRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl.origin,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl.origin}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl.origin}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  // Location-specific SEO pages
  const locationRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl.origin}/jasa-pembuatan-website-semarang`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl.origin}/web-developer-semarang`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl.origin}/jasa-web-design-semarang`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  // Service-specific pages
  const serviceRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl.origin}/layanan/company-profile`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl.origin}/layanan/toko-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl.origin}/layanan/landing-page`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl.origin}/layanan/aplikasi-web`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  return [...primaryRoutes, ...locationRoutes, ...serviceRoutes]
}
