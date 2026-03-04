"use client"

import { useState } from "react"
import { Accessibility, Plus, Minus, Eye } from "lucide-react"

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const increaseFontSize = () => {
    const next = Math.min(fontSize + 10, 150)
    setFontSize(next)
    document.documentElement.style.fontSize = `${next}%`
  }

  const decreaseFontSize = () => {
    const next = Math.max(fontSize - 10, 80)
    setFontSize(next)
    document.documentElement.style.fontSize = `${next}%`
  }

  const toggleContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle("high-contrast")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Acessibilidade
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={decreaseFontSize}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Diminuir tamanho da letra"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[3rem] text-center text-sm font-medium text-foreground">
              {fontSize}%
            </span>
            <button
              onClick={increaseFontSize}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Aumentar tamanho da letra"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={toggleContrast}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
              highContrast
                ? "border-[#C6A75E] bg-[#C6A75E]/10 text-[#C6A75E]"
                : "border-border text-foreground hover:bg-secondary"
            }`}
          >
            <Eye className="h-4 w-4" />
            Alto Contraste
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
        aria-label="Opcoes de acessibilidade"
      >
        <Accessibility className="h-5 w-5" />
      </button>
    </div>
  )
}
