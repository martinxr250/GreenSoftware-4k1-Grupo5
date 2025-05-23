"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Droplet, Thermometer, Users } from "lucide-react"
import { Card3d } from "@/components/ui/card-3d"

const stats = [
  {
    icon: Globe,
    value: 1.7,
    unit: "",
    label: "planetas necesarios al ritmo actual de consumo",
    color: "text-green-400",
    bgColor: "bg-green-900/50",
    source: "Global Footprint Network, 2023",
  },
  {
    icon: Droplet,
    value: 33,
    unit: "%",
    label: "de la tierra está degradada moderada o altamente",
    color: "text-green-400",
    bgColor: "bg-green-900/50",
    source: "IPBES, 2022",
  },
  {
    icon: Thermometer,
    value: 1.1,
    unit: "°C",
    label: "de calentamiento global desde la era preindustrial",
    color: "text-green-400",
    bgColor: "bg-green-900/50",
    source: "IPCC, 2023",
  },
  {
    icon: Users,
    value: 9.7,
    unit: "B",
    label: "población mundial proyectada para 2050",
    color: "text-green-400",
    bgColor: "bg-green-900/50",
    source: "ONU, 2022",
  },
]

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounters((prev) => {
            const newCounters = [...prev]
            if (newCounters[index] < stat.value) {
              newCounters[index] = Math.min(newCounters[index] + stat.value / 50, stat.value)
            }
            return newCounters
          })
        }, 30)
      })

      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    }
  }, [isInView])

  return (
    <div ref={ref} className="py-8" id="tools">
      <div className="relative mb-16">
        <div className="absolute top-1/2 left-0 w-full h-px bg-green-900 -translate-y-1/2"></div>
        <h3 className="relative inline-block text-2xl md:text-3xl font-bold text-center px-6 bg-[#121212] text-green-500 mx-auto">
          Datos Clave
          <span className="block text-sm font-normal text-green-400 mt-1">
            Cifras que definen nuestros desafíos globales
          </span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card3d className="p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-900/20 to-transparent rounded-bl-full opacity-50"></div>
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold mb-2 text-white">
                {counters[index].toFixed(stat.value % 1 === 0 ? 0 : 1)}
                <span className="text-green-400 ml-1 text-2xl">{stat.unit}</span>
              </div>
              <p className="text-gray-300 mb-3">{stat.label}</p>
              <div className="text-xs text-gray-500 italic">Fuente: {stat.source}</div>
            </Card3d>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
