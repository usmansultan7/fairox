import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-footer text-white pt-12 pb-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="mb-4">
                            <Image
                                src="/assets/Fairox_Logo.png"
                                alt="FAIROX"
                                width={120}
                                height={40}
                                className="h-14 w-auto"
                            />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Smart Middleware & Overlay AI for Healthcare Billing.</p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} FAIROX. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
