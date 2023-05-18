function encrypt(data){
    return 'decrypted data'
}

function send(url, data) {
    const encryptedData = encrypt(data)
    console.log(`sendind ${encryptedData} to ${url}`)
}

module.exports = {
    send
}