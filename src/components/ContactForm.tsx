import { useState } from 'react';
import { Check, UploadCloud, X, AlertCircle } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import LegalModal from './LegalModal';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'rodo'>('privacy');

  const openModal = (type: 'privacy' | 'terms' | 'rodo') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 3); // Max 3 pliki
      setFiles(selectedFiles);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData();
    
    // KLUCZOWE: Dodaj form-name jako pierwsze pole
    formData.append('form-name', 'contact');
    
    // Pobierz wszystkie dane z formularza
    const formInputs = new FormData(form);
    
    // Dodaj podstawowe pola (bez plików)
    for (const [key, value] of formInputs.entries()) {
      if (key !== 'files') { // Pomijamy pole files - dodamy je osobno
        formData.append(key, value);
      }
    }
    
    // KRYTYCZNE: Dodaj pliki w sposób zrozumiały dla Netlify
    // Każdy plik osobno z unikalną nazwą
    files.forEach((file, index) => {
      formData.append(`file-${index}`, file, file.name);
    });
    
    // Debug: sprawdź co wysyłamy
    console.log('=== DEBUG FORM DATA ===');
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value instanceof File ? `FILE: ${value.name} (${value.size} bytes)` : value);
    }
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData, // Bez headers - pozwól przeglądarce ustawić Content-Type
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        setIsSubmitted(true);
        console.log('✅ Formularz wysłany pomyślnie przez Netlify Forms');
        // Przewiń do góry sekcji po pomyślnym wysłaniu
        document.getElementById('wycena')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      } else {
        const errorText = await response.text();
        console.error('❌ Błąd response:', response.status, response.statusText, errorText);
        throw new Error(`Błąd serwera: ${response.status}`);
      }
    } catch (error: unknown) {
      console.error('❌ Błąd wysyłania formularza:', error);
      setSubmitError('Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń: +48 607 550 305');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Jeśli formularz został wysłany pomyślnie
  if (isSubmitted) {
    return (
      <>
        <section id="wycena" className="py-20 bg-black scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-zinc-900 rounded-2xl p-8 sm:p-12 border border-zinc-800 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Dziękujemy za zgłoszenie!
                </h2>
                <p className="text-zinc-300 mb-6">
                  Otrzymaliśmy Twoje zapytanie wraz z załącznikami i skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
                <p className="text-zinc-400 mb-8">
                  W pilnych sprawach dzwoń: <span className="text-orange-500 font-semibold">+48 607 550 305</span>
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFiles([]);
                    // Przewiń do formularza po resecie
                    document.getElementById('wycena')?.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }}
                  className="text-orange-500 hover:text-orange-400 transition-colors underline"
                >
                  Wyślij kolejne zapytanie
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Legal Modal */}
        <LegalModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={modalType}
        />
      </>
    );
  }

  return (
    <>
      <section id="wycena" className="py-20 bg-black scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-zinc-900 rounded-2xl p-8 sm:p-12 border border-zinc-800">
              <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-4">
                Umów bezpłatną wycenę
              </h2>
              <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
                Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły i przedstawić ofertę.
              </p>

              <form onSubmit={handleSubmit} name="contact" className="space-y-6">
                {/* KLUCZOWE: Ukryte pole form-name dla Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field - ochrona przed botami */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: 
                    <input name="bot-field" />
                  </label>
                </div>

                {submitError && (
                  <div className="bg-red-900/20 border border-red-500/30 text-red-400 p-4 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p>{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input 
                    required 
                    name="name" 
                    type="text" 
                    placeholder="Imię i nazwisko" 
                    className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all" 
                    disabled={isSubmitting}
                  />

                  <input 
                    required 
                    name="phone" 
                    type="tel" 
                    placeholder="Numer telefonu" 
                    className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all" 
                    disabled={isSubmitting}
                  />
                </div>

                <input 
                  required 
                  name="email" 
                  type="email" 
                  placeholder="Adres email" 
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all" 
                  disabled={isSubmitting}
                />

                <textarea 
                  required 
                  name="message" 
                  placeholder="Krótki opis szkody (marka, model, rocznik, co się stało)" 
                  rows={5} 
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all resize-none" 
                  disabled={isSubmitting}
                />
                
                {/* Upload plików */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Dodaj zdjęcia uszkodzeń (opcjonalnie, max 3 pliki)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-700 border-dashed rounded-md hover:border-zinc-600 transition-colors">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-zinc-500" />
                      <div className="flex text-sm text-zinc-400">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-zinc-800 rounded-md font-medium text-orange-500 hover:text-orange-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-zinc-900 focus-within:ring-orange-500 px-2 transition-colors">
                          <span>Wybierz pliki</span>
                          <input 
                            id="file-upload" 
                            name="files" 
                            type="file" 
                            className="sr-only" 
                            multiple 
                            accept="image/*,.pdf" 
                            onChange={handleFileChange}
                            disabled={isSubmitting}
                          />
                        </label>
                        <p className="pl-1">lub przeciągnij i upuść</p>
                      </div>
                      <p className="text-xs text-zinc-500">
                        PNG, JPG, PDF do 10MB ({files.length}/3 plików)
                      </p>
                    </div>
                  </div>
                  
                  {/* Lista wybranych plików */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium text-zinc-300">Wybrane pliki:</h4>
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-zinc-800 p-3 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-white text-sm truncate max-w-xs">{file.name}</span>
                            <span className="text-zinc-400 text-xs">({formatFileSize(file.size)})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-zinc-500 hover:text-red-400 transition-colors"
                            disabled={isSubmitting}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Zgoda na przetwarzanie danych */}
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input 
                      required 
                      type="checkbox" 
                      name="consent" 
                      className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-zinc-700 bg-zinc-800 rounded" 
                      disabled={isSubmitting}
                    />
                    <span className="text-sm text-zinc-300 leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z 
                      <button type="button" onClick={() => openModal('rodo')} className="text-orange-500 hover:text-orange-400 underline mx-1">
                        Polityką Prywatności
                      </button>
                      w celu udzielenia odpowiedzi na wysłane zapytanie.
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-600 to-red-600 text-black hover:scale-105 hover:from-orange-700 hover:to-red-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-zinc-400 mr-3"></div>
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij zapytanie'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Legal Modal */}
      <LegalModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </>
  );
};

export default ContactForm;