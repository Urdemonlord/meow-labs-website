"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { ExternalLink, Github, RefreshCcw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useUiPreferences } from "./ui-preferences-provider"

interface ShowcaseProject {
  id: string
  title: string
  description: string
  image: string
  url?: string
  repo_stars?: number
  tags: string[]
  ai_summary?: string
  github_url?: string
  website_url?: string
  key_features?: string[]
}

const EXTERNAL_PROJECTS_API = "https://show-case-it-05.vercel.app/api/projects"

export function PortfolioSection() {
  const { locale } = useUiPreferences()
  const isEn = locale === "en"
  const [activeFilter, setActiveFilter] = useState("All")
  const [projects, setProjects] = useState<ShowcaseProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const isFetchingRef = useRef(false)

  const fetchProjects = useCallback(async () => {
    if (isFetchingRef.current) return

    isFetchingRef.current = true
    setLoading(true)

    try {
      const response = await fetch(EXTERNAL_PROJECTS_API)
      if (!response.ok) {
        throw new Error("Failed to fetch external API")
      }

      const data = await response.json()
      if (!Array.isArray(data)) {
        throw new Error("Invalid API response")
      }

      setProjects(data)
      setError(null)
    } catch {
      setProjects([])
      setError(
        isEn
          ? "Failed to load portfolio from external API. Please retry in a moment."
          : "Gagal memuat portfolio dari API eksternal. Silakan coba beberapa saat lagi."
      )
    } finally {
      setLoading(false)
      isFetchingRef.current = false
    }
  }, [isEn])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const allTags = [
    "All",
    ...new Set(
      projects
        .flatMap((project) => project.tags || [])
        .filter((tag): tag is string => Boolean(tag))
    ),
  ]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags && project.tags.includes(activeFilter))

  return (
    <section id="portfolio" className="bg-card/50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {isEn ? "Our " : "Portofolio "}
            <span className="text-primary">{isEn ? "Portfolio" : "Pilihan Project"}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {isEn
              ? "A selection of projects delivered across industries with practical technology choices."
              : "Lihat beberapa project yang telah kami kerjakan dengan teknologi yang relevan untuk kebutuhan klien."}
          </p>

          {error && (
            <div className="mx-auto mt-4 max-w-lg rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}
        </div>

        <div className="mb-6 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <span>{isEn ? "Project data source:" : "Sumber data project:"}</span>
          <span className="font-semibold text-primary">Showcase-IT API</span>
          {loading ? <RefreshCcw className="h-4 w-4 animate-spin text-primary" /> : null}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={fetchProjects}
            title={isEn ? "Refresh data" : "Muat ulang data"}
          >
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>

        <div className="mx-auto mb-12 flex max-w-3xl flex-wrap justify-center gap-2">
          {allTags.slice(0, 10).map((tag) => (
            <Button
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              onClick={() => setActiveFilter(tag)}
              size="sm"
              className={
                activeFilter === tag
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading && projects.length === 0 ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={`portfolio-skeleton-${index}`} className="overflow-hidden border-border bg-card">
                <div className="h-48 animate-pulse bg-muted" />
                <CardContent className="p-6">
                  <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-muted" />
                  <div className="mb-2 h-4 w-full animate-pulse rounded bg-muted" />
                  <div className="mb-4 h-4 w-2/3 animate-pulse rounded bg-muted" />
                  <div className="flex gap-2">
                    <div className="h-5 w-16 animate-pulse rounded bg-muted" />
                    <div className="h-5 w-16 animate-pulse rounded bg-muted" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(event) => {
                        const target = event.currentTarget
                        target.src = "/placeholder.svg"
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-background/80 to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-2">
                      {project.website_url && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground"
                          onClick={() => window.open(project.website_url, "_blank")}
                        >
                          <ExternalLink className="mr-1 h-4 w-4" />
                          {isEn ? "Preview" : "Demo"}
                        </Button>
                      )}

                      {project.github_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary bg-transparent text-primary"
                          onClick={() => window.open(project.github_url, "_blank")}
                        >
                          <Github className="mr-1 h-4 w-4" />
                          Code
                          {project.repo_stars && project.repo_stars > 0 && (
                            <span className="ml-1 rounded-sm bg-primary/20 px-1 text-xs text-primary">
                              {project.repo_stars}
                            </span>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mb-4 text-pretty text-muted-foreground">{project.ai_summary || project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, tagIndex) => (
                      <Badge
                        key={`${project.id}-${tagIndex}`}
                        variant="secondary"
                        className="cursor-pointer text-xs"
                        onClick={() => setActiveFilter(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
