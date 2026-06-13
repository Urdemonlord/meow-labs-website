import { BANSOS_TUTORIALS_BY_SLUG } from "@/data/bansos-drive-tutorials"

export type BansosItem = {
  slug: string
  title: string
  description: string
  href: string
  imageUrl?: string
  date?: string
  tutorialText?: string
  tutorialFileName?: string
  tutorialDownloadUrl?: string
  tutorialSourceType?: "text" | "pdf"
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&nbsp;/g, " ")
}

function parseBansosItemsFromHtml(html: string): BansosItem[] {
  const ldJsonMatch = html.match(
    /<script type="application\/ld\+json"[^>]*>(\[[\s\S]*?]|{[\s\S]*?})<\/script>/g
  )

  let ldItems: { position: number; name: string; url: string }[] = []
  if (ldJsonMatch) {
    for (const script of ldJsonMatch) {
      try {
        const content = script.replace(/<script[^>]*>/, "").replace("</script>", "")
        const parsed = JSON.parse(content)
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            if (item["@type"] === "ItemList" && item.itemListElement) {
              ldItems = item.itemListElement.map(
                (e: { position: number; name: string; url: string }) => ({
                  position: e.position,
                  name: e.name,
                  url: e.url,
                })
              )
            }
          }
        }
      } catch {
        // skip invalid JSON
      }
    }
  }

  if (ldItems.length === 0) return []

  const items: BansosItem[] = []

  for (const ld of ldItems) {
    const titleEscaped = ld.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const sectionPattern = new RegExp(
      `<h3[^>]*>${titleEscaped.replace(/&/g, "&amp;").replace(/'/g, "&#x27;")}</h3>(.*?)(?=<h3|<footer|</section)`,
      "s"
    )
    const sectionMatch = html.match(sectionPattern)

    let description = ""
    let date = ""
    let imageUrl = ""

    if (sectionMatch) {
      const section = sectionMatch[1]

      const descMatch = section.match(
        /<p[^>]*class="[^"]*line-clamp-3[^"]*"[^>]*>(.*?)<\/p>/
      )
      if (descMatch) {
        description = decodeHtmlEntities(descMatch[1].replace(/<[^>]+>/g, "").trim())
      }

      const dateMatch = section.match(/Dibuat pada:\s*<!--\s*-->([^<]+)/)
      if (dateMatch) {
        date = dateMatch[1].trim()
      }

      const imgMatch = section.match(/<img[^>]*src="([^"]+)"[^>]*alt="[^"]*"[^>]*\/>/)
      if (imgMatch) {
        imageUrl = imgMatch[1]
      }
    }

    const slugMatch = ld.url.match(/item-([a-f0-9-]+)$/)
    const slug = slugMatch?.[1] || `bansos-${ld.position}`
    const tutorial = BANSOS_TUTORIALS_BY_SLUG[slug]

    items.push({
      slug,
      title: decodeHtmlEntities(ld.name),
      description,
      href: `https://appverse.id/bansos-ai#item-${slug}`,
      imageUrl,
      date,
      tutorialText: tutorial?.text || undefined,
      tutorialFileName: tutorial?.fileName || undefined,
      tutorialDownloadUrl: tutorial
        ? `/resources/bansos-ai-files/${tutorial.fileId}.${tutorial.sourceType === "pdf" ? "pdf" : "txt"}`
        : undefined,
      tutorialSourceType: tutorial?.sourceType || undefined,
    })
  }

  return items
}

export async function fetchAppVerseBansos(): Promise<{
  items: BansosItem[]
  total: number
  lastSync: string
  tutorialCoverage: number
}> {
  const res = await fetch("https://appverse.id/bansos-ai", {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; MeowLabsBot/1.0; +https://meowlabs.id)",
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch AppVerse bansos: ${res.status}`)
  }

  const html = await res.text()
  const items = parseBansosItemsFromHtml(html)

  const dates = items
    .map((i) => i.date)
    .filter((d): d is string => !!d)
    .map((d) => {
      const months: Record<string, string> = {
        Januari: "01",
        Februari: "02",
        Maret: "03",
        April: "04",
        Mei: "05",
        Juni: "06",
        Juli: "07",
        Agustus: "08",
        September: "09",
        Oktober: "10",
        November: "11",
        Desember: "12",
      }
      const m = d.match(/(\w+),\s*(\d+)\s+(\w+)\s+(\d+)/)
      if (m) {
        return `${m[4]}-${months[m[3]] || "01"}-${m[2].padStart(2, "0")}`
      }
      return ""
    })
    .filter(Boolean)
    .sort()
    .reverse()

  const lastSync = dates[0] || "-"
  const tutorialCoverage = items.filter((item) => item.tutorialFileName).length

  return { items, total: items.length, lastSync, tutorialCoverage }
}
