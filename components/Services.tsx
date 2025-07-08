import React from 'react';

// --- Tipos e Dados --- //

interface Service {
    name: string;
    emoji: string;
}

// Lista de serviços oferecidos.
const services: Service[] = [
    { name: 'Corte Masculino', emoji: '✂️' },
    { name: 'Corte Infantil', emoji: '👦' },
    { name: 'Barba e Acabamento', emoji: '🧔' },
    { name: 'Sobrancelha', emoji: '👁️' },
    { name: 'Pomadas e Produtos', emoji: '🧴' },
];


// --- Subcomponentes --- //

/**
 * Card para exibir um único serviço.
 * @param {object} props - Propriedades do componente.
 * @param {Service} props.service - O objeto de serviço a ser exibido.
 * @returns {React.ReactElement} O card de serviço renderizado.
 */
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-zinc-800 p-8 rounded-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-zinc-700 hover:border-amber-400">
        <span className="text-5xl mb-4" role="img" aria-label={service.name}>{service.emoji}</span>
        <h3 className="text-xl font-bold">{service.name}</h3>
    </div>
);


// --- Componente Principal --- //

/**
 * Componente da seção "Serviços".
 * Exibe uma grade de cards com os serviços oferecidos pela barbearia.
 * @returns {React.ReactElement} A seção de serviços renderizada.
 */
const Services: React.FC = () => {
    return (
        <section id="servicos" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                    Nossos <span className="text-amber-400">Serviços</span>
                </h2>
                <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">Do clássico ao moderno, temos o serviço perfeito para você.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {/* Mapeia a lista de serviços para renderizar um ServiceCard para cada um. */}
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
