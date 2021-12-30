var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetallePedidoSchema = Schema({
    idproducto: {type: Schema.ObjectId, ref: 'producto'},
    cantidad: Number,
    pedido: {type:Schema.ObjectId, ref:'pedido'}
});

module.exports = mongoose.model('detallepedido',DetallePedidoSchema);