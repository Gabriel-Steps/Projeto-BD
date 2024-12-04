import { db } from '../db.mjs';

export const getPacientes = (_, res) => {
  const q = "SELECT * FROM pacientes";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
}

export const setPacientes = (req, res) => {
  const q = "INSERT INTO pacientes(`nome`,`cpf`,`telefone`,`email`,`senha`) VALUES(?)";
  const values = [
    req.body.nome,
    req.body.cpf,
    req.body.telefone,
    req.body.email,
    req.body.senha,
  ]
  db.query(q, [values], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Paciente cadastrado com sucesso");
  })
}