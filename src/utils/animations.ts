
import { useEffect, useState } from 'react';

// Custom hooks for animations
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const newScrollProgress = Math.min(Math.max(currentScrollPos / scrollHeight, 0), 1);
        setScrollProgress(newScrollProgress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};

// Hook to detect if element is in viewport
export const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, inView] as const;
};

// Animation timing functions
export const timingFunctions = {
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  easeOutQuint: 'cubic-bezier(0.22, 1, 0.36, 1)',
  easeInOutQuint: 'cubic-bezier(0.83, 0, 0.17, 1)',
  easeInOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)',
};

// Preset animation variants for components
export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: timingFunctions.easeOutQuint } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: timingFunctions.easeOutQuint 
      } 
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: timingFunctions.easeOutQuint 
      } 
    },
  },
  slideIn: {
    hidden: { x: '100%' },
    visible: { 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: timingFunctions.easeInOutExpo 
      } 
    },
  },
  staggerChildren: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};
