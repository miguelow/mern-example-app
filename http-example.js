const { get } = require('https')

const req = get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`data chunk: ${chunk}`)
        //Nos devuelve el html de la vista
    })
    res.on('end', () => {
        console.log('No more data')
    })
})

//req.end() hubiese sido necesario si en vez de get hubiesemos importado request, 
//get nos sirve cuando solo queremos traer info