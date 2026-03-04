"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { parishes } from "@/lib/mock-data"

const allEvents = parishes.flatMap((p) =>
  p.events.map((e) => ({ ...e, parish: p.name }))
)

export default function DashboardEventsPage() {
  const [addOpen, setAddOpen] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground">Gerir Eventos</h2>
          <p className="text-sm text-muted-foreground mt-1">Crie e gira eventos para as paroquias da diocese.</p>
        </div>
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Plus className="mr-2 h-4 w-4" />
              Novo Evento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Novo Evento</DialogTitle>
              <DialogDescription>Preencha os dados do novo evento.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="event-title">Titulo</Label>
                <Input id="event-title" placeholder="Nome do evento" className="bg-card border-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-date">Data</Label>
                  <Input id="event-date" type="date" className="bg-card border-border" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-time">Hora</Label>
                  <Input id="event-time" type="time" className="bg-card border-border" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="event-parish">Paroquia</Label>
                <Input id="event-parish" placeholder="Seleccione a paroquia" className="bg-card border-border" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="event-desc">Descricao</Label>
                <Textarea id="event-desc" placeholder="Descreva o evento..." className="bg-card border-border min-h-[80px]" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddOpen(false)} className="border-border">
                Cancelar
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setAddOpen(false)}>
                Guardar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <Card className="border-border">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead>Evento</TableHead>
                <TableHead>Paroquia</TableHead>
                <TableHead className="hidden sm:table-cell">Data</TableHead>
                <TableHead className="hidden sm:table-cell">Hora</TableHead>
                <TableHead className="text-right">Accoes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allEvents.map((event) => (
                <TableRow key={event.id} className="border-border">
                  <TableCell className="font-medium text-foreground">{event.title}</TableCell>
                  <TableCell className="text-muted-foreground">
                    <span className="line-clamp-1">{event.parish}</span>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    <Badge variant="secondary">{event.date}</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">{event.time}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border">
                        <Pencil className="h-3.5 w-3.5" />
                        <span className="sr-only">Editar</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Eliminar</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
