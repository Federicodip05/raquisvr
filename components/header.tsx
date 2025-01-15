'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isClickNavigation, setIsClickNavigation] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navItems = useMemo(() => [
    { id: 'benefits', label: language === 'es' ? 'Beneficios' : 'Benefits' },
    { id: 'simulator', label: language === 'es' ? 'Simulador' : 'Simulator' },
    { id: 'technologies', label: language === 'es' ? 'Tecnologías' : 'Technologies' },
    { id: 'contact', label: language === 'es' ? 'Contacto' : 'Contact' },
  ], [language]);
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
      if (isClickNavigation) return;

      const heroElement = document.getElementById('hero');
      if (heroElement && window.scrollY < heroElement.offsetHeight) {
        setActiveSection('');
        history.replaceState(null, '', window.location.pathname + window.location.search);
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
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${currentSection}`);
      } else {
        setActiveSection('');
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClickNavigation, navItems]);

  const handleNavClick = (id: string) => {
    setIsClickNavigation(true);
    setActiveSection(id);
    history.pushState(null, '', `${window.location.pathname}${window.location.search}#${id}`);

    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    if (isMenuOpen) {
      toggleMenu();
    }

    setTimeout(() => {
      setIsClickNavigation(false);
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
        
        <div className="flex items-center">
          <nav className="hidden md:block h-full">
            <ul className="flex h-full">
              {navItems.map((item) => (
                <li key={item.id} className="h-full">
                  <a
                    href={`#${item.id}`}
                    className={`
                      flex items-center justify-center px-6 h-16 transition-all duration-200
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
          
          <div 
            className="relative ml-4 h-16 flex items-center"
            onMouseEnter={() => setIsLangMenuOpen(true)}
            onMouseLeave={() => setIsLangMenuOpen(false)}
          >
            <button
              className="flex items-center justify-center px-4 h-16 text-white hover:bg-white/20 rounded"
            >
              {language.toUpperCase()}
              <ChevronDown className="ml-1" size={16} />
            </button>
            {isLangMenuOpen && (
              <div className="absolute top-[100%] right-0 w-full bg-primary border-t border-white/10">
                <button
                  onClick={() => {
                    setLanguage(language === 'en' ? 'es' : 'en');
                    setIsLangMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-sm text-white hover:bg-white/10 text-left"
                >
                  {language === 'en' ? 'ES' : 'EN'}
                </button>
              </div>
            )}
          </div>
          
          <button className="md:hidden ml-4 h-16 flex items-center" onClick={toggleMenu} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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

