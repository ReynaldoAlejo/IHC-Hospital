var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitaSchema = Schema({
    idpaciente: {type: Schema.ObjectId, ref: 'paciente'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    iddoctor: {type: Schema.ObjectId, ref: 'doctor'},
    idespecialidad: {type: Schema.ObjectId, ref: 'especialidad'},
    fecha: String,
    hora : String,
    detalle:String,

});

module.exports = mongoose.model('cita',CitaSchema);