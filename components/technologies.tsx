import Image from 'next/image'
import htcvive from '../assets/htcvive.webp'
import hapticdevive from '../assets/hapticdevice.webp'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Technologies() {
  const { language } = useLanguage()

  const technologies = [
    { 
      name: language === 'es' ? "Tecnología Háptica" : "Haptic Technology", 
      description: language === 'es' 
        ? "La tecnología háptica proporciona retroalimentación táctil realista, simulando la sensación de insertar tornillos en la columna vertebral. Esto permite a los médicos desarrollar la sensibilidad necesaria para realizar procedimientos delicados con precisión."
        : "Haptic technology provides realistic tactile feedback, simulating the sensation of inserting screws into the spine. This allows doctors to develop the sensitivity needed to perform delicate procedures with precision.",
      image: hapticdevive
    },
    { 
      name: language === 'es' ? "Realidad Virtual" : "Virtual Reality", 
      description: language === 'es'
        ? "Nuestro sistema de realidad virtual inmersiva crea un entorno quirúrgico 3D detallado y realista. Los usuarios pueden interactuar con modelos anatómicos precisos, mejorando su comprensión espacial y habilidades de navegación quirúrgica."
        : "Our immersive virtual reality system creates a detailed and realistic 3D surgical environment. Users can interact with precise anatomical models, improving their spatial understanding and surgical navigation skills.",
      image: htcvive
    }
  ]

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          {language === 'es' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
        </h2>
        {technologies.map((tech, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src={tech.image} alt={tech.name} width={300} height={200} className="mx-auto" />
            </div>
            <div className="md:w-1/2 md:px-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">{tech.name}</h3>
              <p className="text-lg text-primary">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}