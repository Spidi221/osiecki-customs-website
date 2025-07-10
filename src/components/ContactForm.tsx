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
    const formData = new FormData(form);
    
    // Dodaj pliki do FormData
    files.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Błąd wysyłania formularza');
      }
    } catch (error) {
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
                  Otrzymaliśmy Twoje zapytanie i skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
                <p className="text-zinc-400 mb-8">
                  W pilnych sprawach dzwoń: <span className="text-orange-500 font-semibold">+48 607 550 305</span>
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFiles([]);
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

              {/* Error message */}
              {submitError && (
                <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-6 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{submitError}</p>
                </div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    required 
                    name="name" 
                    type="text" 
                    placeholder="Imię i nazwisko" 
                    className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all" 
                    disabled={isSubmitting}
                  />
                  <input 
                    required 
                    name="phone" 
                    type="tel" 
                    placeholder="Numer telefonu" 
                    className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all" 
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
                            className="text-red-400 hover:text-red-300 transition-colors p-1"
                            disabled={isSubmitting}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* RODO checkbox */}
                <div className="pt-4 border-t border-zinc-800">
                  <div className="flex items-start">
                    <input 
                      id="zgoda-rodo" 
                      name="zgoda-rodo" 
                      type="checkbox" 
                      required 
                      className="h-4 w-4 text-orange-600 bg-zinc-700 border-zinc-600 rounded mt-1 focus:ring-orange-500 focus:ring-2" 
                      disabled={isSubmitting}
                    />
                    <label htmlFor="zgoda-rodo" className="ml-3 text-sm text-zinc-400 leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Osiecki Customs w celu przedstawienia oferty handlowej zgodnie z{' '}
                      <button 
                        type="button" 
                        onClick={() => openModal('privacy')}
                        className="text-orange-500 hover:text-orange-400 underline transition-colors"
                      >
                        Polityką Prywatności
                      </button>
                      . <span className="text-red-400">*</span>
                    </label>
                  </div>

                  <p className="text-xs text-zinc-500 mt-3">
                    * Pole wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.{' '}
                    <button 
                      type="button"
                      onClick={() => openModal('rodo')}
                      className="text-orange-500 hover:text-orange-400 underline transition-colors"
                    >
                      Więcej o RODO
                    </button>
                  </p>
                </div>

                <div className="text-center pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform transition-all duration-300 min-w-[300px] ${
                      isSubmitting
                        ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-600 to-red-600 text-black hover:scale-105 hover:from-orange-700 hover:to-red-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin mr-3"></div>
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