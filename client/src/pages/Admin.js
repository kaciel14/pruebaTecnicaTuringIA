import '../App.css';
import NavBar from '../navbar';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table'
import Axios from 'axios';
import UpdateUser from '../UpdateUser';
import DeleteUser from '../DeleteUser'

function Admin(){

    const [usersList, setUsers] = useState([])
    const title = 'Administración de usuarios'

    useEffect(() => {
        getUsers()
      }, []); 
  
    
    const getUsers = ()=>{

        Axios.get(`http://localhost:8080/users`).then((response)=>{
            setUsers(response.data.message)
        })
    }


    return (
      <div className="App">
  
        <NavBar/>
  
        <main className="container mt-5">
          <div>
            <div class='container bg-dark p-2'>
                <h1 class="text-center text-white">{title}</h1>
            </div>
            <section style={{ marginTop: '50px' }}>
                {usersList.length > 0 ? (
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Username</th>
                        <th>Admin</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((val, index) => (
                        <tr key={index}>
                            <td>{val.username}</td>
                            <td>{val.admin}</td>
                            <td><UpdateUser user={val.username} text='update' /><DeleteUser text='delete' user={val.username}/></td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                ) : (
                    <p>No users found.</p>
                )}
            </section>
  
            
          </div>
  
        </main>
  
      </div>
    );
  }
  
  export default Admin;