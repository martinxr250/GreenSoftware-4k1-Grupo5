"use client"

import { useState } from "react"
import { HelpCircle, CheckCircle, XCircle, Award } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { Button3d } from "@/components/ui/button-3d"
import { Card3d, Card3dContent, Card3dDescription, Card3dHeader, Card3dTitle } from "@/components/ui/card-3d"

const quizQuestions = [
  {
    question: "¿Cuál es el principio fundamental que define la sustentabilidad según el Informe Brundtland?",
    options: [
      "Maximizar el crecimiento económico a cualquier costo",
      "Satisfacer las necesidades actuales sin comprometer las de generaciones futuras",
      "Priorizar el desarrollo tecnológico sobre la conservación ambiental",
      "Mantener el statu quo de los sistemas de producción",
    ],
    correctAnswer: 1,
    explanation:
      "El Informe Brundtland de 1987 definió el desarrollo sostenible como aquel que 'satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades'.",
  },
  {
    question: "¿Cuál de estos NO es uno de los tres pilares tradicionales de la sustentabilidad?",
    options: ["Ambiental", "Social", "Económico", "Tecnológico"],
    correctAnswer: 3,
    explanation:
      "Los tres pilares tradicionales de la sustentabilidad son el ambiental, el social y el económico, formando lo que se conoce como 'triple bottom line' o triple cuenta de resultados.",
  },
  {
    question: "¿Cuántos Objetivos de Desarrollo Sostenible (ODS) estableció la ONU en su Agenda 2030?",
    options: ["10", "15", "17", "20"],
    correctAnswer: 2,
    explanation:
      "La Agenda 2030 para el Desarrollo Sostenible, adoptada por todos los Estados Miembros de la ONU en 2015, proporciona un plan compartido para la paz y la prosperidad para las personas y el planeta. En su núcleo están los 17 Objetivos de Desarrollo Sostenible (ODS).",
  },
  {
    question: "¿Qué concepto describe un sistema económico que elimina el concepto de 'residuo'?",
    options: ["Economía verde", "Economía lineal", "Economía circular", "Economía colaborativa"],
    correctAnswer: 2,
    explanation:
      "La economía circular es un modelo económico que busca redefinir el crecimiento, centrándose en los beneficios positivos para toda la sociedad. Implica disociar la actividad económica del consumo de recursos finitos y eliminar los residuos del sistema, manteniendo productos, componentes y materiales en su máxima utilidad y valor en todo momento.",
  },
  {
    question: "¿Cuál de estos fenómenos NO está directamente relacionado con el cambio climático?",
    options: [
      "Aumento del nivel del mar",
      "Acidificación de los océanos",
      "Agotamiento de la capa de ozono",
      "Eventos climáticos extremos más frecuentes",
    ],
    correctAnswer: 2,
    explanation:
      "Aunque tanto el cambio climático como el agotamiento de la capa de ozono son problemas ambientales graves, son fenómenos distintos con causas diferentes. El agotamiento de la capa de ozono está principalmente causado por los clorofluorocarbonos (CFC), mientras que el cambio climático es causado principalmente por los gases de efecto invernadero como el CO₂.",
  },
]

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = () => {
    if (selectedOption === null) return

    setIsAnswered(true)
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    setSelectedOption(null)
    setIsAnswered(false)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
  }

  return (
    <Card3d className="h-full overflow-hidden">
      <Card3dHeader>
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-white" />
          <Card3dTitle>Quiz de Sustentabilidad</Card3dTitle>
        </div>
        <Card3dDescription>Pon a prueba tus conocimientos sobre desarrollo sostenible</Card3dDescription>
      </Card3dHeader>
      <Card3dContent className="pt-6">
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-green-400">
                  Pregunta {currentQuestion + 1} de {quizQuestions.length}
                </div>
                <div className="text-sm text-gray-400">Puntuación: {score}</div>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div
                  className="bg-green-600 h-1.5 rounded-full"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              <h3 className="text-lg font-medium text-white">{quizQuestions[currentQuestion].question}</h3>

              <RadioGroup value={selectedOption?.toString()} disabled={isAnswered} className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 relative p-3 rounded-lg border ${
                      isAnswered
                        ? index === quizQuestions[currentQuestion].correctAnswer
                          ? "border-green-700 bg-green-900/30"
                          : index === selectedOption
                            ? "border-red-700 bg-red-900/20"
                            : "border-gray-800"
                        : "border-gray-800 hover:border-gray-700"
                    } transition-colors`}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      onClick={() => !isAnswered && setSelectedOption(index)}
                      className="data-[state=checked]:text-green-400 border-gray-600"
                    />
                    <Label htmlFor={`option-${index}`} className="flex-grow py-1 cursor-pointer text-gray-300">
                      {option}
                    </Label>

                    {isAnswered &&
                      (index === quizQuestions[currentQuestion].correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : index === selectedOption ? (
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      ) : null)}
                  </div>
                ))}
              </RadioGroup>

              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-sm text-gray-300"
                >
                  <p className="font-medium mb-1 text-green-400">Explicación:</p>
                  <p>{quizQuestions[currentQuestion].explanation}</p>
                </motion.div>
              )}

              {!isAnswered ? (
                <Button3d className="w-full" variant="glow" onClick={handleAnswer} disabled={selectedOption === null}>
                  Comprobar respuesta
                </Button3d>
              ) : (
                <Button3d className="w-full" variant="secondary" onClick={nextQuestion}>
                  {currentQuestion < quizQuestions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
                </Button3d>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-6"
            >
              <div className="py-6">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gray-800"></div>
                  <svg className="absolute inset-0" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="10"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={2 * Math.PI * 45 * (1 - score / quizQuestions.length)}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className="text-3xl font-bold text-green-400">{score}</div>
                      <div className="text-sm text-gray-400">de {quizQuestions.length}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-2">
                  <Award className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    {score === quizQuestions.length
                      ? "¡Excelente!"
                      : score >= quizQuestions.length * 0.7
                        ? "¡Muy bien!"
                        : score >= quizQuestions.length * 0.5
                          ? "Buen intento"
                          : "Sigue aprendiendo"}
                  </h3>
                </div>

                <p className="text-gray-400">
                  {score === quizQuestions.length
                    ? "Eres un experto en sustentabilidad. ¡Felicitaciones!"
                    : score >= quizQuestions.length * 0.7
                      ? "Tienes un conocimiento sólido sobre sustentabilidad."
                      : score >= quizQuestions.length * 0.5
                        ? "Tienes conocimientos básicos sobre sustentabilidad."
                        : "La sustentabilidad es un tema complejo. ¡Sigue aprendiendo!"}
                </p>
              </div>

              <Button3d className="w-full" variant="glow" onClick={resetQuiz}>
                Reiniciar quiz
              </Button3d>
            </motion.div>
          )}
        </AnimatePresence>
      </Card3dContent>
    </Card3d>
  )
}
