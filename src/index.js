import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado para React 18+
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Nueva forma de inicializar
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
