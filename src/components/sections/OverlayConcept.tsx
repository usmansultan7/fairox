
import Image from "next/image";

export function OverlayConcept() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                    <div className="w-full md:w-[40%]">
                        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-gray-50">
                            <Image
                                src="/assets/overlay_concept_v2.png"
                                alt="FAIROX Overlay Concept"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-6xl font-bold text-heading">
                            Seamless Integration. <br />
                            <span className="text-gradient-brand">Zero Disruption.</span>
                        </h2>
                        <p className="text-lg text-body leading-relaxed">
                            FAIROX acts as an intelligent layer that sits on top of your existing EHR. We don't replace your software; we make it smarter.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Connects via API / HL7",
                                "Runs quietly in the background",
                                "No staff training required",
                                "Compatible with major EHRs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-success" />
                                    <span className="text-body font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
