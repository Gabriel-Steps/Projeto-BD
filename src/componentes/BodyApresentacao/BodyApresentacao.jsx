import React from 'react'
import './BodyApresentacaoStyle.css'
import Botao from './Botao/Botao'
import imagemMedicos from '../../images/imagem_medicos.png'

export default function BodyApresentcao() {
  return (
    <div className='containerBody'>
      <div className="apresentacaoBody">
        <h1>Excelência e cuidado para uma <b>vida mais saudável.</b></h1> 
        <p>Os melhores serviços para você</p>
        <p>Valorizamos a saúde e a segurança, promovendo um ambiente acolhedor e focado na excelência em cada detalhe do cuidado.</p>
        <div className="btns">
          <Botao texto={"Ler mais"} classificacao={"primary"}/>
          <Botao texto={"Login"} classificacao={"secondary"}/>
        </div>
      </div>
      <div className='imagemBody'>
        <img src={imagemMedicos} alt="Imagem de médicos em formato Cartoon" />
      </div>
    </div>
  )
}
