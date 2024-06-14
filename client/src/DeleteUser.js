import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Delete = ({user, text}) => {

    const username = user
    const navigate = useNavigate()
    const textParam = text

  const handleClick = (e) => {
    e.preventDefault();

    Axios.delete(`https://pruebatecnicaturingia.onrender.com/deleteUser`, {data: {username}}).then((response)=>{
        if(response.data.error){
            console.log(response.data.error)
        }else if(response.data.message){
            navigate('/admin')
            //return 'Eliminado con exito'
        }
    })
   
  }

  return <Button variant='danger' onClick={handleClick} style={{marginLeft: '40px'}}>{textParam}</Button>;
};

export default Delete;