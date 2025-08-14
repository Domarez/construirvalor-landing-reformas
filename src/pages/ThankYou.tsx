import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const ThankYou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Add scroll animation classes when component mounts
    const elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .zoom-in');
    elements.forEach(el => el.classList.add('animate'));
    
    // Fire GTM conversion event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'conversion',
        'conversion_type': 'form_submission',
        'page_title': 'Thank You - Construir Valor'
      });
    }
  }, []);
  return <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center scale-in stagger-1">
            <div className="bg-primary/10 p-6 rounded-full">
              <CheckCircle className="text-primary w-16 h-16" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4 fade-in-up stagger-2">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800">
              ¡Gracias por contactarnos!
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Hemos recibido tu solicitud de presupuesto sin cargo
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="shadow-lg border-0 slide-in-left stagger-3">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Phone className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Respuesta garantizada
                </h3>
                <p className="text-neutral-600">
                  Nuestro equipo te contactará dentro de las próximas 24 horas para 
                  coordinar el diagnóstico técnico inicial.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 slide-in-right stagger-4">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Mail className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Evaluación sin compromiso
                </h3>
                <p className="text-neutral-600">
                  Recibirás un diagnóstico completo y una propuesta detallada 
                  completamente gratis.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="shadow-xl border-0 bg-primary text-primary-foreground mt-12 zoom-in stagger-5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Qué sigue ahora?
              </h3>
              <div className="space-y-3 text-primary-foreground/90">
                <p>✓ Revisaremos tu solicitud en detalle</p>
                <p>✓ Te contactaremos para coordinar una visita técnica</p>
                <p>✓ Realizaremos el diagnóstico sin cargo</p>
                <p>✓ Te presentaremos una propuesta clara y detallada</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="text-center text-neutral-600 fade-in-up stagger-6">
            
            
            
          </div>

          {/* Back to Home Button */}
          <div className="pt-8 scale-in stagger-7">
            <Button onClick={() => navigate('/')} size="lg" variant="outline" className="inline-flex items-center gap-2">
              <ArrowLeft size={18} />
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default ThankYou;