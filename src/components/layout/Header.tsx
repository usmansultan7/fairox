"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TopBar } from "./TopBar";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <TopBar />
            <header className="relative z-50 w-full border-b bg-page/80 backdrop-blur-md">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/assets/Fairox_Logo.png"
                            alt="FAIROX"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden gap-6 md:flex">
                        <Link href="/" className="text-sm font-medium text-body hover:text-primary">
                            Home
                        </Link>
                        <Link href="/#features" className="text-sm font-medium text-body hover:text-primary">
                            Features
                        </Link>
                        <Link href="/#how-it-works" className="text-sm font-medium text-body hover:text-primary">
                            How it Works
                        </Link>
                        <Link href="/#team" className="text-sm font-medium text-body hover:text-primary">
                            Team
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/audit" className="hidden md:block">
                            <Button>
                                Get a Free Audit
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 text-heading" onClick={toggleMenu}>
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-body hover:text-primary py-2 border-b border-gray-100">
                            Home
                        </Link>
                        <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-body hover:text-primary py-2 border-b border-gray-100">
                            Features
                        </Link>
                        <Link href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-body hover:text-primary py-2 border-b border-gray-100">
                            How it Works
                        </Link>
                        <Link href="/#team" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-body hover:text-primary py-2 border-b border-gray-100">
                            Team
                        </Link>
                        <Link href="/audit" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                            <Button className="w-full">
                                Get a Free Audit
                            </Button>
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}
