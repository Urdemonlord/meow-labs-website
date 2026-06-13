export type TokenGratisProvider = {
  slug: string
  name: string
  href: string
  modelCount: number
  modalities: string[]
  maxContext?: string
  freeLimit?: string | null
  description?: string
  logo?: string | null
}

function parseProvidersFromHtml(html: string): {
  providers: TokenGratisProvider[]
  lastSync: string
  total: number
} {
  // Extract providers from the RSC payload (script with items array)
  // The data is serialized in self.__next_f.push chunks as RSC payload
  // We look for the specific chunk that has the items array

  // Try to find providers from the rendered HTML first (more stable)
  const providerCards: TokenGratisProvider[] = []

  // Find all provider rows in the HTML
  // Pattern: each provider is in a link like: <a aria-label="Google Gemini — 14 model"...
  // Or the desktop grid version
  const providerRegex =
    /aria-label="([^"]+)"[^>]*class="[^"]*group[^"]*"[^>]*href="\/provider\/([^"]+)"[^>]*>[\s\S]*?<\/a>/g

  let match: RegExpExecArray | null
  while ((match = providerRegex.exec(html)) !== null) {
    const ariaLabel = match[1]
    const slug = match[2]
    const block = match[0]

    // Parse name and model count from aria-label: "Google Gemini — 14 model"
    const nameMatch = ariaLabel.match(/^([^—]+)/)
    const modelMatch = ariaLabel.match(/(\d+)\s*model/)
    const name = nameMatch?.[1]?.trim() || slug
    const modelCount = modelMatch ? parseInt(modelMatch[1], 10) : 0

    // Modalities from icons
    const modalities: string[] = []
    if (block.includes('title="Text"')) modalities.push("text")
    if (block.includes('title="Vision"')) modalities.push("vision")
    if (block.includes('title="Image"')) modalities.push("image")
    if (block.includes('title="Audio"')) modalities.push("audio")
    if (block.includes('title="Video"')) modalities.push("video")
    if (block.includes('title="Code"')) modalities.push("code")
    if (block.includes('title="Embeddings"')) modalities.push("embeddings")
    if (block.includes('title="Reranking"')) modalities.push("reranking")

    // Free limit
    const freeMatch = block.match(/gratis\s+([^<]+)/i)
    const freeLimit = freeMatch?.[1]?.trim() || null

    // Description
    const descMatch = block.match(
      /<p[^>]*class="[^"]*line-clamp-2[^"]*"[^>]*>(.*?)<\/p>/
    )
    const description = descMatch
      ? descMatch[1].replace(/<[^>]+>/g, "").trim()
      : ""

    // Logo
    const logoMatch = block.match(/<img[^>]*src="([^"]+)"[^>]*alt="Logo[^"]*"[^>]*\/>/)
    let logo = logoMatch?.[1] || null
    if (logo && logo.startsWith("/")) {
      logo = `https://www.tokengratis.id${logo}`
    }

    providerCards.push({
      slug,
      name,
      href: `https://tokengratis.id/provider/${slug}`,
      modelCount,
      modalities,
      maxContext: undefined,
      freeLimit,
      description,
      logo,
    })
  }

  // Extract last sync date
  const syncMatch = html.match(/Last update\s+(\d+\s+\w+\s+\d+)/i)
  const lastSync = syncMatch?.[1] || ""

  // Extract total count
  const totalMatch = html.match(/(\d+)\s*provider/)
  const total = totalMatch ? parseInt(totalMatch[1], 10) : providerCards.length

  return { providers: providerCards, lastSync, total }
}

export async function fetchTokenGratis(): Promise<{
  providers: TokenGratisProvider[]
  lastSync: string
  total: number
}> {
  const res = await fetch("https://www.tokengratis.id/", {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; MeowLabsBot/1.0; +https://meowlabs.id)",
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch tokengratis.id: ${res.status}`)
  }

  const html = await res.text()
  return parseProvidersFromHtml(html)
}
