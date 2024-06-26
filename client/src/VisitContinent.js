
import './App.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Visit = ({continent, text}) => {
  const navigate = useNavigate();

  const continentParam = continent
  const textParam = text

  const handleClick = () => {
    navigate(`/continent/${continentParam}`); 
  };

  if(continentParam === 'all'){
    return <Button variant='light' onClick={handleClick} style={{marginTop: '30px'}}>{textParam}</Button>;
  }else{
    return <Button variant='primary' onClick={handleClick}>{textParam}</Button>;
  }
};

export default Visit;