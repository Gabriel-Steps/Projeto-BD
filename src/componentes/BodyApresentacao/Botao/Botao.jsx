import React from 'react'
import './Botao.css';
import { useNavigate } from 'react-router-dom';
export default function Botao({classificacao,texto}) {
  const navigate = useNavigate();
  const escolherRota = () => {
    if(texto === "Cadastre-se" || texto === "Login"){
      navigate("/acesso");
    }
  }
  return (
    <div>
      <button onClick={escolherRota} estiloPersonalizado={classificacao} className='botao'>{texto}</button>
    </div>
  )
}
