import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "StreamLine has transformed how we ship products. We've reduced our deployment time by 80% and our team couldn't be happier.",
    author: "Sarah Chen",
    role: "CTO at TechCorp",
    avatar: "/professional-woman-diverse.png",
    initials: "SC",
  },
  {
    quote:
      "The best investment we've made this year. The platform is intuitive, powerful, and the support team is exceptional.",
    author: "Michael Rodriguez",
    role: "Lead Developer at StartupXYZ",
    avatar: "/professional-man.jpg",
    initials: "MR",
  },
  {
    quote:
      "We switched from our legacy system to StreamLine and never looked back. It's like going from a bicycle to a rocket ship.",
    author: "Emily Watson",
    role: "VP Engineering at DataFlow",
    avatar: "/professional-woman-glasses.png",
    initials: "EW",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">Loved by teams everywhere</h2>
          <p className="text-pretty text-lg text-muted-foreground md:text-xl">
            See what our customers have to say about their experience with StreamLine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <p className="mb-6 text-pretty leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
