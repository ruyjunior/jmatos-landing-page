import React from 'react';
import Image from 'next/image';
import { team } from "@/data/team"


const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 px-5 max-w-5xl mx-auto">
                {team.map(member => (
                    <div
                        key={member.name}
                        className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition transform hover:scale-105"
                    >
                        <Image
                            src={member.imageSrc}
                            width={200}
                            height={200}
                            alt={`Foto de ${member.name}`}
                            className="rounded-full border-4 border-gray-200 shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
                        <p className="mt-2 text-gray-600">{member.position}</p>
                        <p className="mt-2 text-gray-600">{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;