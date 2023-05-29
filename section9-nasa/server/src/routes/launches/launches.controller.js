const {getAllLaunches} = require('../../models/launches.model')

//Al usar la nomenclatura http... sabemos que esa funcion devuelve una response
function httpGetAllLaunches(req, res){
//Launches en un map -> convertir el map en objeto de js
        return res.status(200).json(getAllLaunches())
}

module.exports = {
    httpGetAllLaunches,
}