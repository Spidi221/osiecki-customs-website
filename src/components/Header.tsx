import { Phone } from 'lucide-react';

const Header = () => (
  <header className="bg-black/90 backdrop-blur-xl border-b border-zinc-800 sticky top-0 z-50 shadow-2xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          {/* Używamy logo 1.png - wersja negatywowa na ciemne tło */}
          <img src="/1.png" alt="Logo Osiecki Customs" className="h-12 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#uslugi" className="text-zinc-300 hover:text-orange-500 transition-all duration-300 font-medium relative group">
            Usługi
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#realizacje" className="text-zinc-300 hover:text-orange-500 transition-all duration-300 font-medium relative group">
            Realizacje
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#kontakt" className="text-zinc-300 hover:text-orange-500 transition-all duration-300 font-medium relative group">
            Kontakt
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        <a href="tel:+48123456789" className="hidden md:inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-xl font-semibold transform hover:scale-105">
          <Phone className="w-4 h-4 inline mr-2" />
          Zadzwoń
        </a>
        {/* Przycisk dla menu mobilnego (logika do dodania w przyszłości) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h16"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
