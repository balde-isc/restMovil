'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

/*cargar rutas*/
var user_routes = require('./routes/opiniones');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*Configurar cabecera http */

/*rutas base */
app.use('/api', user_routes);

module.exports = app;

//hola estoy haciendo prueba