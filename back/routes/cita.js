var express = require('express');
var citaController = require('../controllers/CitaController');

var api = express.Router();

api.post('/cita/registrar',citaController.registrar);
api.get('/cita/:id',citaController.obtener_cita);
api.get('/citas',citaController.listar);
api.delete('/cita/:id',citaController.eliminar);
//api.get('/cita/data/:id',citaController.detalles_venta);

module.exports = api;