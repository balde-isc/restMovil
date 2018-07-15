'use strict'

var express = require('express');
var OpinionesController = require('../controllers/opiniones');
var api = express.Router();

api.post('/add', OpinionesController.GuardandoOpiniones);

api.post('/hola', OpinionesController.pruebas);

module.exports = api;
