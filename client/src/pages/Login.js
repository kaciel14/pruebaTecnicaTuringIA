import '../App.css';
import NavBar from '../navbar';
import React, { useState, useEffect, Navigate, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Form from 'react-bootstrap/Form'
import {Home} from '../App'
import { AuthenticationContext } from '../AuthProvider';

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {isAuthenticated, updateAuthState} = useContext(AuthenticationContext)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        const data={
            username,
            password
        }
        try{
            const response = await Axios.post(`http://localhost:8080/user`, data)
                if(response.data.accepted === 'true'){
                    updateAuthState(true)
                    console.log(isAuthenticated)
                    localStorage.setItem('authToken', 'your-auth-token');
                    navigate('/')
                    navigate('/')
                    
                }else{
                    updateAuthState(false)
                    console.log('user not accepted')
                }
        }catch(err){
            console.error(err)
        }  
        
    };

    return(
        <div className='App'>
            <NavBar/>
            <br/><br/>
            <main className='container mt-5' style={{width: '400px'}}>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    </Form.Group>
                    <br/><br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </main>
        </div>    
    )
}
export default Login;