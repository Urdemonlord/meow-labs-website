import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePage } from "@/components/service-page"
import { getServiceBySlug, servicesWithPage } from "@/lib/services-data"

type Props = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return servicesWithPage.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getServiceBySlug(slug)?.page
  if (!page) return {}

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/layanan/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/layanan/${slug}`,
      type: "website",
    },
  }
}

export default async function LayananPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service?.page) notFound()

  return <ServicePage service={{ ...service, page: service.page }} />
}
