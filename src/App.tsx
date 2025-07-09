import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Process from './components/Process';
import AboutContact from './components/AboutContact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// import CookieBanner from './components/CookieBanner'; // Na razie wyłączone

function App() {
  return (
    <>
      <Header />
      {/* ZMIANA: Dodajemy div, który "odpycha" treść od góry o wysokość headera */}
      <main className="pt-24 bg-black">
        <Hero />
        <Services />
        <Portfolio />
        <Reviews />
        <Process />
        <AboutContact />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
      {/* <CookieBanner /> */}
    </>
  );
}

export default App;