import { useState, useEffect } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 4000); // 4 sekundy na opinię

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Funkcja do renderowania gwiazdek
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-600'
        }`}
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
    <section id="reviews" className="py-20 bg-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Opinie naszych klientów
          </h2>
          <p className="text-zinc-400 text-xl">
            Prawdziwe opinie z Google - zobacz co mówią nasi zadowoleni klienci
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
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
                  className="flex-shrink-0 w-full lg:w-80 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Header z avatarem i danymi */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${avatarColors[originalIndex % avatarColors.length]} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {getInitials(review.name)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-zinc-400 text-sm">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tekst opinii */}
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    "{review.text}"
                  </p>

                  {/* Verified badge */}
                  {review.verified && (
                    <div className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
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
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-zinc-600 hover:bg-zinc-500'
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