import React from 'react'
import './EspecialidadesStyle.css';
import CardEspecialidades from './CardEspecialidades/CardEspecialidades';
import { useState,useEffect } from 'react'
import axios from 'axios';
export default function Especialidades() {
  const [especialidades, setEspecialidades] = useState([]);
  const getEspecialidade = async () => {
    try{
      const res = await axios.get("http://localhost:3005/especialidades/getEspecialidades");
      setEspecialidades(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getEspecialidade();
  }, [setEspecialidades]);
  return (
    <div className='especialidades'>
      <h1>Nossas Especilidades:</h1>
      <div className='ListaEspecialidade'>
        {especialidades.map((especialidade) => {
          return <CardEspecialidades nome={especialidade.nome} desc={especialidade.descricao} />
        })}
      </div>
    </div>
  )
}
