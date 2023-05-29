const express = require('express');
const {getAllPlanets} = require('./planets.controller')

const planetsRouter = express.Router();
//Definimos las rutas

planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter;