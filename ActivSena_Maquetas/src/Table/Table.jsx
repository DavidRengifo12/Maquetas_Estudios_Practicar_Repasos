import React, { useState } from 'react'
import './styles/TableStyle.css'
import imagen10 from '../assets/images/imagen1.jpg'


export default function Table() {
    const [Usuarios, setUsuarioss] = useState([
        { name: "Arnold Perez", imagen: imagen10 ,comentarios: "Excelente", reseñas:"★★★★★" },
        { name: "Antonio Sanchez", imagen: imagen10, comentarios: "Casi no me gusto, Falto emocion", reseñas:"★☆☆☆☆" },
        { name: "Ana Maria López",  imagen: imagen10, comentarios: "Me gustó", reseñas:"★★★☆☆"}
    ])

//esto de aqui es un ejemplo de como debe funcionar la tabla mas no, va a quedar asi debido a que no se ha realizado el consumo de la Api, falta unir el frontend con el backend en mi caso

const [newComment, setNewComment] = useState("");
const añadirComentario= () => {
    if (newComment.trim() !== "") {
        setUsuarioss(prevUsuarios => [ //Estos son Ejemplos de como debe funcionar la maqueta
            ...prevUsuarios,
            { name: "New User", imagen: imagen10, comentarios: newComment, reseñas:"☆☆☆☆☆" }
        ]);
        setNewComment("");
    }}

  return (
    <>
        <h1 className="tabla-title">Comentarios</h1>
        <table className='contenedor-tabla'>
            <thead>
                <tr>
                    <th>Usuarios</th>
                    <th>Comentarios</th>
                    <th>Reseñas</th>
                </tr>
            </thead>
            <tbody>
              {Usuarios.map((usuario, index) => (
                <tr key={index}>
                    <td className='user-cell'>
                      {usuario.imagen ?(
                        <img src={usuario.imagen} alt={usuario.name} className='perfil-img'/>
                      ):(
                        <img src="" alt="perfil imagen" />
                      )}
                      <span>{usuario.name}</span>
                    </td>
                    <td>{usuario.comentarios}</td>
                    <td>{usuario.reseñas}</td>
                </tr>
              ))}
    
            </tbody>
        </table>
        <div className='center-input'>
          <input 
          type="text" 
          placeholder='Escriba un Comentario de la Actividad'
          className='input-texto'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          />
          <button className='button-submit' onClick={añadirComentario}>
              Subir Comentario
          </button>
        </div>
     

    </>
  );
}
