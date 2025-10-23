"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const teamMembers = [
    {
      name: "Dhruv Shajikumar",
      role: "Co-Founder",
      image: "/Dhruv.JPG",
      bio: "Business student.",
      linkedin: "https://www.linkedin.com/in/dhruv-shajikumar/",
    },
    {
      name: "Ryan Hyatt",
      role: "Co-Founder",
      image: "/Ryan.JPG",
      bio: "Business student.",
      linkedin: "https://www.linkedin.com/in/ryanhyatt222/",
    },
    {
      name: "Keshav Vyas",
      role: "Co-Founder",
      image: "/Keshiv.JPG",
      bio: "Business student.",
      linkedin: "https://www.linkedin.com/in/keshavhvyas/",
    },
    {
      name: "Connor Hyatt",
      role: "Software Engineer",
      image: "/Connor.JPG",
      bio: "Information Systems student.",
      linkedin: "https://www.linkedin.com/in/connorhyatt/",
    },
    {
      name: "Harrison Zoccoli",
      role: "AI Engineer",
      image: "/Harrison.jpg",
      bio: "Finance student.",
      linkedin: "https://www.linkedin.com/in/harrison-zoccoli/",
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
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        {/* Team Grid Section */}
        <section className="py-24 md:py-32 border-b border-slate-700/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                  Meet Our Team
                </h2>
                <p className="text-lg text-slate-200 max-w-2xl mx-auto">
                  We are a team of Carnegie Mellon students using AI to reinvent how consulting firms work. We are transforming scattered knowledge into powerful insights that drive smarter decisions.
                </p>
              </div>

              {/* Team Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20"
                  >
                    <CardContent className="p-8 text-center">
                      {/* Headshot */}
                      <div className="relative w-[120px] h-[120px] mx-auto mb-4">
                        <div className="w-full h-full rounded-full overflow-hidden border-3 border-white/20 bg-gradient-to-br from-white/10 to-white/5">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-white transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-slate-200 font-medium mb-3 text-sm">
                        {member.role}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      {/* LinkedIn Button */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 transition-all group/linkedin"
                      >
                        <svg
                          className="w-4 h-4 text-slate-200"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-sm font-medium text-slate-200">Connect</span>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Join Us in Transforming Consulting
              </h2>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                We're growing our team of researchers, engineers, and product builders who want to 
                shape the future of AI-powered consulting. If you're passionate about building tools 
                that amplify human potential, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => router.push("/demo")}
                  className="bg-slate-700 text-slate-50 hover:bg-slate-600 shadow-lg hover:shadow-xl transition-all px-8"
                >
                  View Open Positions
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
                <a
                  href="mailto:careers@lunon.ai"
                  className="text-slate-200 hover:text-white font-medium transition-colors"
                >
                  Or reach out directly at careers@lunon.ai
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
