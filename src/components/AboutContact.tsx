const AboutContact = () => (
  // ZMIANA: Dodana klasa scroll-mt-24
  <section id="about" className="py-20 bg-zinc-900 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
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
        </div>
        <div>
          <div className="bg-black p-8 rounded-2xl border border-zinc-800 space-y-4">
            <h3 className="text-2xl font-bold text-white">Dane kontaktowe</h3>
            <p className="text-zinc-300">
              <strong className="text-orange-500">Adres:</strong> ul. Przykładowa 1, 00-001 Warszawa
            </p>
            <p className="text-zinc-300">
              <strong className="text-orange-500">Telefon:</strong> +48 123 456 789
            </p>
            <p className="text-zinc-300">
              <strong className="text-orange-500">Email:</strong> kontakt@osieckicustoms.pl
            </p>
            <p className="text-zinc-300">
              <strong className="text-orange-500">Godziny otwarcia:</strong> Pon-Pt: 8:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutContact;