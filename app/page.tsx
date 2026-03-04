import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LiveSection } from "@/components/live-section"
import { ParishDirectory } from "@/components/parish-directory"
import { NewsletterSection } from "@/components/newsletter-section"
import { AccessibilityWidget } from "@/components/accessibility-widget"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <LiveSection />
        <ParishDirectory />
        <NewsletterSection />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  )
}
