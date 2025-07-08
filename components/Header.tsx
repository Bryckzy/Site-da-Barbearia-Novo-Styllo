import React, { useState } from 'react';

// --- Constantes --- //

const NAV_LINKS = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#localizacao', label: 'Localização' },
];

const WHATSAPP_NUMBER = "5511954872180";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um horário na Barbearia Novo Styllo.";
const CTA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


// --- Subcomponentes --- //

/**
 * Componente visual que renderiza o "barber pole" (poste de barbeiro).
 * @returns {React.ReactElement} O elemento SVG do poste de barbeiro.
 */
const BarberPole: React.FC = () => (
    <div className="flex-shrink-0 flex flex-col items-center w-8 h-16" aria-hidden="true">
        <div className="w-full h-1.5 bg-gray-400 rounded-t-full"></div>
        <div className="w-full h-full bg-white overflow-hidden border-l-2 border-r-2 border-gray-400">
            <div className="barber-pole-stripes h-full w-full"></div>
        </div>
        <div className="w-full h-1.5 bg-gray-400 rounded-b-full"></div>
    </div>
);


// --- Componente Principal --- //

/**
 * Componente de cabeçalho do site.
 * Inclui o logo, a navegação para desktop e um menu hambúrguer para dispositivos móveis.
 * @returns {React.ReactElement} O cabeçalho renderizado.
 */
const Header: React.FC = () => {
    // Estado para controlar a visibilidade do menu móvel.
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 py-4 px-6 md:px-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 text-2xl font-black uppercase tracking-wider text-white">
                    <BarberPole />
                    Novo <span className="text-amber-400">Styllo</span>
                </a>

                {/* Navegação para Desktop */}
                <nav className="hidden md:flex items-center space-x-6">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                            {link.label}
                        </a>
                    ))}
                    <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black font-bold py-2 px-4 rounded-md hover:bg-amber-500 transition-colors duration-300 shadow-lg">
                        Agendar Horário
                    </a>
                </nav>

                {/* Botão do Menu Móvel */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Abrir menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Móvel */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="text-white hover:text-amber-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-colors duration-300 w-full text-center mt-2">
                            Agendar Horário
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
