'use javascript';


const Alumno= require('../modelos/alumno')

// ---------- Altas ----------
exports.create = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, msj:'Falta de informacion'})
    }else{
        const alumno = {
            numeroControl:req.body.num_control,
            nombre:req.body.nombre
        };

        const nuevo_alumno = new Alumno(a);

        Alumno.create(nuevo_alumno, function(err){
            if(err)
                res.send(err);
            req.flash('msj', 'Alumno agregado correctamente');
            res.redirect('/');
        });

    }
};

// ---------- Bajas ----------
exports.delete = function(req, resp){
    Alumno.delete(req.params.nc, function(err, alumno){
        if(err)
            resp.send(err);
        req.flash('msj', 'Alumno eliminado correctamente');
        resp.redirect('/');
    })
};

// ---------- Cambios ----------
exports.update = function(req, resp){

    const a = {
        numControl:req.body.num_control,
        nombre:req.body.nombre
    }

    Alumno.update(req.params.nc, new Alumno(a),function(err, a){
        if(err)
            resp.send(err);
        req.flash('msj', 'Alumno modificado correctamente');
        resp.redirect('/');
    });
};

// ---------- Consultas ----------

// Todos
exports.findAll = function(req, resp){
    Alumno.findAll(function(err, alumno){
        if(err)
            resp.send(err);
        console.log("Lista de Alumnos", alumno);
        resp.status(200).send(alumno)
    });
}

// Buscar un alumno
exports.findById = function(req, resp){
    Alumno.findById(req.params.nc, function(err, alumno){
        if(err)
            resp.send(err);
        resp.json(alumno);
    })
};