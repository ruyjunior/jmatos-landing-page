import React from 'react';
import Image from 'next/image';

const Team: React.FC = () => {
    return (
<section id="team" className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
    <div className="flex justify-center flex-wrap gap-6 w-full">
        <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-6 rounded-lg shadow-md w-64">
            <Image
                src="/images/others/team1.png"
                width={100}
                height={100}
                alt="Membro da Equipe 1"
                className="rounded-full w-auto h-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800">Tiago Gomes</h3>
            <p className="mt-2 text-gray-600">Physical Education Professional.</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-6 rounded-lg shadow-md w-64">
            <Image
                src="/images/others/team2.png"
                width={100}
                height={100}
                alt="Membro da Equipe 2"
                className="rounded-full w-auto h-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800">Wesley Santana</h3>
            <p className="mt-2 text-gray-600">Physical Education Professional.</p>
        </div>
    </div>
</section>
    );
};

export default Team;