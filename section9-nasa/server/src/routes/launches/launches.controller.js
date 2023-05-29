const {getAllLaunches, addNewLaunch} = require('../../models/launches.model')

//Al usar la nomenclatura http... sabemos que esa funcion devuelve una response
function httpGetAllLaunches(req, res){
        return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res){
    const launch = req.body

    if(!launch.launchDate || !launch.rocket || !launch.mission || !launch.target){
        return res.status(400).json({error: 'All fields are required'})
    }

    launch.launchDate = new Date(launch.launchDate)

    if(isNaN(launch.launchDate)){
        //isNan devuelve false si es una fecha valida
        return res.status(400).json({error: 'Invalid launch date format'})
    }

    addNewLaunch(launch)
    return res.status(201).json(launch)
    //return so we only set the response once per controller function
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}