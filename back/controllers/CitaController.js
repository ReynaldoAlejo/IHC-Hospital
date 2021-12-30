var Cita = require('../models/cita');
var fs = require('fs');
var path = require('path');


function registrar(req,res){
    
    var data = req.body;

    
        var cita = new Cita();
        cita.idpaciente = data.idpaciente;
        cita.iduser = data.iduser;
        cita.iddoctor = data.iddoctor;
        cita.idespecialidad = data.idespecialidad;
        
        cita.fecha = data.fecha;
        cita.hora = data.hora;
        cita.detalle = data.detalle;

        cita.save((err,cita_save)=>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(cita_save){
                    res.status(200).send({cita: cita_save});
                }else{
                    res.status(403).send({cita: 'No se registro la cama'}); 
                }
            }
        });
    
    
}

function listar(req,res){
    //var titulo = req.params['nombre'];

    /* Producto.find({titulo: new RegExp(titulo,'i')}).populate('idcategoria').exec((err,productos_listado)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(productos_listado){
                res.status(200).send({productos:productos_listado});
            }else{
                res.status(403).send({message: 'No hay ningun registro con ese titulo'});
            }
        }
    }); */
    /* Producto.find((err, productos_data) => {
        if (productos_data) {
            res.status(200).send({ productos: productos_data });
        } else {
            res.status(403).send({ message: 'No hay productos en la bd' });
        }
    }); */

    

   /* Cita.find({titulo: new RegExp(titulo,'i')}).populate('idpaciente').exec((err,cita_listado)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(cita_listado){
                res.status(200).send({citas:cita_listado});
            }else{
                res.status(403).send({message: 'No hay ningun registro con ese titulo'});
            }
        }
    });*/

    Cita.find().populate('idpaciente').populate('iduser').populate('iddoctor').populate('idespecialidad').exec((err,cita_data)=>{
        if(cita_data){
            res.status(200).send({citas: cita_data});
        }else{
            res.status(404).send({message: "No hay ningun registro de venta"});
        }
    });

   /*Cita.find((err,cita_data)=>{
        if(cita_data){
            res.status(200).send({citas: cita_data});
        }else{
            res.status(403).send({message: 'No hay clientes en la bd'});
        }
    })*/
}

/*function editar(req,res){
    var data = req.body;
    var id = req.params['id'];
   
    
        Cita.findByIdAndUpdate({_id:id},{  idpaciente: data.idpaciente, iddoctor: data.iddoctor,idespecialidad: data.idespecialidad}, (err, producto_edit) =>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(producto_edit){
                    res.status(200).send({producto: producto_edit});
                }else{
                    res.status(403).send({message: 'No se edito el producto'});
                }
            }
        });
    
    

}*/

function obtener_cita(req,res){
    var id = req.params['id'];

    Cita.findOne({_id: id}, (err, cita_data) =>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(cita_data){

            

                res.status(200).send({cita:cita_data});
            }else{
                res.status(403).send({message: 'No existe el registro'});
            }
        }
    });
}

function eliminar(req,res){
    var id = req.params['id'];

    Cita.findOneAndRemove({_id:id}, (err, cita_delete) =>{
        if (cita_delete) {
            res.status(200).send({  cita_data: cita_delete });
        } else {
            res.status(500).send(err);
        }
    })
}






module.exports ={
    registrar,
    listar,
    //editar,
    obtener_cita,
    eliminar, 

}