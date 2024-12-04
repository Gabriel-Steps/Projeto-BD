import { db } from "../db.mjs";

export const getEspecialidades = (_, res) => {
    const q = "SELECT * FROM especialidades";
    db.query(q, (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    })
}
