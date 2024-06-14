import App from './App';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { AuthenticationProvider } from './AuthProvider';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Utiliza ReactDOM.render para renderizar tu aplicación
root.render(
  <React.StrictMode> {/* React.StrictMode se usa para identificar problemas potenciales en la aplicación */}
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Reportar métricas web vitales si es necesario
reportWebVitals();
