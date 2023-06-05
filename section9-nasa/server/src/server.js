const http = require('http');
const mongoose = require('mongoose');

const app = require ('./app');
const {loadPLanetsData} = require('./models/planets.model')
require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT

const  MONGO_URL = process.env.MONGO_URL

mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err)
})

async function startServer(){
    await mongoose.connect(MONGO_URL)
    //Load data on startup
    await loadPLanetsData()
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer()