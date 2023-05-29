const express = require('express');
const {httpGetAllLaunches} = require('./launches.controller')

const launchesRouter = express.Router();
//Definimos las rutas

launchesRouter.get('/launches', httpGetAllLaunches)

module.exports = launchesRouter;