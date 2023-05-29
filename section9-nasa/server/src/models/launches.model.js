const launches = new Map();

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

module.exports = {
    getAllLaunches
}