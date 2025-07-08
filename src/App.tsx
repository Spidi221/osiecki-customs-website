import React, { useState, useEffect } from 'react';

// Importujemy wszystkie nasze komponenty. Błędy powinny teraz zniknąć!
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const App = () => {
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    useEffect(() => {
        // Import czcionki Inter
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
        document.body.style.fontFamily = "'Inter', sans-serif";

        // Logika banera cookies
        // Używamy setTimeout, aby baner nie pojawiał się natychmiast, co jest lepsze dla UX
        const timer = setTimeout(() => {
            if (!localStorage.getItem('cookie_consent')) {
                setShowCookieBanner(true);
            }
        }, 2000); // Pokaż baner po 2 sekundach

        return () => clearTimeout(timer);
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShowCookieBanner(false);
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-white">
          <Header />
          <main>
              <Hero />
              <Process />
              <Services />
              <Portfolio />
              <ContactForm />
              <AboutContact />
          </main>
          <Footer />
          {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
        </div>
    );
};

export default App;
