"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react"
import { newsArticles, newsCategories } from "@/lib/mock-data"

const ITEMS_PER_PAGE = 6

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = activeCategory === "Todas"
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeCategory)

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Actualidades
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Noticias da Diocese
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 leading-relaxed">
              Fique a par das ultimas noticias, eventos e actividades da Diocese de Santiago.
            </p>
          </div>
        </section>

        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category filters */}
            <div className="mb-10 flex flex-wrap gap-2">
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground border border-border hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results */}
            <p className="mb-6 text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "artigo encontrado" : "artigos encontrados"}
            </p>

            {/* News grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paged.map((article) => (
                <Card
                  key={article.id}
                  className="group cursor-pointer overflow-hidden border-border transition-all hover:border-ring hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3">
                      <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {article.author}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-16 text-center">
                <Newspaper className="mx-auto h-12 w-12 text-muted-foreground/30" />
                <p className="mt-4 text-muted-foreground">Nenhuma noticia encontrada nesta categoria.</p>
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
