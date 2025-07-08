import React from 'react';

/**
 * Componente de ícone SVG para "Corte".
 * Representa uma tesoura.
 * @returns {React.ReactElement} O ícone SVG renderizado.
 */
const CutIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.415a.75.75 0 00-1.06-1.06L6 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5L14.25 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5L14.25 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 16.5L9.75 18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 16.5L9.75 15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12.75l-4.5 4.5m0-4.5l4.5 4.5" />
    </svg>
);

export default CutIcon;
