import React from 'react';

/**
 * Componente de ícone SVG de uma prancheta (Clipboard).
 * Usado para a ação de "copiar".
 * @param {object} props - Propriedades do componente.
 * @param {string} [props.className="h-6 w-6"] - Classes CSS para estilizar o ícone.
 * @returns {React.ReactElement} O ícone SVG da prancheta renderizado.
 */
const ClipboardIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
        />
    </svg>
);

export default ClipboardIcon;
