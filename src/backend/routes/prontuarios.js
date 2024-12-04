import express from 'express';
import { getProntuarios, setProntuarios, deleteProntuario} from '../controllers/prontuariosController.js';


const router = express.Router();

router.get("/getProntuarios", getProntuarios)

router.post("/setProntuarios", setProntuarios)

router.delete("/deleteProntuario", deleteProntuario);

export default router;