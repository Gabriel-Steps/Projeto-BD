import React from 'react'
import './SobreNosStyle.css';
import imagem1 from '../../images/imagem_sobre_nos1.png';

export default function SobreNos() {
  return (
    <div className='SobreNosContainer'>
        <div className='SobreNosTexto'>
            <h1>Sobre Nós</h1>
            <p>No Healing Haven, dedicamo-nos a oferecer cuidado e atenção de alta qualidade para cada paciente que recebemos.
                Nossa equipe de profissionais da saúde é composta por médicos especializados, enfermeiros dedicados
                e profissionais de apoio, todos comprometidos com a excelência no atendimento e o bem-estar dos pacientes
                e suas famílias.
                <br /><br />
                Combinamos tecnologia de ponta e atendimento humanizado para proporcionar diagnósticos precisos, tratamentos
                modernos e um ambiente acolhedor, onde cada pessoa é tratada com respeito e empatia. Acreditamos que a saúde
                é um direito fundamental, e estamos sempre em busca de soluções inovadoras e melhorias contínuas para transformar
                a jornada de cada paciente em um processo tranquilo e seguro.</p>
        </div>
        <div className='SobreNosImagem'>
            <img src={imagem1} alt="Imagem de médicos" />
        </div>
    </div>
  )
}
