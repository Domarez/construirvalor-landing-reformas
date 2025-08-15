import { Building, Wrench, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import constructionImage from '@/assets/construction-work.jpg';
import receptionImage from '@/assets/reception-area.jpg';
import universidadImage from '@/assets/maimodes.jpg';


const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      icon: Building,
      title: "Obras y reformas para empresas",
      items: [
        "Construcción de tinglados y estructuras metálicas",
        "Ampliaciones funcionales y reformas de oficinas",
        "Naves logísticas, techado de canchas y espacios productivos"
      ],
      image: constructionImage
    },
    {
      icon: Wrench,
      title: "Mantenimiento edilicio empresarial",
      items: [
        "Servicio por evento: techos, plomería, ascensores, electricidad",
        "Planes mensuales de mantenimiento preventivo",
        "Un solo proveedor, todas las soluciones"
      ],
      image: receptionImage
    },
    {
      icon: GraduationCap,
      title: "Servicios para colegios y universidades",
      items: [
        "Refacciones durante recesos sin interrumpir clases",
        "Baños, aulas, accesos, iluminación, seguridad",
        "Planificación por etapas, con documentación completa"
      ],
      image: universidadImage
    }
  ];

  return (
    <section id="servicios" className="section-container bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up stagger-1">
            Nuestros Servicios
          </h2>
          <p className="section-subtitle mx-auto fade-in-up stagger-2">
            Soluciones integrales para empresas e instituciones educativas
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              } stagger-${index + 3}`}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg scale-in stagger-1">
                        <service.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-2xl lg:text-3xl text-neutral-800 fade-in-right stagger-2">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={`flex items-start gap-3 fade-in-up stagger-${itemIndex + 3}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-neutral-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`w-full h-[300px] lg:h-full object-cover ${
                      index % 2 === 0 ? 'zoom-in' : 'rotate-in'
                    } stagger-${index + 2}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up animation-delay-500">
          <Button 
            onClick={() => window.open('https://forms.clickup.com/90131266734/f/2ky3vz5e-6233/QTQTM1XATN9SHKOUUG', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground inline-flex items-center gap-2"
          >
            Solicitá un plan a medida
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
