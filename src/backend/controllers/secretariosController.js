import { db } from "../db.mjs";

export const getSecretarios = (_, res) => {
    const q = "SELECT * FROM secretarios";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    })
}

export const setSecretarios = (req, res) => {
  const q = "INSERT INTO secretarios(`nome`,`email`,`senha`) VALUES(?)";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.senha,
  ]
  db.query(q, [values], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Paciente cadastrado com sucesso");
  })
}