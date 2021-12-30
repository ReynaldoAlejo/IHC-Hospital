var express = require('express');
var camaController = require('../controllers/CamaController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir: './uploads/productos'});

var api = express.Router();

api.post('/cama/registrar',path,camaController.registrar);
api.get('/camas/:titulo?',camaController.listar);
api.put('/cama/editar/:id/:img?',path,camaController.editar);
api.get('/cama/:id',camaController.obtener_cama);
api.delete('/cama/:id',camaController.eliminar);
api.put('/cama/stock/:id',camaController.update_stock);
api.get('/producto/img/:img',camaController.get_img)

module.exports = api;