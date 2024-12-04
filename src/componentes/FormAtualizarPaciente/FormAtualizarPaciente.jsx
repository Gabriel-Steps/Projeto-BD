import React, { useState, useEffect } from 'react'
import './FormAtualizarPaciente.css'
import axios from 'axios';
import CampoTexto from '../CampoTexto/CampoTexto';
export default function FormAtualizarPaciente() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});
    const getPacientes = async () => {
        try{
          const res_pacientes = await axios.get("http://localhost:3005/pacientes/getPacientes");
          setPacientes(res_pacientes.data);
        } catch (error) {
          console.error(error);
        }
      }
      const aoDigitarPaciente = (evento) => {
        const nomeUser = evento.target.value;
        pacientes.map((pac) => {
            if(pac.nome === nomeUser){
                setPaciente(pac)
            }
        })
      }
      useEffect(() => {
        getPacientes();
      }, [setPacientes]);
  return (
    <div className='divContainerAtualizarPaciente'>
      <form>
        <select onChange={aoDigitarPaciente}>
            <option value="">Selecione</option>
            {pacientes.map((paciente) => {
                return <option value={paciente.nome}>{paciente.nome}</option>
            })}
        </select>
        <input type="text" value={paciente.nome}/>
      </form>
    </div>
  )
}
