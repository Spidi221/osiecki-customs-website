import { useEffect, useState, useRef, RefObject } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit): [RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Po wykryciu, przestajemy obserwować, żeby animacja odpaliła się tylko raz
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      }
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};