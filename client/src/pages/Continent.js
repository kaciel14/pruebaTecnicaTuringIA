import '../App.css';
import NavBar from '../navbar';
import { useState, useEffect } from 'react';
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
import VisitCountry from '../VisitCountry';

function Continent(){
    const {continent} = useParams()
    const [countriesList, setCountries] = useState([])
    const title = (!continent) ? 'Países del mundo' : continent

    useEffect(() => {
        getPaises()
      }, []); 
  
    
    const getPaises = async()=>{

        if(continent === 'all'){
            await Axios.get('https://pruebatecnicaturingia.onrender.com/countries').then((response)=>{
                setCountries(response.data)
            })
        }else{
            await Axios.get(`https://pruebatecnicaturingia.onrender.com/countries?continent=${continent}`).then((response)=>{
                setCountries(response.data)
            })
        }
    }


    return (
      <div className="App">
  
        <NavBar/>
  
        <main className="container mt-5">
          <div>
            <div class='container bg-dark p-2'>
                <h1 class="text-center text-white">{title}</h1>
            </div>
            <section style={{marginTop: '50px'}}>
              {countriesList.length > 0 && (
                <Row xs={1} md={3} className="g-5">
                  {countriesList.map((val, index) => (
                    <Col key={index}>
                      <Card shadow>
                        <Image
                          src="https://picsum.photos/200/300"
                          alt="Card Image"
                          variant="top"
                          style={{ height: '150px' }}
                        />
                        <Card.Body>
                          <Card.Title>{val.name}</Card.Title>
                          <Card.Text>Capital: {val.capital}</Card.Text>
                          <VisitCountry text='Visitar' continent={val.continent} country={val.name}/>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
              {countriesList.length === 0 && ( 
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
      </div>
    );
  }
  
  export default Continent;