const express = require('express');
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());


server.get('/', (req,res) => {
    db.select('*')
    .from('cars')
    .then(response => {
        res.status(200).json(response)
    })
    .catch(() => {
        res.status(500).json({Error: `Failed to retrieve cars`})
    });
});


server.post('/', (req, res)=> {

    const car = req.body;

    db.insert(car)
    .into('cars')
    .then(response => {
        res.status(200).json(response)
    })
    .catch(() => {
        res.status(500).json({Error: `Failed to add new car`})
    });
});


module.exports = server;