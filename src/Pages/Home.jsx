import React from 'react'
import BodyApresentacao from '../componentes/BodyApresentacao/BodyApresentacao.jsx';
import Localizacao from '../componentes/Localizacao/Localizacao.jsx';
import ContainerFrase from '../componentes/ContainerFrase/ContainerFrase.jsx';
import SobreNos from '../componentes/SobreNos/SobreNos.jsx';
import Especialidades from '../componentes/Especialidades/Especialidades.jsx';
import Footer from '../componentes/Footer/Footer.jsx';
import Header from '../componentes/Header/Header.jsx';
export default function Home() {
  return (
    <div>
      <Header />
      <BodyApresentacao />
      <Localizacao />
      <ContainerFrase />
      <SobreNos />
      <Especialidades />
      <Footer />
    </div>
  )
}
