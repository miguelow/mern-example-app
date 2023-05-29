const express = require('express');
const {getAllLaunches} = require('./launches.controller')

const launchesRouter = express.Router();
//Definimos las rutas

launchesRouter.get('/launches', getAllLaunches)

module.exports = launchesRouter;