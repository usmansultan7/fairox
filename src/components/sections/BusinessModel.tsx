import { Button } from "@/components/ui/Button";
import { Wallet, TrendingUp, ShieldCheck } from "lucide-react";

export function BusinessModel() {
    return (
        <section id="how-it-works" className="py-24 bg-section relative overflow-hidden">
            {/* Abstract background shape */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-heading mb-6">
                    <span className="text-gradient-brand">Success-Based</span> Model
                </h2>
                <p className="text-xl text-body max-w-2xl mx-auto mb-16">
                    We align our success with yours. You don't pay unless we recover revenue for your practice.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "No Upfront Cost",
                            desc: "Get started completely free. No integration fees or setup charges.",
                            icon: Wallet
                        },
                        {
                            title: "Shared Success",
                            desc: "We only earn a small percentage when you actually recover money.",
                            icon: TrendingUp
                        },
                        {
                            title: "Zero Risk",
                            desc: "If we don't improve your collections, you don't pay a dime. Simple as that.",
                            icon: ShieldCheck
                        }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-section w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <card.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-3">{card.title}</h3>
                            <p className="text-body leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-primary/20 rounded-full">
                        Start Your Risk-Free Audit
                    </Button>
                </div>
            </div>
        </section>
    );
}
