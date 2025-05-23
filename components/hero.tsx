"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button3d } from "@/components/ui/button-3d"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 600

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    const colors = ["#10b981", "#059669", "#047857", "#065f46", "#064e3b"]

    // Create particles
    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 5 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let isMouseOver = false

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      isMouseOver = true
    })

    canvas.addEventListener("mouseout", () => {
      isMouseOver = false
    })

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Mouse interaction
        if (isMouseOver && isHovering) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (100 - distance) / 100

            particle.speedX += forceDirectionX * force * 0.2
            particle.speedY += forceDirectionY * force * 0.2
          }
        }

        // Apply friction to slow down particles
        particle.speedX *= 0.98
        particle.speedY *= 0.98

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 600
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovering])

  return (
    <div className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ height: "600px" }} />
      <div className="relative z-10 bg-gradient-to-r from-black/90 to-green-950/80">
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                Sustentabilidad
                <span className="block text-green-400 mt-2">El camino hacia un futuro equilibrado</span>
              </h1>
              <div className="absolute -inset-4 bg-green-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            <motion.p
              className="text-xl mb-8 text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Un recorrido integral por los principios, desafíos y soluciones para construir un mundo donde la
              prosperidad humana y la salud planetaria avancen en armonía.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button3d
                variant="glow"
                onClick={() => document.getElementById("questions")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explorar las 9 preguntas <ArrowRight className="ml-2 h-4 w-4" />
              </Button3d>

              <Button3d
                variant="outline"
                onClick={() => document.getElementById("carbon-calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                Calcular mi huella ecológica
              </Button3d>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0f0d] to-transparent z-10"></div>
    </div>
  )
}
