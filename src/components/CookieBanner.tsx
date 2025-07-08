import { Shield } from 'lucide-react';

interface CookieBannerProps {
    onAccept: () => void;
}

const CookieBanner = ({ onAccept }: CookieBannerProps) => (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl text-white p-8 z-40 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
                <Shield className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                <p className="text-zinc-300 text-lg">
                    Ta strona używa plików cookies w celu świadczenia usług zgodnie z Polityką Prywatności.
                </p>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={onAccept}
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all font-bold transform hover:scale-105"
                >
                    Akceptuję
                </button>
                <button
                    onClick={onAccept}
                    className="border-2 border-zinc-600 text-zinc-300 px-8 py-3 rounded-xl hover:bg-zinc-800 hover:text-white transition-all font-bold"
                >
                    Zamknij
                </button>
            </div>
        </div>
    </div>
);

export default CookieBanner;
