'use strict'

var express = require('express');
var OpinionesController = require('../controllers/opiniones');
var api = express.Router();

api.post('/add', OpinionesController.GuardandoOpiniones);
module.exports = api;
