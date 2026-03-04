import Link from "next/link"
import { Facebook, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Paroquias", href: "/parishes" },
  { label: "Transmissoes ao Vivo", href: "/live" },
  { label: "Noticias", href: "/news" },
  { label: "Painel Admin", href: "/dashboard" },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Diocese info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-accent-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M2 12h20M12 2c-2 4-3 6-3 10s1 6 3 10M12 2c2 4 3 6 3 10s-1 6-3 10" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-primary-foreground">NHA MISSA</span>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed text-primary-foreground/60">
              Portal digital da Diocese de Santiago, ao servico da evangelizacao e da comunidade catolica em Cabo Verde.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
              Links Rapidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/60">
                  Largo da Igreja, Praia, Santiago, Cabo Verde
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/60">+238 9564799</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/60">info@nhamissa.cv</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            &copy; 2026 Diocese de Santiago. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
