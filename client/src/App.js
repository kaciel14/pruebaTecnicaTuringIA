import './App.css';
import NavBar from './navbar';
import ContinentPage from './pages/Continent'
import React, { useState, useEffect, useContext, Navigate } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Visit from './VisitContinent'
import Login from './pages/Login'
import {AuthenticationContext, AuthenticationProvider} from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const {isAuthenticated} = useContext(AuthenticationContext)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={isAuthenticated ? <Home />: <Login/>}/>
          <Route path="/continent/:continent" element={isAuthenticated ? <Continent/> : <Login/>} />
          <Route path="/countries" element={isAuthenticated ? <Continent />: <Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export const Home = ()=>{

  const continentsList = (['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceana'])

  return(<div className="App">

    <NavBar/>

    <main className="container mt-5">
      <div>
        <section>
          <div class="container p-5 bg-dark" style={{height: '300px'}}>
            <h1 class="text-center text-white">Países del mundo</h1>
            <p class="lead text-center text-white">Esta página te permite conocer informacion sobre los diferentes países que hay en el mundo.</p>
            <div class="text-center">
              <a href="/countries" class="btn btn-light" style={{marginTop: '60px'}}>Ver todos</a>
            </div>
          </div>
        </section>

        <section style={{marginTop: '50px'}}>
          {continentsList.length > 0 && (
            <Row xs={1} md={3} className="g-5">
              {continentsList.map((val, index) => (
                <Col key={index}>
                  <Card shadow>
                    <Image
                      src="https://picsum.photos/200/300"
                      alt="Card Image"
                      variant="top"
                      style={{ height: '150px' }}
                    />
                    <Card.Body>
                      <Card.Title>{val}</Card.Title>
                      <Visit continent={val} text={'Visitar'}/>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          {continentsList.length === 0 && (
            <p>No countries found.</p>
          )}
        </section>

        
      </div>

    </main>

    <footer className="container-fluid bg-dark text-white mt-5 p-3 d-flex flex-wrap justify-content-between align-items-center">
      <p className="col-md-4 mb-0 text-muted">&copy; 2024 My Website</p>
      <Nav className="col-md-8 justify-content-end list-unstyled">
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </footer>
  </div>)
}

const Continent = ()=>{
  const {continent} = useParams()
  return(<ContinentPage continent={continent}/>)
}

export default App;
