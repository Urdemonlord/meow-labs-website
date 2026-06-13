import type { ResourceItem } from "./resources-data"

type AwesomeProject = {
  name: string
  owner: string
  fullName: string
  description: string
  language: string
  stars: number
  forks: number
  openIssues: number
  license: string
  lastUpdated: string
  tags: string[]
}

function parseAwesomeTable(markdown: string): AwesomeProject[] {
  const tableMatch = markdown.match(/## Daftar Proyek\n\n([\s\S]*?)(?=\n## )/)
  if (!tableMatch) return []

  const lines = tableMatch[1].trim().split("\n")
  const dataLines = lines.filter(
    (l) => l.startsWith("|") && !l.startsWith("| -") && !l.startsWith("| No")
  )

  return dataLines
    .map((line) => {
      const cells = line.replace(/^\||\|$/g, "").split("|").map((c) => c.trim())
      if (cells.length < 10) return null

      const projectCell = cells[1]
      const repoMatch = projectCell.match(/\[([^\]]+)\]\(https:\/\/github\.com\/([^/)]+\/[^/)]+)\)/)
      const descMatch = projectCell.match(/<br>(.*?)$/)

      if (!repoMatch) return null

      const userMatch = cells[2].match(/@([\w-]+)/)
      const stars = parseInt(cells[4], 10) || 0
      const forks = parseInt(cells[5], 10) || 0
      const issues = parseInt(cells[6], 10) || 0
      const tagsRaw = cells[9] || ""
      const tags = tagsRaw
        .split(/\s+/)
        .map((t) => t.replace(/`/g, ""))
        .filter((t) => t && t !== "N/A")

      return {
        name: repoMatch[1],
        owner: userMatch?.[1] || "",
        fullName: repoMatch[2],
        description: (descMatch?.[1] || "").trim(),
        language: cells[3] !== "N/A" ? cells[3] : "",
        stars,
        forks,
        openIssues: issues,
        license: cells[7] !== "N/A" ? cells[7] : "",
        lastUpdated: cells[8],
        tags,
      }
    })
    .filter((p): p is AwesomeProject => p !== null)
}

export function mapToResourceItems(projects: AwesomeProject[]): ResourceItem[] {
  return projects.map((p) => ({
    slug: p.fullName.replace("/", "-"),
    title: p.fullName,
    description: p.description || `Proyek open source oleh ${p.owner} — ${p.stars} stars, ${p.forks} forks.`,
    href: `https://github.com/${p.fullName}`,
    ctaLabel: "Buka repo",
    badges: [
      { label: `${p.stars} ⭐`, variant: "default" as const },
      ...(p.language ? [{ label: p.language, variant: "secondary" as const }] : []),
      ...(p.tags.length > 0 ? [{ label: p.tags[0], variant: "outline" as const }] : []),
    ],
    meta: [
      ...(p.language ? [{ label: "Bahasa", value: p.language }] : []),
      { label: "Stars", value: String(p.stars) },
      { label: "Forks", value: String(p.forks) },
      ...(p.license ? [{ label: "Lisensi", value: p.license }] : []),
      { label: "Update", value: p.lastUpdated },
    ],
    notes: p.tags.length > 1 ? [`Tags: ${p.tags.join(", ")}`] : undefined,
  }))
}

export async function fetchAwesomeIndonesia(): Promise<{
  projects: AwesomeProject[]
  lastSync: string
  total: number
}> {
  const res = await fetch(
    "https://raw.githubusercontent.com/IndopenSource/awesome-indonesia/main/README.md",
    { next: { revalidate: 3600 } } // ISR: refresh max every 1 hour
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch awesome-indonesia: ${res.status}`)
  }

  const md = await res.text()

  // Extract last sync date from the README
  const syncMatch = md.match(/Data terakhir disinkronkan: \*\*([^*]+)\*\*/)
  const lastSync = syncMatch?.[1] || "-"

  const projects = parseAwesomeTable(md)

  return { projects, lastSync, total: projects.length }
}
