import { Car, Settings, Palette, Truck, Shield } from 'lucide-react';

const servicesData = [
    { icon: Settings, title: 'Blacharstwo', description: 'Profesjonalne naprawy karoserii i usuwanie wgnieceń' },
    { icon: Palette, title: 'Lakiernictwo', description: 'Malowanie i odnowa lakieru z gwarancją jakości' },
    { icon: Shield, title: 'Bezgotówkowe naprawy', description: 'Rozliczenie bezpośrednio z ubezpieczycielem' },
    { icon: Truck, title: 'Lawetowanie', description: 'Transport uszkodzonego pojazdu do warsztatu' },
    { icon: Car, title: 'Auto zastępcze', description: 'Pojazd na czas naprawy bez dodatkowych kosztów' }
];

const Services = () => (
  <section id="uslugi" className="py-24 bg-zinc-900 relative overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 20% 80%, orange 0%, transparent 50%), radial-gradient(circle at 80% 20%, red 0%, transparent 50%)`, opacity: 0.05 }}></div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-block bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-orange-500/30">
          Nasze specjalizacje
        </div>
        <h2 className="text-5xl font-black text-white mb-6">
          Kompleksowe <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">usługi</span>
        </h2>
        <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
          Wszystko czego potrzebujesz w jednym miejscu
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="group relative">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-orange-500 mb-6 transform group-hover:scale-110 group-hover:text-red-500 transition-all duration-300">
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
