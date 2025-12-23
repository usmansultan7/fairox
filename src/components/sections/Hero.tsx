import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface HeroProps {
    headline?: string;
    subtext?: string;
    image?: any;
}

export function Hero({ headline, subtext, image }: HeroProps) {
    // Helper to split headline into colored halves
    const renderHeadline = (text: string) => {
        const words = text.split(" ");
        if (words.length <= 1) return <span className="text-gradient-brand">{text}</span>;

        const midpoint = Math.floor(words.length / 2);
        const firstHalf = words.slice(0, midpoint).join(" ");
        const secondHalf = words.slice(midpoint).join(" ");

        return (
            <>
                <span className="text-gradient-brand">{firstHalf}</span>{" "}
                <span className="text-white">{secondHalf}</span>
            </>
        );
    };

    return (
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 bg-page overflow-hidden">
            {/* Background Image */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={urlFor(image).width(1920).url()}
                        alt="Hero Background"
                        fill
                        className="object-cover object-[80%_center] md:object-center"
                        priority
                        sizes="100vw"
                    />
                    {/* Dark Overlay for readability */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            )}

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center rounded-full bg-gradient-brand px-4 py-1.5 text-sm font-medium text-white mb-6 backdrop-blur-md shadow-lg">
                    <span>Smart Overlay AI Technology</span>
                </div>

                <h1 className="flex flex-col md:block items-center text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 drop-shadow-md">
                    {headline ? (
                        renderHeadline(headline)
                    ) : (
                        <>
                            <span className="text-white text-6xl md:text-6xl mb-2 md:mb-0">ONE SETUP.</span>
                            <span className="text-gradient-brand">LIFETIME EASE.</span>
                        </>
                    )}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-sm">
                    {subtext || "Smart Middleware & Overlay AI. We clean claims and recover revenue without changing your current software."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link href="/audit">
                        <Button size="lg" className="h-12 px-8 text-base shadow-lg bg-gradient-brand hover:opacity-90 border-0">
                            Request a Demo
                        </Button>
                    </Link>
                    <Link href="#how-it-works">
                        <Button variant="secondary" size="lg" className="h-12 px-8 text-base shadow-lg bg-white text-black hover:bg-gray-100 border-0">
                            See How It Works
                        </Button>
                    </Link>
                </div>
            </div>
        </section >
    );
}
