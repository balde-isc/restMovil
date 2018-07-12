'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/opiniones',(err,res) => {
    if(err){
       throw err;
       }else{
       console.log("Se a conectado a la base de datos");
           app.listen(port, function(){
   console.log("El servidor del api REST de opiniones esta el puerto: "+port);
           })
       }
});
