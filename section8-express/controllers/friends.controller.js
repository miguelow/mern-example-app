const model = require('../models/friends.model')

//mejor utilizar esta convencion de funciones en vez de arrow function
//si ocurre algun queremos el nombre de la función
function postFriend (req, res) {
    if(!req.body.name){
        return res.status(400).json({
            error: 'Name is required'
        })
    }else if(model.filter(friend => friend.name === req.body.name).length > 0){
        return res.status(400).json({
            error: 'Friend already exists'
        })
    }
    const newFriend = {
        id: model.length,
        name: req.body.name
    }
    model.push(newFriend)
    res.json(newFriend)
}

function getFriends (req, res) {
    res.json(model)
}

function getFriend (req, res) {
    //el id vuelve de la url como string que tenemos que pasar a un numero
    const friendId = Number(req.params.friendId)
    const friend = model[friendId]
    if (friend) {
        res.json(friend)
    }else{
        res.status(404).json({
            error: 'Friend not found'
        })
    }
}

module.exports = {
    getFriends,
    postFriend,
    getFriend
}
