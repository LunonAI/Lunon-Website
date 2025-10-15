import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Ready to transform your workflow?
          </h2>
          <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">
            Join thousands of teams already building better products with StreamLine. Start your free trial today—no
            credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
