"use client"

import { Book, FileText, Video, LinkIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const resources = [
  {
    title: "Informe sobre los límites planetarios",
    description: "Análisis actualizado del marco de los nueve límites planetarios por el Stockholm Resilience Centre",
    type: "report",
    icon: FileText,
    link: "#",
  },
  {
    title: "Guía práctica de economía circular",
    description: "Manual para implementar principios de economía circular en organizaciones y comunidades",
    type: "guide",
    icon: Book,
    link: "#",
  },
  {
    title: "Objetivos de Desarrollo Sostenible: Explicados",
    description: "Serie de videos que explican cada uno de los 17 ODS y cómo contribuir a ellos",
    type: "video",
    icon: Video,
    link: "#",
  },
  {
    title: "Plataforma de datos ambientales globales",
    description: "Repositorio de datos abiertos sobre indicadores ambientales, sociales y económicos",
    type: "tool",
    icon: LinkIcon,
    link: "#",
  },
]

export default function ResourcesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white" id="resources">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-200 -translate-y-1/2"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-green-50 text-green-800 mx-auto">
            Recursos Destacados
            <span className="block text-sm font-normal text-green-600 mt-2">
              Materiales seleccionados para profundizar tu conocimiento
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div
                      className={`p-2 rounded-lg ${
                        resource.type === "report"
                          ? "bg-blue-100 text-blue-600"
                          : resource.type === "guide"
                            ? "bg-amber-100 text-amber-600"
                            : resource.type === "video"
                              ? "bg-red-100 text-red-600"
                              : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      <resource.icon className="h-5 w-5" />
                    </div>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        resource.type === "report"
                          ? "bg-blue-100 text-blue-600"
                          : resource.type === "guide"
                            ? "bg-amber-100 text-amber-600"
                            : resource.type === "video"
                              ? "bg-red-100 text-red-600"
                              : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {resource.type === "report"
                        ? "Informe"
                        : resource.type === "guide"
                          ? "Guía"
                          : resource.type === "video"
                            ? "Video"
                            : "Herramienta"}
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2 group-hover:text-green-600 transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-300"
                    asChild
                  >
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      Acceder al recurso
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white"
            size="lg"
          >
            Ver todos los recursos
          </Button>
        </div>
      </div>
    </section>
  )
}
