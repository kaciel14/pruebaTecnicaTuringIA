import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import React,{ useState } from 'react';
import '../App.css'
import NavBar from '../navbar'
import { useNavigate, useLocation } from 'react-router-dom';

function EditForm() {

    const location = useLocation()
    const {username} = location.state || {}

    const [admin, setAdmin] = useState('')
    const navigate = useNavigate()

   

    console.log('el usuario: ' + username)

    const handleEdit = async(e) => {
        e.preventDefault()

        const params = {
            username,
            admin
        }

        await Axios.put(`https://pruebatecnicaturingia.onrender.com/updateUser`, params).then((response)=>{
            if(response.data.error){
                console.log(response.data.error)
            }else if(response.data.message){
                navigate('/admin')
                //return 'Eliminado con exito'
            }
        })
      };

  return (
    <>
    <NavBar/>
    <main className='container mt-5' style={{width: '400px'}}>
        {}
        <Form onSubmit={handleEdit}>
            <Form.Label>Admin</Form.Label>
            <Form.Control
            type="text"
            
            value={admin} onChange={(e)=> setAdmin(e.target.value)}
            />
            <br/><br/><br/>
            <Button variant="primary" type="submit">
                Edit
            </Button>
            
        </Form>
    </main>
    
      
    </>
  );
}

export default EditForm;