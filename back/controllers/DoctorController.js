var Doctor = require('../models/doctor');
var fs = require('fs');
var path = require('path');


function registrar(req,res){
    
    var data = req.body;

    if(req.files){
        var imagen_path = req.files.imagen.path;
        var name = imagen_path.split('\\');
        var imagen_name = name[2];

        var doctor = new Doctor();
        doctor.nombre = data.nombre;
        doctor.apellido = data.apellido;
        doctor.imagen = imagen_name;
        doctor.exp = data.exp;
        doctor.idespecialidad = data.idespecialidad;

        doctor.save((err,doctor_save)=>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(doctor_save){
                    res.status(200).send({doctor: doctor_save});
                }else{
                    res.status(403).send({doctor: 'No se registro la cama'}); 
                }
            }
        });
    }else{
        var doctor = new Doctor();
        doctor.nombre = data.nombre;
        doctor.apellido = data.apellido;
        doctor.imagen = null;
        doctor.exp = data.exp;
        doctor.idespecialidad = data.idespecialidad;

        doctor.save((err,doctor_save)=>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(doctor_save){
                    res.status(200).send({doctor: doctor_save});
                }else{
                    res.status(403).send({doctor: 'No se registro la cama'}); 
                }
            }
        });
    }
    
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

    var nombre = req.params['nombre'];

    Doctor.find({nombre: new RegExp(nombre,'i')}).populate('idespecialidad').exec((err,doctor_listado)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(doctor_listado){
                res.status(200).send({doctores:doctor_listado});
            }else{
                res.status(403).send({message: 'No hay ningun registro con ese titulo'});
            }
        }
    });
}

function editar(req,res){
    var data = req.body;
    var id = req.params['id'];
    var img = req.params['img'];

    if(req.files.imagen){

        if(img || img != null ||img != undefined){
            fs.unlink('./uploads/productos/'+img, (err)=>{
                if(err) throw err;
            });
        }

        var imagen_path = req.files.imagen.path;
        var name = imagen_path.split('\\');
        var imagen_name = name[2];

        Doctor.findByIdAndUpdate({_id:id},{nombre: data.nombre,apellido: data.apellido, imagen:imagen_name,exp: data.exp, idespecialidad: data.idespecialidad}, (err, producto_edit) =>{
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
    }else{
        Doctor.findByIdAndUpdate({_id:id},{nombre: data.nombre,apellido: data.apellido, imagen:imagen_name,exp: data.exp, idespecialidad: data.idespecialidad}, (err, producto_edit) =>{
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
    }

    

}

function obtener_doctor(req,res){
    var id = req.params['id'];

    Doctor.findOne({_id: id}, (err, doctor_data) =>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(doctor_data){

            

                res.status(200).send({doctor:doctor_data});
            }else{
                res.status(403).send({message: 'No existe el registro'});
            }
        }
    });
}

function eliminar(req,res){
    var id = req.params['id'];

    Doctor.findOneAndRemove({_id:id}, (err, doctor_delete) =>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(doctor_delete){
                fs.unlink('./uploads/productos/'+doctor_delete.imagen, (err)=>{
                    if(err) throw err;
                });
                res.status(200).send({doctor:doctor_delete});
            }else{
                res.status(403).send({message: 'No se elimino ningun registro'});
            }
        }
    })
}



function get_img(req,res) {  
    var img = req.params['img'];

    if(img != "null"){
        let path_img = './uploads/productos/'+ img;
        res.status(200).sendFile(path.resolve(path_img));
    }else{
        let path_img = './uploads/productos/default.jpg';
        res.status(200).sendFile(path.resolve(path_img));
    }
}


module.exports ={
    registrar,
    listar,
    editar,
    obtener_doctor,
    eliminar,
    
get_img
    
}