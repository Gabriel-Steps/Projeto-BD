import React from 'react'
import './Localizacao.css';

export default function Localizacao() {
  return (
    <div className='containerLocalizacao'>
      <h1>Confira nosso endereço abaixo:</h1>
      <div className="localizacao">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.388228431379!2d-48.678030922012766!3d-26.916280360076094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb8842138761%3A0x648dbc8d0ef634c1!2sUniversidade%20do%20Vale%20do%20Itaja%C3%AD%2C%20Campus%20Itaja%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1731093435750!5m2!1spt-BR!2sbr" title="loca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
