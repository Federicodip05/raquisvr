import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import screwquirofano from '../assets/screwquirofano.webp'


export default function Benefits() {
  const { language } = useLanguage()

  const benefits = [
    language === 'es' ? "Entrenamiento realista y seguro" : "Realistic and safe training",
    language === 'es' ? "Mejora de habilidades quirúrgicas" : "Improvement of surgical skills",
    language === 'es' ? "Retroalimentación háptica precisa" : "Precise haptic feedback",
    language === 'es' ? "Simulación de escenarios clínicos" : "Simulation of clinical scenarios",
    language === 'es' ? "Evaluación objetiva del rendimiento" : "Objective performance evaluation"
  ]

  return (
    <section id="benefits" className="py-20 relative overflow-hidden bg-accent text-accent-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src={screwquirofano}
          alt={language === 'es' ? "Fondo de beneficios" : "Benefits background"}
          layout="fill"
          objectFit="cover"
          className="filter blur-sm opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === 'es' ? 'Beneficios de RaquisVR' : 'Benefits of RaquisVR'}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center bg-primary bg-opacity-80 p-4 rounded-lg shadow-lg">
              <CheckCircle className="text-secondary mr-2 flex-shrink-0" />
              <span className="text-primary-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

