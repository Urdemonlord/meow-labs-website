import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meowlabs.store"
const siteUrl = new URL(baseUrl)

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Main pages with higher priority for SEO
  const primaryRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl.origin,
      lastModified,
      changeFrequency: "daily", // Increased frequency for homepage
      priority: 1,
    },
    {
      url: `${siteUrl.origin}/about`,
      lastModified,
      changeFrequency: "weekly", // Increased from monthly
      priority: 0.9, // Increased priority
    },
    {
      url: `${siteUrl.origin}/blog`,
      lastModified,
      changeFrequency: "daily", // Increased for fresh content
      priority: 0.9, // Increased priority
    },
  ]

  // Location-specific SEO URLs for targeting Semarang and surrounding areas
  const locationRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl.origin}/jasa-pembuatan-website-semarang`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl.origin}/web-developer-semarang`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl.origin}/jasa-web-design-semarang`,
      lastModified, 
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  // Section anchors on the homepage
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

  // Enhanced section routes with better priority distribution for SEO
  const sectionRoutes: MetadataRoute.Sitemap = sectionAnchors.map((anchor) => {
    // Customize priority and frequency based on section importance
    let priority = 0.8;
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";
    
    // Assign specific values based on section importance for SEO
    switch(anchor) {
      case "services":
        priority = 0.95;
        changeFrequency = "weekly";
        break;
      case "pricing":
        priority = 0.9;
        changeFrequency = "weekly";
        break;
      case "portfolio":
        priority = 0.9;
        changeFrequency = "weekly";
        break;
      case "contact":
        priority = 0.85;
        changeFrequency = "monthly";
        break;
      default:
        priority = 0.8;
        changeFrequency = "monthly";
    }
    
    return {
      url: `${siteUrl.origin}/#${anchor}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });

  // Service-specific pages for better SEO targeting
  const serviceRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl.origin}/layanan/company-profile`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl.origin}/layanan/toko-online`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl.origin}/layanan/landing-page`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl.origin}/layanan/aplikasi-web`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Combine all routes for the complete sitemap
  return [...primaryRoutes, ...locationRoutes, ...serviceRoutes, ...sectionRoutes];
}
