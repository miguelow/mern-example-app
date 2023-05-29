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
  // Submit given launch data to launch system.
  try{
    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      //hay que pasar de objeto a string
      body: JSON.stringify(launch),
      headers: {
            'Content-Type': 'application/json',
          },
    })
  }catch(error) {
    return {
      ok: false,
    }
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch(err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};