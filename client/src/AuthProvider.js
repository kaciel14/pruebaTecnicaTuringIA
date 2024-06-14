import { useContext, createContext, useState, useEffect } from "react";
import Login from "./pages/Login";

export const AuthenticationContext = createContext()

export const AuthenticationProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state
    const [isAdmin, setIsAdmin] = useState(false)
  
    // Implement logic to handle authentication (e.g., checking local storage, cookies, server-side state)
    useEffect(() => {
        const checkAuth = async () => {
        // Replace this with your actual authentication check logic
            const token = localStorage.getItem('authToken');
            const adminToken = localStorage.getItem('adminToken') // Suponiendo que guardas un token de autenticación
            if (token) {
                // Aquí podrías hacer una llamada a tu API para validar el token si es necesario
                updateAuthState(true);
                setIsAuthenticated(true);
                if(adminToken){
                  updateAdminState(true)
                  setIsAdmin(true)
                }else{
                  updateAdminState(false)
                  setIsAdmin(false)
                }
            } else {
                updateAuthState(false);
                setIsAuthenticated(false);
            }
            
        };
  
      checkAuth();
    }, []); // Empty dependency array to run only on initial render
  
    const updateAuthState = (newValue) => {
      setIsAuthenticated(newValue);
      if (newValue) {
        localStorage.setItem('authToken', 'your-auth-token'); // Guarda tu token de autenticación en localStorage
    } else {
        localStorage.removeItem('authToken'); // Elimina el token de localStorage al cerrar sesión
    }
    };

    const updateAdminState = (newValue) => {
      setIsAdmin(newValue);
      if (newValue) {
        localStorage.setItem('adminToken', 'your-admin-token'); // Guarda tu token de autenticación en localStorage
    } else {
        localStorage.removeItem('adminToken'); // Elimina el token de localStorage al cerrar sesión
    }
    };
  
    const auth = { isAuthenticated, updateAuthState, isAdmin, updateAdminState }; // Create the auth object
  
    return (
      <AuthenticationContext.Provider value={auth}>
        {children}
      </AuthenticationContext.Provider>
    );
  };