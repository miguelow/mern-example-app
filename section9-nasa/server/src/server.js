const http = require('http');

const app = require ('./app');
const {mongoConnect} = require('./services/mongo')
const {loadPLanetsData} = require('./models/planets.model')
require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT

async function startServer(){
    await mongoConnect()
    //Load data on startup
    await loadPLanetsData()
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer()