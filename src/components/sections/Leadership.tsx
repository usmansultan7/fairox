
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Member {
    _id: string;
    name: string;
    role: string;
    photo?: any;
}

async function getTeam() {
    try {
        const team = await client.fetch<Member[]>(`*[_type == "teamMember"]`);
        return team;
    } catch (error) {
        console.error("Failed to fetch team:", error);
        return [];
    }
}

export async function Leadership() {
    const team = await getTeam();

    // Fallback
    const displayTeam = team.length > 0 ? team : [
        { _id: '1', name: 'Dr. Sarah Chen', role: 'CEO (Business & Partnerships)', placeholderInitials: 'SC' },
        { _id: '2', name: 'Mark Davis', role: 'CTO (Technology & Security)', placeholderInitials: 'MD' },
        { _id: '3', name: 'Laura Wilson', role: 'Director of RCM Ops', placeholderInitials: 'LW' },
    ];

    return (
        <section id="team" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Leadership Team</h2>
                    <p className="text-body max-w-2xl mx-auto">Experts in Healthcare, AI, and Revenue Cycle Management.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {displayTeam.map((member: any) => (
                        <div key={member._id} className="text-center group">
                            <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white shadow-lg group-hover:border-primary/20 transition-colors">
                                {member.photo ? (
                                    <Image
                                        src={urlFor(member.photo).width(400).height(400).url()}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <span className="text-4xl font-bold text-gray-300">{member.placeholderInitials}</span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-heading">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
