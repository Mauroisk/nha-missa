"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-[#0F2C59] py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2">
          <Mail className="h-5 w-5 text-[#C6A75E]" />
          <span className="text-sm font-semibold uppercase tracking-widest text-[#C6A75E]">
            Newsletter
          </span>
        </div>

        <h2 className="font-serif text-3xl font-bold text-[#FFFFFF] sm:text-4xl text-balance">
          Subscrever o Jornal Mensal
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-[#D4DEE8] leading-relaxed">
          Receba as ultimas noticias, horarios de missa e eventos da diocese directamente no seu email.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-[#C6A75E]">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Obrigado pela subscricao!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Input
              type="email"
              placeholder="O seu endereco de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 flex-1 bg-[#FFFFFF]/10 border-[#FFFFFF]/20 text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 focus-visible:ring-[#C6A75E]"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 bg-[#C6A75E] text-[#0F2C59] hover:bg-[#C6A75E]/90 font-semibold px-8"
            >
              Subscrever
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
