var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EspecialidadSchema = Schema({
    nombre: String,
    descripcion:String,
    createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('especialidad',EspecialidadSchema);