const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');

const launches = new Map();

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

const defaultFlightNumber = 100

saveLaunch(launch)

async function getLatestFlightNumber() {
    const latestLaunch = await launchesDatabase
        .findOne()
        //el - lo ordena de mayor a menos
        .sort('-flightNumber')
    
    if(!latestLaunch) {
        return defaultFlightNumber;
    }
    return latestLaunch.flightNumber;
}

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

    await launchesDatabase.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    }
    )
}

async function scheduleNewLaunch(launch) {
    const newFlightNumber = await getLatestFlightNumber() + 1;

    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['paquirrin'],
        flightNumber: newFlightNumber
    });

    await saveLaunch(newLaunch);
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
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
}