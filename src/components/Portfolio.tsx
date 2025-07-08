import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Dane do galerii. W Etapie 4 podmienimy je na Twoje zdjęcia.
const galleryData = [
  { before: '/api/placeholder/400/300', after: '/api/placeholder/400/300', title: 'Naprawa drzwi po kolizji' },
  { before: '/api/placeholder/400/300', after: '/api/placeholder/400/300', title: 'Wymiana maski i zderzaka' },
  { before: '/api/placeholder/400/300', after: '/api/placeholder/400/300', title: 'Lakierowanie całego pojazdu' },
  { before: '/api/placeholder/400/300', after: '/api/placeholder/400/300', title: 'Naprawa tylnego błotnika' },
];

const Portfolio = () => {
  const [lightboxImage, setLightboxImage] = useState<{ type: 'before' | 'after', index: number } | null>(null);

  const openLightbox = (imageType: 'before' | 'after', index: number) => {
    setLightboxImage({ type: imageType, index });
  };

  const closeLightbox = () => setLightboxImage(null);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightboxImage) return;

    const maxIndex = galleryData.length - 1;
    let newIndex = lightboxImage.index;

    if (direction === 'next') {
      newIndex = lightboxImage.index === maxIndex ? 0 : lightboxImage.index + 1;
    } else {
      newIndex = lightboxImage.index === 0 ? maxIndex : lightboxImage.index - 1;
    }
    setLightboxImage({ type: lightboxImage.type, index: newIndex });
  };

  return (
    <>
      <section id="realizacje" className="py-24 bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Portfolio
            </div>
            <h2 className="text-5xl font-black text-zinc-900 mb-6">
              Nasze <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">realizacje</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Zobacz transformacje, które wykonaliśmy dla naszych klientów
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {galleryData.map((image, index) => (
              <div key={index} className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-white border-2 border-zinc-200">
                  <img 
                    src={image.before} 
                    alt={`${image.title} - przed naprawą`}
                    className="w-full h-56 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                    onClick={() => openLightbox('before', index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-bold bg-zinc-900/70 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                      PRZED
                    </span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-white border-2 border-zinc-200">
                  <img 
                    src={image.after} 
                    alt={`${image.title} - po naprawie`}
                    className="w-full h-56 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                    onClick={() => openLightbox('after', index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-bold bg-orange-600/70 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                      PO
                    </span>
                  </div>
                </div>
                
                <h3 className="font-bold text-zinc-900 text-lg text-center">{image.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute -top-14 right-0 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 z-10 transition-colors"><X className="w-8 h-8" /></button>
            <button onClick={() => navigateLightbox('prev')} className="absolute left-0 sm:-left-16 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 z-10 transition-colors"><ChevronLeft className="w-8 h-8" /></button>
            <button onClick={() => navigateLightbox('next')} className="absolute right-0 sm:-right-16 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 z-10 transition-colors"><ChevronRight className="w-8 h-8" /></button>
            <img 
              src={lightboxImage.type === 'before' ? galleryData[lightboxImage.index].before : galleryData[lightboxImage.index].after} 
              alt={`${galleryData[lightboxImage.index].title} - ${lightboxImage.type === 'before' ? 'przed' : 'po'}`} 
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/80 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-bold text-md">{galleryData[lightboxImage.index].title}</span>
              <span className="text-orange-400 ml-3 text-md">- {lightboxImage.type === 'before' ? 'przed' : 'po'}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
