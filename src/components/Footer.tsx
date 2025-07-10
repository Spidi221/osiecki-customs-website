import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'rodo'>('privacy');

  const openModal = (type: 'privacy' | 'terms' | 'rodo') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 25% 75%, orange 0%, transparent 50%), radial-gradient(circle at 75% 25%, red 0%, transparent 50%)`, opacity: 0.03 }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="flex flex-col">
              <img src="/logo.png" alt="Logo Osiecki Customs" className="h-48 w-auto max-w-48 mb-0" />
              <div className="text-zinc-500 text-sm space-y-2">
                <p className="font-semibold">NIP: 1231400958</p>
                <p className="font-semibold">REGON: 380465813</p>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-8 text-white text-xl">Przydatne linki</h4>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <button 
                    onClick={() => openModal('privacy')}
                    className="hover:text-orange-500 transition-colors flex items-center group text-lg w-full text-left"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    Polityka prywatności
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('terms')}
                    className="hover:text-orange-500 transition-colors flex items-center group text-lg w-full text-left"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    Regulamin
                  </button>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-500 transition-colors flex items-center group text-lg">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    Usługi
                  </a>
                </li>
                <li>
                  <a href="#wycena" className="hover:text-orange-500 transition-colors flex items-center group text-lg">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 text-white text-xl">Kontakt</h4>
              <div className="space-y-6 text-zinc-400">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-500 mr-4" />
                  <a href="tel:+48607550305" className="text-lg hover:text-orange-500 transition-colors">
                    +48 607 550 305
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-500 mr-4" />
                  <a href="mailto:kontakt@osieckicustoms.pl" className="text-lg hover:text-orange-500 transition-colors">
                    kontakt@osieckicustoms.pl
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-orange-500 mr-4 mt-1" />
                  <span className="text-lg">ul. Grójecka 56<br />05-530 Góra Kalwaria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-16 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-zinc-400 text-lg">
                &copy; {new Date().getFullYear()} Osiecki Customs. Wszystkie prawa zastrzeżone.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => openModal('rodo')}
                  className="text-zinc-600 hover:text-orange-500 text-sm transition-colors underline"
                >
                  Informacje RODO
                </button>
                <p className="text-zinc-600 text-sm">
                  Strona wykonana z pasją do motoryzacji 🚗
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </>
  );
};

export default Footer;