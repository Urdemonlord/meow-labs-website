import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.id"
const siteUrl = new URL(baseUrl)

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const primaryRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl.origin,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl.origin}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl.origin}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  const sectionAnchors = [
    "home",
    "services",
    "process",
    "pricing",
    "student-packages",
    "portfolio",
    "testimonials",
    "faq",
    "contact",
  ]

  const sectionRoutes: MetadataRoute.Sitemap = sectionAnchors.map((anchor, index) => ({
    url: `${siteUrl.origin}/#${anchor}`,
    lastModified,
    changeFrequency: index < 3 ? "weekly" : "monthly",
    priority: Math.max(0.5, 0.9 - index * 0.05),
  }))

  return [...primaryRoutes, ...sectionRoutes]
}
