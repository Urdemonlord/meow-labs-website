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

export type TokenGratisProviderModel = {
  name: string
  slug: string
  modality?: string
  context?: string
  output?: string
  rateLimit?: string
}

export type TokenGratisProviderDetail = TokenGratisProvider & {
  claimIntro?: string
  claimSteps: string[]
  claimUrl?: string
  baseUrl?: string
  sourceNote?: string
  domain?: string
  lastSync?: string
  sourceDirectoryUrl: string
  models: TokenGratisProviderModel[]
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
}

function cleanHtmlText(text: string): string {
  return decodeHtmlEntities(
    text
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .replace(/<\/div>/gi, "\n")
      .replace(/<\/li>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/[ \t]+/g, " ")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{2,}/g, "\n")
      .trim()
  )
}

function dedupeProviders(providers: TokenGratisProvider[]) {
  return Array.from(new Map(providers.map((provider) => [provider.slug, provider])).values())
}

function parseProvidersFromHtml(html: string): {
  providers: TokenGratisProvider[]
  lastSync: string
  total: number
} {
  const providerCards: TokenGratisProvider[] = []

  const providerRegex =
    /aria-label="([^"]+)"[^>]*class="[^"]*group[^"]*"[^>]*href="\/provider\/([^"]+)"[^>]*>[\s\S]*?<\/a>/g

  let match: RegExpExecArray | null
  while ((match = providerRegex.exec(html)) !== null) {
    const ariaLabel = match[1]
    const slug = match[2]
    const block = match[0]

    const nameMatch = ariaLabel.match(/^([^—]+)/)
    const modelMatch = ariaLabel.match(/(\d+)\s*model/)
    const name = nameMatch?.[1]?.trim() || slug
    const modelCount = modelMatch ? parseInt(modelMatch[1], 10) : 0

    const modalities: string[] = []
    if (block.includes('title="Text"')) modalities.push("text")
    if (block.includes('title="Vision"')) modalities.push("vision")
    if (block.includes('title="Image"')) modalities.push("image")
    if (block.includes('title="Audio"')) modalities.push("audio")
    if (block.includes('title="Video"')) modalities.push("video")
    if (block.includes('title="Code"')) modalities.push("code")
    if (block.includes('title="Embeddings"')) modalities.push("embeddings")
    if (block.includes('title="Reranking"')) modalities.push("reranking")

    const freeMatch = block.match(/gratis\s+([^<]+)/i)
    const freeLimit = freeMatch?.[1]?.trim() || null

    const descMatch = block.match(/<p[^>]*class="[^"]*line-clamp-2[^"]*"[^>]*>(.*?)<\/p>/)
    const description = descMatch ? cleanHtmlText(descMatch[1]) : ""

    const logoMatch = block.match(/<img[^>]*src="([^"]+)"[^>]*alt="Logo[^"]*"[^>]*\/>/)
    let logo = logoMatch?.[1] || null
    if (logo && logo.startsWith("/")) {
      logo = `https://www.tokengratis.id${logo}`
    }

    providerCards.push({
      slug,
      name,
      href: `https://www.tokengratis.id/provider/${slug}`,
      modelCount,
      modalities,
      maxContext: undefined,
      freeLimit,
      description,
      logo,
    })
  }

  const lastSyncMatch = html.match(/update terakhir\s*(\d{1,2}\s+\w+\s+\d{4})/i)
  const lastSync = lastSyncMatch?.[1] || ""
  const providers = dedupeProviders(providerCards)

  return { providers, lastSync, total: providers.length }
}

