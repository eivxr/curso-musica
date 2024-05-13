import { Router } from "express";
import { auth, signup } from "../controllers/homeController.js";

const router = Router();

router.post('/auth', auth);

router.post('/signup', signup);

export default router