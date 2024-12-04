import React from 'react'
import './CampoTextoStyle.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function CampoTexto({label,placeholder,tipo,selecionar=false,aoAlterar}) {
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
  const aoDigitar = (evento) => {
    aoAlterar(evento.target.value);
  }
    if(selecionar){
        return (
            <div className='CampoInputs'>
                <h2>{label}</h2>
                <select onChange={aoDigitar}>
                    <option value="">Selecione</option>
                    {especialidades.map((esp) => {
                        return <option value={esp.nome}>{esp.nome}</option>
                    })}
                </select>
            </div>
        )
    }else{
        return (
            <div className='CampoInputs'>
              <h2>{label}</h2>
              <input onChange={aoDigitar} type={tipo} placeholder={placeholder} required={true}/>
            </div>
          )
    }
}
