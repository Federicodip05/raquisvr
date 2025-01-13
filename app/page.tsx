'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Benefits from '@/components/benefits';
import Demo from '@/components/demo';
import Technologies from '@/components/technologies';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ReadingProgress from '@/components/reading-progress';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');
    const heroSection = document.getElementById('hero');

    const handleScroll = () => {
      let current = '';

      // Detectar si estamos en Hero
      if (window.pageYOffset < (heroSection?.offsetHeight || 0) / 3) {
        current = 'hero'; // Activar Hero si está al principio
      } else {
        // Revisar otras secciones
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            const id = section.getAttribute('id');
            if (id !== null) {
              current = id;
            }
          }
        });
      }

      // Actualizar clases activas del navbar
      navItems.forEach((item) => {
        item.classList.remove('text-accent');
        const href = item.getAttribute('href');
        if (href && href.slice(1) === current) {
          item.classList.add('text-accent');
        }
      });
    };

    // Interceptar clics en los enlaces del navbar
    navItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado
        const href = item.getAttribute('href');

        if (href) {
          const target = document.querySelector(href);
          if (target) {
            // Scroll suave a la sección
            const headerOffset = 80; // Ajusta según la altura de tu header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });

            // Actualizar la URL manualmente
            history.pushState(null, '', href === '#hero' ? '/' : href);
          }
        }
      });
    });

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      navItems.forEach((item) => {
        item.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-primary-foreground pt-20"> {/* pt-20 para compensar el header fijo */}
      <ReadingProgress />
      <Header />
      <Hero />
      <Benefits />
      <Demo />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}

