import React, { useState, useRef } from 'react';
import { CheckCircle, Upload, X } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', carBrand: '', carModel: '', damageDescription: '', timeline: '', gdprConsent: false, marketingConsent: false });
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [formErrors, setFormErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateForm = () => {
        const errors: any = {};
        if (!formData.name.trim()) errors.name = 'Imię i nazwisko jest wymagane';
        if (!formData.phone.trim()) errors.phone = 'Numer telefonu jest wymagany';
        else if (!/^[+]?[0-9\s\-()]{9,}$/.test(formData.phone.trim())) errors.phone = 'Nieprawidłowy format numeru telefonu';
        if (!formData.email.trim()) errors.email = 'Adres email jest wymagany';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.email = 'Nieprawidłowy format adresu email';
        if (!formData.carBrand.trim()) errors.carBrand = 'Marka samochodu jest wymagana';
        if (!formData.carModel.trim()) errors.carModel = 'Model samochodu jest wymagany';
        if (formData.damageDescription.trim().length < 10) errors.damageDescription = 'Opis musi zawierać co najmniej 10 znaków';
        if (!formData.gdprConsent) errors.gdprConsent = 'Zgoda na przetwarzanie danych jest wymagana';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        // Symulacja wysyłki
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const files = Array.from(e.target.files).filter(file => {
            const isValidType = ['image/jpeg', 'image/png'].includes(file.type);
            const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
            return isValidType && isValidSize;
        });
        if (uploadedFiles.length + files.length <= 5) {
            setUploadedFiles(prev => [...prev, ...files]);
        } else {
            alert("Można dodać maksymalnie 5 plików.");
        }
    };

    const removeFile = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value, type } = e.target;
        const isCheckbox = type === 'checkbox';
        setFormData(prev => ({ ...prev, [id]: isCheckbox ? (e.target as HTMLInputElement).checked : value }));
    };

    return (
        <section id="wycena" className="py-24 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 30% 70%, orange 0%, transparent 50%), radial-gradient(circle at 70% 30%, red 0%, transparent 50%)`, opacity: 0.05 }}></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-orange-500/30">
                        Skontaktuj się z nami
                    </div>
                    <h2 className="text-5xl font-black text-white mb-6">
                        Umów bezpłatną <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">wycenę</span>
                    </h2>
                    <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                        Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
                    </p>
                </div>

                {isSubmitted ? (
                    <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-500/30 rounded-3xl p-12 text-center backdrop-blur-xl">
                        <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-8" />
                        <h3 className="text-3xl font-bold text-green-400 mb-6">Dziękujemy za zgłoszenie!</h3>
                        <p className="text-green-300 text-xl">Skontaktujemy się z Tobą w ciągu 24 godzin w celu umówienia wyceny.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-zinc-900/90 to-black/90 p-10 lg:p-16 rounded-3xl shadow-2xl border border-zinc-800 backdrop-blur-xl space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-4">Imię i nazwisko *</label>
                                <input type="text" id="name" value={formData.name} onChange={handleInputChange} className={`w-full px-6 py-4 bg-zinc-800/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-zinc-400 text-lg ${formErrors.name ? 'border-red-500' : 'border-zinc-700'}`} />
                                {formErrors.name && <p className="text-red-400 text-sm mt-2">{formErrors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-zinc-300 mb-4">Telefon *</label>
                                <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-6 py-4 bg-zinc-800/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-zinc-400 text-lg ${formErrors.phone ? 'border-red-500' : 'border-zinc-700'}`} />
                                {formErrors.phone && <p className="text-red-400 text-sm mt-2">{formErrors.phone}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-4">Email *</label>
                            <input type="email" id="email" value={formData.email} onChange={handleInputChange} className={`w-full px-6 py-4 bg-zinc-800/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-zinc-400 text-lg ${formErrors.email ? 'border-red-500' : 'border-zinc-700'}`} />
                            {formErrors.email && <p className="text-red-400 text-sm mt-2">{formErrors.email}</p>}
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="carBrand" className="block text-sm font-semibold text-zinc-300 mb-4">Marka samochodu *</label>
                                <input type="text" id="carBrand" value={formData.carBrand} onChange={handleInputChange} className={`w-full px-6 py-4 bg-zinc-800/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-zinc-400 text-lg ${formErrors.carBrand ? 'border-red-500' : 'border-zinc-700'}`} />
                                {formErrors.carBrand && <p className="text-red-400 text-sm mt-2">{formErrors.carBrand}</p>}
                            </div>
                            <div>
                                <label htmlFor="carModel" className="block text-sm font-semibold text-zinc-300 mb-4">Model samochodu *</label>
                                <input type="text" id="carModel" value={formData.carModel} onChange={handleInputChange} className={`w-full px-6 py-4 bg-zinc-800/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-zinc-400 text-lg ${formErrors.carModel ? 'border-red-500' : 'border-zinc-700'}`} />
                                {formErrors.carModel && <p className="text-red-400 text-sm mt-2">{formErrors.carModel}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="damageDescription" className="block text-sm font-semibold text-zinc-300 mb-4">Opis uszkodzeń *</label>
                            <textarea id="damageDescription" rows={4} value={formData.damageDescription} onChange={handleInputChange} className={`w-full px-6 py-4 bg-zinc-800/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all text-white placeholder-zinc-400 text-lg ${formErrors.damageDescription ? 'border-red-500' : 'border-zinc-700'}`} placeholder="Opisz dokładnie rodzaj i zakres uszkodzeń..." />
                            {formErrors.damageDescription && <p className="text-red-400 text-sm mt-2">{formErrors.damageDescription}</p>}
                        </div>
                        <div>
                            <label htmlFor="timeline" className="block text-sm font-semibold text-zinc-300 mb-4">Preferowany termin naprawy</label>
                            <select id="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white text-lg">
                                <option value="">Wybierz termin</option>
                                <option value="asap">Jak najszybciej</option>
                                <option value="2weeks">W ciągu 2 tygodni</option>
                                <option value="month">W przyszłym miesiącu</option>
                                <option value="flexible">Termin dowolny</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-zinc-300 mb-4">Zdjęcia uszkodzeń (opcjonalnie)</label>
                            <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-12 bg-zinc-800/30 hover:border-orange-500 transition-colors text-center">
                                <Upload className="w-16 h-16 text-zinc-400 mx-auto mb-6" />
                                <p className="text-zinc-300 mb-6 text-lg">Przeciągnij zdjęcia lub kliknij aby wybrać</p>
                                <input ref={fileInputRef} type="file" multiple accept="image/jpeg,image/png" onChange={handleFileChange} className="hidden" />
                                <button type="button" onClick={() => fileInputRef.current?.click()} className="bg-gradient-to-r from-zinc-700 to-zinc-800 text-white px-8 py-4 rounded-xl hover:from-zinc-600 hover:to-zinc-700 transition-all text-lg font-semibold">Wybierz pliki</button>
                                <p className="text-sm text-zinc-400 mt-4">Maksymalnie 5 plików, każdy do 5MB (JPG, PNG)</p>
                            </div>
                            {uploadedFiles.length > 0 && (
                                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    {uploadedFiles.map((file, index) => (
                                        <div key={index} className="relative bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
                                            <p className="truncate text-zinc-300 text-sm font-medium">{file.name}</p>
                                            <p className="text-xs text-zinc-400 mt-1">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                                            <button type="button" onClick={() => removeFile(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm hover:bg-red-600 transition-colors shadow-lg"><X className="w-4 h-4" /></button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <input type="checkbox" id="gdprConsent" checked={formData.gdprConsent} onChange={handleInputChange} className="mt-1 mr-4 h-6 w-6 text-orange-600 focus:ring-orange-500 border-zinc-600 rounded bg-zinc-800" />
                                <label htmlFor="gdprConsent" className="text-sm text-zinc-300 leading-relaxed">Zgadzam się na przetwarzanie moich danych osobowych przez Osiecki Customs w celu obsługi zapytania i kontaktu w sprawie wyceny. *</label>
                            </div>
                            {formErrors.gdprConsent && <p className="text-red-400 text-sm">{formErrors.gdprConsent}</p>}
                            <div className="flex items-start">
                                <input type="checkbox" id="marketingConsent" checked={formData.marketingConsent} onChange={handleInputChange} className="mt-1 mr-4 h-6 w-6 text-orange-600 focus:ring-orange-500 border-zinc-600 rounded bg-zinc-800" />
                                <label htmlFor="marketingConsent" className="text-sm text-zinc-300 leading-relaxed">Zgadzam się na otrzymywanie informacji marketingowych od Osiecki Customs.</label>
                            </div>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-5 px-10 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-bold text-xl shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105">
                            {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
