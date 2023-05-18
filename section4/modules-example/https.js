const request = require('./request') //relative path
const response = require('./response') //relative path

function requestData(url, data) {
    request.send(url, data)
    return response.read()
}

const responseData = requestData('https://www.google.com', 'hello')
console.log(responseData)