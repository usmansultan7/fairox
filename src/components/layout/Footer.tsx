import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-footer text-white pt-6 pb-2">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="mb-6">
                            <Image
                                src="/assets/Fairox_Logo.png"
                                alt="FAIROX"
                                width={120}
                                height={40}
                                className="h-14 w-auto"
                                style={{ width: "auto" }}
                            />
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                            Smart Middleware & Overlay AI for Healthcare Billing.
                            Optimize your revenue cycle without changing your software.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How it Works</Link></li>
                            <li><Link href="/#team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/hipaa-compliance" className="text-gray-400 hover:text-white transition-colors">HIPAA Compliance</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} FAIROX. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
