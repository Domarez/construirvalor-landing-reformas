import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Features = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const features = [
    "Diagnóstico técnico inicial gratuito",
    "Planificación completa del proyecto",
    "Ejecución con personal propio y supervisión constante",
    "Gestión de trámites y permisos si lo requiere",
    "Facturación clara, sin sorpresas ni adelantos"
  ];

  return (
    <section className="section-container bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up">
            ¿Qué incluye nuestro servicio?
          </h2>
        </div>

        <Card className="shadow-2xl border-0 fade-in-up animation-delay-200">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-4 rounded-lg hover:bg-primary-light/50 transition-all duration-300 fade-in-right animation-delay-${(index + 1) * 100}`}
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <span className="text-lg text-neutral-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 fade-in-up animation-delay-500">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground inline-flex items-center gap-2"
          >
            Quiero recibir una propuesta concreta
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;