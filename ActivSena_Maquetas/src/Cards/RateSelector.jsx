import { Link } from 'react-router-dom'
import './styles/RateSelector.css'
import imagen from '../assets/images/imagen1.jpg'
import imagen2 from '../assets/images/imagen2.jpg'





export default function RateSelector() {


  return (
    <div className="tasa-container">
      <h2 className="tasa-title">Aquí puedes calificar los eventos y actividades <br /> en las que participaste</h2>

      <div className="carta-container">
        <div className="carta">
          <h3>Calificar Actividad</h3>
          <img
            src ={imagen}
            alt="Imagen de actividad"
            className="carta-image"
          />
          <p>Aqui podras Calificar las Actividades</p>
          <Link to={'/actividades'}>
          <button className='btn'>Activity</button>
          </Link>
          
        </div>

        <div className="carta">
          <h3>Calificar Evento</h3>
          <img
            src={imagen2}
            alt="Imagen de evento"
            className="carta-image"
          />
          <p>Aqui podras Calificar los Eventos</p>
          <Link to={'feedback'}>
          <button className='btn'>Event</button>
          </Link>

        </div>
      </div>


      
    </div>
  )
}
