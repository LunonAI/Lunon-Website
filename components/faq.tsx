"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What problem does Lunon solve for consulting firms?",
    answer: "Consulting firms bleed productivity because their knowledge is fragmented and hard to reuse. Lunon solves this by organizing everything a firm knows and converting it into accurate, client ready work in minutes instead of hours."
  },
  {
    question: "What makes Lunon more effective for consulting than ChatGPT Enterprise?",
    answer: "ChatGPT Enterprise is a general AI tool. Lunon is built for the full consulting workflow. It structures clients, projects, and documents the same way a firm does, so the system can pull the right context every time. Our deliverable generator creates full research summaries, decks, and recommendations using the firm’s templates and writing style. An internal fact checking agent verifies every claim against firm documents, which makes Lunon far more accurate and reliable than any standalone model. This combination of workflow structure, controlled accuracy, and true deliverable creation is something ChatGPT Enterprise does not support."
  },
  {
    question: "What gives Lunon a defensible competitive advantage?",
    answer: "Lunon has an advantage because it is the first platform that brings every part of consulting into one system. Other SaaS tools handle only a slice of the workflow, like search, chat, or templates. Lunon links knowledge retrieval, analysis, drafting, validation, and final deliverables in a single pipeline. The system understands client boundaries, keeps every team aligned on the same information, and produces work that matches a firm’s real process. This end to end workflow gives Lunon a level of consistency, accuracy, and efficiency that fragmented tools cannot match."
  },
  {
    question: "How does Lunon keep firm and client data secure?",
    answer: "All data stays isolated in its own workspace with strict access controls, encrypted storage, and no cross firm data sharing. Nothing is used to train external models. Firms keep full ownership of everything they upload."
  },
  {
    question: "How soon can our team experience Lunon in action?",
    answer: "You can test Lunon immediately through a demo or pilot, and onboarding takes about an hour. Teams begin producing client ready work the same day, with clear time savings and workflow improvements showing up within the first week."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              Questions? We've Got Answers
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="rounded-2xl overflow-hidden bg-white/5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-slate-700/30 last:border-b-0 transition-colors ${
                  openIndex === index ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 md:px-8 py-6 flex items-start gap-4 group transition-colors"
                >
                  <span className="text-lg md:text-xl font-semibold text-white flex-1">
                    {faq.question}
                  </span>
                  <div className="relative h-6 w-6 flex-shrink-0 mt-0.5">
                    {/* Horizontal line - stays still */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-slate-400 rounded-full" />
                    </div>
                    {/* Vertical line - rotates */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className={`w-0.5 h-4 bg-slate-400 rounded-full transition-transform duration-300 ease-in-out ${
                          openIndex === index ? "-rotate-90" : "rotate-0"
                        }`}
                      />
                    </div>
                  </div>
                </button>
                
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 pr-[calc(1.5rem+1.5rem+1rem)] md:pr-[calc(2rem+1.5rem+1rem)]">
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

