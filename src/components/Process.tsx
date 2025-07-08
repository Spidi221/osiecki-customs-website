const processStepsData = [
    { step: '1', title: 'Zgłoś szkodę', description: 'Skontaktuj się z nami telefonicznie lub przez formularz' },
    { step: '2', title: 'Wycena i formalności', description: 'Zajmiemy się wszystkimi formalnościami z ubezpieczycielem' },
    { step: '3', title: 'Odbierz naprawiony samochód', description: 'Płacisz tylko udział własny, resztę pokrywa ubezpieczenie' }
];

const Process = () => (
  <section className="py-24 bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
          Prosty proces
        </div>
        <h2 className="text-5xl font-black text-zinc-900 mb-6">
          Jak to <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">działa</span>
        </h2>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
          Trzy proste kroki do profesjonalnej naprawy Twojego pojazdu
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-1 bg-zinc-200"></div>
        {processStepsData.map((step, index) => (
          <div key={index} className="relative text-center group z-10">
            <div className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-xl transform group-hover:scale-110 transition-all duration-300">
              {step.step}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur opacity-50 -z-10 scale-110"></div>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{step.title}</h3>
            <p className="text-zinc-600 leading-relaxed text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
