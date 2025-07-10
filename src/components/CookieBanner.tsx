import { useState, useEffect } from 'react';
import { Shield, X, Settings } from 'lucide-react';

interface CookieBannerProps {
  onAccept?: () => void;
}

const CookieBanner = ({ onAccept }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Sprawdź czy użytkownik już wyraził zgodę
    const cookieConsent = localStorage.getItem('osiecki-cookie-consent');
    if (!cookieConsent) {
      // Pokaż banner po krótkiej chwili
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    // Zapisz zgodę w localStorage
    localStorage.setItem('osiecki-cookie-consent', 'accepted');
    localStorage.setItem('osiecki-cookie-date', new Date().toISOString());
    
    setIsVisible(false);
    onAccept?.();
  };

  const handleReject = () => {
    // Zapisz odrzucenie
    localStorage.setItem('osiecki-cookie-consent', 'rejected');
    localStorage.setItem('osiecki-cookie-date', new Date().toISOString());
    
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl text-white p-6 z-50 border-t border-zinc-800 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        
        {!showDetails ? (
          // Podstawowy banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start">
              <Shield className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Dbamy o Twoją prywatność
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Ta strona używa tylko niezbędnych plików cookies do zapewnienia podstawowej funkcjonalności. 
                  Nie śledzimy Cię ani nie udostępniamy danych osobom trzecim.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 min-w-max">
              <button
                onClick={handleCustomize}
                className="text-zinc-400 hover:text-zinc-300 transition-colors text-sm underline"
              >
                Szczegóły
              </button>
              <button
                onClick={handleReject}
                className="border-2 border-zinc-600 text-zinc-300 px-6 py-2 rounded-lg hover:bg-zinc-800 hover:text-white transition-all font-medium"
              >
                Tylko niezbędne
              </button>
              <button
                onClick={handleAccept}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-black px-6 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all font-bold"
              >
                Akceptuję
              </button>
            </div>
          </div>
        ) : (
          // Szczegółowy widok
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Settings className="w-6 h-6 text-orange-500 mr-3" />
                Ustawienia cookies
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid gap-4">
              {/* Niezbędne cookies */}
              <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Niezbędne cookies</h4>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">WYMAGANE</span>
                </div>
                <p className="text-sm text-zinc-400 mb-3">
                  Umożliwiają podstawowe funkcje strony jak nawigacja i dostęp do bezpiecznych sekcji. 
                  Bez nich strona nie może działać poprawnie.
                </p>
                <div className="text-xs text-zinc-500">
                  <strong>Przykłady:</strong> preferencje cookies, sesja formularza, zabezpieczenia
                </div>
              </div>

              {/* Analityczne cookies */}
              <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Cookies analityczne</h4>
                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">OPCJONALNE</span>
                </div>
                <p className="text-sm text-zinc-400 mb-3">
                  Pomagają nam zrozumieć jak korzystasz ze strony, dzięki czemu możemy ją ulepszać. 
                  <strong> Obecnie nie używamy żadnych cookies analitycznych.</strong>
                </p>
                <div className="text-xs text-zinc-500">
                  <strong>Status:</strong> Wyłączone - używamy tylko Netlify Analytics (bez cookies)
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-700">
              <button
                onClick={handleReject}
                className="border-2 border-zinc-600 text-zinc-300 px-6 py-2 rounded-lg hover:bg-zinc-800 hover:text-white transition-all font-medium"
              >
                Tylko niezbędne
              </button>
              <button
                onClick={handleAccept}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-black px-6 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all font-bold"
              >
                Akceptuję wszystkie
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;