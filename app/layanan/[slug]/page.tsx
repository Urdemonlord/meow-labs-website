import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePage } from "@/components/service-page"
import { getServiceWithPage, servicesWithPage } from "@/lib/service-pages"
import { sharedOpenGraph } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return servicesWithPage.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getServiceWithPage(slug)?.page
  if (!page) return {}

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/layanan/${slug}` },
    openGraph: {
      ...sharedOpenGraph,
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/layanan/${slug}`,
    },
  }
}

export default async function LayananPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceWithPage(slug)
  if (!service) notFound()

  return <ServicePage service={service} />
}
