import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track active section during scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'portfolio', 'reviews', 'process', 'about', 'wycena'];
      const scrollPosition = window.scrollY + 150; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Reset if at top of page
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-24 md:gap-12">
          
          {/* Logo - zawsze widoczne */}
          <a href="#" className="flex-shrink-0">
            <img className="h-40 w-auto" src="/logo.png" alt="Osiecki Customs Logo" />
          </a>

          {/* Nawigacja na dużych ekranach - ukryta na mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              className={`text-xl font-medium transition-all duration-300 relative group ${
                isActive('services') 
                  ? 'text-orange-500' 
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Usługi
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isActive('services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            
            <a 
              href="#portfolio" 
              className={`text-xl font-medium transition-all duration-300 relative group ${
                isActive('portfolio') 
                  ? 'text-orange-500' 
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Realizacje
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isActive('portfolio') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>

            <a 
              href="#reviews" 
              className={`text-xl font-medium transition-all duration-300 relative group ${
                isActive('reviews') 
                  ? 'text-orange-500' 
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Opinie
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isActive('reviews') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            
            <a 
              href="#process" 
              className={`text-xl font-medium transition-all duration-300 relative group ${
                isActive('process') 
                  ? 'text-orange-500' 
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Proces
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isActive('process') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            
            <a 
              href="#about" 
              className={`text-xl font-medium transition-all duration-300 relative group ${
                isActive('about') 
                  ? 'text-orange-500' 
                  : 'text-white hover:text-orange-500'
              }`}
            >
              O nas
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isActive('about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          </nav>

          {/* Przycisk CTA na dużych ekranach - ukryty na mobile */}
          <div className="hidden md:block">
            <a 
              href="#wycena" 
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-bold transition-all duration-300 transform hover:scale-105 ${
                isActive('wycena')
                  ? 'text-black bg-gradient-to-r from-orange-400 to-red-400'
                  : 'text-black bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
              }`}
            >
              Wyceń naprawę
            </a>
          </div>

          {/* Przycisk Hamburger Menu na małych ekranach - ukryty na desktop */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-transform duration-300"
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Rozwijane menu mobilne z animacjami */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-black/95 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center gap-6 pt-4">
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-xl font-medium transition-all duration-300 ${
                isActive('services') ? 'text-orange-500' : 'text-white hover:text-orange-500'
              }`}
            >
              Usługi
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-xl font-medium transition-all duration-300 ${
                isActive('portfolio') ? 'text-orange-500' : 'text-white hover:text-orange-500'
              }`}
            >
              Realizacje
            </a>
            <a 
              href="#reviews" 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-xl font-medium transition-all duration-300 ${
                isActive('reviews') ? 'text-orange-500' : 'text-white hover:text-orange-500'
              }`}
            >
              Opinie
            </a>
            <a 
              href="#process" 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-xl font-medium transition-all duration-300 ${
                isActive('process') ? 'text-orange-500' : 'text-white hover:text-orange-500'
              }`}
            >
              Proces
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-xl font-medium transition-all duration-300 ${
                isActive('about') ? 'text-orange-500' : 'text-white hover:text-orange-500'
              }`}
            >
              O nas
            </a>
            <a 
              href="#wycena" 
              onClick={() => setIsMenuOpen(false)} 
              className="mt-4 inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-lg font-bold text-black bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 hover:from-orange-600 hover:to-red-600"
            >
              Wyceń naprawę
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;