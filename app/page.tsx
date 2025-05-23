"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import NavBar from "@/components/nav-bar"
import QuestionSection from "@/components/question-section"
import CarbonCalculator from "@/components/carbon-calculator"
import QuizSection from "@/components/quiz-section"
import StatsCounter from "@/components/stats-counter"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AOS from "aos"
import TimelineSection from "@/components/timeline-section"
import DetailedStats from "@/components/detailed-stats"
import CaseStudies from "@/components/case-studies"
import ResourcesLibrary from "@/components/resources-library"
import SustainabilityTracker from "@/components/sustainability-tracker"
import FloatingParticles from "@/components/floating-particles"
import EnvironmentalImpactCounter from "@/components/environmental-impact-counter"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f0d] to-[#121212] relative">
      <FloatingParticles />
      <SustainabilityTracker />
      <EnvironmentalImpactCounter />
      <NavBar />
      <Hero />

      <div id="questions" className="container mx-auto px-4 py-16 relative z-10">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-900 -translate-y-1/2"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-[#0a0f0d] text-green-500 mx-auto">
            Las 9 Preguntas Fundamentales
            <span className="block text-sm font-normal text-green-400 mt-2">
              Un marco conceptual para entender la sustentabilidad
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <QuestionSection
            id="que-es"
            number="1"
            question="¿Qué es?"
            title="Sustentabilidad"
            content="La sustentabilidad representa un paradigma de pensamiento y acción que busca el delicado equilibrio entre prosperidad económica, bienestar social y responsabilidad ambiental. Más allá de una simple definición, constituye una filosofía que reconoce la interconexión de todos los sistemas vivos y no vivos del planeta. Según el Informe Brundtland (1987), es 'satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades', pero en la práctica, implica repensar fundamentalmente nuestra relación con los recursos naturales y entre nosotros mismos."
          />

          <QuestionSection
            id="por-que"
            number="2"
            question="¿Por qué?"
            title="La Necesidad Imperante"
            content="Nos encontramos en un punto de inflexión histórico. La evidencia científica es contundente: el cambio climático, la pérdida acelerada de biodiversidad (100-1000 veces mayor que la tasa natural), la acidificación oceánica y la degradación de suelos amenazan los sistemas que sostienen la vida en la Tierra. El modelo económico extractivista ha creado una deuda ecológica insostenible. Según el Global Footprint Network, actualmente consumimos recursos equivalentes a 1.7 planetas, una situación evidentemente insostenible en un mundo finito. La sustentabilidad no es una opción, sino una necesidad existencial para la civilización humana."
          />

          <QuestionSection
            id="para-que"
            number="3"
            question="¿Para qué?"
            title="Propósito y Visión"
            content="La sustentabilidad persigue la creación de un futuro donde la humanidad prospere dentro de los límites planetarios. Sus objetivos trascienden la mera supervivencia: busca regenerar ecosistemas degradados, distribuir equitativamente los beneficios del desarrollo, y fomentar una economía que sirva al bienestar humano sin destruir su base natural. Aspira a construir comunidades resilientes capaces de adaptarse a los cambios inevitables, mientras mitiga aquellos que aún podemos evitar. En última instancia, busca reconciliar nuestra existencia con los ciclos naturales del planeta, reconociendo que nuestro bienestar está indisolublemente ligado al de la biosfera."
          />

          <QuestionSection
            id="quien"
            number="4"
            question="¿Quién?"
            title="Actores del Cambio"
            content="La transición hacia la sustentabilidad requiere un esfuerzo sin precedentes de colaboración multinivel. Los gobiernos establecen marcos regulatorios y políticas públicas, como el Acuerdo de París o la Agenda 2030. El sector empresarial, desde multinacionales hasta emprendimientos locales, redefine modelos de negocio incorporando la triple cuenta de resultados. La academia genera conocimiento y forma a los profesionales del futuro. La sociedad civil articula movimientos como Fridays for Future o Extinction Rebellion que presionan por cambios sistémicos. Pero quizás lo más importante: cada ciudadano, a través de sus decisiones cotidianas de consumo, inversión y participación cívica, tiene el poder de catalizar transformaciones profundas."
          />

          <QuestionSection
            id="cuando"
            number="5"
            question="¿Cuándo?"
            title="El Momento Decisivo"
            content="El consenso científico es claro: nos encontramos en una década decisiva (2020-2030). El Panel Intergubernamental sobre Cambio Climático (IPCC) advierte que para limitar el calentamiento global a 1.5°C, debemos reducir las emisiones de CO₂ en un 45% para 2030 y alcanzar la neutralidad de carbono para 2050. Cada año de inacción reduce nuestras opciones y aumenta los costos futuros. La ventana de oportunidad se está cerrando rápidamente para evitar puntos de inflexión irreversibles en el sistema climático. Como expresó Ban Ki-moon: 'No hay un Plan B porque no hay un Planeta B'. El momento de actuar no es mañana, es ahora."
          />

          <QuestionSection
            id="donde"
            number="6"
            question="¿Dónde?"
            title="Espacios de Transformación"
            content="La sustentabilidad debe materializarse en múltiples escalas y contextos. En las ciudades, donde vivirá el 68% de la población mundial para 2050, mediante infraestructura verde, movilidad sostenible y edificación eficiente. En zonas rurales, a través de la agroecología y la gestión comunitaria de recursos naturales. En ecosistemas críticos como la Amazonía, arrecifes de coral o manglares, mediante estrategias de conservación y restauración. En cadenas de suministro globales, asegurando trazabilidad y responsabilidad socioambiental. En espacios digitales, optimizando el consumo energético de centros de datos. La sustentabilidad no conoce fronteras: debe implementarse localmente pero con visión global."
          />

          <QuestionSection
            id="como"
            number="7"
            question="¿Cómo?"
            title="Estrategias y Metodologías"
            content="El camino hacia la sustentabilidad requiere un enfoque sistémico que combine innovación tecnológica, transformación social y gobernanza adaptativa. Entre las estrategias clave destacan: la descarbonización energética mediante renovables y eficiencia; la economía circular que elimina el concepto de residuo; la restauración ecológica basada en soluciones inspiradas en la naturaleza; la agricultura regenerativa que secuestra carbono mientras produce alimentos; la movilidad sostenible multimodal; y la educación transformadora que desarrolla pensamiento crítico y valores ecocéntricos. Estas estrategias deben implementarse mediante procesos participativos que integren diversos saberes, incluyendo conocimientos indígenas y locales."
          />

          <QuestionSection
            id="con-que"
            number="8"
            question="¿Con qué?"
            title="Herramientas y Recursos"
            content="El arsenal para la transición sostenible incluye herramientas técnicas, financieras y sociales. Entre las primeras: análisis de ciclo de vida, evaluación de servicios ecosistémicos, ciencia de datos aplicada a la sostenibilidad, y tecnologías limpias como el hidrógeno verde o la captura de carbono. En lo financiero: taxonomías de inversión sostenible, bonos verdes, impuestos al carbono, y mecanismos de pago por servicios ambientales. En lo social: metodologías de diseño participativo, plataformas de ciencia ciudadana, y redes de intercambio de conocimientos. Estas herramientas deben aplicarse de manera integrada, reconociendo que la sustentabilidad es un desafío complejo que requiere soluciones igualmente sofisticadas."
          />

          <QuestionSection
            id="cuanto"
            number="9"
            question="¿Cuánto?"
            title="Métricas e Impacto"
            content="Medir el progreso hacia la sustentabilidad requiere indicadores que capturen su naturaleza multidimensional. A nivel planetario, los límites biofísicos definidos por Rockström et al. proporcionan umbrales críticos para nueve procesos del sistema Tierra. A nivel nacional, alternativas al PIB como el Índice de Progreso Genuino o el Índice de Felicidad Nacional Bruta ofrecen visiones más holísticas del desarrollo. A nivel organizacional, estándares como GRI, SASB o los Science-Based Targets permiten evaluar impactos. El marco de los ODS ofrece 232 indicadores globalmente acordados. Sin embargo, debemos recordar que no todo lo importante puede medirse, y la sustentabilidad también implica valores y consideraciones éticas que trascienden las métricas cuantitativas."
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#121212] to-[#0a0f0d] py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 w-full h-px bg-green-900 -translate-y-1/2"></div>
            <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-center px-6 bg-[#121212] text-green-500 mx-auto">
              Herramientas Interactivas
              <span className="block text-sm font-normal text-green-400 mt-2">
                Explora y aprende sobre tu impacto en la sustentabilidad
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <CarbonCalculator />
            <QuizSection />
          </div>

          <StatsCounter />
          <TimelineSection />
          <DetailedStats />
          <CaseStudies />
          <ResourcesLibrary />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
