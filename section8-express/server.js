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