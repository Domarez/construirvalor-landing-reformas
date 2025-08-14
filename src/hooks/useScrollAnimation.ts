import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animationClasses = [
      'fade-in-up',
      'fade-in-down', 
      'fade-in-left',
      'fade-in-right',
      'slide-in-left',
      'slide-in-right',
      'scale-in',
      'zoom-in',
      'float-in',
      'rotate-in'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Check if element has any animation class
            const hasAnimationClass = animationClasses.some(className => 
              element.classList.contains(className)
            );
            
            if (hasAnimationClass) {
              // Add small delay based on stagger classes
              let delay = 0;
              if (element.classList.contains('stagger-1')) delay = 100;
              else if (element.classList.contains('stagger-2')) delay = 200;
              else if (element.classList.contains('stagger-3')) delay = 300;
              else if (element.classList.contains('stagger-4')) delay = 400;
              else if (element.classList.contains('stagger-5')) delay = 500;
              else if (element.classList.contains('stagger-6')) delay = 600;

              setTimeout(() => {
                element.classList.add('animate');
              }, delay);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      animationClasses.map(className => `.${className}`).join(', ')
    );

    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export default useScrollAnimation;