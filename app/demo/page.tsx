"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DemoPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    companySize: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!formData.companySize) {
      newErrors.companySize = "Please select company size"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your use case"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, you would send this to your backend:
    // await fetch('/api/demo-request', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })

    console.log("Demo request submitted:", formData)

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#AC9776]/10">
                <CheckCircle2 className="h-10 w-10 text-[#AC9776]" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Thank You!
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              We've received your demo request. Our team will reach out within 1 business day to
              schedule a personalized demo.
            </p>
            <div className="rounded-lg border border-[#AC9776]/20 bg-[#AC9776]/5 p-6 mb-8">
              <p className="text-sm font-medium text-foreground mb-2">What happens next?</p>
              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#AC9776] flex-shrink-0"></span>
                  <span>A solutions specialist will contact you via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#AC9776] flex-shrink-0"></span>
                  <span>We'll learn about your specific needs and use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#AC9776] flex-shrink-0"></span>
                  <span>Schedule a live demo tailored to your workflow</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Request a Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            See how Stratos can transform your consulting firm. Fill out the form below and we'll
            schedule a personalized demonstration.
          </p>
        </div>

        {/* Form Section */}
        <div className="rounded-2xl border-2 border-[#AC9776]/20 bg-white p-8 shadow-sm md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-[#AC9776]">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Smith"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                aria-invalid={!!errors.fullName}
                className="focus-visible:ring-[#AC9776]/30"
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName}</p>
              )}
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Work Email <span className="text-[#AC9776]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.smith@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                aria-invalid={!!errors.email}
                className="focus-visible:ring-[#AC9776]/30"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company">
                Company Name <span className="text-[#AC9776]">*</span>
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Acme Consulting"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                aria-invalid={!!errors.company}
                className="focus-visible:ring-[#AC9776]/30"
              />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company}</p>
              )}
            </div>

            {/* Company Size */}
            <div className="space-y-2">
              <Label htmlFor="companySize">
                Company Size <span className="text-[#AC9776]">*</span>
              </Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => handleInputChange("companySize", value)}
              >
                <SelectTrigger
                  id="companySize"
                  className={`w-full focus-visible:ring-[#AC9776]/30 ${
                    errors.companySize ? "border-destructive" : ""
                  }`}
                  aria-invalid={!!errors.companySize}
                >
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501-1000">501-1,000 employees</SelectItem>
                  <SelectItem value="1001+">1,001+ employees</SelectItem>
                </SelectContent>
              </Select>
              {errors.companySize && (
                <p className="text-sm text-destructive">{errors.companySize}</p>
              )}
            </div>

            {/* Phone Number (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-muted-foreground">(Optional)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="focus-visible:ring-[#AC9776]/30"
              />
            </div>

            {/* Message / Use Case */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Tell us about your use case <span className="text-[#AC9776]">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="What challenges are you looking to solve? How many team members would use Stratos?"
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                aria-invalid={!!errors.message}
                className="focus-visible:ring-[#AC9776]/30 resize-none"
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-[#AC9776] text-white hover:bg-[#9A8565] shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Submitting...
                  </>
                ) : (
                  "Request Demo"
                )}
              </Button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </form>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 text-center">
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <p className="text-2xl font-bold text-[#AC9776]">24h</p>
            <p className="mt-1 text-sm text-muted-foreground">Response time</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <p className="text-2xl font-bold text-[#AC9776]">30min</p>
            <p className="mt-1 text-sm text-muted-foreground">Demo duration</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <p className="text-2xl font-bold text-[#AC9776]">No strings</p>
            <p className="mt-1 text-sm text-muted-foreground">No commitment</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

