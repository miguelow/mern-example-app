const fs = require('fs');
const path = require('path'); 
const {parse} = require('csv-parse');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}
/*
Queremos precargar la informacion antes de que se nos haga ninguna peticion
, como estamos usando streams que nos puede dar problemas con node.

creamos una nueva promesa que se resuelve una vez tengamos la informacion cargada
*/
function loadPLanetsData(){
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler-data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err)
            })
            .on('end', () => {
                resolve()
            });
    })
}

function getAllPlanets() {
    return habitablePlanets;
}

module.exports = {
    loadPLanetsData,
    getAllPlanets,
}