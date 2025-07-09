const ContactForm = () => (
  // ZMIANA: Dodana klasa scroll-mt-24
  <section id="wycena" className="py-20 bg-black scroll-mt-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-900 rounded-2xl p-8 sm:p-12 border border-zinc-800">
        <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-4">
          Umów bezpłatną wycenę
        </h2>
        <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
          Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły i przedstawić ofertę.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Imię i nazwisko" className="bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
            <input type="tel" placeholder="Numer telefonu" className="bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>
          <input type="email" placeholder="Adres email" className="w-full bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          <textarea placeholder="Krótki opis szkody (marka, model, rocznik, co się stało)" rows={5} className="w-full bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
          <div className="flex items-start">
            <input id="zgoda" type="checkbox" className="h-4 w-4 text-orange-600 bg-zinc-700 border-zinc-600 rounded mt-1 focus:ring-orange-500" />
            <label htmlFor="zgoda" className="ml-3 text-sm text-zinc-400">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przedstawienia oferty.
            </label>
          </div>
          <div className="text-center pt-4">
            <button type="submit" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              Wyślij zapytanie
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;