"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "La sustentabilidad no es solo un concepto teórico, sino una necesidad práctica. Después de implementar prácticas sostenibles en nuestra comunidad, hemos visto mejoras tangibles en la calidad de vida y en la resiliencia frente a desafíos ambientales.",
    author: "Dra. Elena Martínez",
    role: "Directora de Planificación Urbana Sostenible",
    image: "/professional-woman-short-hair.png",
  },
  {
    quote:
      "Como empresario, descubrí que la sustentabilidad no solo es buena para el planeta, sino también para los negocios. Nuestras iniciativas de economía circular han reducido costos operativos en un 23% y han abierto nuevos mercados para nuestros productos.",
    author: "Carlos Rodríguez",
    role: "CEO de EcoInnovación",
    image: "/middle-aged-businessman.png",
  },
  {
    quote:
      "La educación en sustentabilidad ha transformado la manera en que nuestros estudiantes ven el mundo. Han pasado de ser consumidores pasivos a agentes de cambio activos en sus comunidades, desarrollando soluciones creativas para problemas locales.",
    author: "Prof. Lucía Fernández",
    role: "Coordinadora de Educación Ambiental",
    image: "/female-professor-glasses.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-200 -translate-y-1/2"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-white text-green-800 mx-auto">
            Voces de la Sustentabilidad
            <span className="block text-sm font-normal text-green-600 mt-2">
              Experiencias y perspectivas de expertos en el campo
            </span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-green-200 opacity-50">
            <Quote size={80} />
          </div>

          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 md:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-100">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 text-lg italic mb-6">{testimonials[currentIndex].quote}</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].author}</h4>
                    <p className="text-green-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
