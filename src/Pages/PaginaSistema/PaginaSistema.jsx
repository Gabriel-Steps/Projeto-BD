import React from 'react'
import { useParams } from 'react-router-dom'
import ContainerPaciente from '../../componentes/ContainerPaciente/ContainerPaciente';
import ContainerMedico from '../../componentes/ContainerMedico/ContainerMedico';
import ContainerSecretario from '../../componentes/ContainerSecretario/ContainerSecretario';

export default function PaginaSistema() {
    const {categoria} = useParams();
    if(categoria === "Paciente"){
      return <ContainerPaciente />
    }else if(categoria === "Medico"){
      return <ContainerMedico />
    }else if(categoria === "Secretario"){
      return <ContainerSecretario />
    }
}
