"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const button3dVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-1 active:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-green-600 to-green-700 text-white shadow-[0_6px_0_rgb(16,64,43)] hover:from-green-500 hover:to-green-600",
        destructive:
          "bg-gradient-to-b from-red-600 to-red-700 text-white shadow-[0_6px_0_rgb(127,29,29)] hover:from-red-500 hover:to-red-600",
        outline:
          "border-2 border-green-600 bg-transparent text-green-400 shadow-[0_6px_0_rgb(16,64,43)] hover:bg-green-900/20",
        secondary:
          "bg-gradient-to-b from-gray-700 to-gray-800 text-white shadow-[0_6px_0_rgb(23,23,23)] hover:from-gray-600 hover:to-gray-700",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-gradient-to-b from-green-600 to-green-700 text-white shadow-[0_6px_0_rgb(16,64,43),0_0_15px_rgba(16,185,129,0.5)] hover:from-green-500 hover:to-green-600 hover:shadow-[0_6px_0_rgb(16,64,43),0_0_20px_rgba(16,185,129,0.7)]",
      },
      size: {
        default: "h-12 px-6 py-4",
        sm: "h-10 rounded-md px-4 py-3",
        lg: "h-14 rounded-md px-8 py-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface Button3dProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button3dVariants> {
  asChild?: boolean
}

const Button3d = React.forwardRef<HTMLButtonElement, Button3dProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return <Comp className={cn(button3dVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button3d.displayName = "Button3d"

export { Button3d, button3dVariants }
