const express = require('express');
const {httpGetAllPlanets} = require('./planets.controller')

const planetsRouter = express.Router();
//Definimos las rutas

planetsRouter.get('/planets', httpGetAllPlanets)

module.exports = planetsRouter;