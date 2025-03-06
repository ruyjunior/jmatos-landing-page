import React from 'react';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center text-center px-5 h-screen bg-black"
            style={{
                backgroundImage: `url(${heroDetails.centerImageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            aria-labelledby="hero-heading"
        >
            {/* Overlay escuro para melhor contraste */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Conteúdo */}
            <div className="relative z-10 max-w-2xl">
                <h1
                    id="hero-heading"
                    className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-md"
                >
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        {heroDetails.heading}
                    </span>
                </h1>
                <p
                    id="hero-description"
                    className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md"
                >
                    {heroDetails.subheading}
                </p>

                <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full transition">
                    Quero Treinar!
                </button>
            </div>
        </section>
    );
};

export default Hero;
