import { Paintbrush, Hammer, ShieldCheck } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const services = [
  {
    icon: <Hammer className="w-10 h-10 mb-4 text-orange-400" />,
    title: 'Blacharstwo',
    description: 'Precyzyjne naprawy blacharskie, od drobnych wgnieceń po kompleksowe rekonstrukcje powypadkowe. Stosujemy najnowsze techniki, aby przywrócić oryginalny kształt Twojego pojazdu.',
  },
  {
    icon: <Paintbrush className="w-10 h-10 mb-4 text-orange-400" />,
    title: 'Lakiernictwo',
    description: 'Profesjonalne lakierowanie z wykorzystaniem najwyższej jakości materiałów. Gwarantujemy idealne dopasowanie koloru i fabryczną jakość powłoki lakierniczej.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-orange-400" />,
    title: 'Naprawy bezgotówkowe',
    description: 'Kompleksowa obsługa szkód komunikacyjnych. Bierzemy na siebie wszystkie formalności i rozliczamy się bezpośrednio z ubezpieczycielem, abyś Ty miał spokój.',
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-zinc-900 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn direction="down">
        <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-16">
          Nasze usługi
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 150}>
            <div className="bg-black p-8 h-full rounded-2xl border border-zinc-800 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              {service.icon}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 flex-grow">{service.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Services;