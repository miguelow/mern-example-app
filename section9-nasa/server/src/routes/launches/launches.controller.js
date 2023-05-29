const {getAllLaunches, addNewLaunch} = require('../../models/launches.model')

//Al usar la nomenclatura http... sabemos que esa funcion devuelve una response
function httpGetAllLaunches(req, res){
        return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res){
    const launch = req.body

    launch.launchDate = new Date(launch.launchDate)

    addNewLaunch(launch)
    return res.status(201).json(launch)
    //return so we only set the response once per controller function
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}