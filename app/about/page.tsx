"use client"

import Image from "next/image"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Starfield } from "@/components/starfield"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()
  const [showCopied, setShowCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("careers@lunon.ai")
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  const leaders = [
    {
      name: "Dhruv Shajikumar",
      role: "Chief Executive Officer",
      image: "/Dhruv.JPG",
      bio: "Business student.",
      linkedin: "https://www.linkedin.com/in/dhruv-shajikumar/",
    },
    {
      name: "Connor Hyatt",
      role: "Chief Technology Officer",
      image: "/Connor.JPG",
      bio: "Information Systems student.",
      linkedin: "https://www.linkedin.com/in/connorhyatt/",
    },
    {
      name: "Ryan Hyatt",
      role: "Chief Marketing Officer",
      image: "/Ryan.JPG",
      bio: "Business student.",
      linkedin: "https://www.linkedin.com/in/ryanhyatt222/",
    },
    {
      name: "Keshav Vyas",
      role: "Chief Product Officer",
      image: "/Keshiv.JPG",
      bio: "Business student.",
      linkedin: "https://www.linkedin.com/in/keshavhvyas/",
    },
  ]

  const teamMembers = [
    {
      name: "Hannah Wyatt",
      role: "Creative Marketing Specialist",
      image: "/Hannah.png",
      bio: "Film student.",
      linkedin: "https://www.linkedin.com/in/hannahwyattusa/",
    },
    {
      name: "Osahan Belo-Osagie",
      role: "Intern",
      image: "/Osahan.JPG",
      bio: "Business student.",
      linkedin: "https://www.linkedin.com/in/osahonbelo-osagie/",
    },
  ]

  const values = [
    {
      icon: "🎯",
      title: "Client-Centric by Design",
      description:
        "We build for the people who use our tools every day—consultants under deadline pressure who need precision, speed, and reliability. Every feature decision starts with \"Will this help our users deliver better outcomes?\"",
    },
    {
      icon: "🔒",
      title: "Security First, Always",
      description:
        "Consulting data is sacred. We employ bank-level encryption, zero-trust architecture, and rigorous compliance standards (SOC 2, GDPR, HIPAA) because your clients' trust depends on it.",
    },
    {
      icon: "🧠",
      title: "Amplify, Don't Replace",
      description:
        "AI should enhance human expertise, not replace it. We design tools that make consultants faster, sharper, and more insightful—never ones that eliminate the human judgment that defines great consulting.",
    },
    {
      icon: "🚀",
      title: "Move Fast, Build Right",
      description:
        "We ship quickly but never carelessly. Our Carnegie Mellon engineering culture means rigorous testing, thoughtful architecture, and continuous iteration based on real user feedback.",
    },
    {
      icon: "🤝",
      title: "Radical Transparency",
      description:
        "We believe in open communication with our users, our team, and our stakeholders. When something breaks, we say so. When we're wrong, we fix it. Trust is earned through honesty.",
    },
  ]

  return (
    <div className="relative min-h-screen bg-black">
      {/* Dynamic Starfield Background - Random on each load */}
      <Starfield />

      <Navbar />
      <main className="pt-16 relative z-10">
        {/* Team Grid Section */}
        <section className="py-24 md:py-32 border-b border-slate-700/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-left md:text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                  Meet Our Team
                </h2>
                <p className="text-base md:text-lg text-slate-200 max-w-2xl md:mx-auto">
                  Carnegie Mellon students using AI to reinvent consulting by transforming scattered knowledge into powerful insights that drive smarter decisions.
                </p>
              </div>

              {/* Leadership Section */}
              <div>
                <div className="grid md:grid-cols-2 gap-6">
                  {leaders.map((member, index) => (
                    <div
                      key={index}
                      className="group flex gap-5 p-6 rounded-xl bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all duration-300"
                    >
                      {/* Headshot */}
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-slate-600 group-hover:border-slate-500 transition-all">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-slate-300 text-base font-medium mb-2">
                          {member.role}
                        </p>
                        <p className="hidden md:block text-base text-slate-350 leading-relaxed mb-6" style={{ color: '#b0b8c3' }}>
                          {member.bio}
                        </p>
                        
                        {/* LinkedIn Link */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-base text-slate-300 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Members Section */}
              <div className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="group flex gap-5 p-6 rounded-xl bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all duration-300"
                    >
                      {/* Headshot */}
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-slate-600 group-hover:border-slate-500 transition-all">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-slate-300 text-base font-medium mb-2">
                          {member.role}
                        </p>
                        <p className="hidden md:block text-base text-slate-350 leading-relaxed mb-6" style={{ color: '#b0b8c3' }}>
                          {member.bio}
                        </p>
                        
                        {/* LinkedIn Link */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-base text-slate-300 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    Join Us in Transforming Consulting
                  </h2>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    We're growing our team of researchers, engineers, and product builders who want to 
                    shape the future of AI-powered consulting. If you're passionate about building tools 
                    that amplify human potential, we'd love to hear from you.
                  </p>
                </div>
                
                {/* Right side - Actions */}
                <div className="space-y-4">
                  <button
                    onClick={() => router.push("/demo")}
                    className="w-full h-[50px] group flex items-center justify-between bg-slate-700 text-slate-50 hover:bg-slate-600 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-colors"
                  >
                    <span className="text-left">View Open Positions</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform"
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
                  </button>
                  
                  <div className="relative h-[20px]">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black text-slate-500">or</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={copyEmail}
                    className={`w-full h-[50px] group flex items-center justify-between px-6 rounded-lg font-medium border transition-colors ${
                      showCopied
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="text-left">{showCopied ? 'Email copied!' : 'Email us directly'}</span>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {showCopied ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
