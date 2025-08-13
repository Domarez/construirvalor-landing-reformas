import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-lobby.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in-up stagger-1">
            Reformas, mantenimiento y obras para empresas e instituciones
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto fade-in-up stagger-2">
            Soluciones integrales, rápidas y sin interrupciones. Desde colegios y oficinas 
            hasta naves logísticas: ejecutamos proyectos edilicios con planificación, 
            cumplimiento y capital propio para comenzar ya.
          </h2>
          
          <div className="scale-in stagger-3">
            <Button 
              onClick={() => window.open('https://forms.clickup.com/90131266734/f/2ky3vz5e-6233/QTQTM1XATN9SHKOUUG', '_blank')}
              size="lg"
              className="btn-hero text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              Solicitá tu diagnóstico técnico sin cargo
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;