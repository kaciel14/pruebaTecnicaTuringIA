
import ReactDOM from 'react-dom'; // Importa desde 'react-dom' en lugar de 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthenticationProvider } from './AuthProvider';

// Utiliza ReactDOM.render para renderizar tu aplicación
ReactDOM.render(
  <React.StrictMode> {/* React.StrictMode se usa para identificar problemas potenciales en la aplicación */}
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Reportar métricas web vitales si es necesario
reportWebVitals();
