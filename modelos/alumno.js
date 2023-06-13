'use strict';


var conexion = require('../config_bd/config');

var Alumno = function(alumno){
    this.numControl = alumno.numControl;
    this.nombre = alumno.nombre;
    console.log("MSJ->", alumno.num_control);
    console.log("MSJ->", alumno.nombre);
}

// Crear Alumno
Alumno.Create = function(nuevo_alumno, resultado){
    conexion.query("INSERT INTO alumnos set ?", nuevo_alumno, function(err, resp){
        if(err){
            console.log("ERROR", err);
            resultado(err, null);
        }else{
            console.log(resp.insertID);
            resultado(null, resp.insertID);
        }
    });
    console.log(query.sql);
}

// Eliminar Alumno
Alumno.delete =function(nc, resultado){
    conexion.query("DELETE DROM alumnos WHERE numControl=?", [nc], function(err, resp){
        if(err){
            console.log("ERROR", err);
            resultado(err, null);
        }else{
            resultado(null, resp);
        }
    });
};


Alumno.update = function(resultado){
  conexion.query("UPDATE alumnos SET nombre=?", [alumno.n, alumno.nc], function(err, resp){
    if(err){
        console.log("ERROR", err);
        resultado(err, null);
    }else{
        resultado(null, resp);
    }
  });
};