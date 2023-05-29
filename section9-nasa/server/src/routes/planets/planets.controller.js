const {getAllPlanets} = require('../../models/planet.model')

function httpGetAllPlanets(req, res){
    return res.status(200).json(getAllPlanets())
    //returning the response is a good pattern as it prevents bugs
}

module.exports = {
    httpGetAllPlanets,
}