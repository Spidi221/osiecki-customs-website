import { useState } from 'react';
import { Check, UploadCloud } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Na razie symulujemy wysyłkę. Prawdziwa logika zadziała na Netlify.
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // To jest potrzebne, żeby Netlify "zobaczył" wysyłkę z plikami
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section id="wycena" className="py-20 bg-black scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-2xl p-8 sm:p-12 border border-zinc-800">
          <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-4">
            Umów bezpłatną wycenę
          </h2>
          <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
            Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły i przedstawić ofertę.
          </p>
          
          {/* ZMIANA: Dodane atrybuty dla Netlify Forms */}
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
            {/* Ukryte pole wymagane przez Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required name="name" type="text" placeholder="Imię i nazwisko" className="bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
              <input required name="phone" type="tel" placeholder="Numer telefonu" className="bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
            </div>
            <input required name="email" type="email" placeholder="Adres email" className="w-full bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
            <textarea required name="message" placeholder="Krótki opis szkody (marka, model, rocznik, co się stało)" rows={5} className="w-full bg-zinc-800 border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Dodaj zdjęcia uszkodzeń (opcjonalnie, max 3 pliki)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-700 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-zinc-500" />
                  <div className="flex text-sm text-zinc-400">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-zinc-800 rounded-md font-medium text-orange-500 hover:text-orange-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-zinc-900 focus-within:ring-orange-500 px-2">
                      <span>Wybierz pliki</span>
                      <input id="file-upload" name="files" type="file" className="sr-only" multiple accept="image/*" onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">lub przeciągnij i upuść</p>
                  </div>
                  <p className="text-xs text-zinc-500">
                    PNG, JPG do 10MB
                  </p>
                </div>
              </div>
              {files.length > 0 && (
                <div className="mt-4 text-sm text-zinc-300">
                  <p className="font-bold">Wybrane pliki:</p>
                  <ul className="list-disc list-inside">
                    {files.map(file => <li key={file.name}>{file.name}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-start">
              <input id="zgoda-rodo" name="zgoda-rodo" type="checkbox" required className="h-4 w-4 text-orange-600 bg-zinc-700 border-zinc-600 rounded mt-1 focus:ring-orange-500" />
              <label htmlFor="zgoda-rodo" className="ml-3 text-sm text-zinc-400">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przedstawienia oferty handlowej.
              </label>
            </div>
            
            <div className="text-center pt-4">
              <button 
                type="submit" 
                disabled={isSubmitted}
                // ZMIANA: Ujednolicone klasy dla stabilności layoutu
                className={`inline-flex items-center justify-center px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform transition-all duration-300 min-w-[300px] ${
                  isSubmitted
                    ? 'bg-green-600 text-white cursor-not-allowed gap-2'
                    : 'bg-gradient-to-r from-orange-600 to-red-600 text-black hover:scale-105'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check /> Wysłano pomyślnie!
                  </>
                ) : (
                  'Wyślij zapytanie'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;