
import React from 'react';

const portfolioImages = [
    { src: 'https://i.imgur.com/pXUOQxx.jpg', alt: 'Corte de cabelo masculino moderno' },
    { src: 'https://i.imgur.com/g4qjCv4.jpg', alt: 'Corte de cabelo masculino com degradê' },
    { src: 'https://i.imgur.com/md668Zm.jpg', alt: 'Corte de cabelo masculino estiloso' },
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-zinc-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                    Nossos <span className="text-amber-400">Trabalhos</span>
                </h2>
                <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">Confira alguns cortes feitos por nossos profissionais.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {portfolioImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
