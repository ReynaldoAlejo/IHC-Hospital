var Paciente = require('../models/paciente');

function listar(req,res){
    Paciente.find((err,pacientes_data)=>{
        if(pacientes_data){
            res.status(200).send({pacientes: pacientes_data});
        }else{
            res.status(403).send({message: 'No hay clientes en la bd'});
        }
    })
}

function get_paciente(req,res){
    var id = req.params['id'];

    Paciente.findById(id,(err,paciente_data)=>{
        if(paciente_data){
            res.status(200).send({paciente:paciente_data});
        }
    })
}


function registrar(req,res){
    let data = req.body;
    var paciente = new Paciente();
    paciente.dni=data.dni;
    paciente.nombre= data.nombre;
    paciente.apellido= data.apellido;
    paciente.telefono = data.telefono;
    paciente.direccion = data.direccion;


    paciente.save((err,paciente_save)=>{
        if(paciente_save){
            res.status(200).send({paciente: paciente_save});
        }else{
            res.status(500).send(err);
        }
    });

}

function editar(req,res){
    let id = req.params['id'];
    let data = req.body;

    Paciente.findOneAndUpdate(id,{dni:data.dni,nombre: data.nombre,apellido: data.apellido,telefono: data.telefono,direccion: data.direccion}, (err,paciente_edit)=>{
        if(paciente_edit){
            res.status(200).send({paciente: paciente_edit});
        }else{
            res.status(500).send(err);
        }
    })
}

function eliminar(req,res){
    let id = req.params['id'];

    Paciente.findByIdAndRemove(id,(err,paciente_delete)=>{
        if(paciente_delete){
            res.status(200).send({paciente:paciente_delete});
        }else{
            res.status(500).send(err);
        }
    })
}

module.exports = {
    registrar,
    editar,
    eliminar,
    listar,
    get_paciente
}