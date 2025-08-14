import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md shadow-md' 
          : ''
      }`}
      style={{
        backgroundColor: scrolled ? '#4066ff95' : '#4066ff'
      }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/e9e6f94c-22f9-4dfa-bc1e-067bed53a358.png" 
              alt="Construir Valor" 
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
            >
              Clientes
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              variant="default"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left px-4 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors duration-300"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-4 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors duration-300"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="block w-full text-left px-4 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors duration-300"
            >
              Clientes
            </button>
            <div className="px-4">
              <Button 
                onClick={() => scrollToSection('contacto')}
                variant="default"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;