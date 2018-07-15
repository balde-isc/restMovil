'use strict'

//Constantes
const express = require('express');
const RegistroController = require('../controllers/registro');
const api = express.Router();

api.post('/registro', RegistroController.sendNumber);

module.exports = api;
