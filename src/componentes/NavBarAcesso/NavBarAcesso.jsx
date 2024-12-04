import React from 'react'
import './NavBarAcessoStyle.css';
export default function NavBarAcesso(props) {
    const alterarParaPaciente = (evento) =>{
        props.alterarCategoria(evento.target.getAttribute('categoria'))
    }
  return (
    <div className='NavBarContainer'>
      <button onClick={alterarParaPaciente} categoria="Paciente">Paciente</button>
      <button onClick={alterarParaPaciente} categoria="Medico">Médico</button>
      <button onClick={alterarParaPaciente} categoria="Secretario">Secretário</button>
    </div>
  )
}
