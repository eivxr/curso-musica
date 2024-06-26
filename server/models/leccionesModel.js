import {conexion} from '../db/conexion.js'

//Selecciona las lecciones
function getLecciones() {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM leccion`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function profileLeccion(id) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM leccion JOIN temario ON leccion.id_leccion=temario.id_leccion WHERE leccion.id_leccion='${id}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    getLecciones,
    profileLeccion
}