const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');

const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    mission: 'Test1',
    rocket: 'Rocket',
    launchDate: new Date(2001, 11, 1),
    target: 'Murcia',
    flightNumber: 1,
    customers: [],
    upcoming: true,
    success: true,
}   

saveLaunch(launch)

async function getAllLaunches() {
    return await launchesDatabase.
        find({}, {'_id': 0, '__v': 0})
}

async function saveLaunch(launch) {
    const planet = await planets.findOne({
        keplerName: launch.target
    })

    if(!planet) {
        console.log(`Planet ${launch.target} does not exist`);
    }

    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    }
    )
}

function addNewLaunch(launch) {
    latestFlightNumber += 1;
    //Object.assign, le pasamos un objeto de referencia y otro objeto
    //las keys que se repitan en el segundo bjeto pisaran las del primero
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customers: ['test'],
            upcoming: true,
            success: true
        }));
}

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}