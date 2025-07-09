import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import LazyImage from './LazyImage';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  // Wykryj czy to urządzenie mobilne
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault(); // Zapobiegnij dzwonieniu na desktop
      setShowPhoneNumber(!showPhoneNumber);
    }
    // Na mobile pozwól na normalne działanie tel: linku
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-red-600/5"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 25% 25%, orange 0%, transparent 50%), radial-gradient(circle at 75% 75%, red 0%, transparent 50%)`, opacity: 0.1 }}></div>
      </div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-400 text-sm font-semibold px-6 py-3 rounded-full border border-orange-500/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" />
              Polecany warsztat blacharsko-lakierniczy
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">Bezgotówkowe</span><br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">naprawy</span><br />
                <span className="text-white">powypadkowe</span>
              </h1>
            </div>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
              Rozliczamy szkodę bezpośrednio z Twoim ubezpieczycielem, zdejmując z Ciebie ciężar formalności. Zaufaj naszemu doświadczeniu i nowoczesnym technologiom – przywrócimy Twoje auto do perfekcyjnego stanu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#wycena" className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/25">
                <span className="relative z-10">Umów wycenę</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              {/* Inteligentny przycisk telefonu */}
              <div className="relative">
                <a 
                  href="tel:+48607550305" 
                  onClick={handlePhoneClick}
                  className="group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-orange-500 hover:text-black relative overflow-hidden block text-center"
                >
                  <span className="relative z-10">
                    {isMobile ? 'Zadzwoń teraz' : (showPhoneNumber ? '+48 607 550 305' : 'Zadzwoń teraz')}
                  </span>
                  <div className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </a>
                
                {/* Tooltip na desktop */}
                {!isMobile && !showPhoneNumber && (
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                      Kliknij aby zobaczyć numer
                    </div>
                  </div>
                )}
                
                {/* Dodatkowa informacja gdy numer jest pokazany na desktop */}
                {!isMobile && showPhoneNumber && (
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                      Skopiuj numer
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-zinc-800">
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">8+</div>
                <div className="text-sm text-zinc-400 font-medium">lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-zinc-400 font-medium">napraw rocznie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-zinc-400 font-medium">zadowolonych klientów</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-zinc-900 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center shadow-2xl border border-zinc-700 overflow-hidden">
               <div className="absolute inset-0 w-full h-full opacity-70 transition-opacity duration-300 hover:opacity-90">
                 <LazyImage 
                   src="/Malowanie_converted.png" 
                   alt="Lakiernik Osiecki Customs w trakcie pracy nad elementem samochodu" 
                   className="w-full h-full object-cover"
                   width={600}
                   height={500}
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;