const https = require('https')
const querystring = require('querystring')

const username = process.env.SMS_USERNAME
const password = process.env.SMS_PASSWORD

const postFields = {
    from: "+46766864403",
    to: "+46700383373",
    message: "Robert sending sms"
}

const key = new Buffer.from(username + ':' + password).toString('base64')
const postData = querystring.stringify(postFields)

const options = {
    hostname: 'api.46elks.com',
    path: '/a1/SMS',
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + key
    }
}


const callback = (response) => {
    var str = ''
    response.on('data', (chunk) => {
        str += chunk
    })

    response.on('end', () => {
        console.log(str)
    })
}

const callSmsApi = () => {
    // Start the web request.
    var request = https.request(options, callback)

    // Send the real data away to the server.
    request.write(postData)

    // Finish sending the request.
    request.end()
}

exports.callSmsApi = callSmsApi
