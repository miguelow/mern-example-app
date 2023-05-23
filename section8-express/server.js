const express = require('express');

const app = express();

const PORT = 3000

let friends = [
    {
        id: 0,
        name: 'Roci'
    },
    {
        id: 1,
        name: 'Miguel'
    },
]

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use((req, res , next) => {
    const start = Date.now()
    // next es necesario para pasar la petición al endpoint y poder acceder al response
    next()
    const delta = Date.now() - start
    console.log(`${req.method}${req.url} took ${delta}ms`)

})

app.use(express.json())

app.post('/friends', (req, res) => {
    if(!req.body.name){
        res.status(400).json({
            error: 'Name is required'
        })
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
    }
    friends.push(newFriend)
    
    res.json(newFriend)
})

app.get('/friends', (req, res) => {
    res.json(friends)
})

app.get('/friends/:friendId', (req, res) => {
    //el id vuelve de la url como string que tenemos que pasar a un numero
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId]
    if (friend) {
        res.json(friend)
    }else{
        res.status(404).json({
            error: 'Friend not found'
        })
    }
})