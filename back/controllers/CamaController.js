var Cama = require('../models/cama');
var fs = require('fs');
var path = require('path');


function registrar(req,res){
    
    var data = req.body;

    if(req.files){
        var imagen_path = req.files.imagen.path;
        var name = imagen_path.split('\\');
        var imagen_name = name[2];

        var cama = new Cama();
        cama.nombre = data.nombre;
        cama.imagen = imagen_name;
        cama.stock = data.stock;
        cama.idcategoria = data.idcategoria;

        cama.save((err,producto_save)=>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(producto_save){
                    res.status(200).send({produto: producto_save});
                }else{
                    res.status(403).send({message: 'No se registro la cama'}); 
                }
            }
        });
    }else{
        var cama = new Cama();
        cama.nombre = data.nombre;
        cama.imagen = null;
        cama.stock = data.stock;
        cama.idcategoria = data.idcategoria;

        cama.save((err,producto_save)=>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(producto_save){
                    res.status(200).send({produto: producto_save});
                }else{
                    res.status(403).send({message: 'No se registro la cama'}); 
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

    Cama.find({nombre: new RegExp(nombre,'i')}).populate('idcategoria').exec((err,camas_listado)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(camas_listado){
                res.status(200).send({camas:camas_listado});
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

        Cama.findByIdAndUpdate({_id:id},{nombre: data.nombre, stock:data.stock,imagen:imagen_name,idcategoria: data.idcategoria}, (err, producto_edit) =>{
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
        Producto.findByIdAndUpdate({_id:id},{nombre: data.nombre, stock:data.stock,imagen:imagen_name,idcategoria: data.idcategoria}, (err, producto_edit) =>{
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

function obtener_cama(req,res){
    var id = req.params['id'];

    Cama.findOne({_id: id}, (err, cama_data) =>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(cama_data){

            

                res.status(200).send({cama:cama_data});
            }else{
                res.status(403).send({message: 'No existe el registro'});
            }
        }
    });
}

function eliminar(req,res){
    var id = req.params['id'];

    Cama.findOneAndRemove({_id:id}, (err, cama_delete) =>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(cama_delete){
                fs.unlink('./uploads/productos/'+cama_delete.imagen, (err)=>{
                    if(err) throw err;
                });
                res.status(200).send({cama:cama_delete});
            }else{
                res.status(403).send({message: 'No se elimino ningun registro'});
            }
        }
    })
}

function update_stock(req,res){
    let id = req.params['id'];
    let data = req.body;

    Cama.findById(id,(err,cama_data)=>{
        if(cama_data){
            Cama.findByIdAndUpdate(id,{stock: parseInt(cama_data.stock) + parseInt(data.stock)},(err,cama_edit)=>{
                if(cama_edit){
                    res.status(200).send({cama:cama_edit});
                }
            })
        }else{
            res.status(500).send(err);
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
    obtener_cama,
    eliminar,
    update_stock,
get_img
    
}