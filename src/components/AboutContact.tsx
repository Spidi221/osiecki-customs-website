import FadeIn from './animations/FadeIn';

const AboutContact = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Pasja i Precyzja w Każdym Detalu
              </h2>
              <p className="text-xl text-zinc-300">
                Osiecki Customs to nie tylko warsztat - to miejsce, gdzie miłość do motoryzacji łączy się z rzemieślniczą precyzją. Od ponad 8 lat przywracamy blask autom po najtrudniejszych przejściach.
              </p>
              <p className="text-zinc-400">
                Specjalizujemy się w kompleksowych naprawach powypadkowych. Nasz zespół to wykwalifikowani specjaliści, którzy traktują każde auto jak własne. Korzystamy z nowoczesnego sprzętu i najlepszych materiałów, co pozwala nam gwarantować najwyższą jakość usług.
              </p>
              <p className="text-zinc-400">
                Obsługujemy klientów z całego regionu - oprócz Góry Kalwarii, regularnie wykonujemy naprawy dla mieszkańców Piaseczna, Konstancina-Jeziorny, Grójca, Otwocka, Karczewa, Warki, Celestynowa i Chynowa. Niezależnie od miejscowości, gwarantujemy ten sam wysoki standard usług.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={150}>
            <div className="bg-black p-8 rounded-2xl border border-zinc-800 space-y-4">
              <h3 className="text-2xl font-bold text-white">Dane kontaktowe</h3>
              <div className="text-zinc-300 space-y-2">
                <p><strong className="text-orange-500">Adres:</strong> ul. Grójecka 56, 05-530 Góra Kalwaria</p>
                <p><strong className="text-orange-500">Telefon:</strong> +48 607 550 305</p>
                <p><strong className="text-orange-500">Email:</strong> kontakt@osieckicustoms.pl</p>
              </div>
              <div className="h-64 mt-4 rounded-lg overflow-hidden border-2 border-zinc-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.970839012428!2d21.21896167709975!3d51.98381887192499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193b236456c669%3A0xe5a3458b93836263!2sGr%C3%B3jecka%2056%2C%2005-530%20G%C3%B3ra%20Kalwaria!5e0!3m2!1spl!2spl!4v1720536294523!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji Osiecki Customs - ul. Grójecka 56, Góra Kalwaria"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;