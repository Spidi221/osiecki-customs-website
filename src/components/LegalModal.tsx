import { useState, useEffect } from 'react';
import { X, Shield, FileText, Scale } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'rodo';
}

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  const [activeTab, setActiveTab] = useState(type);

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getTabIcon = (tabType: string) => {
    switch (tabType) {
      case 'privacy': return <Shield className="w-4 h-4" />;
      case 'terms': return <Scale className="w-4 h-4" />;
      case 'rodo': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTabTitle = (tabType: string) => {
    switch (tabType) {
      case 'privacy': return 'Polityka Prywatności';
      case 'terms': return 'Regulamin';
      case 'rodo': return 'Informacje RODO';
      default: return 'Dokument';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Polityka Prywatności</h2>
            
            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">1. Informacje ogólne</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Administratorem Twoich danych osobowych jest <strong>Osiecki Customs</strong> z siedzibą przy ul. Papczyńskiego 1A, 05-530 Góra Kalwaria, NIP: 1231400958.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Kontakt: <a href="mailto:kontakt@osieckicustoms.pl" className="text-orange-500 hover:text-orange-400">kontakt@osieckicustoms.pl</a>, tel. +48 607 550 305
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">2. Jakie dane zbieramy</h3>
              <ul className="text-zinc-300 space-y-2 leading-relaxed">
                <li>• Imię i nazwisko</li>
                <li>• Adres email</li>
                <li>• Numer telefonu</li>
                <li>• Treść wiadomości</li>
                <li>• Zdjęcia uszkodzeń (opcjonalnie)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">3. Cel przetwarzania</h3>
              <p className="text-zinc-300 leading-relaxed">
                Twoje dane przetwarzamy w celu przygotowania i przedstawienia oferty naprawy powypadkowej oraz kontaktu z Tobą w sprawie usług naszego warsztatu.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">4. Podstawa prawna</h3>
              <p className="text-zinc-300 leading-relaxed">
                Przetwarzanie odbywa się na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO) oraz w celu realizacji umowy lub działań przedumownych (art. 6 ust. 1 lit. b RODO).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">5. Okres przechowywania</h3>
              <p className="text-zinc-300 leading-relaxed">
                Dane przechowujemy przez okres niezbędny do realizacji usługi, nie dłużej niż 3 lata od ostatniego kontaktu, chyba że przepisy prawa nakazują dłuższe przechowywanie.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">6. Twoje prawa</h3>
              <ul className="text-zinc-300 space-y-2 leading-relaxed">
                <li>• Prawo dostępu do danych</li>
                <li>• Prawo do sprostowania danych</li>
                <li>• Prawo do usunięcia danych</li>
                <li>• Prawo do ograniczenia przetwarzania</li>
                <li>• Prawo do przenoszenia danych</li>
                <li>• Prawo do wycofania zgody</li>
                <li>• Prawo do wniesienia skargi do UODO</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">7. Cookies</h3>
              <p className="text-zinc-300 leading-relaxed">
                Strona używa tylko niezbędnych plików cookies do zapewnienia podstawowej funkcjonalności. Nie stosujemy cookies reklamowych ani śledzących.
              </p>
            </section>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Regulamin Usług</h2>
            
            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">1. Postanowienia ogólne</h3>
              <p className="text-zinc-300 leading-relaxed">
                Niniejszy regulamin określa zasady korzystania ze strony internetowej oraz zasady świadczenia usług przez Osiecki Customs.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">2. Definicje</h3>
              <ul className="text-zinc-300 space-y-2 leading-relaxed">
                <li>• <strong>Usługodawca:</strong> Osiecki Customs, ul. Grójecka 56, 05-530 Góra Kalwaria</li>
                <li>• <strong>Usługobiorca:</strong> osoba korzystająca z usług warsztatu</li>
                <li>• <strong>Strona:</strong> serwis internetowy osieckicustoms.pl</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">3. Zakres usług</h3>
              <ul className="text-zinc-300 space-y-2 leading-relaxed">
                <li>• Naprawy blacharsko-lakiernicze</li>
                <li>• Naprawy powypadkowe</li>
                <li>• Obsługa szkód ubezpieczeniowych</li>
                <li>• Wyceny i doradztwo techniczne</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">4. Zasady współpracy</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Współpraca rozpoczyna się od złożenia zapytania poprzez formularz kontaktowy lub kontakt telefoniczny. Po wstępnej wycenie ustalamy szczegóły naprawy.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Ostateczna wycena zostanie przedstawiona po oględzinach pojazdu. Ceny mogą ulec zmianie w przypadku wykrycia dodatkowych uszkodzeń.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">5. Płatności</h3>
              <p className="text-zinc-300 leading-relaxed">
                Oferujemy rozliczenia bezgotówkowe z ubezpieczycielami. W przypadku napraw płatnych, płatność następuje po wykonaniu usługi.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">6. Gwarancja</h3>
              <p className="text-zinc-300 leading-relaxed">
                Na wykonane usługi udzielamy gwarancji zgodnie z obowiązującymi przepisami prawa. Szczegóły gwarancji określamy indywidualnie dla każdej naprawy.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">7. Odpowiedzialność</h3>
              <p className="text-zinc-300 leading-relaxed">
                Usługodawca ponosi odpowiedzialność za wykonane usługi zgodnie z obowiązującym prawem. Nie ponosimy odpowiedzialności za szkody powstałe wskutek nieprawidłowego użytkowania pojazdu po naprawie.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">8. Postanowienia końcowe</h3>
              <p className="text-zinc-300 leading-relaxed">
                W sprawach nieuregulowanych w niniejszym regulaminie zastosowanie mają przepisy Kodeksu Cywilnego oraz inne właściwe przepisy prawa polskiego.
              </p>
            </section>
          </div>
        );

      case 'rodo':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Informacje RODO</h2>
            
            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">Administrator danych</h3>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <p className="text-zinc-300 leading-relaxed">
                  <strong>Osiecki Customs</strong><br />
                  ul. Papczyńskiego 1A<br />
                  05-530 Góra Kalwaria<br />
                  NIP: 1231400958<br />
                  REGON: 380465813<br />
                  Email: kontakt@osieckicustoms.pl<br />
                  Tel: +48 607 550 305
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">Cele przetwarzania danych</h3>
              <ul className="text-zinc-300 space-y-2 leading-relaxed">
                <li>• Przygotowanie i przedstawienie oferty</li>
                <li>• Kontakt w sprawie usług</li>
                <li>• Realizacja umowy serwisowej</li>
                <li>• Rozliczenia z ubezpieczycielami</li>
                <li>• Wywiązywanie się z obowiązków prawnych</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">Podstawy prawne</h3>
              <ul className="text-zinc-300 space-y-2 leading-relaxed">
                <li>• <strong>Art. 6 ust. 1 lit. a RODO</strong> - zgoda (formularz kontaktowy)</li>
                <li>• <strong>Art. 6 ust. 1 lit. b RODO</strong> - wykonanie umowy</li>
                <li>• <strong>Art. 6 ust. 1 lit. c RODO</strong> - obowiązek prawny</li>
                <li>• <strong>Art. 6 ust. 1 lit. f RODO</strong> - prawnie uzasadniony interes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">Odbiorcy danych</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Twoje dane mogą być przekazywane:
              </p>
              <ul className="text-zinc-300 space-y-2 leading-relaxed">
                <li>• Ubezpieczycielom (w celu rozliczenia szkody)</li>
                <li>• Dostawcom części (w celu realizacji naprawy)</li>
                <li>• Organom państwowym (na żądanie w ramach obowiązków prawnych)</li>
                <li>• Dostawcom usług IT (hosting, poczta elektroniczna)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">Twoje prawa</h3>
              <div className="grid gap-3">
                <div className="bg-zinc-800 p-3 rounded">
                  <strong className="text-white">Prawo dostępu</strong>
                  <p className="text-zinc-400 text-sm mt-1">Możesz żądać informacji o przetwarzanych danych</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <strong className="text-white">Prawo do sprostowania</strong>
                  <p className="text-zinc-400 text-sm mt-1">Możesz żądać poprawienia nieprawidłowych danych</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <strong className="text-white">Prawo do usunięcia</strong>
                  <p className="text-zinc-400 text-sm mt-1">Możesz żądać usunięcia danych (z uwzględnieniem ograniczeń prawnych)</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <strong className="text-white">Prawo do przenoszenia</strong>
                  <p className="text-zinc-400 text-sm mt-1">Możesz otrzymać dane w ustrukturyzowanym formacie</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <strong className="text-white">Prawo wniesienia skargi</strong>
                  <p className="text-zinc-400 text-sm mt-1">Możesz złożyć skargę do Prezesa UODO</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">Kontakt w sprawie RODO</h3>
              <div className="bg-orange-900/20 border border-orange-500/30 p-4 rounded-lg">
                <p className="text-zinc-300 leading-relaxed">
                  W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami:<br />
                  📧 <a href="mailto:kontakt@osieckicustoms.pl" className="text-orange-400 hover:text-orange-300">kontakt@osieckicustoms.pl</a><br />
                  📞 <a href="tel:+48607550305" className="text-orange-400 hover:text-orange-300">+48 607 550 305</a>
                </p>
              </div>
            </section>
          </div>
        );

      default:
        return <div>Wybierz dokument z menu powyżej</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl border border-zinc-700 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <div className="flex items-center space-x-4">
            {getTabIcon(activeTab)}
            <h1 className="text-xl font-bold text-white">{getTabTitle(activeTab)}</h1>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-700 px-6">
          {[
            { key: 'privacy', label: 'Polityka Prywatności', icon: Shield },
            { key: 'terms', label: 'Regulamin', icon: Scale },
            { key: 'rodo', label: 'RODO', icon: FileText }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === key
                  ? 'text-orange-500 border-orange-500'
                  : 'text-zinc-400 border-transparent hover:text-zinc-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{key === 'privacy' ? 'Polityka' : key === 'terms' ? 'Regulamin' : 'RODO'}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-700 p-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-500">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-black px-6 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all font-medium"
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;