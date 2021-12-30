var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidoSchema = Schema({
    idproveedor: {type: Schema.ObjectId, ref: 'proveedor'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    fecha: {type: Date, default: Date.now},

});

module.exports = mongoose.model('pedido',PedidoSchema);