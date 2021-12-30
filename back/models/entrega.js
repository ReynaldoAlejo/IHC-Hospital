var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntregaSchema = Schema({
    idpedido: {type: Schema.ObjectId, ref: 'pedido'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    estado:String ,
    fecha: {type: Date, default: Date.now}
    

});

module.exports = mongoose.model('entrega',EntregaSchema);