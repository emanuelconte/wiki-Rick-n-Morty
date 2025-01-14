import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Certifique-se de que o caminho está correto
import './index.css'; // Se tiver algum arquivo de estilo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
