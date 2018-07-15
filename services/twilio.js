'use strict'


//Constante de importacion
const constants = require('../variables/constants')

//Constantes Twilio
const accountSid = constants.ACCOUNT_SID;
const authToken = constants.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

/**
 * Envia SMS al usuario
 * @param {*} code 
 * @param {*} numberPhone 
 */
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
