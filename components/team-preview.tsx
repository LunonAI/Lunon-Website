"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function TeamPreview() {
  const router = useRouter()

  return (
    <section className="bg-gradient-to-b from-white to-neutral-50 py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Meet Team Lunon
            </h2>
            
            {/* Sub-headline */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineers and builders from Carnegie Mellon solving real problems in consulting with AI.
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#522396]/20">
              <div className="aspect-[21/9] relative bg-gradient-to-br from-[#522396]/10 to-[#522396]/5">
                <Image
                  src="/TeamLunon.JPG"
                  alt="Team Lunon"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => router.push("/about")}
              className="bg-[#522396] text-white hover:bg-[#45158C] shadow-lg hover:shadow-xl transition-all"
            >
              Learn More About Our Team
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
