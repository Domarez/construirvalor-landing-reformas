import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
const Contact = () => {
  return <section id="contacto" className="section-container bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up stagger-1">
            ¿Querés una empresa que haga el trabajo en vez de complicarte la vida?
          </h2>
          <p className="section-subtitle mx-auto fade-in-up stagger-2">
            En Construir Valor combinamos capacidad técnica, velocidad de respuesta y formalidad.
            Obras, mantenimiento o reformas: resolvemos con un solo equipo, desde el primer llamado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* CTA Section */}
          <div className="space-y-8 slide-in-left stagger-3">
            <Card className="shadow-xl border-0 bg-primary text-primary-foreground zoom-in stagger-1">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-6 fade-in-down stagger-1">
                  Solicitá tu presupuesto sin cargo
                </h3>
                <p className="text-primary-foreground/90 mb-8 fade-in-up stagger-2">
                  Recibí tu diagnóstico técnico inicial completamente gratis. 
                  Nuestro equipo evaluará tu proyecto y te presentará una propuesta 
                  clara y detallada sin compromiso.
                </p>
                <Button onClick={() => window.open('https://forms.clickup.com/90131266734/f/2ky3vz5e-6233/QTQTM1XATN9SHKOUUG', '_blank')} size="lg" className="bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2 scale-in stagger-3">
                  Solicitá tu presupuesto sin cargo
                  <ArrowRight size={18} />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  Respuesta garantizada en 24 horas
                </h3>
                <p className="text-neutral-600">
                  Iniciamos trabajos inmediatamente con capital propio, 
                  sin pedirte anticipos ni comprometer tu flujo de caja.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          
        </div>
      </div>
    </section>;
};
export default Contact;