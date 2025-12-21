import { X, Check } from "lucide-react";

export function Comparison() {
    return (
        <section className="py-20 bg-section">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-heading">
                        <span className="text-gradient-brand">FAIROX</span> vs Old Systems
                    </h2>
                    <p className="text-lg text-body">
                        See the difference automated claim scrubbing makes for your practice.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* FAIROX Way Card */}
                    <div className="bg-white rounded-2xl p-8 border border-transparent shadow-xl relative overflow-hidden ring-1 ring-primary/20">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-brand"></div>
                        <h3 className="text-2xl font-bold text-heading mb-6 flex items-center gap-2">
                            The <span className="text-gradient-brand">FAIROX</span> Way
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Automated Claim Scrubbing before submission",
                                "AI Risk Assessment per Payer Rules",
                                "Simple, Actionable Outputs for staff",
                                "Instant Eligibility & Financial Clearance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-success">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg text-heading font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Traditional Process Card */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2">
                            Traditional Process
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Small human errors cause costly denials",
                                "Staff lacks time to manually fix rejections",
                                "Tracking claims across old systems is hard",
                                "Revenue leakage from uncollected co-pays"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                        <X className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
