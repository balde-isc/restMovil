'use strict'

const twilio = require('../services/twilio');
const rn = require('random-number');

/**
 * Recibe el numero de celular del usuario y manda un codigo de verificacion
 * Como respuesta para hacer la validacion
 * @param {*} req 
 * @param {*} res 
 */
function sendNumber(req, res) {
    let params = req.body;
    let code = calculateCode();

    if (params.phoneNumber) {
        twilio.sendSMS(code, params.phoneNumber)
        console.log('Codigo de validacion: ' + calculateCode());
        res.status(200).send({ message: 'Se ha enviado correctamente el numero' });
    } else {
        res.status(400).send({ message: 'No se pudo hacer la solictud' });
    }
}

/**
 * Regresa el numero entero con una longitud de 4 digitos
 */
function calculateCode() {

    let options = {
        min:  1000
        , max:  9999
        , integer: true
    }

    return rn(options);
}


module.exports = {
    sendNumber
};