import React from 'react';

const Hero: React.FC = () => {
    const WHATSAPP_NUMBER = "5511954872180";
    const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um horário na Barbearia Novo Styllo.";
    const CTA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white p-6">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://i.imgur.com/s0YAOCB.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-shadow-lg leading-tight">
                    Estilo de verdade <br /> começa <span className="text-amber-400">aqui</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl font-medium">
                    Barbearia de alto nível na Vila Jordanópolis – SBC
                </p>
                <a
                    href={CTA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 bg-amber-400 text-black font-bold text-lg py-4 px-8 rounded-lg uppercase tracking-wider hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-xl"
                >
                    Agendar corte agora
                </a>
            </div>
        </section>
    );
};

export default Hero;