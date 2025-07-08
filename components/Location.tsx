
import React from 'react';

const Location: React.FC = () => {
    const address = "Rua Sérgio Milliet, N° 33 – Vila Jordanópolis, São Bernardo do Campo – SP, 09892-410";
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.551795208453!2d-46.57999882466795!3d-23.65651607873406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43c1d4715f69%3A0x6b45a66a1a4f0b69!2sR.%20S%C3%A9rgio%20Milliet%2C%2033%20-%20Vila%20Jordan%C3%B3polis%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009892-410!5e0!3m2!1spt-BR!2sbr!4v1700000000000"; // Placeholder URL, replace with actual embed URL if possible

    return (
        <section id="localizacao" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                    Nossa <span className="text-amber-400">Localização</span>
                </h2>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">{address}</p>
                <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl border-4 border-zinc-800">
                    <iframe
                        src={mapSrc}
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
        </section>
    );
};

export default Location;
