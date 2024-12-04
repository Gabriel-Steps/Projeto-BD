import { db } from "../db.mjs";

export const getMedicos = (_, res) => {
    const q = "SELECT * FROM medicos";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    })
}

export const setMedicos = (req, res) => {
  const q = "INSERT INTO medicos(`nome`,`id_especialidade`,`telefone`,`email`,`senha`) VALUES(?)";
  const values = [
    req.body.nome,
    req.body.id_especialidade,
    req.body.telefone,
    req.body.email,
    req.body.senha,
  ]
  db.query(q, [values], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Paciente cadastrado com sucesso");
  })
}