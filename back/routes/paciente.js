var express = require('express');
var pacienteController = require('../controllers/PacienteController');

var api = express.Router();

api.get('/pacientes',pacienteController.listar);
api.post('/paciente/registrar',pacienteController.registrar);
api.put('/paciente/editar/:id',pacienteController.editar);
api.delete('/paciente/eliminar/:id',pacienteController.eliminar);
api.get('/paciente/:id',pacienteController.get_paciente)

module.exports = api;