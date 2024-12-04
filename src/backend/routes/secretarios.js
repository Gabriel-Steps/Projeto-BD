import express from 'express';
import { getSecretarios, setSecretarios } from '../controllers/secretariosController.js';


const router = express.Router();

router.get("/getSecretarios", getSecretarios)
router.post("/setSecretarios", setSecretarios)

export default router;