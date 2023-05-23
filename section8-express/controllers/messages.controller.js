//mejor utilizar esta convencion de funciones en vez de arrow function
//si ocurre algun error nos da el nombre
function getMessages (req, res) {
    res.send('<h1>Hello from messages!</h1>')
}

function postMessages (req, res) {
    console.log('Updating messages...')
}

module.exports = {
    getMessages,
    postMessages
}
