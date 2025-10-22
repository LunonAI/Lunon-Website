import { Upload, Sparkles, BarChart3 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Securely upload your consulting documents, reports, and data files to our encrypted platform.",
    },
    {
      icon: Sparkles,
      title: "AI Analysis",
      description:
        "Our advanced AI models process and analyze your content using semantic understanding and RAG technology.",
    },
    {
      icon: BarChart3,
      title: "Unlock Insights",
      description: "Access intelligent search, chat with your documents, and generate actionable insights instantly.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your consulting data into intelligence
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Gold accent icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#522396] bg-white">
                <step.icon className="h-8 w-8 text-[#522396]" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>

              <p className="text-muted-foreground">{step.description}</p>

              {/* Connecting line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
