var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CamaSchema = Schema({
    nombre: String,
    imagen: String,
    stock: Number,
    idcategoria: {type: Schema.ObjectId, ref: 'categoria'},
});

module.exports = mongoose.model('cama',CamaSchema);