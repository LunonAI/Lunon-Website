import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { BuiltBy } from "@/components/built-by"
import { TestimonialsRotating } from "@/components/testimonials-rotating"
import { Integrations } from "@/components/integrations"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <BuiltBy />
        <TestimonialsRotating />
        <Integrations />
      </main>
      <Footer />
    </div>
  )
}
