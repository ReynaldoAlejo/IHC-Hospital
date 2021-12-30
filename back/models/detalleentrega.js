var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleEntregaSchema = Schema({
    idproducto: {type: Schema.ObjectId, ref: 'producto'},
    cantidad: Number,
    entrega: {type:Schema.ObjectId, ref:'entrega'}
});

module.exports = mongoose.model('detalleentrega',DetalleEntregaSchema);