const {getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById} = require('../../models/launches.model')

//Al usar la nomenclatura http... sabemos que esa funcion devuelve una response
async function httpGetAllLaunches(req, res){
        return res.status(200).json(await getAllLaunches())
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

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
  
    const existsLaunch = existsLaunchWithId(launchId);
    if (!existsLaunch) {
      return res.status(404).json({
        error: 'Launch not found',
      });
    }
  
    const aborted = abortLaunchById(launchId);
    if (!aborted) {
      return res.status(400).json({
        error: 'Launch not aborted',
      });
    }
  
    return res.status(200).json({
      ok: true,
    });
  }

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}