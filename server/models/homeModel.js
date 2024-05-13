import {conexion} from '../db/conexion.js'

//Registro de usuarios
function register(data) {
    const { email, password, nombre } = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO usuario(email, password, nombre) 
            VALUES ('${email}', '${password}', '${nombre}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

//Iniciar sesion 
function signin(email, password) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM usuario WHERE email='${email}'
            AND password='${password}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    register, 
    signin
}