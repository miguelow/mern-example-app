const https = require('https');
const path = require('path');
const express = require('express');

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/secret', (req, res) => {
    return res.send('Shh')
})

https.createServer({
    cert: '',
    key: '',
}).listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})