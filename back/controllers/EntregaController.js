/*var Entrega = require('../models/entrega');
var DetalleEntrega = require('../models/detalleentrega');
var Producto = require('../models/producto');
var Pedido = require('../models/pedido');



function registrar(req,res){
    let data = req.body;
    var entrega = new Entrega();
    entrega.idpedido = data.idpedido;
    entrega.iduser = data.iduser;
    entrega.estado=data.estado;

    entrega.save((err,entrega_save)=>{
        if(entrega_save){
            let detalles = data.detalles;

            detalles.forEach((element,index) => {
                var detalleentrega = new DetalleEntrega();
                detalleentrega.idproducto = element.idproducto;
                detalleentrega.cantidad = element.cantidad;
                detalleentrega.entrega = entrega_save._id;

                detalleentrega.save((err,detalle_save)=>{
                    if(detalle_save){
                        Producto.findById({_id:element.idproducto},(err,producto_data)=>{
                            if(producto_data){
                                Producto.findByIdAndUpdate({_id:producto_data._id},{stock: parseInt(producto_data.stock) + parseInt(element.cantidad)},(err,producto_edit)=>{
                                    res.end();
                                })
                            }else{
                                res.send(err);
                            }
                        });
                    }else{
                        res.send(err);
                    }
                });

            });

        }else{
            res.send(err);
        }
    });
}

function datos_entrega(req,res){
    var id = req.params['id'];

    Entrega.findById(id).populate('idpedido').populate('iduser').exec((err,data_entrega)=>{
        if(data_entrega){
            DetalleEntrega.find({entrega:data_entrega._id}).populate('idproducto').exec({idpedido:id},(err,data_detalle)=>{
                if(data_entrega){
                    res.status(200).send(
                        {
                            data : {
                                entrega: data_entrega,
                                detalles: data_detalle
                            }
                        }
                    );
                }
            });
        }
    });
}

function listado_entrega(req,res){
    Entrega.find().populate('idpedido').populate('iduser').exec((err,data_entregas)=>{
        if(data_entregas){
            res.status(200).send({entregas:data_entregas});
        }else{
            res.status(404).send({message: "No hay ningun registro de pedido"});
        }
    });
}


function detalles_entrega(req,res){
    var id = req.params['id'];

    DetalleEntrega.find({pedido: id}).populate('idproducto').exec((err,data_detalles)=>{
        if(data_detalles){
            res.status(200).send({detalles:data_detalles});
        }else{
            res.status(404).send({message: "No hay ningun registro de pedido"});
        }
    });
}

module.exports = {
    registrar,
    datos_entrega,
    listado_entrega,
    detalles_entrega
}*/