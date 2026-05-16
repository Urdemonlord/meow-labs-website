"use client"

import { ExternalLink, Instagram, Music2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useUiText } from "./ui-preferences-provider"

export function SocialMediaSection() {
  const copy = useUiText()
  const platforms = copy.social.platforms.map((platform) => ({
    ...platform,
    icon: platform.name === "TikTok" ? Music2 : Instagram,
    color:
      platform.name === "TikTok"
        ? "from-cyan-500 to-primary"
        : "from-pink-500 to-secondary",
  }))

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {copy.social.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
            {copy.social.description}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {platforms.map((platform) => {
            const Icon = platform.icon

            return (
              <Card
                key={platform.name}
                className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${platform.color} transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">{platform.name}</h3>
                      <p className="truncate text-sm text-muted-foreground">{platform.handle}</p>
                    </div>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {platform.description}
                  </p>

                  <Button asChild className="w-full transition-transform group-hover:scale-[1.01]">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {copy.social.followLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
