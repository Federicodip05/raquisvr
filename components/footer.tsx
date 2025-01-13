import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">RaquisVR</h3>
            {/* <p>Entrenamiento quirúrgico de vanguardia con tecnología VR y háptica.</p> */}
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Enlaces rápidos</h3>
            <ul>
              <li><Link href="#benefits" className="hover:text-secondary">Beneficios</Link></li>
              <li><Link href="#simulator" className="hover:text-secondary">Simulador</Link></li>
              <li><Link href="#technologies" className="hover:text-secondary">Tecnologías</Link></li>
              <li><Link href="#contact" className="hover:text-secondary">Contacto</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <p>Email: raquisvr@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/federicodip/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Federico Dip</a></p>
            <p><a href="https://www.linkedin.com/in/maria-eugenia-fontecha/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Eugenia Fontecha</a></p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 RaquisVR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

