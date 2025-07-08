// Importações principais do React para renderização da aplicação no DOM.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importa o componente principal da aplicação.
import App from './App';

// Ponto de entrada da aplicação.
// Busca o elemento 'root' no HTML para montar a aplicação React.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Não foi possível encontrar o elemento root para montar a aplicação.");
}

// Cria a raiz da aplicação React e renderiza o componente principal 'App'.
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
