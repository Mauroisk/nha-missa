"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-card border-r border-border">
      {/* Logo */}
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

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        <div className="flex flex-col gap-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
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

      {/* Back to site */}
      <div className="border-t border-border p-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar ao Site
        </Link>
      </div>
    </aside>
  )
}
