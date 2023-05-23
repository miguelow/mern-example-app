const express = require('express');

const messagesController = require('./controllers/messages.controller')
const friendsController = require('./controllers/friends.controller')

const app = express();

const PORT = 3000

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

app.post('/friends', friendsController.postFriend)
app.get('/friends', friendsController.getFriends)
app.get('/friends/:friendId', friendsController.getFriend)

app.get('/messages', messagesController.getMessages)
app.post('/messages', messagesController.postMessages)