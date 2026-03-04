"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Pencil } from "lucide-react"
import { parishes } from "@/lib/mock-data"

export default function DashboardWeeklyInfoPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground">Informacao Semanal</h2>
        <p className="text-sm text-muted-foreground mt-1">Gira a informacao semanal publicada em cada paroquia.</p>
      </div>

      {/* Weekly info cards */}
      <div className="flex flex-col gap-6">
        {parishes.map((parish) => (
          <Card key={parish.slug} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground">{parish.name}</h3>
                    <p className="text-sm text-muted-foreground">{parish.city}</p>
                  </div>
                </div>
                <Badge
                  className={
                    parish.weeklyInfo
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-muted text-muted-foreground border-border"
                  }
                  variant="outline"
                >
                  {parish.weeklyInfo ? "Activo" : "Inactivo"}
                </Badge>
              </div>

              {/* Editor area */}
              <Textarea
                defaultValue={parish.weeklyInfo}
                placeholder="Escreva a informacao semanal para esta paroquia..."
                className="min-h-[100px] bg-secondary border-border text-foreground resize-none"
              />

              <div className="mt-4 flex items-center justify-end gap-3">
                <Button variant="outline" size="sm" className="border-border">
                  Cancelar
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Pencil className="mr-2 h-3.5 w-3.5" />
                  Guardar Alteracoes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
