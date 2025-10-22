import { Card, CardContent } from "@/components/ui/card"
import { Search, MessageSquare, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Find exactly what you need with AI-powered semantic search that understands context and meaning, not just keywords.",
  },
  {
    icon: MessageSquare,
    title: "RAG Chat",
    description:
      "Chat naturally with your documents using Retrieval-Augmented Generation for accurate, context-aware responses.",
  },
  {
    icon: Shield,
    title: "Secure Data",
    description:
      "Enterprise-grade encryption and compliance. Your sensitive consulting data stays protected with bank-level security.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track usage patterns, measure insights, and understand how your team leverages AI to drive better outcomes.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-secondary/30 py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Enterprise AI Features
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Powerful capabilities designed for consulting firms that demand precision, security, and intelligence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-white transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#522396] bg-white">
                  <feature.icon className="h-6 w-6 text-[#522396]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
