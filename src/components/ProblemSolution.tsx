import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import officeImage from '@/assets/office-interior.jpg';

const ProblemSolution = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-container bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <h2 className="section-title text-neutral-800">
              ¿Necesitás mantener tus instalaciones funcionando sin frenar la operación?
            </h2>
            
            <p className="text-lg text-neutral-600 mb-6">
              En edificios corporativos, instituciones educativas o fábricas, una filtración, 
              un problema eléctrico o una ampliación mal gestionada puede afectar a toda la operación.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Por eso en Construir Valor nos ocupamos de todo:
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-neutral-700">Planificación técnica completa</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-neutral-700">Obra o mantenimiento especializado</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-neutral-700">Entrega final con garantías</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-neutral-600 mb-8">
              Nos integramos con tus procesos y resolvemos con agilidad, 
              <strong className="text-primary"> sin exigir anticipos</strong> y con personal propio.
            </p>
            
            <Button 
              onClick={() => window.open('https://forms.clickup.com/90131266734/f/2ky3vz5e-6233/QTQTM1XATN9SHKOUUG', '_blank')}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground inline-flex items-center gap-2"
            >
              Hablemos de tu necesidad específica
              <ArrowRight size={18} />
            </Button>
          </div>

          {/* Image */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={officeImage} 
                alt="Oficina moderna renovada"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;