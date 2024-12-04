import React from 'react'
import './headerStyle.css';
import imagemLogo from '../../images/imagem_logo_hospital.png';
export default function Header() {
  return (
    <div className='container'>
      <div className="containerImagem">
        <img src={imagemLogo} alt="Imagem do logo do hospital" />
      </div>
      <div className="containerSecoes">
        <button>Home</button>
        <button>About</button>
        <button>Service</button>
        <button>Doctors</button>
        <button>Departments</button>
        <button>Blog</button>
        <button>Contact</button>
       </div>
    </div>
  )
}
