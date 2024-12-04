import React from 'react'
import './FooterStyle.css'
import Botao from '../BodyApresentacao/Botao/Botao'
export default function Footer() {
  return (
    <div className='FooterContainer'>
      <p>Deseja ter uma consulta com a gente? Só se cadastrar!</p>
      <Botao classificacao={"secondary"} texto={"Cadastre-se"}/>
    </div>
  )
}
