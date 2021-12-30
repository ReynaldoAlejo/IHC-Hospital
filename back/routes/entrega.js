var express = require('express');
var entregaController = require('../controllers/EntregaController');

var api = express.Router();

api.post('/entrega/registrar',entregaController.registrar);
api.get('/entrega/:id',entregaController.datos_entrega);
api.get('/entregas',entregaController.listado_entrega);
api.get('/entrega/data/:id',entregaController.detalles_entrega);

module.exports = api;