const API_URL = 'http://localhost:8000'

async function httpGetPlanets() {
  //load planets and return as json

  //como fetch nos devuelve una promesa podemos usar async await
  const response = await fetch(`${API_URL}/planets`)

  return await response.json()
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches =  await response.json()
  // Load launches, sort by flight number in ascending order.
  return fetchedLaunches.sort((a, b) => a.flight_number - b.flight_number)
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};