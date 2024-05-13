import express from 'express';
import { dbConnection } from '../db/conexion.js';
import cors from 'cors';
import routes from '../routes/routes.js'
import bodyParser from 'body-parser';

class Server {
    constructor() {
        this.app = express();

        this.port = process.env.PORT;

        //conectar base de datos
        this.conectarBD();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarBD() {
        try {
            dbConnection();
            // conexion.sync();
            console.log('Base de datos en linea');
        } catch (error) {
            throw new Error(error);
        }
    }
    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        // Middleware para analizar solicitudes con datos codificados en URL
        this.app.use(express.urlencoded({ extended: true }));

        //Habilitar cookie parser
        // this.app.use(cookieParser());

        //Habilitar CSRF
        // this.app.use(csrf({cookie: true}));

    }

    routes() {
        this.app.use(routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

export default Server;