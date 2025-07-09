const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center h-24 gap-12">

        {/* Logo */}
        <a href="#">
          <img className="h-40 w-auto" src="/logo.png" alt="Osiecki Customs Logo" />
        </a>

        {/* Nawigacja */}
        <nav className="hidden md:flex gap-8">
          {/* ZMIANA: Zwiększona czcionka z text-lg na text-xl */}
          <a href="#services" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">Usługi</a>
          <a href="#portfolio" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">Realizacje</a>
          <a href="#process" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">Proces</a>
          <a href="#about" className="text-xl font-medium text-white hover:text-orange-500 transition-colors duration-300">O nas</a>
        </nav>

        {/* Przycisk CTA */}
        <div className="hidden md:block">
          <a href="#wycena" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-black bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Wyceń naprawę
          </a>
        </div>
        
      </div>
    </div>
  </header>
);

export default Header;