import express from 'express';
import { getConsultas, deleteConsulta, setConsultas } from '../controllers/consultaControllers.js';


const router = express.Router();

router.get("/getConsultas", getConsultas)

router.delete("/deleteConsultas/:id", deleteConsulta)

router.post("/setConsultas", setConsultas)

export default router;