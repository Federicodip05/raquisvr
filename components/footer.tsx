import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language, setLanguage } = useLanguage()
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">RaquisVR</h3>
            <div className="mt-4">
              
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 ${language === 'en' ? 'font-bold' : ''}`}
              >
                EN
              </button>
              <span className="mx-1">|</span>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 ${language === 'es' ? 'font-bold' : ''}`}
              >
                ES
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              {language === 'es' ? 'Enlaces rápidos' : 'Quick Links'}
            </h3>
            <ul>
              <li><Link href="#benefits" className="hover:text-secondary">
                {language === 'es' ? 'Beneficios' : 'Benefits'}
              </Link></li>
              <li><Link href="#simulator" className="hover:text-secondary">
                {language === 'es' ? 'Simulador' : 'Simulator'}
              </Link></li>
              <li><Link href="#technologies" className="hover:text-secondary">
                {language === 'es' ? 'Tecnologías' : 'Technologies'}
              </Link></li>
              <li><Link href="#contact" className="hover:text-secondary">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h3>
            <p>{language === 'es' ? 'Mail' : 'Email'}: raquisvr@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/federicodip/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Federico Dip</a></p>
            <p><a href="https://www.linkedin.com/in/maria-eugenia-fontecha/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Eugenia Fontecha</a></p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 RaquisVR. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
