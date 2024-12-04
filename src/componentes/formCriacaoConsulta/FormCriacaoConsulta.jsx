import React from 'react'
import './FormCriacaoConsulta.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { inserirConsulta } from '../../backend/controllers/inserirBD';
export default function FormCriacaoConsulta() {
    const [medicos, setMedicos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [idMedico, setIdMedicos] = useState();
    const [idPaciente, setIdPacientes] = useState();
    const [data, setData] = useState();
    const getMedicos = async () => {
      try{
        const res_medicos = await axios.get("http://localhost:3005/medicos/getMedicos");
        const res_pacientes = await axios.get("http://localhost:3005/pacientes/getPacientes");
        setMedicos(res_medicos.data);
        setPacientes(res_pacientes.data);
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      getMedicos();
    }, [setMedicos]);
    const aoDigitarData = (evento) => {
      setData(evento.target.value)
    }
    const aoDigitarMedico = (evento) => {
      setIdMedicos(evento.target.value);
    }
    const aoDigitarPaciente = (evento) => {
      setIdPacientes(evento.target.value);
    }
    const enviarDados = (evento) => {
      evento.preventDefault();
      console.log(idMedico, idPaciente)
      inserirConsulta({idMedico,idPaciente,data})
    }
  return (
    <div className='formularioCriacaoConsulta'>
      <form onSubmit={enviarDados}>
        <p>Selecione o médico:</p>
        <select onChange={aoDigitarMedico}>
        <option value="">Selecione</option>
                    {medicos.map((med) => {
                        return <option value={med.id}>{med.nome}</option>
                    })}
        </select>
        <p>Selecione o paciente:</p>
        <select onChange={aoDigitarPaciente}>
        <option value="">Selecione</option>
                    {pacientes.map((pac) => {
                        return <option value={pac.id}>{pac.nome}</option>
                    })}
        </select>
        <p>Selecione a data da consulta:</p>
        <input type="date" onChange={aoDigitarData}/>
        <button>Enviar</button>
      </form>
    </div>
  )
}
