import express from 'express';
import {getPacientes, setPacientes} from '../controllers/pacienteController.js'


const router = express.Router();

router.get("/getPacientes", getPacientes)

router.post("/setPacientes", setPacientes)

export default router;