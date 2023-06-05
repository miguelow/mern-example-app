const http = require('http');
const mongoose = require('mongoose');

const app = require ('./app');
const {loadPLanetsData} = require('./models/planet.model')

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://miguelowd:3l1m41@example-cluster.bzemjut.mongodb.net/'

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