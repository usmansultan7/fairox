import { Stethoscope, BarChart, ShieldAlert, Wallet, RefreshCw } from "lucide-react";
import Image from "next/image";

export function Features() {
    // Static Features Data
    const features = [
        {
            title: 'Claim Scrubbing',
            description: 'Fix missing info (DOB, NPI) and coding errors (ICD-10, CPT) before submission to prevent denials.',
            icon: Stethoscope
        },
        {
            title: 'Risk Assessment',
            description: 'Estimate the chance of denial based on Payer Rules and patterns from past claims.',
            icon: BarChart
        },
        {
            title: 'Fraud Detection',
            description: 'AI-powered anomaly detection flag suspicious patterns for human review.',
            icon: ShieldAlert
        },
        {
            title: 'Financial Clearance',
            description: 'Check eligibility, benefits, and estimate patient responsibility to prevent bad debt.',
            icon: Wallet
        },
        {
            title: 'A/R Recovery',
            description: 'Find old denied/pending claims (15-minute audit), fix errors, and resubmit automatically.',
            icon: RefreshCw
        },
    ];

    return (
        <section id="features" className="relative w-full py-24 overflow-hidden">
            {/* Full Width Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assets/features_bg_wide.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* White overlay for readability */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[10px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
                        Powerful <span className="text-gradient-brand">Features</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto text-lg mb-12 font-medium">
                        Everything you need to optimize your revenue cycle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-white/60 shadow-lg bg-white/60 backdrop-blur-md hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group ring-1 ring-white/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-14 w-14 flex flex-shrink-0 items-center justify-center bg-white/90 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300 ring-1 ring-primary/10">
                                    <feature.icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-heading">{feature.title}</h3>
                            </div>
                            <p className="text-body-dark leading-relaxed font-medium">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
