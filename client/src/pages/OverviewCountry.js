import '../App.css';
import NavBar from '../navbar';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Visit from '../VisitContinent';
import Form from 'react-bootstrap/Form'

const OverviewCountry = ()=>{
    const title = 'Country'

    const {continent, country} = useParams()

    const [countryInfo, setCountryInfo] = useState({})

    useEffect(() => {
        const consultCountry = () => {
            if (country) {
                Axios.get(`https://pruebatecnicaturingia.onrender.com/countries/${country}`).then((response) => {
                    if (response.data.length > 0) {
                        setCountryInfo(response.data[0]);
                    }
                }).catch((error) => {
                    console.error('Error fetching country info:', error);
                });
            }
        };

        consultCountry();
    }, [country]);

    return(
    <div className="App">

    <NavBar/>

    <main className="container mt-5">
        <div>
            <section>
                <div class="container p-5 bg-dark" style={{height: '100px'}}>
                    <h1 class="text-center text-white">{title}</h1>
                </div>
            </section>
            <section style={{marginTop: '50px'}}>
            <Form.Group className="mb-3">
                <Form.Label><h5><b>Name:</b></h5></Form.Label><br/>
                <Form.Label><h5>{countryInfo.name}</h5></Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label><h5><b>Full name:</b></h5></Form.Label><br/>
                <Form.Label><h5>{countryInfo.full_name}</h5></Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label><h5><b>Capital:</b></h5></Form.Label><br/>
                <Form.Label><h5>{countryInfo.capital}</h5></Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label><h5><b>Continent:</b></h5></Form.Label><br/>
                <Form.Label><h5>{countryInfo.continent}</h5></Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
            <   Form.Label><h5><b>Size:</b></h5></Form.Label><br/>
                <Form.Label><h5>{countryInfo.size}</h5></Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label><h5><b>Population:</b></h5></Form.Label><br/>
                <Form.Label><h5>{countryInfo.population}</h5></Form.Label>
            </Form.Group>
            </section>  
        </div>

    </main>

        <footer className="container-fluid bg-dark text-white mt-5 p-3 d-flex flex-wrap justify-content-between align-items-center" style={{position: 'absolute', bottom: '0'}}>
            <p className="col-md-4 mb-0 text-muted">&copy; 2024 My Website</p>
            <Nav className="col-md-8 justify-content-end list-unstyled">
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </footer>
    </div>)
}

export default OverviewCountry;