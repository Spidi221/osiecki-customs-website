import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ZMIANA: Dodane klasy responsywne. Na mobile (domyślnie) jest justify-between, na desktop (md:) jest justify-center */}
        <div className="flex items-center justify-between md:justify-center h-24 md:gap-12">
          
          {/* Logo - zawsze widoczne */}
          <a href="#" className="flex-shrink-0">
            {/* ZMIANA: Przywrócony duży rozmiar logo */}
            <img className="h-40 w-auto" src="/logo.png" alt="Osiecki Customs Logo" />
          </a>

          {/* Nawigacja na dużych ekranach - ukryta na mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">Usługi</a>
            <a href="#portfolio" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">Realizacje</a>
            <a href="#process" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">Proces</a>
            <a href="#about" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">O nas</a>
          </nav>

          {/* Przycisk CTA na dużych ekranach - ukryty na mobile */}
          <div className="hidden md:block">
            <a href="#wycena" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-black bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Wyceń naprawę
            </a>
          </div>

          {/* Przycisk Hamburger Menu na małych ekranach - ukryty na desktop */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Rozwijane menu mobilne - bez zmian */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center gap-6 pt-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white hover:text-orange-500">Usługi</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white hover:text-orange-500">Realizacje</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white hover:text-orange-500">Proces</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-white hover:text-orange-500">O nas</a>
            <a href="#wycena" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-lg font-bold text-black bg-gradient-to-r from-orange-500 to-red-500">
              Wyceń naprawę
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;