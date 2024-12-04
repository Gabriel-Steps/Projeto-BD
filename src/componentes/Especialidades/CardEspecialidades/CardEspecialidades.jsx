import './CardEspecialidadesStyle.css';

export default function CardEspecialidades({nome,desc}) {
  return (
    <div className='cardEpecialidade'>
      <h2>{nome}</h2>
      <p>{desc}</p>
    </div>
  )
}
