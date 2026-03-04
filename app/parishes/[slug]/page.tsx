import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowLeft,
  Facebook,
  Instagram,
  Navigation,
  Info,
} from "lucide-react"
import { parishes } from "@/lib/mock-data"

export function generateStaticParams() {
  return parishes.map((parish) => ({ slug: parish.slug }))
}

export default async function ParishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const parish = parishes.find((p) => p.slug === slug)

  if (!parish) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Banner */}
        <section className="relative h-64 sm:h-80 lg:h-96">
          <Image
            src={parish.image}
            alt={parish.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
              <Link
                href="/parishes"
                className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Directorio
              </Link>
              <h1 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
                {parish.name}
              </h1>
              <p className="mt-2 flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                {parish.city}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* About */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Sobre a Paroquia</h2>
                    <p className="text-muted-foreground leading-relaxed">{parish.description}</p>
                  </CardContent>
                </Card>

                {/* Mass Schedule */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Horario de Missas</h2>
                    <div className="flex flex-col gap-3">
                      {parish.massSchedule.map((schedule, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <Clock className="h-4 w-4 text-ring" />
                            <div>
                              <p className="font-medium text-foreground">{schedule.type}</p>
                              <p className="text-sm text-muted-foreground">{schedule.day}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-ring text-ring font-semibold">
                            {schedule.time}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Events */}
                {parish.events.length > 0 && (
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Eventos</h2>
                      <div className="flex flex-col gap-4">
                        {parish.events.map((event) => (
                          <div key={event.id} className="flex gap-4 rounded-lg border border-border p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                              <Calendar className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{event.title}</h3>
                              <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {event.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5" />
                                  {event.time}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Weekly Info */}
                <Card className="border-accent bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                        <Info className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-bold text-foreground mb-2">Informacao Semanal</h2>
                        <p className="text-muted-foreground leading-relaxed">{parish.weeklyInfo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Contact info */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">Contacto</h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ring" />
                        <span className="text-sm text-muted-foreground">{parish.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 shrink-0 text-ring" />
                        <span className="text-sm text-muted-foreground">{parish.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 shrink-0 text-ring" />
                        <span className="text-sm text-muted-foreground">{parish.email}</span>
                      </div>
                      {(parish.socialFacebook || parish.socialInstagram) && (
                        <>
                          <Separator />
                          <div className="flex items-center gap-3">
                            {parish.socialFacebook && (
                              <a
                                href={parish.socialFacebook}
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                aria-label="Facebook"
                              >
                                <Facebook className="h-4 w-4" />
                              </a>
                            )}
                            {parish.socialInstagram && (
                              <a
                                href={parish.socialInstagram}
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                aria-label="Instagram"
                              >
                                <Instagram className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Map placeholder */}
                <Card className="border-border overflow-hidden">
                  <div className="flex h-48 items-center justify-center bg-muted">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-muted-foreground/40" />
                      <p className="mt-2 text-sm text-muted-foreground/60">Google Maps</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      <Navigation className="mr-2 h-4 w-4" />
                      Como Chegar
                    </Button>
                  </CardContent>
                </Card>

                {/* Next mass */}
                <Card className="border-border bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <Clock className="mx-auto h-8 w-8 text-accent mb-3" />
                    <p className="text-sm text-primary-foreground/70 mb-1">Proxima Missa</p>
                    <p className="font-serif text-xl font-bold text-primary-foreground">{parish.massTime.split(",")[0]}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
