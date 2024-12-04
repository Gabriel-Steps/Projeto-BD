import express from 'express';
import { getEspecialidades } from '../controllers/especialidadesController.js'

const router = express.Router();

router.get("/getEspecialidades", getEspecialidades)

export default router;