const express = require('express');
const countriesData = require('../countries.json')
const cors = require('cors');
const {db} = require('./databaseConnection');
const { accepts } = require('express/lib/request');

const app = express()

port= 8080
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

app.post('/user', (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        return res.json({ accepted: 'missed params' });
    }
    db.query('SELECT username FROM user WHERE username = ? AND password = ? ;', [username, password], (err, result) => {
        if(err){
            res.json({accepted: 'false'})
        }else{
            if(result.length> 0 && result[0].username === username){
                return res.json({accepted: 'true'})
            }else{
                return res.json({accepted: 'false'})
            }
        }
    })
})

app.listen(port, ()=>{
    console.log("Escuchando el puerto " + port)
})