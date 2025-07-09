import { useState, useEffect } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [elementRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 4000); // 4 sekundy na opinię

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Funkcja do renderowania gwiazdek z animacją
  const renderStars = (rating: number, delay: number = 0) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 transition-all duration-300 transform ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400 scale-110 hover:scale-125' 
            : 'text-gray-600 hover:text-gray-500'
        } ${isIntersecting ? 'animate-pulse' : ''}`}
        style={{
          animationDelay: `${delay + index * 100}ms`,
          animationDuration: '1s',
          animationIterationCount: '1'
        }}
      />
    ));
  };

  // Funkcja do tworzenia avatara z inicjałami
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Kolory dla avatarów
  const avatarColors = [
    'bg-blue-500',
    'bg-green-500', 
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-red-500',
    'bg-indigo-500',
  ];

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? reviewsData.length - 1 : prev - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play po 10s
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play po 10s
  };

  // Calculate visible reviews (pokazuje 3 opinie na raz na desktop, 1 na mobile)
  const getVisibleReviews = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : 1;
    const reviews = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % reviewsData.length;
      reviews.push(reviewsData[index]);
    }
    
    return reviews;
  };

  const [visibleReviews, setVisibleReviews] = useState(getVisibleReviews);

  useEffect(() => {
    const handleResize = () => {
      setVisibleReviews(getVisibleReviews());
    };

    setVisibleReviews(getVisibleReviews());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section 
      ref={elementRef}
      id="reviews" 
      className={`py-20 bg-zinc-900 scroll-mt-24 transition-all duration-1000 transform ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 transform ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Opinie naszych klientów
          </h2>
          <p className="text-zinc-400 text-xl">
            Prawdziwe opinie z Google - zobacz co mówią nasi zadowoleni klienci
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`relative transition-all duration-1000 delay-400 transform ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50 group"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50 group"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Reviews Grid */}
          <div 
            className="flex gap-8 justify-center transition-all duration-500 ease-in-out px-16"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {visibleReviews.map((review, displayIndex) => {
              const originalIndex = (currentIndex + displayIndex) % reviewsData.length;
              
              return (
                <div
                  key={`${review.id}-${currentIndex}-${displayIndex}`}
                  className="flex-shrink-0 w-full lg:w-80 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 group"
                  style={{
                    animationDelay: `${displayIndex * 200}ms`
                  }}
                >
                  {/* Header z avatarem i danymi */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${avatarColors[originalIndex % avatarColors.length]} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                      {getInitials(review.name)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg transition-colors duration-300 group-hover:text-orange-300">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {renderStars(review.rating, displayIndex * 200)}
                        </div>
                        <span className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tekst opinii */}
                  <p className="text-zinc-300 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-zinc-200">
                    "{review.text}"
                  </p>

                  {/* Verified badge */}
                  {review.verified && (
                    <div className="flex items-center text-sm text-green-400 transition-all duration-300 group-hover:text-green-300">
                      <CheckCircle className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      <span>Zweryfikowana opinia Google</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125 shadow-lg shadow-orange-500/50' 
                    : 'bg-zinc-600 hover:bg-zinc-500 hover:scale-110'
                } ${
                  isAutoPlaying && index === currentIndex 
                    ? 'animate-pulse' 
                    : ''
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;