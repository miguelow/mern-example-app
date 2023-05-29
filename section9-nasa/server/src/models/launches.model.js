const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    mission: 'Kepler exploration',
    rocket: 'Rocket',
    launchDate: new Date(2001, 11, 1),
    destination: 'Murcia',
    flightNumber: 1,
    customers: [],
    upcoming: true,
    success: true,
}   

//(key, value)
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
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

module.exports = {
    getAllLaunches,
    addNewLaunch,
}