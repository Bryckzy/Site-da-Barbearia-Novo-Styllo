import React from 'react';

/**
 * Componente da seção "Sobre".
 * Apresenta uma descrição sobre a barbearia e uma imagem ilustrativa.
 * @returns {React.ReactElement} A seção "Sobre" renderizada.
 */
const About: React.FC = () => {
    return (
        <section id="sobre" className="py-20 md:py-32 bg-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Coluna de Texto */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                            A <span className="text-amber-400">Experiência</span> Novo Styllo
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Mais do que cortes, a Novo Styllo entrega uma experiência. Um espaço feito pra quem valoriza estilo, conforto e atendimento de verdade. Aqui em São Bernardo, somos referência quando o assunto é autoestima no visual.
                        </p>
                    </div>
                    {/* Coluna de Imagem */}
                    <div className="order-1 md:order-2">
                        <img 
                            src="https://i.imgur.com/tfNQ5Eo.jpg" 
                            alt="Interior da Barbearia Novo Styllo" 
                            className="rounded-lg shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
