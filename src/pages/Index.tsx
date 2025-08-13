import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Services />
      <Testimonials />
      <Features />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;