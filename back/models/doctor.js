var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = Schema({
    nombre: String,
    apellido: String,
    imagen: String,
    exp : Number,
    idespecialidad: {type: Schema.ObjectId, ref: 'especialidad'},
});

module.exports = mongoose.model('doctor',DoctorSchema);