import React from 'react';

interface Service {
    name: string;
    icon: string; // Emoji
    ariaLabel: string;
}

const services: Service[] = [
    { name: 'Corte Masculino', icon: '✂️', ariaLabel: 'Tesoura' },
    { name: 'Corte Infantil', icon: '👦', ariaLabel: 'Menino' },
    { name: 'Barba e Acabamento', icon: '🧔‍♂️', ariaLabel: 'Homem com barba' },
    { name: 'Sobrancelha', icon: '🧵', ariaLabel: 'Rolo de linha' },
    { name: 'Pomadas e Produtos', icon: '🫙', ariaLabel: 'Pote' },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-zinc-800 p-8 rounded-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-zinc-700 hover:border-amber-400">
        <div className="text-5xl mb-4" role="img" aria-label={service.ariaLabel}>{service.icon}</div>
        <h3 className="text-xl font-bold">{service.name}</h3>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="servicos" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                    Nossos <span className="text-amber-400">Serviços</span>
                </h2>
                <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">Do clássico ao moderno, temos o serviço perfeito para você.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;