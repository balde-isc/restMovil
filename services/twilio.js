'use strict'



const constants = require('../variables/constants')

const accountSid = constants.ACCOUNT_SID;
const authToken = constants.AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);

exports.sendSMS = function(code, numberPhone){
    client.messages
    .create({
       body: 'Tu código de verificación es: ' + code,
       from: constants.SENDER_NUMBER,
       to: numberPhone
     })
    .then(message => console.log(message.sid))
    .done();
    
}
