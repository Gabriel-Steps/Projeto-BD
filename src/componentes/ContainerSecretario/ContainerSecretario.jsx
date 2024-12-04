import React from 'react'
import './ContainerSecretario.css';
import FormCriacaoConsulta from '../formCriacaoConsulta/FormCriacaoConsulta';
import FormAtualizarPaciente from '../FormAtualizarPaciente/FormAtualizarPaciente';
export default function ContainerSecretario() {
  return (
    <div className='ContainerSecretarioPagina'>
        <FormCriacaoConsulta />
        <FormAtualizarPaciente />
    </div>
  )
}
