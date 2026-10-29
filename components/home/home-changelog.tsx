import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  changelog,
  changelogEntryId,
  changelogProductName,
  formatChangelogDate,
} from "@/lib/changelog"

// Tiga rilis terakhir, supaya pengunjung melihat produk terus dikerjakan.
export function HomeChangelog() {
  return (
    <section className="border-b border-rule">
      <div className="ml-container ml-section">
        <div className="ml-reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="ml-eyebrow text-ink-muted">05 // Yang baru</p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-ink">
              Terus dikerjakan, terus dirilis.
            </h2>
          </div>
          <Link href="/changelog" className="inline-flex items-center gap-1 text-sm text-ink hover:underline">
            Semua pembaruan
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ol className="ml-reveal mt-12 grid border-t border-ink md:grid-cols-3">
          {changelog.slice(0, 3).map((entry) => (
            <li
              key={changelogEntryId(entry)}
              className="border-b border-rule md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <Link
                href={`/changelog#${changelogEntryId(entry)}`}
                className="group flex h-full min-h-[240px] flex-col py-8"
              >
                <div className="ml-eyebrow flex items-center justify-between gap-4">
                  <time dateTime={entry.date} className="text-ink-muted">
                    {formatChangelogDate(entry.date)}
                  </time>
                  <span className="text-forest">{changelogProductName(entry)}</span>
                </div>
                <h3 className="mt-8 font-display text-3xl leading-[1.05] text-ink group-hover:underline">
                  {entry.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-ink-muted">{entry.summary}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
