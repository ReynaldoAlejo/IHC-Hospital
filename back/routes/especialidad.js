var express = require('express');
var especialidadController = require('../controllers/EspecialidadController');

var api = express.Router();

api.get('/especialidades',especialidadController.listar);
api.post('/especialidad/registrar',especialidadController.registrar);
api.put('/especialidad/editar/:id',especialidadController.editar);
api.delete('/especialidad/eliminar/:id',especialidadController.eliminar);
api.get('/especialidad/:id',especialidadController.get_especialidad);

module.exports = api;