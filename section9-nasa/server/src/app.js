const express = require('express');
var cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

const app = express();

app.use(cors())
app.use(morgan('combined'))

app.use(express.json());
//Servimos nuestro frontend optimizado desde la carpeta public
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/planets', planetsRouter );
app.use('/launches', launchesRouter );
app.get('/*', (req, res) => {
  //el asterisco indica que si la ruta no coincide con las anteriores
  // dejando al frontend que lleve a cabo el enrutamiento
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

module.exports = app;