const express = require('express');
var cors = require('cors')
const path = require('path')

const planetsRouter = require('../routes/planets/planets.router')

const app = express();

app.use(cors())
app.use(express.json());
app.use(planetsRouter );

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

module.exports = app;