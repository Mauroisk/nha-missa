"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Plus, Pencil, Trash2, Search } from "lucide-react"
import { parishes } from "@/lib/mock-data"

export default function DashboardParishesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [addOpen, setAddOpen] = useState(false)

  const filtered = parishes.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground">Gerir Paroquias</h2>
          <p className="text-sm text-muted-foreground mt-1">Adicione, edite ou remova paroquias do directorio.</p>
        </div>
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Paroquia
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Nova Paroquia</DialogTitle>
              <DialogDescription>Preencha os dados para adicionar uma nova paroquia ao directorio.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="parish-name">Nome da Paroquia</Label>
                <Input id="parish-name" placeholder="Ex: Igreja de Sao Pedro" className="bg-card border-border" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="parish-city">Cidade</Label>
                <Input id="parish-city" placeholder="Ex: Praia, Santiago" className="bg-card border-border" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="parish-phone">Telefone</Label>
                <Input id="parish-phone" placeholder="+238 ..." className="bg-card border-border" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="parish-email">Email</Label>
                <Input id="parish-email" type="email" placeholder="paroquia@nhamissa.cv" className="bg-card border-border" />
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

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Pesquisar paroquias..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 bg-card border-border"
        />
      </div>

      {/* Table */}
      <Card className="border-border">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead>Nome</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead className="hidden sm:table-cell">Telefone</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="text-right">Accoes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((parish) => (
                <TableRow key={parish.slug} className="border-border">
                  <TableCell className="font-medium text-foreground">{parish.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    <Badge variant="secondary">{parish.city}</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">{parish.phone}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{parish.email}</TableCell>
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
