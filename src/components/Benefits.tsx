import { Clock, FileText, Settings, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Benefits = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: "Iniciamos en 24 hs",
      description: "Contamos con capital propio y no pedimos anticipos.",
      emoji: "💡"
    },
    {
      icon: FileText,
      title: "Cumplimiento legal y normativo",
      description: "Trabajamos con seguros vigentes, facturación formal, habilitaciones y documentación en regla desde el inicio.",
      emoji: "📄"
    },
    {
      icon: Settings,
      title: "Obras sin frenar tu operación",
      description: "Trabajamos en contraturnos para no interferir con tu actividad diaria.",
      emoji: "⏱️"
    }
  ];

  return (
    <section id="beneficios" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up">
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <CardContent className="space-y-4 p-0">
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                <benefit.icon className="mx-auto text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center fade-in-up animation-delay-400">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground inline-flex items-center gap-2"
          >
            Agendá una visita técnica sin cargo
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;