
export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-body">
            <h1 className="text-3xl md:text-4xl font-bold text-heading mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">1. Introduction</h2>
                    <p>
                        Welcome to FAIROX ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of any personal and medical-related information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you use our middleware and overlay AI services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">2. Information We Collect</h2>
                    <p className="mb-2">We may collect the following types of information:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Account Information:</strong> Name, email address, phone number, and organization details provided during registration.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our software, including log files, device information, and performance metrics.</li>
                        <li><strong>Protected Health Information (PHI):</strong> As a Business Associate, we may process PHI on your behalf. This data is handled in strict compliance with HIPAA regulations and your Business Associate Agreement (BAA).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">3. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Provide, operate, and maintain our services.</li>
                        <li>Improve, personalize, and expand our platform.</li>
                        <li>Detect and prevent fraud and security breaches.</li>
                        <li>Comply with legal obligations and regulatory requirements.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">4. Data Security</h2>
                    <p>
                        We implement industry-standard security measures, including encryption, access controls, and regular security audits, to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">5. Third-Party Services</h2>
                    <p>
                        We may share data with trusted third-party service providers who assist us in operating our services (e.g., cloud hosting). These providers are bound by confidentiality agreements and data protection obligations.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:<br />
                        <strong>Email:</strong> support@fairox.com<br />
                        <strong>Address:</strong> [Your Corporate Address Here]
                    </p>
                </section>
            </div>
        </div>
    );
}
