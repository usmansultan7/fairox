
import { CheckCircle2, XCircle } from "lucide-react";

export function ProblemSolution() {
    return (
        <section className="py-24 bg-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Old Systems vs FAIROX</h2>
                    <p className="text-body max-w-2xl mx-auto">See the difference automated claim scrubbing makes for your practice.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* The Problem */}
                    <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-100 rounded-lg text-error">
                                <XCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-heading">Traditional Process</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Small human errors cause costly denials",
                                "Staff lacks time to manually fix rejections",
                                "Tracking claims across old systems is hard",
                                "Revenue leakage from uncollected co-pays"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-error mt-1">•</span>
                                    <span className="text-body">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The FAIROX Solution */}
                    <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg ring-1 ring-primary/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 rounded-lg text-primary">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-heading">The FAIROX Way</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Automated Claim Scrubbing before submission",
                                "AI Risk Assessment per Payer Rules",
                                "Simple, Actionable Outputs for staff",
                                "Instant Eligibility & Financial Clearance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                                    <span className="text-heading font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
