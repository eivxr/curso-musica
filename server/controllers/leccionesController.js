import { getLecciones, profileLeccion } from "../models/leccionesModel.js";

const obtenerLecciones = async (req, res) => {
    try {
        const lecciones = await getLecciones();

        res.status(200).json({
            lecciones
        })
    } catch (error) {
        return res.status(500).json({
            error:"Ocurrio un error en el servidor"
        })
    }
}

const perfilLeccion = async (req, res) => {
    try {
        const { id_leccion } = req.params; 
        //Funcion para conseguir informacion  de la leccion mediante el id
        const leccion = await profileLeccion(id_leccion);

        res.status(200).json({
            leccion
        })

    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    obtenerLecciones,
    perfilLeccion
}