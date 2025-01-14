'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import quirofano from '../assets/quirofano.webp'

export default function Hero() {
  const { language } = useLanguage()
  const demoRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    demoRef.current = document.getElementById('simulator')
  }, [])

  const handleScrollToDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    demoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 pb-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:space-x-16 max-w-7xl mx-auto">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {language === 'es'
                ? 'RaquisVR: Entrenamiento quirúrgico de vanguardia con tecnología VR y háptica'
                : 'RaquisVR: Cutting-edge surgical training with VR and hapics'}
            </h1>
            <p className="text-xl mb-8 text-primary">
              {language === 'es'
                ? 'Simula la inserción de tornillos pediculares en la columna lumbar para mejorar habilidades quirúrgicas'
                : 'Simulate pedicle screw insertion in the lumbar spine to improve surgical skills'}
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-accent w-full md:w-auto"
              onClick={handleScrollToDemo}
            >
              {language === 'es' ? 'Descubre más sobre RaquisVR' : 'Learn more about RaquisVR'}
            </Button>
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <Image 
              src={quirofano}
              alt={language === 'es' ? 'Simulador RaquisVR' : 'RaquisVR Simulator'} 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

