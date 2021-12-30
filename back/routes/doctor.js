var express = require('express');
var doctorController = require('../controllers/DoctorController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir: './uploads/productos'});

var api = express.Router();

api.post('/doctor/registrar',path,doctorController.registrar);
api.get('/doctores/:titulo?',doctorController.listar);
api.put('/doctor/editar/:id/:img?',path,doctorController.editar);
api.get('/doctor/:id',doctorController.obtener_doctor);
api.delete('/doctor/:id',doctorController.eliminar);
api.get('/producto/img/:img',doctorController.get_img)

module.exports = api;