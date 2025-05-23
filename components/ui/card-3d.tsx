"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const Card3d = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }>(
  ({ className, interactive = true, ...props }, ref) => {
    const [rotateX, setRotateX] = React.useState(0)
    const [rotateY, setRotateY] = React.useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive) return
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20
      setRotateX(rotateX)
      setRotateY(rotateY)
    }

    const handleMouseLeave = () => {
      if (!interactive) return
      setRotateX(0)
      setRotateY(0)
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-green-900/50 shadow-xl",
          interactive && "transition-transform duration-200 ease-out",
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        {...props}
      />
    )
  },
)
Card3d.displayName = "Card3d"

const Card3dHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("bg-gradient-to-r from-green-900 to-green-800 p-6", className)} {...props} />
  ),
)
Card3dHeader.displayName = "Card3dHeader"

const Card3dTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-bold text-white", className)} {...props} />
  ),
)
Card3dTitle.displayName = "Card3dTitle"

const Card3dDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-gray-300 mt-1", className)} {...props} />,
)
Card3dDescription.displayName = "Card3dDescription"

const Card3dContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6", className)} {...props} />,
)
Card3dContent.displayName = "Card3dContent"

const Card3dFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-t border-green-900/30 p-6", className)} {...props} />
  ),
)
Card3dFooter.displayName = "Card3dFooter"

export { Card3d, Card3dHeader, Card3dTitle, Card3dDescription, Card3dContent, Card3dFooter }
