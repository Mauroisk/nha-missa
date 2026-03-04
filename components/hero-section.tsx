import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[700px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-church.jpg')" }}
        role="img"
        aria-label="Interior de uma igreja catolica em Cabo Verde"
      />
      <div className="absolute inset-0 bg-primary/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-sm font-medium text-accent">Diocese de Santiago</span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
          A Nova Forma de Evangelizar no Digital
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Acompanhe missas ao vivo, encontre a sua paroquia e fique ligado as celebracoes da Diocese de Santiago, Cabo Verde.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base"
          >
            <Link href="/parishes">
              <Search className="mr-2 h-5 w-5" />
              Encontrar Missas
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground px-8 py-6 text-base backdrop-blur-sm"
          >
            <Link href="/live">
              <Play className="mr-2 h-5 w-5" />
              Ver Transmissoes ao Vivo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
