import { Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function TopBar() {
    return (
        <div className="bg-gradient-brand text-white py-1 text-sm">
            <div className="container mx-auto px-4 flex flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-4">
                    <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>+1 (234) 567-890</span>
                    </a>
                    <a href="mailto:info@fairox.com" className="hidden sm:flex items-center gap-2 hover:text-white/80 transition-colors">
                        <span>info@fairox.com</span>
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-white/80 transition-colors" aria-label="Twitter">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
