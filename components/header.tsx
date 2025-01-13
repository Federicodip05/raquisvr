'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'benefits', label: 'Beneficios' },
  { id: 'simulator', label: 'Simulador' },
  { id: 'technologies', label: 'Tecnologías' },
  { id: 'contact', label: 'Contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isClickNavigation, setIsClickNavigation] = useState(false); // Nueva variable

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= window.innerHeight) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickNavigation) return; // No actualizamos en scroll si fue un clic

      const heroElement = document.getElementById('hero');
      if (heroElement && window.scrollY < heroElement.offsetHeight) {
        setActiveSection('');
        history.replaceState(null, '', '/'); // URL base
        return;
      }

      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
        history.replaceState(null, '', `#${currentSection}`);
      } else {
        setActiveSection(''); // Si no hay sección activa
        history.replaceState(null, '', '/'); // Volvemos a la URL base
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClickNavigation]);

  const handleNavClick = (id: string) => {
    setIsClickNavigation(true); // Marcamos que la navegación es por clic
    setActiveSection(id);
    history.pushState(null, '', `#${id}`); // Agregamos el hash

    setTimeout(() => {
      setIsClickNavigation(false); // Restauramos tras un pequeño delay
    }, 500);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 
        transition-all duration-300 ease-in-out z-50
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        bg-primary text-primary-foreground shadow-md
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold">RaquisVR</Link>
        <nav className="hidden md:block h-full">
          <ul className="flex h-full">
            {navItems.map((item) => (
              <li key={item.id} className="h-full">
                <a
                  href={`#${item.id}`}
                  className={`
                    flex items-center justify-center px-6 h-full transition-all duration-200
                    hover:bg-white/10 text-white
                    ${activeSection === item.id ? 'font-bold' : ''}
                    relative
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`
                      block px-4 py-2 transition-all duration-200
                      hover:bg-white/10 text-white
                      ${activeSection === item.id ? 'font-bold' : ''}
                      relative
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                      toggleMenu();
                    }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
