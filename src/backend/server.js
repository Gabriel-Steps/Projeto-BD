import express from 'express';
import especialidadeRouter from './routes/especialidade.js';
import pacienteRouter from './routes/paciente.js';
import medicosRouter from './routes/medicos.js';
import secretariosRouter from './routes/secretarios.js';
import consultasRouter from './routes/consultas.js';
import prontuariosRouter from './routes/prontuarios.js';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())

app.use('/especialidades', especialidadeRouter)
app.use('/pacientes', pacienteRouter)
app.use('/medicos', medicosRouter)
app.use('/secretarios', secretariosRouter)
app.use('/consultas', consultasRouter)
app.use('/prontuarios', prontuariosRouter);

app.listen(3005, () => {
    console.log("Servidor rodando")
})