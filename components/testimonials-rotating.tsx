"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Stratos has completely transformed how we handle client data. The semantic search is incredibly accurate, and the AI chat feature saves us hours every day.",
    author: "Jennifer Martinez",
    role: "Partner, Strategic Consulting Group",
    avatar: "/professional-woman-diverse.png",
    initials: "JM",
  },
  {
    quote: "As a boutique consulting firm, we needed enterprise-grade tools without the enterprise price tag. Stratos delivered exactly that. The ROI was immediate.",
    author: "David Chen",
    role: "Managing Director, Chen Advisory",
    avatar: "/professional-man.jpg",
    initials: "DC",
  },
  {
    quote: "The security features gave us peace of mind when handling sensitive client documents. Plus, the interface is so intuitive that our entire team was up and running in a day.",
    author: "Rachel Thompson",
    role: "VP of Operations, Insight Partners",
    avatar: "/professional-woman-glasses.png",
    initials: "RT",
  },
]

export function TestimonialsRotating() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="bg-white py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Transforming Businesses, One Customer at a Time
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our early adopters have to say about their experience with Stratos
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <Card className="border-2 border-[#AC9776]/20 bg-white shadow-lg">
              <CardContent className="p-8 md:p-12">
                {/* Quote */}
                <div className="mb-8">
                  <svg
                    className="h-10 w-10 text-[#AC9776]/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light">
                    {currentTestimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 border-2 border-[#AC9776]/20">
                    <AvatarImage
                      src={currentTestimonial.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.author}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-[#AC9776]/10 text-[#AC9776] font-semibold">
                      {currentTestimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-muted-foreground">
                      {currentTestimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="h-10 w-10 rounded-full hover:bg-[#AC9776]/10 hover:border-[#AC9776]/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-[#AC9776]"
                        : "w-2 bg-[#AC9776]/30 hover:bg-[#AC9776]/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="h-10 w-10 rounded-full hover:bg-[#AC9776]/10 hover:border-[#AC9776]/30"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

