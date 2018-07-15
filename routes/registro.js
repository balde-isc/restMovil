'use strict'

var express = require('express');
var RegistroController = require('../controllers/registro');
var api = express.Router();

api.post('/registro', RegistroController.sendNumber);

module.exports = api;
