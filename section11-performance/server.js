const express = require('express');
const cluster = require('cluster');

const app = express();

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration){
        //event loop bloqued
    }
}

app.get('/', (req, res) => {
    //JSON.stringify({}) => "{}"
    //JSON.parse('{}') => {}
  res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    // delay response
    delay(6000);
    res.send('performance delayed');
})

console.log('Running server.js')
if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}else {
    //esto aplica a cada worker
    console.log(`Worker ${process.pid} is running`);
    app.listen(3000)
}
