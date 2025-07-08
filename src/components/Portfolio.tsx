import { galleryData } from '../data/galleryData';

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ZMIANA: Usunięta etykieta nad nagłówkiem, zgodnie z Etapem 3 */}
      <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-16">
        Nasze realizacje
      </h2>
      
      {/* ZMIANA: Dynamiczne renderowanie galerii z pliku danych */}
      <div className="space-y-16">
        {galleryData.map((item) => (
          <div key={item.id} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sekcja PRZED */}
              <div className="flex flex-col">
                <div className="relative">
                  <img src={item.beforeSrc} alt={`Przed naprawą: ${item.title}`} className="w-full h-80 object-cover rounded-xl border-2 border-red-500/50" />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">PRZED</div>
                </div>
              </div>
              {/* Sekcja PO */}
              <div className="flex flex-col">
                <div className="relative">
                  <img src={item.afterSrc} alt={`Po naprawie: ${item.title}`} className="w-full h-80 object-cover rounded-xl border-2 border-green-500/50" />
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">PO</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;