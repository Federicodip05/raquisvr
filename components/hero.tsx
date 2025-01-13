'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import quirofano from '../assets/quirofano.webp';

export default function Hero() {
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
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">RaquisVR: Entrenamiento quirúrgico de vanguardia con tecnología VR y háptica</h1>
          <p className="text-xl mb-8 text-primary">Simula la inserción de tornillos pediculares en la columna lumbar para mejorar habilidades quirúrgicas</p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-accent w-full md:w-auto"
            onClick={handleScrollToDemo}
          >
            Descubre más sobre RaquisVR
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src={quirofano}
            alt="Simulador RaquisVR" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

