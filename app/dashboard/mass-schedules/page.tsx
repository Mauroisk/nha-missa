"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pencil, Clock } from "lucide-react"
import { parishes } from "@/lib/mock-data"

export default function DashboardMassSchedulesPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground">Horarios de Missa</h2>
        <p className="text-sm text-muted-foreground mt-1">Consulte e edite os horarios de missa de cada paroquia.</p>
      </div>

      {/* Parish schedule cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {parishes.map((parish) => (
          <Card key={parish.slug} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{parish.name}</h3>
                  <p className="text-sm text-muted-foreground">{parish.city}</p>
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8 border-border shrink-0">
                  <Pencil className="h-3.5 w-3.5" />
                  <span className="sr-only">Editar horarios</span>
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                {parish.massSchedule.map((schedule, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-md bg-secondary px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-ring" />
                      <span className="text-sm text-foreground">{schedule.day}</span>
                      <span className="text-xs text-muted-foreground">- {schedule.type}</span>
                    </div>
                    <Badge variant="outline" className="border-ring text-ring text-xs font-semibold">
                      {schedule.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
