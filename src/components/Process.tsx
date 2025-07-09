import { Wrench, Car, FileText, Smile } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const steps = [
  {
    icon: <FileText className="w-12 h-12 text-orange-500" />,
    title: 'Wycena i formalności',
    description: 'Kontaktujesz się z nami, a my zajmujemy się oceną szkody i wszystkimi dokumentami dla ubezpieczyciela.',
  },
  {
    icon: <Wrench className="w-12 h-12 text-orange-500" />,
    title: 'Profesjonalna naprawa',
    description: 'Nasi specjaliści przystępują do pracy, wykorzystując najnowsze technologie i najwyższej jakości materiały.',
  },
  {
    icon: <Car className="w-12 h-12 text-orange-500" />,
    title: 'Kontrola jakości',
    description: 'Każdy pojazd przechodzi rygorystyczną kontrolę jakości, aby upewnić się, że wszystko jest w idealnym stanie.',
  },
  {
    icon: <Smile className="w-12 h-12 text-orange-500" />,
    title: 'Odbiór auta',
    description: 'Informujemy Cię o zakończeniu naprawy. Odbierasz swój samochód, który wygląda jak nowy.',
  },
];

const Process = () => (
  <section id="process" className="py-20 bg-black scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn direction="down">
        <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-16">
          Jak wygląda proces naprawy?
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, index) => (
          // ZMIANA: Opakowujemy każdy krok w komponent FadeIn z opóźnieniem
          <FadeIn key={index} delay={index * 150}>
            <div className="flex flex-col items-center text-center p-6 h-full bg-zinc-900 rounded-2xl border border-zinc-800 transform transition-transform duration-300 hover:scale-105 hover:border-orange-500/50">
              <div className="mb-6 p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Process;