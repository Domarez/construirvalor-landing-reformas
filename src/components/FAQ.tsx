import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqs = [
    {
      question: "¿Puedo fraccionar la obra por etapas?",
      answer: "Sí, planificamos obras por etapas según tus tiempos y prioridades. Esta modalidad permite continuar con la actividad operativa sin interrupciones, especialmente útil en colegios, oficinas y plantas en funcionamiento."
    },
    {
      question: "¿Cómo garantizan los tiempos de entrega?",
      answer: "Contamos con planificación técnica detallada, supervisión constante y personal propio de obra. Esto nos permite cumplir los plazos comprometidos, sin depender de terceros ni sufrir demoras imprevistas."
    },
    {
      question: "¿Tienen casos de obras similares?",
      answer: "Sí, trabajamos con empresas, clubes e instituciones. Podés solicitar referencias o ver proyectos anteriores."
    },
    {
      question: "¿Incluyen la ingeniería y los planos?",
      answer: "Sí. Nuestro equipo técnico se encarga de todo."
    },
    {
      question: "¿Qué tipo de obras hacen?",
      answer: "Desde tinglados y galpones hasta ampliaciones, naves industriales y reparaciones estructurales."
    }
  ];

  return (
    <section className="section-container bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up stagger-1">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle mx-auto fade-in-up stagger-2">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="rotate-in stagger-3 mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`border border-neutral-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300 float-in stagger-${index + 4}`}
              >
                <AccordionTrigger className="text-left font-semibold text-lg text-neutral-800 hover:text-primary py-6 fade-in-right stagger-1">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 pb-6 text-base leading-relaxed fade-in-up stagger-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center fade-in-up animation-delay-500">
          <Button 
            onClick={() => window.open('https://forms.clickup.com/90131266734/f/2ky3vz5e-6233/QTQTM1XATN9SHKOUUG', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground inline-flex items-center gap-2"
          >
            Agendá una llamada con nuestro equipo
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;