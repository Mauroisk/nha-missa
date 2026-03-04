"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Paroquias", href: "/parishes" },
  { label: "Ao Vivo", href: "/live" },
  { label: "Noticias", href: "/news" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-primary-foreground"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20M12 2c-2 4-3 6-3 10s1 6 3 10M12 2c2 4 3 6 3 10s-1 6-3 10" />
              </svg>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              NHA MISSA
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link href="/dashboard">Login Paroquial</Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="/dashboard">Login Paroquial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
