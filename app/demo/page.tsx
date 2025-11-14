"use client"

import { Navbar } from "@/components/navbar"
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
import { AsyncButton } from "@/components/ui/async-button"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    companySize: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showErrors, setShowErrors] = useState(false)

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

  const handleSubmit = async (): Promise<boolean> => {
    // Validate but don't show errors immediately
    const isValid = validateForm()
    
    if (!isValid) {
      // Wait until after button shows failed state to display errors
      setTimeout(() => setShowErrors(true), 1000)
      return false
    }

    setShowErrors(false)
    setErrors((prev) => ({ ...prev, submit: "" }))

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        
        // Check for specific error types and show user-friendly messages
        if (errorData.details?.includes('Invalid `reply_to`') || 
            errorData.details?.includes('email address needs to follow')) {
          throw new Error('Invalid email format. Please check your email address.')
        }
        
        // Generic user-friendly error
        throw new Error('Unable to submit your request. Please check your information and try again.')
      }

      setShowErrors(false)
      return true
    } catch (error) {
      console.error('Error submitting demo request:', error)
      setErrors((prev) => ({
        ...prev,
        submit: error instanceof Error ? error.message : 'Failed to submit demo request. Please try again.',
      }))
      // Show errors after button animation
      setTimeout(() => setShowErrors(true), 0)
      return false
    }
  }

  const handleSuccess = () => {
    // Clear all form fields
    setFormData({
      fullName: "",
      email: "",
      company: "",
      companySize: "",
      phone: "",
      message: "",
    })
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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(148, 163, 184, 0.5) 50px, rgba(148, 163, 184, 0.5) 51px)'
        }}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-slate-700/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-600/10 rounded-full blur-[100px]"></div>
      </div>
      
      <Navbar />
      <main className="relative z-10 min-h-[calc(100vh-4rem)] flex items-start py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8 lg:pt-24">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Experience Lunon
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  See how AI-powered knowledge management transforms consulting delivery
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-white mb-1">24h</p>
                  <p className="text-sm text-slate-400">Response Time</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-white mb-1">30min</p>
                  <p className="text-sm text-slate-400">Demo Length</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">Live platform walkthrough with real-time AI generation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">Custom use cases tailored to your firm</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">No commitment required</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-2xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Begin Your Journey</h2>
                <p className="text-slate-600">See how Lunon strengthens delivery for your firm</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-900 font-medium">
                    Full Name <span className="text-slate-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    aria-invalid={!!errors.fullName}
                    className="text-slate-900 bg-white border-slate-300 focus-visible:ring-slate-900/20 focus-visible:border-slate-900 placeholder:text-slate-400"
                  />
                  {showErrors && errors.fullName && (
                    <p className="text-sm text-red-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Work Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-900 font-medium">
                    Work Email <span className="text-slate-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.smith@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    className="text-slate-900 bg-white border-slate-300 focus-visible:ring-slate-900/20 focus-visible:border-slate-900 placeholder:text-slate-400"
                  />
                  {showErrors && errors.email && (
                    <p className="text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-900 font-medium">
                    Company Name <span className="text-slate-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Acme Consulting"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    aria-invalid={!!errors.company}
                    className="text-slate-900 bg-white border-slate-300 focus-visible:ring-slate-900/20 focus-visible:border-slate-900 placeholder:text-slate-400"
                  />
                  {showErrors && errors.company && (
                    <p className="text-sm text-red-400">{errors.company}</p>
                  )}
                </div>

                {/* Company Size */}
                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-slate-900 font-medium">
                    Company Size <span className="text-slate-500">*</span>
                  </Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) => handleInputChange("companySize", value)}
                  >
                    <SelectTrigger
                      id="companySize"
                      className={`w-full text-slate-900 bg-white border-slate-300 focus-visible:ring-slate-900/20 focus-visible:border-slate-900 ${
                        errors.companySize ? "border-red-400" : ""
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
                  {showErrors && errors.companySize && (
                    <p className="text-sm text-red-400">{errors.companySize}</p>
                  )}
                </div>

                {/* Message / Use Case */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-900 font-medium">
                    Tell us about your use case <span className="text-slate-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="What challenges are you looking to solve?"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    className="text-slate-900 bg-white border-slate-300 focus-visible:ring-slate-900/20 focus-visible:border-slate-900 resize-none placeholder:text-slate-400"
                  />
                  {showErrors && errors.message && (
                    <p className="text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  {showErrors && errors.submit && (
                    <div className="mb-4 rounded-lg border border-red-500/50 bg-red-500/10 p-3">
                      <p className="text-sm text-red-400">{errors.submit}</p>
                    </div>
                  )}
                  <AsyncButton
                    onClick={handleSubmit}
                    onSuccess={handleSuccess}
                    size="lg"
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl border-0 font-semibold"
                  >
                    Request Demo
                  </AsyncButton>
                  <p className="mt-3 text-center text-xs text-slate-500">
                    Your information is secure
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

