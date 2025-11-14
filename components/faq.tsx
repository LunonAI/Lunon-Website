"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

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
    question: "How does Lunon’s business model scale across teams and clients?",
    answer: "Lunon handles all types of consulting firm data including client documents, internal knowledge bases, research reports, financial models, presentations, and proprietary methodologies. The system can ingest structured and unstructured data from various sources like SharePoint, Confluence, file shares, and more to create a comprehensive knowledge repository."
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
        <div className="mx-auto max-w-3xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              FAQ
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
                  <Plus
                    className={`h-6 w-6 text-slate-400 flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                  <span className="text-base md:text-lg font-semibold text-white flex-1">
                    {faq.question}
                  </span>
                </button>
                
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 pl-[calc(1.5rem+1.5rem+1rem)] md:pl-[calc(2rem+1.5rem+1rem)]">
                      <p className="text-sm md:text-base text-slate-400 leading-relaxed">
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

