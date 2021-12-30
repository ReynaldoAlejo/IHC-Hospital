var express = require('express');
var pedidoController = require('../controllers/PedidoController');

var api = express.Router();

api.post('/pedido/registrar',pedidoController.registrar);
api.get('/pedido/:id',pedidoController.datos_pedido);
api.get('/pedidos',pedidoController.listado_pedido);
api.get('/pedido/data/:id',pedidoController.detalles_pedido);

module.exports = api;