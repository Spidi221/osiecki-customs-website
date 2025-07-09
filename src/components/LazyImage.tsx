import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholderClassName = '' 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px', // Zacznij ładować 50px przed pojawieniem się
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      ref={elementRef} 
      className={`relative overflow-hidden ${className}`}
    >
      {/* Placeholder - pokazuje się gdy obrazek się jeszcze nie załadował */}
      {!imageLoaded && !imageError && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse flex items-center justify-center ${placeholderClassName}`}
        >
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error placeholder */}
      {imageError && (
        <div className={`absolute inset-0 bg-zinc-800 flex items-center justify-center ${placeholderClassName}`}>
          <div className="text-zinc-500 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Błąd ładowania</p>
          </div>
        </div>
      )}

      {/* Właściwy obrazek - ładuje się tylko gdy jest widoczny */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy" // Dodatkowa natywna optymalizacja przeglądarki
        />
      )}
    </div>
  );
};

export default LazyImage;