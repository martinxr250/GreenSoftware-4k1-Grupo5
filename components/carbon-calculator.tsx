"use client"

import { useState } from "react"
import { Calculator, Info } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { Button3d } from "@/components/ui/button-3d"
import { Card3d, Card3dContent, Card3dDescription, Card3dHeader, Card3dTitle } from "@/components/ui/card-3d"

export default function CarbonCalculator() {
  const [deviceHours, setDeviceHours] = useState(4)
  const [transportKm, setTransportKm] = useState(20)
  const [meatConsumption, setMeatConsumption] = useState(3)
  const [energyUsage, setEnergyUsage] = useState(250)
  const [result, setResult] = useState<number | null>(null)
  const [showRecommendations, setShowRecommendations] = useState(false)

  const calculateCarbon = () => {
    // More realistic calculation based on average emissions
    const deviceEmissions = deviceHours * 0.1 // 100g CO2 per hour
    const transportEmissions = transportKm * 0.12 // 120g CO2 per km (average car)
    const meatEmissions = meatConsumption * 0.5 // 500g CO2 per meat meal
    const energyEmissions = energyUsage * 0.0005 // 0.5g CO2 per kWh

    const totalEmissions = deviceEmissions + transportEmissions + meatEmissions + energyEmissions
    setResult(Number.parseFloat(totalEmissions.toFixed(2)))
    setShowRecommendations(true)
  }

  return (
    <Card3d id="carbon-calculator" className="h-full overflow-hidden">
      <Card3dHeader>
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-white" />
          <Card3dTitle>Calculadora de Huella Ecológica</Card3dTitle>
        </div>
        <Card3dDescription>Estima tu impacto ambiental diario basado en tus hábitos</Card3dDescription>
      </Card3dHeader>
      <Card3dContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="flex items-center text-gray-300">
                Uso de dispositivos electrónicos
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-500 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black/90 border-green-900 text-gray-300">
                      <p className="max-w-xs">
                        Incluye computadoras, smartphones, tablets y otros dispositivos conectados.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <span className="text-sm font-medium text-gray-300">{deviceHours} horas</span>
            </div>
            <Slider
              value={[deviceHours]}
              min={0}
              max={24}
              step={0.5}
              onValueChange={(value) => setDeviceHours(value[0])}
              className="py-1"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="flex items-center text-gray-300">
                Transporte en vehículo particular
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-500 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black/90 border-green-900 text-gray-300">
                      <p className="max-w-xs">Distancia recorrida diariamente en automóvil o motocicleta.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <span className="text-sm font-medium text-gray-300">{transportKm} km</span>
            </div>
            <Slider
              value={[transportKm]}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setTransportKm(value[0])}
              className="py-1"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="flex items-center text-gray-300">
                Consumo semanal de carne
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-500 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black/90 border-green-900 text-gray-300">
                      <p className="max-w-xs">Número de comidas con carne por semana.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <span className="text-sm font-medium text-gray-300">{meatConsumption} comidas</span>
            </div>
            <Slider
              value={[meatConsumption]}
              min={0}
              max={21}
              step={1}
              onValueChange={(value) => setMeatConsumption(value[0])}
              className="py-1"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="flex items-center text-gray-300">
                Consumo eléctrico mensual
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-500 ml-1 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black/90 border-green-900 text-gray-300">
                      <p className="max-w-xs">Consumo eléctrico mensual de tu hogar en kWh.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <span className="text-sm font-medium text-gray-300">{energyUsage} kWh</span>
            </div>
            <Slider
              value={[energyUsage]}
              min={50}
              max={500}
              step={10}
              onValueChange={(value) => setEnergyUsage(value[0])}
              className="py-1"
            />
          </div>

          <Button3d className="w-full" variant="glow" onClick={calculateCarbon}>
            Calcular mi huella
          </Button3d>

          {result !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <div className="p-4 bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-lg text-center">
                <p className="text-sm text-green-400 mb-2">Tu huella de carbono estimada es:</p>
                <p className="text-4xl font-bold text-white">{result} kg CO₂e</p>
                <p className="text-xs text-green-400 mt-2">por día</p>
              </div>

              {showRecommendations && (
                <div className="mt-4 p-4 bg-black/30 rounded-lg">
                  <h4 className="font-medium text-green-400 mb-2">Recomendaciones personalizadas:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {deviceHours > 6 && (
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Reduce el tiempo de pantalla y configura tus dispositivos en modo de ahorro de energía.
                      </li>
                    )}
                    {transportKm > 30 && (
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Considera alternativas como transporte público, bicicleta o compartir vehículo.
                      </li>
                    )}
                    {meatConsumption > 7 && (
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Intenta incorporar más días vegetarianos en tu dieta semanal.
                      </li>
                    )}
                    {energyUsage > 300 && (
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Cambia a electrodomésticos eficientes y bombillas LED para reducir tu consumo.
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Card3dContent>
    </Card3d>
  )
}
