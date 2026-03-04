import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon?: LucideIcon
  label?: string
  title: string
  description?: string
  className?: string
  align?: "center" | "left"
}

export function SectionHeader({ icon: Icon, label, title, description, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      {(Icon || label) && (
        <div className={cn("mb-4 inline-flex items-center gap-2", align === "center" && "justify-center")}>
          {Icon && <Icon className="h-5 w-5 text-accent" />}
          {label && (
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {label}
            </span>
          )}
        </div>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-muted-foreground leading-relaxed", align === "center" ? "mx-auto max-w-xl" : "max-w-xl")}>
          {description}
        </p>
      )}
    </div>
  )
}
