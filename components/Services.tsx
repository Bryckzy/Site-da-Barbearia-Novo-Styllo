
import React from 'react';
import CutIcon from './icons/CutIcon';
import BeardIcon from './icons/BeardIcon';
import EyebrowIcon from './icons/EyebrowIcon';
import ProductIcon from './icons/ProductIcon';

interface Service {
    name: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    { name: 'Corte Masculino', icon: <CutIcon /> },
    { name: 'Corte Infantil', icon: <CutIcon /> },
    { name: 'Barba e Acabamento', icon: <BeardIcon /> },
    { name: 'Sobrancelha', icon: <EyebrowIcon /> },
    { name: 'Finalizadores à Venda', icon: <ProductIcon /> },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-zinc-800 p-8 rounded-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-zinc-700 hover:border-amber-400">
        <div className="text-amber-400 mb-4">{service.icon}</div>
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
