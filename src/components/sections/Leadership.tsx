import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
    {
        name: "Dr. Sarah Chen",
        role: "Chief Executive Officer",
        image: "/assets/team_ceo.png",
        bio: "Visionary leader with 15+ years in healthcare administration and strategic partnerships.",
    },
    {
        name: "Mark Davis",
        role: "Chief Technology Officer",
        image: "/assets/team_cto.png",
        bio: "Tech innovator specializing in AI-driven healthcare solutions and data security.",
    },
    {
        name: "Laura Wilson",
        role: "Director of Operations",
        image: "/assets/team_ops.png",
        bio: "Expert in optimizing revenue cycle workflows and ensuring operational excellence.",
    },
];

export function Leadership() {
    return (
        <section id="team" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
                        Meet Our <span className="text-gradient-brand">Leadership</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto text-lg">
                        The experts driving innovation in healthcare revenue cycle management.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="group relative">
                            {/* Gradient Frame Container */}
                            <div className="p-1 rounded-2xl bg-gradient-brand shadow-lg mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-white">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors border border-white/30">
                                                <Linkedin size={20} />
                                            </a>
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors border border-white/30">
                                                <Twitter size={20} />
                                            </a>
                                            <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors border border-white/30">
                                                <Mail size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-heading mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-body text-sm leading-relaxed max-w-xs mx-auto">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
