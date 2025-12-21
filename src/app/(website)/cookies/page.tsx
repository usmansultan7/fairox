
export default function CookiesPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-body">
            <h1 className="text-3xl md:text-4xl font-bold text-heading mb-8">Cookie Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your experience.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">2. How We Use Cookies</h2>
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly (e.g., login sessions).</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site so we can improve it.</li>
                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements to you.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">3. Managing Cookies</h2>
                    <p>
                        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-heading mb-3">4. Updates to This Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time. We encourage you to review this page periodically for any changes.
                    </p>
                </section>
            </div>
        </div>
    );
}
