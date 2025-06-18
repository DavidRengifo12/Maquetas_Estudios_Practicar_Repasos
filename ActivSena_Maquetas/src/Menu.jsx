import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
     <h1>Bienvenido a este Menu</h1>
     <nav>
        <ul>
            <li><Link to="/">Inicio Rate Selector</Link></li>
            <li><Link to={"/carrusel"}>Carrusel Feedback</Link></li>
            <li><Link to={"/comentarios"}>Tabla de Comentarios</Link></li>
        </ul>    
    </nav> 
    </>
  )
}
