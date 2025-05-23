"use client"

import { useEffect, useRef } from "react"

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      type: "seed" | "leaf" | "drop"
      rotation: number
      rotationSpeed: number
    }[] = []

    // Create organic particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        type: ["seed", "leaf", "drop"][Math.floor(Math.random() * 3)] as "seed" | "leaf" | "drop",
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      })
    }

    let animationFrameId: number

    function drawParticle(particle: (typeof particles)[0]) {
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      ctx.globalAlpha = particle.opacity

      if (particle.type === "seed") {
        // Draw seed
        ctx.fillStyle = "#10b981"
        ctx.beginPath()
        ctx.ellipse(0, 0, particle.size, particle.size * 0.7, 0, 0, Math.PI * 2)
        ctx.fill()
      } else if (particle.type === "leaf") {
        // Draw leaf
        ctx.fillStyle = "#059669"
        ctx.beginPath()
        ctx.ellipse(0, 0, particle.size * 1.5, particle.size, 0, 0, Math.PI * 2)
        ctx.fill()
        // Leaf vein
        ctx.strokeStyle = "#047857"
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(-particle.size * 1.5, 0)
        ctx.lineTo(particle.size * 1.5, 0)
        ctx.stroke()
      } else {
        // Draw water drop
        ctx.fillStyle = "#0891b2"
        ctx.beginPath()
        ctx.arc(0, particle.size * 0.3, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(0, -particle.size * 0.7)
        ctx.quadraticCurveTo(-particle.size * 0.5, 0, 0, particle.size * 0.3)
        ctx.quadraticCurveTo(particle.size * 0.5, 0, 0, -particle.size * 0.7)
        ctx.fill()
      }

      ctx.restore()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Gentle floating motion
        particle.y += Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.1

        // Wrap around edges
        if (particle.x < -20) particle.x = canvas.width + 20
        if (particle.x > canvas.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = canvas.height + 20
        if (particle.y > canvas.height + 20) particle.y = -20

        drawParticle(particle)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
