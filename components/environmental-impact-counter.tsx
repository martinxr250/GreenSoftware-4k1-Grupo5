"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, TreePine, Droplets, Zap, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { Card3d, Card3dContent, Card3dHeader, Card3dTitle } from "@/components/ui/card-3d"

export default function EnvironmentalImpactCounter() {
  const [timeOnPage, setTimeOnPage] = useState(0) // en segundos
  const [energyConsumption, setEnergyConsumption] = useState(0) // en kWh
  const [co2Emissions, setCo2Emissions] = useState(0) // en kg
  const [treesNeeded, setTreesNeeded] = useState(0)
  const [waterUsed, setWaterUsed] = useState(0) // en litros
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const startTime = Date.now()

    const interval = setInterval(() => {
      const currentTime = Date.now()
      const timeElapsed = (currentTime - startTime) / 1000 // segundos
      setTimeOnPage(timeElapsed)

      // Cálculos de impacto ambiental
      // Computadora promedio: 150W = 0.15 kW
      const powerConsumption = 0.15 // kW
      const energyUsed = (powerConsumption * timeElapsed) / 3600 // kWh (tiempo en horas)
      setEnergyConsumption(energyUsed)

      // Emisiones de CO2: promedio global 0.5 kg CO2 por kWh
      const emissions = energyUsed * 0.5
      setCo2Emissions(emissions)

      // Árboles necesarios: 1 árbol absorbe ~22 kg CO2 por año
      // Para compensar inmediatamente, usamos la capacidad anual
      const trees = emissions / 22
      setTreesNeeded(trees)

      // Agua utilizada: ~2.5 litros por kWh para generar electricidad
      const water = energyUsed * 2.5
      setWaterUsed(water)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const formatNumber = (num: number, decimals = 4) => {
    if (num < 0.001) return "< 0.001"
    return num.toFixed(decimals)
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm">
      <AnimatePresence mode="wait">
        {isMinimized ? (
          // Versión minimizada
          <motion.div
            key="minimized"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card3d
              className="bg-black/90 backdrop-blur-sm border-orange-900/50 shadow-xl cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsMinimized(false)}
            >
              <Card3dContent className="p-3">
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-orange-400" />
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Impacto</div>
                    <div className="text-sm font-bold text-orange-400">{formatTime(timeOnPage)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">CO₂</div>
                    <div className="text-sm font-bold text-gray-400">{formatNumber(co2Emissions * 1000)} g</div>
                  </div>
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                </div>
              </Card3dContent>
            </Card3d>
          </motion.div>
        ) : (
          // Versión expandida (contenido original)
          <motion.div
            key="expanded"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card3d className="bg-black/90 backdrop-blur-sm border-orange-900/50 shadow-xl">
              <Card3dHeader className="bg-gradient-to-r from-orange-900/80 to-red-900/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-orange-400" />
                    <Card3dTitle className="text-lg">Impacto de Navegación</Card3dTitle>
                  </div>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1 rounded hover:bg-black/30 transition-colors"
                    aria-label="Minimizar"
                  >
                    <ChevronDown className="h-4 w-4 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </Card3dHeader>
              <Card3dContent className="space-y-4">
                {/* Todo el contenido original se mantiene igual */}
                {/* Tiempo en página */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">Tiempo en página:</span>
                  </div>
                  <span className="text-sm font-bold text-white">{formatTime(timeOnPage)}</span>
                </div>

                {/* Consumo energético */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Energía consumida:</span>
                  </div>
                  <span className="text-sm font-bold text-yellow-400">{formatNumber(energyConsumption)} kWh</span>
                </div>

                {/* Emisiones CO2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                    <span className="text-sm text-gray-300">CO₂ emitido:</span>
                  </div>
                  <span className="text-sm font-bold text-gray-400">{formatNumber(co2Emissions * 1000)} g</span>
                </div>

                {/* Árboles necesarios */}
                <motion.div
                  className="bg-green-900/30 rounded-lg p-3 border border-green-800/50"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TreePine className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-300">Árboles para compensar:</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-400">{formatNumber(treesNeeded, 6)}</span>
                    <div className="text-xs text-green-500 mt-1">árboles por año</div>
                  </div>
                </motion.div>

                {/* Agua utilizada */}
                <motion.div
                  className="bg-blue-900/30 rounded-lg p-3 border border-blue-800/50"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-300">Agua utilizada:</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-400">{formatNumber(waterUsed)} L</span>
                    <div className="text-xs text-blue-500 mt-1">para generar electricidad</div>
                  </div>
                </motion.div>

                {/* Mensaje educativo */}
                <div className="text-xs text-gray-500 text-center italic border-t border-gray-800 pt-3">
                  Basado en computadora promedio (150W) y mix energético global
                </div>
              </Card3dContent>
            </Card3d>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
