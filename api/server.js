const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({
        api: 'up'
    })
}) 

// POST USERS 

server.post('/', async (req, res) => {
    
})


// DELETE USERS 

server.delete('/', async (req, res) => {

})

