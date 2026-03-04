"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Menu, Bell, User, LogOut, Settings } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Church,
  Calendar,
  Clock,
  FileText,
  ChevronLeft,
} from "lucide-react"

const sidebarItems = [
  { label: "Painel", href: "/dashboard", icon: LayoutDashboard },
  { label: "Paroquias", href: "/dashboard/parishes", icon: Church },
  { label: "Eventos", href: "/dashboard/events", icon: Calendar },
  { label: "Horarios de Missa", href: "/dashboard/mass-schedules", icon: Clock },
  { label: "Info Semanal", href: "/dashboard/weekly-info", icon: FileText },
]

export function DashboardTopbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const currentPage = sidebarItems.find((item) => item.href === pathname)?.label || "Painel"

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-card/95 backdrop-blur-sm px-4 sm:px-6">
      {/* Mobile menu */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden border-border">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-card">
          <SheetTitle className="sr-only">Menu de navegacao</SheetTitle>
          {/* Mobile sidebar */}
          <div className="flex h-16 items-center gap-2 border-b border-border px-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-primary-foreground"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20M12 2c-2 4-3 6-3 10s1 6 3 10M12 2c2 4 3 6 3 10s-1 6-3 10" />
              </svg>
            </div>
            <span className="font-serif text-lg font-bold text-foreground">NHA MISSA</span>
          </div>
          <nav className="px-3 py-4">
            <div className="flex flex-col gap-1">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>
          <div className="border-t border-border p-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar ao Site
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Page title */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-foreground">{currentPage}</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" className="border-border relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
            3
          </span>
          <span className="sr-only">Notificacoes</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 border-border">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">PA</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline text-sm font-medium">Padre Admin</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="gap-2">
              <User className="h-4 w-4" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Settings className="h-4 w-4" />
              Definicoes
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 text-destructive">
              <LogOut className="h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
