import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const VisitCountry = ({continent, country, text}) => {
  const navigate = useNavigate();

  const continentParam = continent
  const countryParam = country
  const textParam = text

  const handleClick = () => {
    navigate(`/continent/${continentParam}/${countryParam}`); 
  };

  return <Button variant='primary' onClick={handleClick}>{textParam}</Button>;
};

export default VisitCountry;