const express = require('express');
const countriesData = require('../countries.json')
const cors = require('cors');
const {db} = require('./databaseConnection');
const {PORT} = require('./config')

const app = express()

port= PORT
countries = countriesData.data

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/countries', (req, res)=>{
    const {continent} = req.query
    if(continent){
        const filteredCountries = countries.filter(
            country => {
                return country.continent && country.continent.toLowerCase() === continent.toLowerCase();
            }
        )
        return res.json(filteredCountries)
    }
    res.json(countries)
})

app.get('/countries/:name', (req, res)=>{
    const {name} = req.params
    const country = countries.find(country => country.name.toLowerCase() === name.toLowerCase())
    if(country) return res.json([country])

    res.status(404).json({message: 'Pais no encontrado'})
})

app.get('/users', (req, res)=>{
    db.query('SELECT * FROM user', (err, result)=>{
        if(err){
            return res.json({error: err})
        }else{
            return res.json({message: result})
        }
    })
})

app.post('/user', (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        return res.json({ accepted: 'missed params' });
    }
    db.query('SELECT username, admin FROM user WHERE username = ? AND password = ? ;', [username, password], (err, result) => {
        if(err){
            res.json({accepted: 'error'})
        }else{
            if(result.length> 0 && result[0].username === username){
                return res.json({accepted: 'true', message: result})
            }else{
                return res.json({accepted: 'false'})
            }
        }
    })
})

app.post('/addUser', (req, res)=>{
    const {username, password, admin} = req.body
    console.log(username)
    if(!username || !password || !admin) return res.json({error: 'Faltan parametros'})
    
    db.query('INSERT INTO user VALUES (?, ? ,?);', [username, password, admin], (err, result)=>{
        if(err){
            return res.json({error: err})
        }else{
            return res.json({message: result})
        }
    })
})

app.put('/updateUser', (req, res)=>{
    const {username, password, admin} = req.body

    if(!username) return res.json({error: 'Especifica el usuario'})
    const paramName = password ? 'password' : 'admin'
    const paramValue = password ? password : admin

    db.query(`UPDATE user SET ${paramName} = ? WHERE username = ?;`, [paramValue, username], (err, result) => {
        if(err){
            return res.json({error: err})
        }else{
            return res.json({message: result})
        }
    })
})

app.delete('/deleteUser', (req, res)=> {
    const {username} = req.body

    if(!username) return res.json({error: 'Especifica el usuario'})
    
    db.query('DELETE FROM user WHERE username = ?;', [username], (err, result)=>{
        if(err){
            return res.json({error: err})
        }else{
            return res.json({message: result})
        }
    })
})

app.listen(port, ()=>{
    console.log("Escuchando el puerto " + port)
})