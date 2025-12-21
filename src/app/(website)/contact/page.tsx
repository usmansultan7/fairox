
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-heading text-center mb-12">Contact Us</h1>

                <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Email Us</h3>
                        <p className="text-primary">support@fairox.com</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Call Us</h3>
                        <p className="text-primary">+1 (555) 123-4567</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                        <p className="text-body">123 Innovation Dr,<br />Tech City, ST 12345</p>
                    </div>
                </div>
            </div>

            {/* Reuse the Contact Form */}
            <Contact />
        </div>
    );
}
