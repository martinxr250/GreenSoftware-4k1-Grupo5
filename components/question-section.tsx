"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Leaf, Sprout } from "lucide-react"

interface QuestionSectionProps {
  id: string
  number: string
  question: string
  title: string
  content: string
}

export default function QuestionSection({ id, number, question, title, content }: QuestionSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      data-aos="fade-up"
      className="mb-8"
    >
      <div
        className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
          isExpanded
            ? "bg-gradient-to-br from-green-900/40 via-green-800/30 to-green-900/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            : "bg-gradient-to-br from-black/60 via-green-950/40 to-black/60 hover:from-green-950/30 hover:via-green-900/20 hover:to-green-950/30"
        } backdrop-blur-sm border border-green-900/50 hover:border-green-700/70`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Leaf className="w-full h-full text-green-400 transform rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
          <Sprout className="w-full h-full text-green-500 transform -rotate-12" />
        </div>

        {/* Header */}
        <div className="cursor-pointer p-6 relative z-10" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300 ${
                  isExpanded
                    ? "bg-gradient-to-br from-green-400 to-green-600 scale-110 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    : "bg-gradient-to-br from-green-600 to-green-800 hover:scale-105"
                }`}
              >
                {number}
              </div>
              <div>
                <div className="text-sm text-green-400 font-medium uppercase tracking-wider mb-1">{question}</div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
            </div>
            <div
              className={`w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center transition-all duration-300 ${
                isExpanded ? "rotate-180 bg-green-700/70" : "hover:bg-green-800/70"
              }`}
            >
              <ChevronDown className="h-5 w-5 text-green-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-green-900/30 relative z-10">
                <div className="pt-6">
                  <div className="bg-gradient-to-r from-green-950/50 to-transparent p-6 rounded-xl border-l-4 border-green-500">
                    <p className="text-gray-200 leading-relaxed text-base">{content}</p>
                  </div>

                  {/* Reading progress indicator */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-green-500/30 animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle glow effect when expanded */}
        {isExpanded && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
        )}
      </div>
    </motion.div>
  )
}
