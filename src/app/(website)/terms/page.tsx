
export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-body">
            <h1 className="text-3xl md:text-4xl font-bold text-heading mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the FAIROX website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">2. Use License</h2>
                    <p>
                        FAIROX grants you a limited, non-exclusive, non-transferable, and revocable license to use our software for your internal business purposes, subject to these Terms. You may not:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Modify, copy, or create derivative works of our software.</li>
                        <li>Use the services for any illegal or unauthorized purpose.</li>
                        <li>Attempt to reverse engineer or decompile any part of the software.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">3. Disclaimer</h2>
                    <p>
                        The materials and services on FAIROX's website are provided on an "as is" basis. FAIROX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">4. Limitation of Liability</h2>
                    <p>
                        In no event shall FAIROX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use FAIROX's services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">5. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">6. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will notify users of any significant changes. Your continued use of the service after such changes constitutes your acceptance of the new terms.
                    </p>
                </section>
            </div>
        </div>
    );
}
