"use client"

import { useState, useEffect } from "react"
import { Menu, X, Leaf, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Button3d } from "@/components/ui/button-3d"
import { motion, AnimatePresence } from "framer-motion"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className={`h-6 w-6 ${isScrolled ? "text-green-500" : "text-white"} mr-2`} />
            <span className={`font-bold text-xl ${isScrolled ? "text-green-500" : "text-white"}`}>Sustentabilidad</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="relative group">
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  isScrolled ? "text-gray-200 hover:text-green-400" : "text-white hover:text-green-400"
                } transition-colors duration-300`}
                onClick={() => toggleDropdown("questions")}
              >
                Las 9 Preguntas <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === "questions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 backdrop-blur-sm ring-1 ring-green-900 z-50"
                  >
                    <div className="py-1">
                      {["que-es", "por-que", "para-que", "quien", "cuando", "donde", "como", "con-que", "cuanto"].map(
                        (id, index) => (
                          <button
                            key={id}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-green-900/50 hover:text-green-400 transition-colors duration-200"
                            onClick={() => scrollToSection(id)}
                          >
                            {index + 1}. ¿{id.replace("-", " ").charAt(0).toUpperCase() + id.replace("-", " ").slice(1)}
                            ?
                          </button>
                        ),
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? "text-gray-200 hover:text-green-400" : "text-white hover:text-green-400"
              } transition-colors duration-300`}
              onClick={() => scrollToSection("tools")}
            >
              Herramientas
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div
              className={`relative flex items-center ${isScrolled ? "text-gray-300" : "text-white"} transition-colors`}
            >
              <Search className="absolute left-3 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar..."
                className={`pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none ${
                  isScrolled
                    ? "bg-gray-900 text-gray-200 focus:ring-2 focus:ring-green-500"
                    : "bg-black/30 text-white placeholder:text-white/70 backdrop-blur-sm focus:bg-black/50"
                } transition-all duration-300`}
              />
            </div>

            <Button3d variant="default" size="sm">
              Contacto
            </Button3d>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={isScrolled ? "text-white hover:bg-green-900/20" : "text-white hover:bg-black/30"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/90 backdrop-blur-sm shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="px-3 py-2 text-base font-medium text-green-400">Las 9 Preguntas</div>
              {["que-es", "por-que", "para-que", "quien", "cuando", "donde", "como", "con-que", "cuanto"].map(
                (id, index) => (
                  <button
                    key={id}
                    className="text-gray-300 hover:bg-green-900/30 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left pl-6 transition-colors duration-200"
                    onClick={() => scrollToSection(id)}
                  >
                    {index + 1}. ¿{id.replace("-", " ").charAt(0).toUpperCase() + id.replace("-", " ").slice(1)}?
                  </button>
                ),
              )}

              <button
                className="text-gray-300 hover:bg-green-900/30 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                onClick={() => scrollToSection("tools")}
              >
                Herramientas
              </button>

              <div className="pt-4 pb-3 border-t border-green-900/50">
                <div className="flex items-center px-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              <div className="px-3 py-2">
                <Button3d className="w-full">Contacto</Button3d>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
