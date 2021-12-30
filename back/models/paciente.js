var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PacienteSchema = Schema({
    
    dni: String,
    nombre: String,
    apellido : String,
    telefono:String,
    direccion:String,
    createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('paciente',PacienteSchema);