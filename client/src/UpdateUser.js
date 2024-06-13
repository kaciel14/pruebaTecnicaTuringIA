import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = ({user, text}) => {

    const navigate = useNavigate()
    const username = user

    const textParam = text

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/updateUser`, {state: {username}})
  }

  return <Button variant='primary' onClick={handleClick}>{textParam}</Button>;
};

export default Update;