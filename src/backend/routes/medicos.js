import express from 'express';
import { getMedicos, setMedicos } from '../controllers/medicosController.js';


const router = express.Router();

router.get("/getMedicos", getMedicos)

router.post("/setMedicos", setMedicos)

export default router;