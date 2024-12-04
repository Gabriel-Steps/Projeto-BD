import { db } from '../db.mjs';

export const getConsultas = (_, res) => {
  const q = "SELECT * FROM consultas";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
}

export const setConsultas = (req, res) => {
  const q = "INSERT INTO consultas(`id_medico`,`id_paciente`,`data_realizacao`) VALUES(?)";
  const values = [
    req.body.id_medico,
    req.body.id_paciente,
    req.body.data_realizacao,
  ]
  db.query(q, [values], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Consulta cadastrada com sucesso");
  })
}

export const deleteConsulta = async (req, res) => {
  const q = "DELETE FROM consultas WHERE id = ?"
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Consulta deletada com sucesso")
  })
}