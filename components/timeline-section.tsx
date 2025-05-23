"use client"

import { motion } from "framer-motion"
import { Calendar, Globe, Leaf, Target, Zap } from "lucide-react"
import { Card3d, Card3dContent, Card3dHeader, Card3dTitle } from "@/components/ui/card-3d"

const timelineEvents = [
  {
    year: "1987",
    title: "Informe Brundtland",
    description:
      "Las Naciones Unidas publican 'Nuestro Futuro Común', definiendo por primera vez el desarrollo sostenible como aquel que satisface las necesidades del presente sin comprometer las de las generaciones futuras.",
    icon: Globe,
    color: "bg-blue-900/50",
    iconColor: "text-blue-400",
  },
  {
    year: "1992",
    title: "Cumbre de Río",
    description:
      "La Conferencia de las Naciones Unidas sobre Medio Ambiente y Desarrollo establece los principios fundamentales para el desarrollo sostenible global.",
    icon: Leaf,
    color: "bg-green-900/50",
    iconColor: "text-green-400",
  },
  {
    year: "2015",
    title: "Acuerdo de París",
    description:
      "196 países se comprometen a limitar el calentamiento global a 1.5°C y reducir las emisiones de gases de efecto invernadero.",
    icon: Target,
    color: "bg-red-900/50",
    iconColor: "text-red-400",
  },
  {
    year: "2015",
    title: "Agenda 2030 - ODS",
    description:
      "Las Naciones Unidas aprueban los 17 Objetivos de Desarrollo Sostenible, estableciendo metas específicas para erradicar la pobreza, proteger el planeta y asegurar la prosperidad.",
    icon: Target,
    color: "bg-purple-900/50",
    iconColor: "text-purple-400",
  },
  {
    year: "2020",
    title: "Green Deal Europeo",
    description:
      "La Unión Europea presenta su estrategia para lograr la neutralidad climática para 2050, promoviendo una transición ecológica justa.",
    icon: Zap,
    color: "bg-yellow-900/50",
    iconColor: "text-yellow-400",
  },
  {
    year: "2030",
    title: "Meta ODS",
    description:
      "Fecha límite para cumplir con los Objetivos de Desarrollo Sostenible y reducir las emisiones de CO₂ en un 45% respecto a 2010.",
    icon: Calendar,
    color: "bg-orange-900/50",
    iconColor: "text-orange-400",
  },
  {
    year: "2050",
    title: "Carbono Neutralidad",
    description:
      "Meta global para alcanzar la neutralidad de carbono, equilibrando las emisiones de gases contaminantes con su eliminación.",
    icon: Globe,
    color: "bg-teal-900/50",
    iconColor: "text-teal-400",
  },
]

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#0a0f0d]">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-900 -translate-y-1/2"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-[#121212] text-green-500 mx-auto">
            Cronología de la Sustentabilidad
            <span className="block text-sm font-normal text-green-400 mt-2">
              Hitos históricos que marcaron el camino hacia un futuro sostenible
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 via-green-500 to-green-400"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card3d className="relative">
                    <Card3dHeader className={event.color}>
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`w-12 h-12 rounded-full bg-black/30 flex items-center justify-center`}>
                          <event.icon className={`h-6 w-6 ${event.iconColor}`} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{event.year}</div>
                          <Card3dTitle className="text-lg">{event.title}</Card3dTitle>
                        </div>
                      </div>
                    </Card3dHeader>
                    <Card3dContent>
                      <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    </Card3dContent>
                  </Card3d>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 w-6 h-6 bg-green-500 rounded-full border-4 border-[#121212] shadow-lg">
                  <div className="absolute inset-1 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
