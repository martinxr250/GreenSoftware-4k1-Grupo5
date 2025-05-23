"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Droplets, Zap, Recycle } from "lucide-react"

export default function SustainabilityTracker() {
  const [progress, setProgress] = useState(0)
  const [currentImpact, setCurrentImpact] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(scrolled / maxScroll, 1)
      setProgress(scrollProgress * 100)
      setCurrentImpact(Math.floor(scrollProgress * 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const impacts = [
    { icon: Leaf, label: "Conocimiento", value: currentImpact, color: "text-green-400" },
    { icon: Droplets, label: "Conciencia", value: Math.max(0, currentImpact - 10), color: "text-blue-400" },
    { icon: Zap, label: "Acción", value: Math.max(0, currentImpact - 20), color: "text-yellow-400" },
    { icon: Recycle, label: "Impacto", value: Math.max(0, currentImpact - 30), color: "text-purple-400" },
  ]

  return (
    <div className="fixed top-20 right-4 z-40 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-green-900/50 shadow-lg">
      <div className="text-center mb-3">
        <h3 className="text-sm font-bold text-green-400">Impacto Sostenible</h3>
        <div className="text-2xl font-bold text-white">{currentImpact}%</div>
      </div>

      <div className="space-y-2">
        {impacts.map((impact, index) => (
          <div key={index} className="flex items-center gap-2">
            <impact.icon className={`h-4 w-4 ${impact.color}`} />
            <div className="flex-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">{impact.label}</span>
                <span className={impact.color}>{impact.value}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 mt-1">
                <motion.div
                  className={`h-1.5 rounded-full bg-gradient-to-r ${
                    impact.color.includes("green")
                      ? "from-green-600 to-green-400"
                      : impact.color.includes("blue")
                        ? "from-blue-600 to-blue-400"
                        : impact.color.includes("yellow")
                          ? "from-yellow-600 to-yellow-400"
                          : "from-purple-600 to-purple-400"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${impact.value}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-center">
        <div className="text-xs text-gray-500">Progreso de exploración</div>
        <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-green-600 to-green-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  )
}
