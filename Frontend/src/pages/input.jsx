import React, { useState } from 'react';

import Img from "../img/img.png"
import Attach from "../img/attach.png"
import axios from 'axios';
const Input = ({asesor}) => {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const handleSend = () => {
    // Aquí puedes hacer algo con el texto capturado, por ejemplo, enviarlo a través de una función o hacer alguna operación.
    console.log('Texto capturado:', texto);
  };


  const handleenviar = async (e) => {
    
    const remitente = 'Admin';
    const destinatario = asesor;
    const mensaje = texto;
    const datos = {
      remitente: remitente,
      destinatario: destinatario,
      contenido : texto
    };
    console.log(datos)

    
   
    try 
    {
      const url = 'http://localhost:4000/api/mensaje';
      const respuesta = await axios.post(url, datos);

      
    } 
    catch (error) 
    {
      console.log(error);
      // Manejo de errores en caso de que falle la solicitud al backend
      if (error.response && error.response.status === 400) {
        // Si el código de estado es 400, significa que la contraseña es incorrecta
        alert("Contraseña incorrecta");
      }
      else if (error.response && error.response.status === 401) {
        // Si el código de estado es 400, significa que la contraseña es incorrecta
        alert("Credenciales inválidas");
      } else {
        // Manejo de otros errores en caso de que falle la solicitud al backend
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      }
    } /**/ 
    // Recargar la página
      window.location.reload();
    
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Escribe algo..."
        value={texto}
        onChange={handleChange}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: 'none' }}
          id="file"
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleenviar}>Send</button>
      </div>
    </div>
  );
};


export default Input