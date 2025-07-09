import React from 'react';
// ZMIANA: Importujemy nasz własny hak zamiast paczki z npm
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  // ZMIANA: Używamy naszego haka. Możemy wrócić do progu 0.1
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
  });

  const getTransform = () => {
    if (inView) return 'translate-y-0 translate-x-0';
    switch (direction) {
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      case 'up':
      default: return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${inView ? 'opacity-100' : 'opacity-0'} ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;