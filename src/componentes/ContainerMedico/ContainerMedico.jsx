import React, { useEffect, useState } from 'react'
import './ContainerMedico.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CampoTexto from '../CampoTexto/CampoTexto';
import { inserirProntuario } from '../../backend/controllers/inserirBD';
import { deletarConsulta } from '../../backend/controllers/deletarDB';
export default function ContainerMedico() {
    const location = useLocation();
    const {email} = location.state || {};
    const [consultas, setConsultas] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [especialidades, setEspecialidades] = useState([])
    const [diagnostico, setDiagnostico] = useState(null);
    const [prescricao, setPrescricao] = useState(null);
    const [observacao, setObservacao] = useState(null);
    const [divAtiva, setDivAtiva] = useState(false);
    const [idConsulta, setIdConsulta] = useState(0);
    const getConsultas = async () => {
        try{
        const res_consultas = await axios.get("http://localhost:3005/consultas/getConsultas");
        const res_pacientes = await axios.get("http://localhost:3005/pacientes/getPacientes");
        const res_medicos = await axios.get("http://localhost:3005/medicos/getMedicos");
        const res_especialidades = await axios.get("http://localhost:3005/especialidades/getEspecialidades");
        setConsultas(res_consultas.data);
        setPacientes(res_pacientes.data);
        setMedicos(res_medicos.data);
        setEspecialidades(res_especialidades.data);
        } catch (error) {
        console.error(error);
        }
    }
    useEffect(() => {
        getConsultas();
    }, [setConsultas]);

    const alterarCampo = () => {
        setDivAtiva(!divAtiva)
    }

    const salvarProntuario = async (evento) => {
        evento.preventDefault();
        inserirProntuario({idConsulta, diagnostico, prescricao, observacao});
    }
  return (
    <div className='containerPaginaMedico'>
      <div className='containerConsultasMedico'>
            <h1>Suas Consultas</h1>
            <table>
                <tr>
                    <th>Seu nome</th>
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
                    if(Medico.email === email){
                        return (
                            <tr>
                                    <td>{Medico.nome}</td>
                                    <td>{Paciente.nome}</td>
                                    <td>{Especialidade.nome}</td>
                                    <td>{dataFormat}</td>
                                    <td><button onClick={() => {setIdConsulta(consulta.id); alterarCampo()}}>Escrever Prescrição</button></td>
                                    <td><button onClick={() => {deletarConsulta(consulta.id); window.location.reload();}}>Remover Consulta</button></td>
                            </tr>
                        )
                    }else{
                        return;
                    }
                })}
            </table>
        </div>
        <div className={divAtiva ? "divFormularioProntuario" : "divFormularioProntuarioNula"}>
            <h1>Formulário do Prontuario</h1>
            <form onSubmit={salvarProntuario}>
                <CampoTexto label={"Diagnostico"} aoAlterar={(valor) => setDiagnostico(valor)} placeholder={"Digite o diagnostico"} tipo={"text"} />
                <CampoTexto label={"Precrição"} aoAlterar={(valor) => setPrescricao(valor)} placeholder={"Digite a prescrição"} tipo={"text"} />
                <CampoTexto label={"Observação"} aoAlterar={(valor) => setObservacao(valor)} placeholder={"Digite a observação"} tipo={"text"} />
                <br />
                <button>Enviar</button>
            </form>
        </div>
    </div>
  )
}
