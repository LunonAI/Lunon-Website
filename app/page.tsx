import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Product } from "@/components/product"
import { BuiltBy } from "@/components/built-by"
import { Integrations } from "@/components/integrations"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Product />
        <BuiltBy />
        <Integrations />
      </main>
      <Footer />
    </div>
  )
}
