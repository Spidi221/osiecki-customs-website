import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const AboutContact = () => (
  <section id="about" className="py-20 bg-zinc-900 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
          Pasja i Precyzja w Każdym Detalu
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xl text-zinc-300 leading-relaxed">
            Osiecki Customs to nie tylko warsztat - to miejsce, gdzie miłość do motoryzacji łączy się z rzemieślniczą precyzją. Od ponad 8 lat przywracamy blask autom po najtrudniejszych przejściach.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Specjalizujemy się w kompleksowych naprawach powypadkowych. Nasz zespół to wykwalifikowani specjaliści, którzy traktują każde auto jak własne. Korzystamy z nowoczesnego sprzętu i najlepszych materiałów, co pozwala nam gwarantować najwyższą jakość usług.
          </p>
        </div>
      </div>

      {/* Contact & Map Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Phone className="w-6 h-6 text-orange-500 mr-3" />
              Dane kontaktowe
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Adres warsztatu</p>
                  <p className="text-zinc-300">ul. Grójecka 56</p>
                  <p className="text-zinc-300">05-530 Góra Kalwaria</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-500 mr-4" />
                <div>
                  <p className="text-white font-semibold mb-1">Telefon</p>
                  <a 
                    href="tel:+48123456789" 
                    className="text-zinc-300 hover:text-orange-400 transition-colors text-lg"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-orange-500 mr-4" />
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a 
                    href="mailto:kontakt@osieckicustoms.pl" 
                    className="text-zinc-300 hover:text-orange-400 transition-colors"
                  >
                    kontakt@osieckicustoms.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-2">Godziny otwarcia</p>
                  <div className="space-y-1 text-zinc-300">
                    <p>Poniedziałek - Piątek: <span className="text-white font-semibold">7:00 - 17:00</span></p>
                    <p>Sobota: <span className="text-zinc-500">zamknięte</span></p>
                    <p>Niedziela: <span className="text-zinc-500">zamknięte</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="space-y-6">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-orange-500 mr-3" />
              Jak do nas dotrzeć
            </h3>
            
            {/* Map Container z prawdziwą lokalizacją */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-700">
              <div className="aspect-[4/3]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.8800896284524!2d21.198114775691874!3d51.97261087661338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718d9fe96325915%3A0x32f86d06020dca88!2sOsiecki%20Customs!5e0!3m2!1spl!2spl!4v1752053328452!5m2!1spl!2spl"
                  className="w-full h-full border-0 filter brightness-90 contrast-110"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Osiecki Customs - Góra Kalwaria"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutContact;