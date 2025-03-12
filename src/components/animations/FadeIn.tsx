
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 700,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '10px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getDirectionStyles = (): React.CSSProperties => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return { transform: 'translateY(20px)', opacity: 0 };
        case 'down':
          return { transform: 'translateY(-20px)', opacity: 0 };
        case 'left':
          return { transform: 'translateX(20px)', opacity: 0 };
        case 'right':
          return { transform: 'translateX(-20px)', opacity: 0 };
        case 'none':
          return { opacity: 0 };
        default:
          return { transform: 'translateY(20px)', opacity: 0 };
      }
    }
    return { transform: 'translate(0)', opacity: 1 };
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...getDirectionStyles(),
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
