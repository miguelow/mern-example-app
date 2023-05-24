const http = require('http');
const express = require('express');

const app = require ('./app');
const {loadPLanetsData} = require('../models/planet.model')

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;


async function startServer(){
    //Load data on startup
    await loadPLanetsData()
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer()