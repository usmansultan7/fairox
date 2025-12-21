import Image from "next/image";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
    const reviews = [
        {
            name: "Dr. Sarah Mitchell",
            role: "Cardiologist, Heart Care Clinic",
            image: "/assets/doctor_2.png",
            content: "Switching to FAIROX was the best decision for our practice. Claims are processed faster, and our denial rate dropped significantly within the first month. The transparency is unmatched.",
            rating: 5
        },
        {
            name: "Dr. James Carter",
            role: "Medical Director, City Health",
            image: "/assets/doctor_3.png",
            content: "The risk assessment feature is a game-changer. We now catch potential issues before submission. Their team acts like a true partner in our revenue cycle management.",
            rating: 5
        },
        {
            name: "Dr. Emily Chen",
            role: "Pediatrician, Kids First",
            image: "/assets/doctor_1.png",
            content: "We used to struggle with A/R recovery, but FAIROX's automated tools cleared our backlog in weeks. Cash flow has never been better. Highly recommended!",
            rating: 5
        },
        // Duplicates for infinite scroll effect
        {
            name: "Dr. Sarah Mitchell",
            role: "Cardiologist, Heart Care Clinic",
            image: "/assets/doctor_2.png",
            content: "Switching to FAIROX was the best decision for our practice. Claims are processed faster, and our denial rate dropped significantly within the first month. The transparency is unmatched.",
            rating: 5
        },
        {
            name: "Dr. James Carter",
            role: "Medical Director, City Health",
            image: "/assets/doctor_3.png",
            content: "The risk assessment feature is a game-changer. We now catch potential issues before submission. Their team acts like a true partner in our revenue cycle management.",
            rating: 5
        },
        {
            name: "Dr. Emily Chen",
            role: "Pediatrician, Kids First",
            image: "/assets/doctor_1.png",
            content: "We used to struggle with A/R recovery, but FAIROX's automated tools cleared our backlog in weeks. Cash flow has never been better. Highly recommended!",
            rating: 5
        },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
                    Trusted by <span className="text-gradient-brand">Top Providers</span>
                </h2>
                <p className="text-body max-w-2xl mx-auto text-lg">
                    See what medical professionals are saying about FAIROX.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll">
                    {reviews.map((review, index) => (
                        <li key={index} className="w-[350px] md:w-[450px] flex-shrink-0">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col relative group">
                                <Quote className="absolute top-6 right-6 text-primary/10 h-10 w-10 group-hover:text-primary/20 transition-colors" />

                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-body leading-relaxed mb-6 italic flex-grow">
                                    "{review.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-heading">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
