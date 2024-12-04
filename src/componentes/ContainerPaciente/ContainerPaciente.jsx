import React, { useEffect, useState } from 'react'
import './ContainerPaciente.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function ContainerPaciente() {
    const location = useLocation();
    const {email} = location.state || {};
    const [consultas, setConsultas] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [especialidades, setEspecialidades] = useState([])
    const [prontuarios, setProntuarios] = useState([]);
    let listaConsultasUsuarioId = [];
    const getConsultas = async () => {
        try{
        const res_consultas = await axios.get("http://localhost:3005/consultas/getConsultas");
        const res_pacientes = await axios.get("http://localhost:3005/pacientes/getPacientes");
        const res_medicos = await axios.get("http://localhost:3005/medicos/getMedicos");
        const res_especialidades = await axios.get("http://localhost:3005/especialidades/getEspecialidades");
        const res_prontuarios = await axios.get("http://localhost:3005/prontuarios/getProntuarios");
        setConsultas(res_consultas.data);
        setPacientes(res_pacientes.data);
        setMedicos(res_medicos.data);
        setEspecialidades(res_especialidades.data);
        setProntuarios(res_prontuarios.data);
        } catch (error) {
        console.error(error);
        }
    }
    useEffect(() => {
        getConsultas();
    }, [setConsultas]);
  return (
    <div className='containerPacienteLayout'>
        <div className='containerConsultasPaciente'>
            <h1>Suas Consultas</h1>
            <table>
                <tr>
                    <th>Nome do Médico</th>
                    <th>Nome do Paciente</th>
                    <th>Especialidade da consulta</th>
                    <th>Data Marcada</th>
                </tr>
                {
                consultas.map((consulta) => {
                    const Medico = medicos.find(med => med.id === consulta.id_medico);
                    const Paciente = pacientes.find(pac => pac.id === consulta.id_paciente);
                    const Especialidade = especialidades.find(esp => esp.id === Medico.id_especialidade)
                    const data = new Date(consulta.data_realizacao)
                    const dataFormat = data.toLocaleDateString();
                    if(Paciente.email === email){
                        listaConsultasUsuarioId.push(consulta.id);
                        return (
                            <tr>
                                    <td>{Medico.nome}</td>
                                    <td>{Paciente.nome}</td>
                                    <td>{Especialidade.nome}</td>
                                    <td>{dataFormat}</td>
                            </tr>
                        )
                    }else{
                        return;
                    }
                })}
            </table>
        </div>
        <div className='containerProntuarioPaciente'>
            <h1>Suas Prescrições médicas</h1>
            {prontuarios.map((pront) => {
                if(listaConsultasUsuarioId.includes(pront.id_consulta)){
                    return (
                    <div className='divProntuarios'>
                        <h1>{pront.diagnostico}</h1>
                        <p>{pront.prescricao}</p>
                        <p>{pront.observacao}</p>
                    </div>
                    )
                }
            })}
        </div>
    </div>
  )
}
