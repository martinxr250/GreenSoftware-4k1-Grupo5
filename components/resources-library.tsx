"use client"

import { motion } from "framer-motion"
import { FileText, ExternalLink, Download } from "lucide-react"
import { Card3d, Card3dContent, Card3dHeader, Card3dTitle, Card3dDescription } from "@/components/ui/card-3d"
import { Button3d } from "@/components/ui/button-3d"

const featuredResources = [
  {
    title: "Informe Completo del Grupo 5",
    description:
      "Análisis detallado de las 9 preguntas fundamentales de la sustentabilidad desarrollado por nuestro equipo para la materia Green Software.",
    icon: FileText,
    type: "PDF Completo",
    size: "8.5 MB",
    featured: true,
  },
  {
    title: "Mapas Mentales Interactivos",
    description:
      "Visualizaciones dinámicas de los conceptos clave de sustentabilidad con enlaces y referencias cruzadas.",
    icon: ExternalLink,
    type: "Web Interactiva",
    size: "Online",
    featured: true,
  },
]

export default function ResourcesLibrary() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0f0d] to-[#121212]">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-900 -translate-y-1/2"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-[#0a0f0d] text-green-500 mx-auto">
            Biblioteca de Recursos
            <span className="block text-sm font-normal text-green-400 mt-2">
              Materiales complementarios desarrollados por el Grupo 5
            </span>
          </h2>
        </div>

        {/* Featured Resources */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card3d className="border-2 border-green-600/50">
                  <Card3dHeader className="bg-gradient-to-r from-green-900 to-green-800">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-green-600/30 flex items-center justify-center">
                        <resource.icon className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <Card3dTitle className="text-xl">{resource.title}</Card3dTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">
                            {resource.type}
                          </span>
                          <span className="text-xs text-gray-400">{resource.size}</span>
                        </div>
                      </div>
                    </div>
                    <Card3dDescription>{resource.description}</Card3dDescription>
                  </Card3dHeader>
                  <Card3dContent className="pt-6">
                    <div className="flex gap-3">
                      <Button3d variant="glow" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar
                      </Button3d>
                      <Button3d variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Online
                      </Button3d>
                    </div>
                  </Card3dContent>
                </Card3d>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <Card3d>
              <Card3dContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Recursos del Proyecto</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Estos recursos han sido desarrollados específicamente por el Grupo 5 como parte del proyecto de la
                  materia Green Software. Representan nuestro análisis y comprensión profunda de los conceptos de
                  sustentabilidad.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Contenido original</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">9</div>
                    <div className="text-sm text-gray-400">Preguntas analizadas</div>
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
