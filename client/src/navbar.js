import React, {Children, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './custom.css';
import { AuthenticationContext } from './AuthProvider';

function ColorSchemesExample() {

  const { updateAuthState } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        updateAuthState(false); // Actualiza el estado de autenticación a false
        navigate('/login'); // Redirige a la página de inicio de sesión
    };

    return (
      <>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">CountriesAPI</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/countries">Countries</Nav.Link>
              <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default ColorSchemesExample;