import React from 'react';
import ChatIcon from './icons/ChatIcon';

const FloatingWhatsAppButton: React.FC = () => {
    const WHATSAPP_NUMBER = "5511954872180";
    const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um horário na Barbearia Novo Styllo.";
    const CTA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-amber-400 text-black w-20 h-20 rounded-full shadow-lg z-50 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 animate-pulse-cta"
            aria-label="Agendar horário pelo WhatsApp"
        >
            <ChatIcon className="h-10 w-10" />
        </a>
    );
};

export default FloatingWhatsAppButton;