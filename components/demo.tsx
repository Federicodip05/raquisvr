'use client'

import Image from 'next/image'
/* import { ArrowRight } from 'lucide-react' */
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import quirofanoScrew from '../assets/screwquirofano.webp'
import cuestionario from '../assets/menuScenePreguntaCorrecta.webp'
import generalresult from '../assets/TotalResultPanel.webp'
import xray from '../assets/XrayWithScrew.webp'
import quirofano from '../assets/quirofano.webp'
import menugame from '../assets/menuGame.webp'
import balltip from '../assets/balltip.webp'
import caso from '../assets/caso.webp'
import finalscrew from '../assets/finalscrew.webp'
import tools from '../assets/Tools.webp'
import initialxray from '../assets/XRay.webp'


const images = [
  {
    src: quirofano,
    title: 'Quirofano'
  },
  {
    src: quirofanoScrew,
    title: 'Simulación de procedimiento'
  },
  {
    src: xray,
    title: 'Rayos X'
  },
  {
    src: cuestionario,
    title: 'Cuestionario'
  },
  {
    src: balltip,
    title: 'Palpador de pediculos'
  },
  {
    src: caso,
    title: 'Caso'
  },
  {
    src: finalscrew,
    title: 'Tornillo insertado'
  },
  {
    src: tools,
    title: 'Mesa de instrumental quirurgico'
  },
  {
    src: initialxray,
    title: 'Rayos X'
  },
]

const features = [
  {
    title: "Cuestionario Previo",
    description: "Antes de iniciar la simulación, los usuarios completan un cuestionario para evaluar sus conocimientos previos.",
    image: cuestionario,
  },
  {
    title: "Quirófano Virtual",
    description: "Nuestro quirófano virtual proporciona un entorno realista para la práctica de procedimientos quirúrgicos, incluyendo todos los instrumentos y equipos necesarios.",
    image: quirofano,
  },
  {
    title: "Paneles de ayuda",
    description: "Guías interactivas que asisten al usuario durante la simulación, proporcionando información contextual y consejos en tiempo real.",
    image: menugame,
  },
  {
    title: "Resultados Generales",
    description: "Obtenga una visión general del rendimiento en la simulación, identificando áreas de mejora y tendencias en el aprendizaje.",
    image: generalresult,
  },
]

export default function Demo() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section id="simulator" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Nuestro simulador</h2>
        {/* Nuevo componente de video */}
        <div className="mb-20 flex justify-center">
          <div className="w-full max-w-xl aspect-[16/9] relative">
            <iframe
              src="https://www.youtube.com/embed/eRTZgXk3KTI"
              title="RaquisVR Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-row">
              <div className="w-1/3 relative">
                <Image
                  src={feature.image}
                  alt={`Imagen de ${feature.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary-foreground mb-4">{feature.description}</p>
                {/* <a href="#" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300">
                  Leer más <ArrowRight className="ml-2" size={16} />
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-[0_0_25%] min-w-0 px-2"
              >
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
                >
                  <Image 
                    src={image.src} 
                    alt={image.title} 
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
