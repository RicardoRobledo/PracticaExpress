'use strict';

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'express_db'
});

conexion.connect(function(err){
    if(err) throw err;
    console.log('Conexión a la base de datos correcta');
});

module.exports = conexion;
