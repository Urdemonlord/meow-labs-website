"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, RefreshCcw } from "lucide-react"

// Define TypeScript interface for Showcase-IT Project
interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  repo_stars?: number;
  tags: string[];
  ai_summary?: string;
  github_url?: string;
  website_url?: string;
  key_features?: string[];
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [projects, setProjects] = useState<ShowcaseProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const isFetchingRef = useRef(false)
  
  // Function to fetch projects from Showcase-IT API
  const fetchProjects = async () => {
    // Prevent concurrent fetch requests
    if (isFetchingRef.current) return;
    
    isFetchingRef.current = true;
    setLoading(true);
    try {
      // Gunakan URL production untuk deployment
      const apiUrl = 'https://show-case-it-05.vercel.app/api/projects';
      // Untuk development, gunakan localhost
      // const apiUrl = 'http://localhost:3000/api/projects';
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProjects(data);
      setError(null);
    } catch (error) {
      // Silently handle error, gunakan fallback projects
      
      // Fallback to sample projects if API fails
      setProjects([
        {
          id: "1",
          title: "Web Reservasi Wisma",
          description: "Platform reservasi online untuk penginapan dengan fitur lengkap",
          image: "/modern-ecommerce-website.jpg",
          tags: ["PHP Native"],
          github_url: "#",
          website_url: "#",
        },
        {
          id: "2",
          title: "Smart Home Dashboard",
          description: "Dashboard monitoring untuk smart home devices dengan real-time data",
          image: "/smart-home-dashboard.png",
          tags: ["React", "IoT", "WebSocket"],
          github_url: "#",
          website_url: "#",
        },
        {
          id: "3",
          title: "Web Kafe",
          description: "Platform reservasi online untuk kafe dan restoran",
          image: "/analytics-dashboard-dark-theme.png",
          tags: ["Next.js", "Chart.js", "MongoDB"],
          github_url: "#",
          website_url: "#",
        },
      ]);
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  };
  
  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
    
    // Set up interval to refresh data every 5 minutes
    const intervalId = setInterval(fetchProjects, 5 * 60 * 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Extract unique tags from projects for filtering
  const allTags = ["All", ...new Set((Array.isArray(projects) ? projects : []).flatMap(project => project.tags || []))].filter(Boolean);
  
  // Filter projects based on selected tag
  const filteredProjects =
    activeFilter === "All" 
      ? (Array.isArray(projects) ? projects : [])
      : (Array.isArray(projects) ? projects : []).filter((project) => project.tags && project.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Lihat beberapa proyek yang telah kami kerjakan dengan berbagai teknologi dan solusi inovatif untuk klien
            dari berbagai industri.
          </p>
          
          {error && (
            <div className="mt-4 p-3 bg-destructive/10 text-destructive rounded-md max-w-md mx-auto">
              {error}
            </div>
          )}
        </div>
        
        {/* API Integration Indicator */}
        <div className="text-center mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <span className="mr-2">Terintegrasi dengan</span>
            <span className="font-semibold text-primary">Showcase-IT</span>
            {loading ? (
              <RefreshCcw className="ml-2 h-4 w-4 animate-spin text-primary" />
            ) : (
              <Badge variant="outline" className="ml-2 text-xs">Live</Badge>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={fetchProjects}
            title="Refresh data"
          >
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {allTags.slice(0, 10).map((tag) => (
            <Button
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              onClick={() => setActiveFilter(tag)}
              size="sm"
              className={
                activeFilter === tag
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
              }
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && projects.length === 0 ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="h-48 bg-muted animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-muted animate-pulse rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-muted animate-pulse rounded mb-2 w-full"></div>
                  <div className="h-4 bg-muted animate-pulse rounded mb-4 w-2/3"></div>
                  <div className="flex gap-2">
                    <div className="h-5 bg-muted animate-pulse rounded w-16"></div>
                    <div className="h-5 bg-muted animate-pulse rounded w-16"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      {project.website_url && (
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="bg-secondary text-secondary-foreground"
                          onClick={() => window.open(project.website_url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-primary text-primary bg-transparent"
                          onClick={() => window.open(project.github_url, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                          {project.repo_stars && project.repo_stars > 0 && (
                            <span className="ml-1 bg-primary/20 text-primary text-xs px-1 rounded-sm">
                              {project.repo_stars}
                            </span>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-pretty mb-4">
                    {project.ai_summary || project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags && project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={`${project.id}-${tagIndex}`} 
                        variant="secondary" 
                        className="text-xs"
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
