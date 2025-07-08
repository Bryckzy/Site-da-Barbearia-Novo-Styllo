import React, { useState } from 'react';
import MapPinIcon from './icons/MapPinIcon';
import ClipboardIcon from './icons/ClipboardIcon';

// --- Constantes --- //

const ADDRESS = "Rua Sérgio Milliet, N° 33 – Vila Jordanópolis, São Bernardo do Campo – SP, 09892-410";
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const MAP_EMBED_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.551795208453!2d-46.57999882466795!3d-23.65651607873406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43c1d4715f69%3A0x6b45a66a1a4f0b69!2sR.%20S%C3%A9rgio%20Milliet%2C%2033%20-%20Vila%20Jordan%C3%B3polis%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009892-410!5e0!3m2!1spt-BR!2sbr!4v1700000000000";


// --- Componente Principal --- //

/**
 * Componente da seção "Localização".
 * Exibe um card com informações de endereço e botões de ação, e um mapa incorporado do Google Maps.
 * @returns {React.ReactElement} A seção de localização renderizada.
 */
const Location: React.FC = () => {
    // Estado para controlar o feedback visual do botão "Copiar Endereço".
    const [isCopied, setIsCopied] = useState(false);

    /**
     * Manipulador de evento para copiar o endereço para a área de transferência.
     */
    const handleCopyAddress = () => {
        navigator.clipboard.writeText(ADDRESS).then(() => {
            setIsCopied(true);
            // Reseta o estado após 2 segundos para remover a mensagem "Copiado!".
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <section id="localizacao" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-black uppercase">
                        Venha nos <span className="text-amber-400">Visitar</span>
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Estamos te esperando para dar um trato no visual.</p>
                </div>

                <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
                    {/* Card de Informações */}
                    <div className="md:col-span-2 bg-zinc-900 p-8 rounded-lg shadow-2xl h-full flex flex-col justify-between">
                       <div>
                         <h3 className="text-3xl font-bold mb-4">Novo Styllo</h3>
                         <div className="flex items-start gap-4">
                            <MapPinIcon className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                            <p className="text-lg text-gray-300">{ADDRESS}</p>
                         </div>
                       </div>
                       <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href={GOOGLE_MAPS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-amber-400 text-black font-bold py-3 px-5 rounded-md hover:bg-amber-500 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                Ver no Mapa
                            </a>
                            <button
                                onClick={handleCopyAddress}
                                className="w-full bg-zinc-700 text-white font-bold py-3 px-5 rounded-md hover:bg-zinc-600 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <ClipboardIcon className="h-5 w-5" />
                                {isCopied ? 'Copiado!' : 'Copiar Endereço'}
                            </button>
                       </div>
                    </div>
                    {/* Iframe do Mapa */}
                    <div className="md:col-span-3 h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl border-4 border-zinc-800">
                        <iframe
                            src={MAP_EMBED_SRC}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da Barbearia Novo Styllo"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
