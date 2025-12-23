import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HIPAA Compliance Statement | FAIROX',
    description: 'Learn how FAIROX ensures HIPAA compliance and protects your healthcare data with our Smart Middleware and Overlay AI.',
};

export default function HIPAACompliancePage() {
    return (
        <main className="bg-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-heading mb-6">
                        HIPAA Compliance <span className="text-gradient-brand">Statement</span>
                    </h1>
                    <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
                        At FAIROX, we are committed to maintaining the highest standards of data privacy and security in the healthcare industry. Our Revenue Cycle Management (RCM) services and Smart Middleware (Overlay AI Layer) are designed to comply with the Health Insurance Portability and Accountability Act (HIPAA).
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Section 1 */}
                    <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-heading mb-4 flex items-center gap-3">
                            <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                            Our Role as a Business Associate
                        </h2>
                        <p className="text-body leading-relaxed">
                            When we provide billing and RCM services, we act as a "Business Associate" to our healthcare providers. We sign a Business Associate Agreement (BAA) with every client to legally guarantee the protection of Protected Health Information (PHI).
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
                            <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                            Technical Safeguards & Data Integration
                        </h2>
                        <p className="text-body mb-6">
                            Our Smart Middleware system reads data from your existing Electronic Health Record (EHR) and Practice Management (PM) software using secure and stable methods.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-heading mb-2">Secure Connectors</h3>
                                <p className="text-sm text-body">We use API, HL7, and FHIR (Fast Healthcare Interoperability Resources) standards to ensure secure data exchange.</p>
                            </div>
                            <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-heading mb-2">Read-Only Access</h3>
                                <p className="text-sm text-body">We prioritize "Read-Only" access to clinic databases to ensure that original patient records remain untouched and secure.</p>
                            </div>
                            <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-heading mb-2">Data Integrity</h3>
                                <p className="text-sm text-body">We handle sensitive fields such as Date of Birth (DOB), Insurance IDs, and National Provider Identifiers (NPI) with strict encryption.</p>
                            </div>
                            <div className="bg-white border p-6 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-heading mb-2">Encrypted Processing</h3>
                                <p className="text-sm text-body">All claim scrubbing and risk assessments for ICD-10 and CPT codes are performed within a secure environment.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
                            <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                            Administrative & Operational Security
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                                <div>
                                    <span className="font-bold text-heading">Internal Oversight:</span>
                                    <span className="text-body ml-1">Our Chief Technology Officer (CTO) oversees all system architecture, security protocols, and development quality.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                                <div>
                                    <span className="font-bold text-heading">Staff Training:</span>
                                    <span className="text-body ml-1">Our RCM Operations team and AR callers are trained in HIPAA-compliant workflows to handle denied or pending claims.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                                <div>
                                    <span className="font-bold text-heading">Access Control:</span>
                                    <span className="text-body ml-1">Access to A/R (Accounts Receivable) reports and patient data is restricted to authorized personnel only.</span>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
                            <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                            Data Processing Boundaries
                        </h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary pl-6 py-1">
                                <h3 className="font-bold text-heading text-lg mb-1">Fraud Detection</h3>
                                <p className="text-body">Our system uses AI/ML to flag anomalies and patterns from past claims to prevent fraud while requiring human review for all sensitive actions.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-6 py-1">
                                <h3 className="font-bold text-heading text-lg mb-1">Financial Clearance</h3>
                                <p className="text-body">We manage payment risks and patient responsibility estimates without ever compromising the standard of patient care.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-6 py-1">
                                <h3 className="font-bold text-heading text-lg mb-1">RPA Security</h3>
                                <p className="text-body">Where APIs are unavailable, we use Robotic Process Automation (RPA) as a bridge solution with strict security monitoring.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="mt-16 text-center bg-gradient-brand text-white rounded-3xl p-10 shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                            If you have any questions regarding our HIPAA compliance or how we handle your healthcare data, please contact our privacy officer.
                        </p>
                        <a
                            href="mailto:contact@fairox.com"
                            className="inline-flex items-center justify-center bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-md"
                        >
                            Contact Privacy Officer
                        </a>
                    </section>
                </div>
            </div>
        </main>
    );
}
