"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ParishCard } from "@/components/parish-card"
import { SectionHeader } from "@/components/section-header"
import { Search, Church } from "lucide-react"
import { parishes } from "@/lib/mock-data"

export function ParishDirectory() {
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = parishes
    .filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 6)

  return (
    <section id="paroquias" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Church}
          label="Directorio"
          title="Encontre a sua Paroquia"
          description="Pesquise por nome ou localidade para encontrar horarios de missa e informacoes da sua paroquia."
        />

        <div className="mx-auto mb-10 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Pesquisar paroquia ou cidade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-11 text-base bg-card border-border focus-visible:ring-ring"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((parish) => (
            <ParishCard key={parish.slug} slug={parish.slug} {...parish} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">Nenhuma paroquia encontrada para a sua pesquisa.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
          >
            <Link href="/parishes">Ver Todas as Paroquias</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
