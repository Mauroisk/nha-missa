import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Radio, Clock, Calendar, Play } from "lucide-react"
import { liveStreams, pastStreams } from "@/lib/mock-data"

export default function LivePage() {
  const featured = liveStreams[0]
  const upcoming = liveStreams.slice(1)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <Radio className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Em Directo
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Transmissoes ao Vivo
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 leading-relaxed">
              Acompanhe as celebracoes da Diocese de Santiago em tempo real, onde quer que esteja.
            </p>
          </div>
        </section>

        {/* Main live stream */}
        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Featured */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden border-border">
                  <div className="relative aspect-video bg-primary">
                    <Image
                      src={featured.thumbnailUrl}
                      alt={featured.title}
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/20 backdrop-blur-sm">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 text-accent-foreground">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-primary-foreground/80">Clique para assistir</p>
                    </div>
                    {featured.isLive && (
                      <div className="absolute left-4 top-4">
                        <Badge className="bg-red-600 text-primary-foreground hover:bg-red-700 gap-1.5 px-3 py-1">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary-foreground" />
                          AO VIVO
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h2 className="font-serif text-xl font-bold text-foreground">{featured.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{featured.parish}</p>
                    <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {featured.time}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming sidebar */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Proximas Transmissoes
                </h3>
                {upcoming.map((stream) => (
                  <Card
                    key={stream.id}
                    className="cursor-pointer border-border transition-all hover:border-ring hover:shadow-md"
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={stream.thumbnailUrl}
                            alt={stream.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium leading-snug text-foreground line-clamp-2">
                            {stream.title}
                          </h4>
                          <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {stream.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {stream.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past videos */}
        <section className="bg-card py-12 lg:py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Videos Anteriores</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastStreams.map((stream) => (
                <Card
                  key={stream.id}
                  className="group cursor-pointer overflow-hidden border-border transition-all hover:border-ring hover:shadow-lg"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={stream.thumbnailUrl}
                      alt={stream.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                        <Play className="ml-0.5 h-5 w-5 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground line-clamp-2">{stream.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{stream.parish}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {stream.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {stream.time}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
