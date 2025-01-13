import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import screwquirofano from '../assets/screwquirofano.webp'

const benefits = [
  "Entrenamiento realista y seguro",
  "Mejora de habilidades quirúrgicas",
  "Retroalimentación háptica precisa",
  "Simulación de diversos escenarios clínicos",
  "Evaluación objetiva del rendimiento"
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden bg-accent text-accent-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src={screwquirofano}
          alt="Fondo de beneficios"
          layout="fill"
          objectFit="cover"
          className="filter blur-sm opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de RaquisVR</h2>
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