function parseProviderDetailHtml(html: string) {
  const sourceNoteMatch = html.match(
    /Catatan dari sumber<\/p><p[^>]*class="[^"]*text-sm[^"]*"[^>]*>([\s\S]*?)<\/p>/
  )
  const sourceNote = sourceNoteMatch ? cleanHtmlText(sourceNoteMatch[1]) : undefined

  const claimIntroMatch = html.match(
    /Cara claim API key gratis<\/p><p[^>]*class="[^"]*text-\[11px\][^"]*"[^>]*>([\s\S]*?)<\/p>/
  )
  const claimIntro = claimIntroMatch ? cleanHtmlText(claimIntroMatch[1]) : undefined

  const claimSectionMatch = html.match(
    /Cara claim API key gratis<\/p>[\s\S]*?<ol[^>]*>([\s\S]*?)<\/ol>/
  )
  const claimSteps: string[] = []
  if (claimSectionMatch) {
    const liRegex = /<li[^>]*>[\s\S]*?<span[^>]*>\s*\d+\.\s*<\/span><span[^>]*>([\s\S]*?)<\/span><\/li>/g
    let liMatch: RegExpExecArray | null
    while ((liMatch = liRegex.exec(claimSectionMatch[1])) !== null) {
      const step = cleanHtmlText(liMatch[1])
      if (step) claimSteps.push(step)
    }
  }

  const claimUrlMatch = html.match(
    /<a href="([^"]+)"[^>]*class="[^"]*bg-ember[^"]*"[^>]*>Dapatkan API key/
  )
  const claimUrl = claimUrlMatch?.[1]

  const baseUrlMatch = html.match(/Base URL<\/p><code[^>]*>([\s\S]*?)<\/code>/)
  const baseUrl = baseUrlMatch ? cleanHtmlText(baseUrlMatch[1]) : undefined

  const contextMatch = html.match(/Context maks<\/span><span[^>]*>([\s\S]*?)<\/span>/)
  const maxContext = contextMatch ? cleanHtmlText(contextMatch[1]) : undefined

  const domainMatch = html.match(/Domain<\/span><span[^>]*><a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/)
  const domain = domainMatch ? cleanHtmlText(domainMatch[2]) : undefined

  const lastSyncMatch = html.match(/update terakhir\s*(\d{1,2}\s+\w+\s+\d{4})/i)
  const lastSync = lastSyncMatch?.[1]

  const models: TokenGratisProviderModel[] = []
  const modelRegex =
    /<div class="font-medium text-fog">(.*?)<\/div><div class="break-all font-mono text-\[11px\] text-mute">(.*?)<\/div><dl[^>]*>([\s\S]*?)<\/dl>/g
  let modelMatch: RegExpExecArray | null
  while ((modelMatch = modelRegex.exec(html)) !== null) {
    const name = cleanHtmlText(modelMatch[1])
    const slug = cleanHtmlText(modelMatch[2])
    const dl = modelMatch[3]
    const pairs = Array.from(dl.matchAll(/<dt[^>]*>(.*?)<\/dt><dd[^>]*>(.*?)<\/dd>/g)).map(
      ([, dt, dd]) => ({
        label: cleanHtmlText(dt).toLowerCase(),
        value: cleanHtmlText(dd),
      })
    )

    if (!name || !slug) continue

    const modality = pairs.find((pair) => pair.label.includes("modality"))?.value
    const context = pairs.find((pair) => pair.label.includes("context"))?.value
    const output = pairs.find((pair) => pair.label.includes("output"))?.value
    const rateLimit = pairs.find((pair) => pair.label.includes("rate limit"))?.value

    models.push({ name, slug, modality, context, output, rateLimit })
  }

  const uniqueModels = Array.from(new Map(models.map((model) => [model.slug, model])).values())

  return {
    sourceNote,
    claimIntro,
    claimSteps,
    claimUrl,
    baseUrl,
    maxContext,
    domain,
    lastSync,
    models: uniqueModels,
  }
}

export async function fetchTokenGratis(): Promise<{
  providers: TokenGratisProvider[]
  lastSync: string
  total: number
}> {
  const res = await fetch("https://www.tokengratis.id/", {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; MeowLabsBot/1.0; +https://meowlabs.id)",
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch tokengratis.id: ${res.status}`)
  }

  const html = await res.text()
  return parseProvidersFromHtml(html)
}

export async function fetchTokenGratisProvider(
  slug: string
): Promise<TokenGratisProviderDetail | null> {
  const directory = await fetchTokenGratis()
  const provider = directory.providers.find((item) => item.slug === slug)

  if (!provider) {
    return null
  }

  const res = await fetch(`https://www.tokengratis.id/provider/${slug}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; MeowLabsBot/1.0; +https://meowlabs.id)",
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch tokengratis provider ${slug}: ${res.status}`)
  }

  const html = await res.text()
  const detail = parseProviderDetailHtml(html)

  return {
    ...provider,
    maxContext: detail.maxContext || provider.maxContext,
    claimIntro: detail.claimIntro,
    claimSteps: detail.claimSteps,
    claimUrl: detail.claimUrl,
    baseUrl: detail.baseUrl,
    sourceNote: detail.sourceNote,
    domain: detail.domain,
    lastSync: detail.lastSync || directory.lastSync,
    sourceDirectoryUrl: `https://www.tokengratis.id/provider/${slug}`,
    models: detail.models,
  }
}
