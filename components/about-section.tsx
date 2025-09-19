import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            About <span className="text-primary">Meow Labs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami percaya bahwa rasa ingin tahu adalah kunci dari setiap inovasi besar. Dengan pendekatan yang playful
            namun profesional, kami membantu startup dan UMKM mewujudkan visi teknologi mereka.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Curiosity</h3>
              <p className="text-muted-foreground text-pretty">
                Rasa ingin tahu mendorong kami untuk terus belajar dan mengeksplorasi teknologi terbaru
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-secondary/50 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground text-pretty">
                Kami mengubah ide-ide kreatif menjadi solusi teknologi yang inovatif dan fungsional
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Impact</h3>
              <p className="text-muted-foreground text-pretty">
                Setiap proyek yang kami kerjakan bertujuan untuk memberikan dampak positif bagi klien
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Story */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Tim yang Passionate & Profesional</h3>
              <p className="text-muted-foreground text-pretty mb-6">
                Meow Labs terdiri dari developer berpengalaman yang memiliki passion tinggi terhadap teknologi. Kami
                menggabungkan keahlian teknis dengan kreativitas untuk menghasilkan solusi yang tidak hanya fungsional,
                tapi juga memorable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Ready</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <span className="text-6xl">🐱‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
