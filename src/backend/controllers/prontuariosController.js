import { db } from '../db.mjs';

export const getProntuarios = (_, res) => {
  const q = "SELECT * FROM prontuarios";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
}

export const setProntuarios = (req, res) => {
  const q = "INSERT INTO prontuarios(`id_consulta`,`diagnostico`,`prescricao`,`observacao`) VALUES(?)";
  const values = [
    req.body.id_consulta,
    req.body.diagnostico,
    req.body.prescricao,
    req.body.observacao,
  ]
  db.query(q, [values], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Prontuario cadastrado com sucesso");
  })
}

export const deleteProntuario = async (req, res) => {
  const q = "DELETE FROM prontuarios WHERE id = ?"
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Prontuario deletado com sucesso")
  })
}