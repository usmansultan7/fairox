
import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <section id="contact" className="pb-24 pt-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Get Your Free Audit</h2>
                    <p className="text-body text-lg">
                        Contact us today to see how much revenue you can recover. No obligation, no risk.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-heading">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-heading">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="practice" className="text-sm font-medium text-heading">Practice/Organization Name</label>
                            <input type="text" id="practice" placeholder="Medical Practice LLC" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-heading">Message (Optional)</label>
                            <textarea id="message" rows={4} placeholder="Tell us about your billing challenges..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                        </div>

                        <Button size="lg" className="w-full text-lg h-14 shadow-lg shadow-primary/25">
                            Request Free Audit
                        </Button>

                        <p className="text-xs text-center text-gray-400 mt-4">
                            By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
