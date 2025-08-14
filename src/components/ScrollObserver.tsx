import { useEffect, useRef } from 'react';

interface ScrollObserverProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollObserver = ({ children, className = '' }: ScrollObserverProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Find all animated elements within this container
            const animatedElements = element.querySelectorAll([
              '.fade-in-up',
              '.fade-in-down', 
              '.fade-in-left',
              '.fade-in-right',
              '.slide-in-left',
              '.slide-in-right',
              '.scale-in',
              '.zoom-in',
              '.float-in',
              '.rotate-in'
            ].join(', '));

            // Add animate class to trigger animations
            animatedElements.forEach((animatedElement, index) => {
              setTimeout(() => {
                animatedElement.classList.add('animate');
              }, index * 50); // Slight stagger for multiple elements
            });

            // Also animate the main element if it has animation classes
            if (element.classList.contains('fade-in-up') || 
                element.classList.contains('fade-in-down') ||
                element.classList.contains('fade-in-left') || 
                element.classList.contains('fade-in-right') ||
                element.classList.contains('slide-in-left') ||
                element.classList.contains('slide-in-right') ||
                element.classList.contains('scale-in') ||
                element.classList.contains('zoom-in') ||
                element.classList.contains('float-in') ||
                element.classList.contains('rotate-in')) {
              element.classList.add('animate');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollObserver;