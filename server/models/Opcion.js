import { DataTypes } from "sequelize";
import db from '../db/sequelize.js'

const Opcion = db.define('opcion', {
    id_opcion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    opcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    es_correcta: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default Opcion;