const express = require('express');
const {httpGetAllLaunches, httpAddNewLaunch} = require('./launches.controller')

const launchesRouter = express.Router();
//Definimos las rutas

launchesRouter.get('/', httpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)

module.exports = launchesRouter;