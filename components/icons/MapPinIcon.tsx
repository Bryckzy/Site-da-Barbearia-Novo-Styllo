import React from 'react';

/**
 * Componente de ícone SVG de um pino de mapa (Map Pin).
 * @param {object} props - Propriedades do componente.
 * @param {string} [props.className="h-6 w-6"] - Classes CSS para estilizar o ícone.
 * @returns {React.ReactElement} O ícone SVG do pino de mapa renderizado.
 */
const MapPinIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
        aria-hidden="true"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
        />
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
        />
    </svg>
);

export default MapPinIcon;
