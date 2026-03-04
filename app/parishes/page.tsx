"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ParishCard } from "@/components/parish-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Search, Church, ChevronLeft, ChevronRight } from "lucide-react"
import { parishes } from "@/lib/mock-data"

const ITEMS_PER_PAGE = 6

const cities = ["Todas", ...Array.from(new Set(parishes.map((p) => p.city)))]

export default function ParishesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cityFilter, setCityFilter] = useState("Todas")
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = parishes.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = cityFilter === "Todas" || p.city === cityFilter
    return matchesSearch && matchesCity
  })

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleCityFilter = (value: string) => {
    setCityFilter(value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Directorio de Paroquias
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 leading-relaxed">
              Explore todas as paroquias da Diocese de Santiago. Encontre horarios de missa, contactos e informacoes detalhadas.
            </p>
          </div>
        </section>

        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Search and filters */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar paroquia ou cidade..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="h-12 pl-11 text-base bg-card border-border focus-visible:ring-ring"
                />
              </div>
              <Select value={cityFilter} onValueChange={handleCityFilter}>
                <SelectTrigger className="h-12 w-full sm:w-[220px] bg-card border-border">
                  <SelectValue placeholder="Filtrar por cidade" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results count */}
            <p className="mb-6 text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "paroquia encontrada" : "paroquias encontradas"}
            </p>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paged.map((parish) => (
                <ParishCard key={parish.slug} slug={parish.slug} {...parish} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-16 text-center">
                <Church className="mx-auto h-12 w-12 text-muted-foreground/30" />
                <p className="mt-4 text-muted-foreground">Nenhuma paroquia encontrada para a sua pesquisa.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="border-border"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Anterior</span>
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "bg-primary text-primary-foreground" : "border-border"}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="border-border"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Proxima</span>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
