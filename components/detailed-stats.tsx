"use client"

import { motion } from "framer-motion"
import { Droplets, Zap, TreePine, Recycle, Factory, TrendingUp } from "lucide-react"
import { Card3d, Card3dContent, Card3dHeader, Card3dTitle } from "@/components/ui/card-3d"

const detailedStats = [
  {
    category: "Consumo de Agua",
    icon: Droplets,
    color: "bg-blue-900/50",
    iconColor: "text-blue-400",
    stats: [
      { label: "Consumo doméstico promedio", value: "150", unit: "L/día por persona" },
      { label: "Extracción anual global", value: "4,000", unit: "km³/año" },
      { label: "Meta 2030", value: "≤120", unit: "L/día (uso eficiente)" },
    ],
  },
  {
    category: "Emisiones de CO₂",
    icon: Factory,
    color: "bg-red-900/50",
    iconColor: "text-red-400",
    stats: [
      { label: "Total global (2023)", value: "36.8", unit: "Gt CO₂/año" },
      { label: "Emisión per cápita mundial", value: "4.6", unit: "t CO₂/persona·año" },
      { label: "Meta 2030", value: "-45%", unit: "respecto a 2010" },
    ],
  },
  {
    category: "Deforestación",
    icon: TreePine,
    color: "bg-green-900/50",
    iconColor: "text-green-400",
    stats: [
      { label: "Pérdida anual de bosques", value: "10", unit: "millones de hectáreas" },
      { label: "Equivalente a", value: "1", unit: "Honduras por año" },
      { label: "Bosques restantes", value: "31%", unit: "de la superficie terrestre" },
    ],
  },
  {
    category: "Residuos y Reciclaje",
    icon: Recycle,
    color: "bg-purple-900/50",
    iconColor: "text-purple-400",
    stats: [
      { label: "Generación per cápita", value: "0.74", unit: "kg/día por persona" },
      { label: "Reciclaje actual", value: "17%", unit: "de residuos totales" },
      { label: "Meta economía circular", value: "≥50%", unit: "reciclaje para 2030" },
    ],
  },
  {
    category: "Energías Renovables",
    icon: Zap,
    color: "bg-yellow-900/50",
    iconColor: "text-yellow-400",
    stats: [
      { label: "Participación actual", value: "29%", unit: "de la matriz eléctrica" },
      { label: "Crecimiento anual", value: "12%", unit: "en capacidad instalada" },
      { label: "Meta 2030", value: "≥50%", unit: "transición energética" },
    ],
  },
  {
    category: "Producción de Plásticos",
    icon: TrendingUp,
    color: "bg-gray-900/50",
    iconColor: "text-gray-400",
    stats: [
      { label: "Producción anual", value: "400", unit: "millones de toneladas" },
      { label: "Reciclaje efectivo", value: "9%", unit: "del total producido" },
      { label: "En océanos", value: "8", unit: "millones t/año" },
    ],
  },
]

export default function DetailedStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0f0d] to-[#121212]">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-900 -translate-y-1/2"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-[#0a0f0d] text-green-500 mx-auto">
            Datos Detallados de Sustentabilidad
            <span className="block text-sm font-normal text-green-400 mt-2">
              Cifras precisas para entender la magnitud del desafío global
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedStats.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3d className="h-full">
                <Card3dHeader className={category.color}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
                      <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <Card3dTitle className="text-lg">{category.category}</Card3dTitle>
                  </div>
                </Card3dHeader>
                <Card3dContent className="space-y-4">
                  {category.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="border-l-2 border-green-900/50 pl-4">
                      <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        <span className="text-sm text-green-400">{stat.unit}</span>
                      </div>
                    </div>
                  ))}
                </Card3dContent>
              </Card3d>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <Card3d>
              <Card3dContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">¿Por qué son importantes estos números?</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Medir con precisión "cuánto" consumimos, emitimos o desperdiciamos es esencial para comprender la
                  verdadera magnitud del desafío de la sustentabilidad. Sin datos claros, cualquier meta se vuelve
                  arbitraria; en cambio, al contar con cifras concretas podemos fijar objetivos ambiciosos, monitorear
                  progresos y diseñar estrategias efectivas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">2030</div>
                    <div className="text-sm text-gray-400">Fecha límite ODS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">2050</div>
                    <div className="text-sm text-gray-400">Carbono neutralidad</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">1.5°C</div>
                    <div className="text-sm text-gray-400">Límite calentamiento</div>
                  </div>
                </div>
              </Card3dContent>
            </Card3d>
          </div>
        </div>
      </div>
    </section>
  )
}
