import { Leccion, Pregunta, Opcion } from '../models/asosiaciones.js';
import { Sequelize } from 'sequelize';

const presentarEvaluacion = async (req, res) => {
    try {
        const { id_leccion } = req.params;

        //Buscar leccion
        const leccion = await Leccion.findOne({ where: { id_leccion } });
        //Crear JOIN
        const evaluacion = await Leccion.findOne({
            where: { id_leccion },
            include: {
                model: Pregunta,
                attributes: ['pregunta'],
                include: {
                    model: Opcion,
                    attributes: ['opcion']
                }
            },
            attributes: ['nombre']
        })

        return res.status(200).json({
            evaluacion
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:"error en el servidor"
        })

    }
}

export {
    presentarEvaluacion
}