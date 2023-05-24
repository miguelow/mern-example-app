const planets = require('../../models/planet.model')

function getAllPlanets(req, res){
    return res.status(200).json(planets)
    //returning the response is a good pattern as it prevents bugs
}

module.exports = {
    getAllPlanets,
}