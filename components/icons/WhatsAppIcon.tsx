import React from 'react';

/**
 * Componente de ícone SVG para o "WhatsApp".
 * @param {object} props - Propriedades do componente.
 * @param {string} [props.className="h-8 w-8"] - Classes CSS para estilizar o ícone.
 * @returns {React.ReactElement} O ícone SVG do WhatsApp renderizado.
 */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" 
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.39 1.23 4.85l-1.28 4.68 4.8-1.26c1.43.74 3.04.18 4.16.18h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.91 8.52c0-.23.18-.42.4-.42h.56c.2 0 .44.02.62.43.18.42.6 1.46.68 1.58s.11.23.02.42c-.09.18-.18.23-.33.37s-.3.18-.46.3c-.16.11-.35.2-.48.33-.14.13-.28.28-.14.53.14.23.64.93 1.28 1.53s1.21.98 1.46 1.08c.25.11.4.09.56-.07s.69-.8.86-.98c.18-.18.35-.14.56-.09.2.05.93.44 1.1.52.16.07.28.11.3.18.04.07.02.37-.07.74-.09.37-.56.67-.8.74-.25.07-1.16.2-2.13-.05-1-.25-1.88-.6-2.68-1.2-1.04-.78-1.68-1.7-1.93-2.28-.25-.58-.02-.9.16-1.18z"/>
    </svg>
);

export default WhatsAppIcon;
