"use client"

import { motion } from "framer-motion"
import { Building, Home, GraduationCap, Sprout, Smartphone, MapPin } from "lucide-react"
import { Card3d, Card3dContent, Card3dHeader, Card3dTitle, Card3dDescription } from "@/components/ui/card-3d"
import { Button3d } from "@/components/ui/button-3d"

const caseStudies = [
  {
    title: "Hogar Sustentable",
    description: "Implementación de prácticas sostenibles en el ámbito doméstico",
    icon: Home,
    color: "bg-blue-900/50",
    iconColor: "text-blue-400",
    practices: [
      "Uso de bombillas LED para mejorar la eficiencia energética",
      "Recolección y reutilización de agua de lluvia",
      "Gestión correcta de residuos: reciclaje y compostaje",
      "Consumo de productos locales, reutilizables y biodegradables",
    ],
    impact: "Reducción del 30% en el consumo energético y 40% en generación de residuos",
  },
  {
    title: "Empresa Verde",
    description: "Transformación corporativa hacia la responsabilidad ambiental",
    icon: Building,
    color: "bg-green-900/50",
    iconColor: "text-green-400",
    practices: [
      "Producción limpia y economía circular",
      "Certificaciones ambientales ISO 14001",
      "Programas de responsabilidad social empresarial",
      "Transporte verde y reducción de huella de carbono",
    ],
    impact: "Disminución del 25% en emisiones de CO₂ y mejora en la imagen corporativa",
  },
  {
    title: "Educación Ambiental",
    description: "Formación de conciencia ecológica desde edades tempranas",
    icon: GraduationCap,
    color: "bg-purple-900/50",
    iconColor: "text-purple-400",
    practices: [
      "Proyectos escolares de huertas urbanas",
      "Campañas de reciclaje y cuidado ambiental",
      "Enseñanza del respeto por la naturaleza",
      "Formación de ciudadanos ambientalmente conscientes",
    ],
    impact: "Incremento del 60% en comportamientos pro-ambientales en estudiantes",
  },
  {
    title: "Agricultura Sostenible",
    description: "Producción agroecológica responsable con el medio ambiente",
    icon: Sprout,
    color: "bg-yellow-900/50",
    iconColor: "text-yellow-400",
    practices: [
      "Producción sin agroquímicos sintéticos",
      "Consumo de alimentos locales y de temporada",
      "Técnicas de conservación del suelo",
      "Biodiversidad y rotación de cultivos",
    ],
    impact: "Mejora del 45% en la salud del suelo y reducción de contaminación hídrica",
  },
  {
    title: "Tecnología Verde",
    description: "Innovación tecnológica para la sustentabilidad",
    icon: Smartphone,
    color: "bg-teal-900/50",
    iconColor: "text-teal-400",
    practices: [
      "Desarrollo de dispositivos más eficientes energéticamente",
      "Aplicaciones que promueven hábitos sustentables",
      "Soluciones en energías limpias",
      "Tecnologías para reducción de residuos",
    ],
    impact: "Optimización del 35% en el consumo energético de dispositivos",
  },
  {
    title: "Ciudad Inteligente",
    description: "Transformación urbana hacia la sostenibilidad",
    icon: MapPin,
    color: "bg-red-900/50",
    iconColor: "text-red-400",
    practices: [
      "Transporte público eficiente y bicicletas",
      "Creación y mantenimiento de espacios verdes",
      "Gestión inteligente de residuos",
      "Educación ciudadana para el cuidado del entorno",
    ],
    impact: "Reducción del 20% en emisiones urbanas y mejora en calidad de vida",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#0a0f0d]">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-900 -translate-y-1/2"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-[#121212] text-green-500 mx-auto">
            Casos de Estudio
            <span className="block text-sm font-normal text-green-400 mt-2">
              Ejemplos prácticos de sustentabilidad en diferentes ámbitos
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3d className="h-full">
                <Card3dHeader className={study.color}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
                      <study.icon className={`h-6 w-6 ${study.iconColor}`} />
                    </div>
                    <Card3dTitle className="text-lg">{study.title}</Card3dTitle>
                  </div>
                  <Card3dDescription>{study.description}</Card3dDescription>
                </Card3dHeader>
                <Card3dContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">Prácticas Implementadas:</h4>
                    <ul className="space-y-2">
                      {study.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start text-sm text-gray-300">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-green-900/30 pt-4">
                    <h4 className="font-semibold text-green-400 mb-2">Impacto Medido:</h4>
                    <p className="text-sm text-gray-300 italic">{study.impact}</p>
                  </div>
                </Card3dContent>
              </Card3d>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <Card3d>
              <Card3dContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">La Sustentabilidad en Acción</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Estos casos demuestran que la sustentabilidad no es un concepto abstracto, sino una realidad tangible
                  que se puede implementar en cualquier ámbito. Cada acción, por pequeña que sea, contribuye a un
                  impacto colectivo significativo.
                </p>
                <Button3d variant="glow">Explora Más Casos de Estudio</Button3d>
              </Card3dContent>
            </Card3d>
          </div>
        </div>
      </div>
    </section>
  )
}
