import { Leaf, MapPin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#0a0f0d] to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <h3 className="font-bold text-2xl">Sustentabilidad</h3>
                <p className="text-green-400 text-sm">Construyendo un futuro equilibrado</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Proyecto educativo desarrollado para la materia Green Software por los alumnos del Grupo 5 del curso 4K1.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/martinxr250/GreenSoftware-4k1-Grupo5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-900 hover:bg-green-800 p-2 rounded-full transition-colors duration-300 hover:shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                aria-label="GitHub del Proyecto"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 border-b border-green-900 pb-2">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#questions" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Las 9 Preguntas
                </a>
              </li>
              <li>
                <a href="#tools" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Herramientas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 border-b border-green-900 pb-2">Acerca del Proyecto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Córdoba UTN - FRC</span>
              </div>
              <div className="p-4 bg-green-900/30 rounded-lg border border-green-900/50">
                <h4 className="font-medium text-green-400 mb-2">Integrantes del Equipo:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Martin Castro</li>
                  <li>• Maximo Longo</li>
                  <li>• Juan Liendo</li>
                  <li>• Juan Validakis</li>
                  <li>• Valentin Gallego Derunge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-900 pt-8 mt-8">
          <div className="text-center">
            <p className="text-green-500 text-sm">
              © {currentYear} Grupo 5 - Materia Green Software - Curso 4K1 - UTN FRC
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
