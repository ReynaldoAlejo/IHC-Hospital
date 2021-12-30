var Especialidad = require('../models/especialidad');

function listar(req, res) {
    Especialidad.find((err, especialidad_data) => {
        if (especialidad_data) {
            res.status(200).send({ especialidad: especialidad_data });
        } else {
            res.status(403).send({ message: 'No hay especialidades en la bd' });
        }
    });
}

function get_especialidad(req, res) {
    var id = req.params['id'];

    Especialidad.findById(id, (err, especialidad_data) => {
        if (especialidad_data) {
            res.status(200).send({ especialidad: especialidad_data });
        }
    })
}


function registrar(req, res) {
    let data = req.body;
    var especialidad = new Especialidad();
    especialidad.nombre= data.nombre;
    especialidad.descripcion = data.descripcion;

    especialidad.save((err,  especialidad_save) => {
        if (especialidad_save) {
            res.status(200).send({ especialidad: especialidad_save  });
        } else {
            res.status(500).send(err);
        }
    });

}

function editar(req, res) {
    let id = req.params['id'];
    let data = req.body;

    Especialidad.findOneAndUpdate(id, { nombre: data.nombre, descripcion: data.descripcion }, (err, especialidad_edit) => {
        if (especialidad_edit) {
            res.status(200).send({ especialidad: especialidad_edit });
        } else {
            res.status(500).send(err);
        }
    })
}

function eliminar(req, res) {
    let id = req.params['id'];

    Especialidad.findByIdAndRemove(id, (err, especialidad_delete) => {
        if (especialidad_delete) {
            res.status(200).send({  especialidad: especialidad_delete });
        } else {
            res.status(500).send(err);
        }
    })
}

module.exports = {
    registrar,
    editar,
    eliminar,
    listar,
    get_especialidad
}