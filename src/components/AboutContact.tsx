import { CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const AboutContact = () => (
  <section id="kontakt" className="py-24 bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Sekcja O nas */}
        <div>
          <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            Poznaj nas
          </div>
          <h2 className="text-5xl font-black text-zinc-900 mb-8">
            O <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">nas</span>
          </h2>
          <p className="text-zinc-600 mb-8 text-lg leading-relaxed">
            Osiecki Customs to warsztat blacharsko-lakierniczy z wieloletnim doświadczeniem 
            w branży motoryzacyjnej. Specjalizujemy się w bezgotówkowych naprawach powypadkowych, 
            co oznacza, że zajmujemy się wszystkimi formalnościami z Twoim ubezpieczycielem.
          </p>
          <p className="text-zinc-600 mb-10 text-lg leading-relaxed">
            Nasze doświadczenie, nowoczesne wyposażenie i współpraca z największymi 
            ubezpieczycielami w Polsce gwarantują wysoką jakość usług i komfort dla naszych klientów.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0" />
              <span className="font-bold text-zinc-700">15+ lat doświadczenia</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0" />
              <span className="font-bold text-zinc-700">Certyfikowany warsztat</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0" />
              <span className="font-bold text-zinc-700">Gwarancja na prace</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0" />
              <span className="font-bold text-zinc-700">Auto zastępcze</span>
            </div>
          </div>
        </div>
        {/* Sekcja Kontakt */}
        <div>
          <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            Skontaktuj się
          </div>
          <h2 className="text-5xl font-black text-zinc-900 mb-10">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Kontakt</span>
          </h2>
          <div className="space-y-8 mb-10">
            <div className="flex items-start bg-white p-8 rounded-2xl shadow-xl border-2 border-zinc-200 hover:border-orange-300 transition-colors">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl mr-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-black text-zinc-900 mb-2 text-lg">Adres</p>
                <p className="text-zinc-600 text-lg">ul. Przykładowa 123, 00-000 Warszawa</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-8 rounded-2xl shadow-xl border-2 border-zinc-200 hover:border-orange-300 transition-colors">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl mr-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-black text-zinc-900 mb-2 text-lg">Telefon</p>
                <p className="text-zinc-600 text-lg">+48 123 456 789</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-8 rounded-2xl shadow-xl border-2 border-zinc-200 hover:border-orange-300 transition-colors">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl mr-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-black text-zinc-900 mb-2 text-lg">Email</p>
                <p className="text-zinc-600 text-lg">kontakt@osieckicustoms.pl</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-8 rounded-2xl shadow-xl border-2 border-zinc-200 hover:border-orange-300 transition-colors">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl mr-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-black text-zinc-900 mb-2 text-lg">Godziny pracy</p>
                <p className="text-zinc-600 text-lg">Pon-Pt: 8:00-17:00, Sob: 8:00-14:00</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-2xl h-64 flex items-center justify-center shadow-xl border-2 border-zinc-300">
            <span className="text-zinc-500 text-xl font-bold">Mapa Google</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutContact;
