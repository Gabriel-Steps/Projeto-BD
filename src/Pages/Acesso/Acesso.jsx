import React, { useState } from 'react'
import './AcessoStyle.css';
import NavBarAcesso from '../../componentes/NavBarAcesso/NavBarAcesso';
import { EscolhaLogin } from '../../backend/escolhaLogins';

export default function Acesso() {
  const [categoria,setCategoria] = useState('');
  return (
    <div className='ContainerAcesso' categoriaContainer={categoria}>
      <div className="localAcesso">
        {EscolhaLogin(categoria)}
      </div>
      <div className='ContainerNav'>
        <NavBarAcesso alterarCategoria={(valor) => setCategoria(valor)}/>
      </div>
    </div>
  )
}
