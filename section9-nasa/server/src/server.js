const http = require('http');

const app = require ('./app');
const {mongoConnect} = require('./services/mongo')
const {loadPLanetsData} = require('./models/planets.model')
const {loadlaunchesData} = require('./models/launches.model')
require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT

async function startServer(){
    await mongoConnect()
    //Load data on startup
    await loadPLanetsData()
    await loadlaunchesData()
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer()