"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function BuiltBy() {
  const router = useRouter()

  return (
    <section id="team" className="bg-gradient-to-b from-white to-neutral-50 pt-12 md:pt-16 pb-20 md:pb-24 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Engineered at Carnegie Mellon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Lunon was founded by students from Carnegie Mellon with a clear goal: to help 
              consulting firms unlock the full value of their internal knowledge. Our AI infrastructure transforms 
              complex data and documents into insights that drive better decisions.
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#AC9776]/20">
              <img
                src="/TeamLunon.JPG"
                alt="Team Lunon"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={() => router.push("/about")}
              className="bg-[#AC9776] text-white hover:bg-[#9A8565] shadow-lg hover:shadow-xl transition-all"
            >
              Meet the Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

