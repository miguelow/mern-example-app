const {launches} = require('../../models/launches.model')

function getAllLaunches(req, res){
//Launches en un map -> convertir el map en objeto de js
        return res.status(200).json(Array.from(launches.values()))
}

module.exports = {
    getAllLaunches,
}