import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Radio, Clock, Calendar } from "lucide-react"

const featuredStream = {
  title: "Missa Dominical - Catedral de Nossa Senhora da Graca",
  date: "Domingo, 9 de Marco 2026",
  time: "10:00",
  isLive: true,
}

const upcomingStreams = [
  {
    title: "Missa Vespertina - Paroquia de Sao Lourenco",
    date: "Domingo, 9 Mar",
    time: "18:00",
    isLive: false,
  },
  {
    title: "Adoracao ao Santissimo - Catedral",
    date: "Segunda, 10 Mar",
    time: "17:00",
    isLive: false,
  },
  {
    title: "Celebracao da Quaresma - Igreja de Sao Jorge",
    date: "Terca, 11 Mar",
    time: "19:00",
    isLive: false,
  },
]

export function LiveSection() {
  return (
    <section id="ao-vivo" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <Radio className="h-5 w-5 text-[#C6A75E]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C6A75E]">
              Em Directo
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Transmissoes ao Vivo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Acompanhe as celebracoes da diocese em tempo real, onde quer que esteja.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured video */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-border">
              <div className="relative aspect-video bg-[#0F2C59]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C6A75E]/20 backdrop-blur-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A75E]">
                      <svg viewBox="0 0 24 24" fill="#0F2C59" className="ml-1 h-5 w-5">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[#D4DEE8]">Clique para assistir</p>
                </div>
                {/* Live badge */}
                {featuredStream.isLive && (
                  <div className="absolute left-4 top-4">
                    <Badge className="bg-red-600 text-[#FFFFFF] hover:bg-red-700 gap-1.5 px-3 py-1">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFFFFF]" />
                      AO VIVO
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {featuredStream.title}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {featuredStream.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featuredStream.time}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming list */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Proximas Transmissoes
            </h3>
            {upcomingStreams.map((stream, i) => (
              <Card
                key={i}
                className="cursor-pointer border-border transition-all hover:border-ring hover:shadow-md"
              >
                <CardContent className="p-4">
                  <h4 className="font-medium leading-snug text-foreground">
                    {stream.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {stream.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {stream.time}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
