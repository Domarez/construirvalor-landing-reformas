import { Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const testimonials = [
    {
      content: "Realizaron un excelente trabajo pintando los huecos y estructuras de dos de nuestros ascensores. El trabajo era muy complejo, ya que es un espacio vidriado completamente y había que trabajar en altura, pero lo resolvieron de una forma muy profesional y con todos los cuidados necesarios. Dado que no podíamos dejar los ascensores fuera de funcionamiento durante el día, fue muy útil que puedan trabajar a contraturno.",
      author: "Universidad de Maimónides",
      role: "Institución Educativa"
    },
    {
      content: "Contratamos a la empresa para impermeabilizar el techo de nuestra fábrica y la experiencia fue excelente. En solo tres días completaron el trabajo, manteniendo siempre el orden y la seguridad en el lugar. Trabajaron con responsabilidad, buena comunicación y atención a los detalles. No volvimos a tener filtraciones, los recomendamos por su seriedad y eficiencia.",
      author: "Yanina V.",
      role: "Sector Industrial"
    },
    {
      content: "El cielorraso del auditorio del colegio estaba fisurado con peligro de derrumbe y Construir Valor lo hizo todo nuevo sin desarmar el auditorio, que para nosotros era algo importante mantener. En 4 meses completaron el trabajo y estamos muy conformes con el trabajo realizado.",
      author: "Colegio Nuestra Señora de la Misericordia",
      role: "Institución Educativa"
    },
    {
      content: "Estamos muy conformes con el trabajo realizado en nuestra biblioteca. El equipo demostró profesionalismo desde el primer día, respetando los tiempos acordados y cuidando cada detalle del espacio. Se agradece especialmente la prolijidad en la ejecución y la disposición para adaptarse a nuestras necesidades, incluso trabajando turnos nocturnos para no afectar al desarrollo de las actividades.",
      author: "Universidad de Maimónides",
      role: "Institución Educativa"
    }
  ];

  return (
    <section id="testimonios" className="section-container bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up stagger-1">
            Lo que dicen nuestros clientes
          </h2>
          <p className="section-subtitle mx-auto fade-in-up stagger-2">
            Testimonios reales de empresas e instituciones que confían en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index % 2 === 0 ? 'float-in' : 'scale-in'
              } stagger-${index + 3}`}
            >
              <CardContent className="space-y-4 p-0">
                <div className="flex text-yellow-400 mb-4 fade-in-right stagger-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-neutral-700 leading-relaxed italic text-lg fade-in-up stagger-2">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-neutral-200 fade-in-left stagger-3">
                  <p className="font-semibold text-neutral-800">
                    {testimonial.author}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center fade-in-up animation-delay-500">
          <Button 
            onClick={() => window.open('https://forms.clickup.com/90131266734/f/2ky3vz5e-6233/QTQTM1XATN9SHKOUUG', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground inline-flex items-center gap-2"
          >
            Quiero una solución así para mi empresa
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;