
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#sobre', label: 'Sobre' },
        { href: '#servicos', label: 'Serviços' },
        { href: '#portfolio', label: 'Portfólio' },
        { href: '#localizacao', label: 'Localização' },
    ];

    const CTA_LINK = "https://chat.inbarberapp.com/11954872180";

    return (
        <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 py-4 px-6 md:px-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-black uppercase tracking-wider text-white">
                    Novo <span className="text-amber-400">Styllo</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                            {link.label}
                        </a>
                    ))}
                    <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black font-bold py-2 px-4 rounded-md hover:bg-amber-500 transition-colors duration-300 shadow-lg">
                        Agendar Horário
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-white hover:text-amber-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-colors duration-300 w-full text-center mt-4">
                            Agendar Horário
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
