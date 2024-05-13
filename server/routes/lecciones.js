import { Router } from "express";
import { obtenerLecciones, perfilLeccion } from "../controllers/leccionesController.js";

const router = Router();

router.get('/', obtenerLecciones);

router.get('/:id_leccion', perfilLeccion);

export default router