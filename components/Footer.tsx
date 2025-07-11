import React from 'react';

// --- Constantes --- //

const WHATSAPP_NUMBER = "5511954872180";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um horário na Barbearia Novo Styllo.";
const CTA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;


// --- Componente Principal --- //

/**
 * Componente de rodapé do site.
 * Contém informações de contato, CTA para agendamento, horário de funcionamento e direitos autorais.
 * @returns {React.ReactElement} O rodapé renderizado.
 */
const Footer: React.FC = () => {
    return (
        <footer id="contato" className="bg-zinc-900 text-white py-16">
            <div className="container mx-auto px-6 text-center">
                {/* Chamada para Ação (CTA) */}
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                    Agende seu <span className="text-amber-400">Horário</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                    Pronto para transformar seu estilo? Entre em contato ou agende diretamente pelo botão.
                </p>

                {/* Contato e Botão de Agendamento */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                     <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-2xl font-bold hover:text-amber-400 transition-colors duration-300">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
                            alt="WhatsApp"
                            className="h-8 w-8"
                        />
                        (11) 95487-2180
                    </a>
                    <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-black font-bold text-lg py-4 px-8 rounded-lg uppercase tracking-wider hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-xl">
                        Agendar agora
                    </a>
                </div>

                {/* Horário de Funcionamento */}
                <div className="border-t border-zinc-700 pt-10">
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">Horário de Funcionamento</h3>
                    <p className="text-lg text-gray-300">Segunda a Sábado: 9h às 19h</p>
                    <p className="text-lg text-gray-300">Domingo: Fechado</p>
                </div>
                
                {/* Informações Legais e Endereço */}
                <div className="mt-12 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Barbearia Novo Styllo. Todos os direitos reservados.</p>
                    <p>Rua Sérgio Milliet, N° 33 – Vila Jordanópolis, São Bernardo do Campo – SP</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
