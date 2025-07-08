import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 25% 75%, orange 0%, transparent 50%), radial-gradient(circle at 75% 25%, red 0%, transparent 50%)`, opacity: 0.03 }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-16">
                <div>
                    <img src="/1.png" alt="Logo Osiecki Customs" className="h-12 w-auto mb-8" />
                    <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                        Profesjonalne usługi blacharsko-lakiernicze. 
                        Bezgotówkowe naprawy powypadkowe z wieloletnim doświadczeniem w branży automotive.
                    </p>
                    <div className="text-zinc-500 text-sm space-y-2">
                        <p className="font-semibold">NIP: 123-456-78-90</p>
                        <p className="font-semibold">REGON: 123456789</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-black mb-8 text-white text-xl">Przydatne linki</h4>
                    <ul className="space-y-4 text-zinc-400">
                        <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center group text-lg">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                            Polityka prywatności
                        </a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center group text-lg">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                            Regulamin
                        </a></li>
                        <li><a href="#uslugi" className="hover:text-orange-500 transition-colors flex items-center group text-lg">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                            Usługi
                        </a></li>
                        <li><a href="#kontakt" className="hover:text-orange-500 transition-colors flex items-center group text-lg">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 transform scale-0 group-hover:scale-100 transition-transform"></span>
                            Kontakt
                        </a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-black mb-8 text-white text-xl">Kontakt</h4>
                    <div className="space-y-6 text-zinc-400">
                        <div className="flex items-center">
                            <Phone className="w-6 h-6 text-orange-500 mr-4" />
                            <span className="text-lg">+48 123 456 789</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-6 h-6 text-orange-500 mr-4" />
                            <span className="text-lg">kontakt@osieckicustoms.pl</span>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 text-orange-500 mr-4 mt-1" />
                            <span className="text-lg">ul. Przykładowa 123<br />00-000 Warszawa</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-zinc-800 mt-16 pt-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-zinc-400 text-lg">
                        &copy; {new Date().getFullYear()} Osiecki Customs. Wszystkie prawa zastrzeżone.
                    </p>
                    <p className="text-zinc-600 text-sm mt-4 md:mt-0">
                        Strona wykonana z pasją do motoryzacji 🚗
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
