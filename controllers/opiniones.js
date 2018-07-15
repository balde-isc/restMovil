'use strict'
var Opinion = require('../models/opiniones');

// function pruebas(req, res) {
//   res.status(200).send({
//     message: 'probando el api rest del usuario con node y mongo'
//   });
// }

function pruebas() {
  console.log('hola');
}

function GuardandoOpiniones(req, res) {
  var opinion = new Opinion();
  var parametro = req.body;

  console.log(parametro);
  opinion.opinion = parametro.opinion;
  opinion.motivo = parametro.motivo;
  opinion.locacion = parametro.locacion;
  opinion.save((err, userStored) => {
    if (err) {
      res.status(500).send({
        message: 'Error al guardar'
      });
    } else {
      if (!userStored) {
        res.status(404).send({
          message: 'No se ha registrado nada'
        });
      } else {
        res.status(500).send({
          opinion: userStored
        });
      }
    }
  })
  //guardar el usuario



}
module.exports = {
  GuardandoOpiniones, pruebas
};
