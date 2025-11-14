"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ButtonState = "idle" | "loading" | "success" | "error"

interface AsyncButtonProps {
  onClick: () => Promise<boolean>
  onSuccess?: () => void
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  disabled?: boolean
}

export function AsyncButton({
  onClick,
  onSuccess,
  children,
  className = "",
  size = "default",
  disabled = false,
}: AsyncButtonProps) {
  const [state, setState] = useState<ButtonState>("idle")

  const handleClick = async () => {
    if (state !== "idle") return

    setState("loading")

    try {
      // Start timer and async operation simultaneously
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1000))
      const result = await onClick()
      
      // Wait for minimum loading time to complete
      await minLoadingTime
      
      if (result) {
        setState("success")
        onSuccess?.()
        setTimeout(() => setState("idle"), 2000)
      } else {
        setState("error")
        setTimeout(() => setState("idle"), 2000)
      }
    } catch (error) {
      // Wait for minimum loading time even on error
      await new Promise(resolve => setTimeout(resolve, 1000))
      setState("error")
      setTimeout(() => setState("idle"), 2000)
    }
  }

  const getButtonStyles = () => {
    // Extract all classes except background colors
    const nonBgClasses = className.split(' ').filter(cls => !cls.startsWith('bg-') && !cls.startsWith('hover:bg-')).join(' ')
    
    switch (state) {
      case "loading":
        return `${nonBgClasses} bg-slate-600 cursor-not-allowed`
      case "success":
        return `${nonBgClasses} bg-green-600 hover:bg-green-600`
      case "error":
        return `${nonBgClasses} bg-red-600 hover:bg-red-600`
      default:
        return className
    }
  }

  const getContent = () => {
    switch (state) {
      case "loading":
        return (
          <span className="flex items-center justify-center">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          </span>
        )
      case "success":
        return (
          <span className="flex items-center justify-center">
            <Check className="mr-2 h-4 w-4" />
            <span>Success!</span>
          </span>
        )
      case "error":
        return (
          <span className="flex items-center justify-center">
            <X className="mr-2 h-4 w-4" />
            <span>Failed</span>
          </span>
        )
      default:
        return <span className="flex items-center justify-center">{children}</span>
    }
  }

  return (
    <Button
      type="button"
      size={size}
      onClick={handleClick}
      disabled={disabled || state !== "idle"}
      className={`${getButtonStyles()} transition-all duration-300 flex items-center justify-center`}
    >
      {getContent()}
    </Button>
  )
}

