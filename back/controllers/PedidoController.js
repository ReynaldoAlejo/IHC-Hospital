/*var Pedido = require('../models/pedido');
var DetallePedido = require('../models/detallepedido');
var Producto = require('../models/producto');
var Entrega = require('../models/entrega');



function registrar(req,res){
    let data = req.body;
    var pedido = new Pedido();
    pedido.idproveedor = data.idproveedor;
    pedido.iduser = data.iduser;

    pedido.save((err,pedido_save)=>{
        if(pedido_save){
            let detalles = data.detalles;

            detalles.forEach((element,index) => {
                var detallepedido = new DetallePedido();
                detallepedido.idproducto = element.idproducto;
                detallepedido.cantidad = element.cantidad;
                detallepedido.pedido = pedido_save._id;

                detallepedido.save();

            });

        }else{
            res.send(err);
        }
    });
}

function datos_pedido(req,res){
    var id = req.params['id'];

    Pedido.findById(id).populate('idproveedor').populate('iduser').exec((err,data_pedido)=>{
        if(data_pedido){
            DetallePedido.find({pedido:data_pedido._id}).populate('idproducto').exec({idpedido:id},(err,data_detalle)=>{
                if(data_detalle){
                    res.status(200).send(
                        {
                            data : {
                                pedido: data_pedido,
                                detalles: data_detalle
                            }
                        }
                    );
                }
            });
        }
    });
}

function listado_pedido(req,res){

    Pedido.find().populate('idproveedor').populate('iduser').exec((err,data_pedidos)=>{
        if(data_pedidos){
            res.status(200).send({pedidos:data_pedidos});
        }else{
            res.status(404).send({message: "No hay ningun registro de venta"});
        }
    });
}


function detalles_pedido(req,res){
    var id = req.params['id'];

    DetallePedido.find({pedido: id}).populate('idproducto').exec((err,data_detalles)=>{
        if(data_detalles){
            res.status(200).send({detalles:data_detalles});
        }else{
            res.status(404).send({message: "No hay ningun registro de venta"});
        }
    });
}

module.exports = {
    registrar,
    datos_pedido,
    listado_pedido,
    detalles_pedido
}*/