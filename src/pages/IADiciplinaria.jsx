import { red } from "@mui/material/colors";
import React, { useEffect, useState } from 'react';
import axios from 'axios';import Input from "./input";
import cam from "../img/attach.png"
import Messages from "./Messages";
import Cam from "../img/attach.png";
import Add from "../img/add.png";
import More from "../img/more.png";



const IADiciplinaria = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: red,
    backgroundSize: 'cover',
    
  };
  const messages = [];

  const [mensajes, setMensajes] = useState([]);
  const [texto, setTexto] = useState('');
  

  useEffect(() => {
    // Define la función para realizar la consulta
    const obtenerMensajes = async () => {
      try {
        const remitente = 'Admin';
        const destinatario = 'Diciplinario';

        const datos = {
          remitente: remitente,
          destinatario: destinatario
        };

        const url = 'http://localhost:4000/api/historial'

        // Cambia esta línea a axios.get si es una solicitud GET
        const response = await axios.post(url, {remitente, destinatario });

        const mensajesObtenidos = response.data.mensajes ;
        setTexto(response.data.respuestaIA)
        
        setMensajes(mensajesObtenidos);
        console.log('Mensajes obtenidos:', mensajesObtenidos);
      } catch (error) {
        console.error('Error al obtener los mensajes:', error);
      }
    };

    /*const handleen = async () => {
    
      const remitente = 'Diciplinario';
      const destinatario = 'Admin';
      const datoss = {
        remitente: remitente,
        destinatario: destinatario,
        contenido : texto
      };
      console.log(datoss)
  
      
     
      try 
      {
        const url = 'http://localhost:4000/api/mensaje';
        const respuesta = await axios.post(url, datoss);
  
        
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
      } 
      // Recargar la página
        window.location.reload();
      
    };*/
    
    // Llama a la función de consulta cuando se monta el componente
    obtenerMensajes();
    //handleen();
  }, []); // El

   console.log(mensajes)

   mensajes.forEach(item => {
    const isOwner = item.remitente === 'Admin'; // Ajusta esto según tus criterios

 
    const message = { content: item.contenido, timestamp: item.timestamp, isOwner };
    messages.push(message);
  });
  return (
    <div className='home'>
    <div className="container">  
      <div className="chat">
    <div className="chatInfo">
      <span>{'Asesor Diciplinario'}</span>
      <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>{/**/}

    </div>
    <Messages messages={messages} />
    <Input/>
  </div>
  </div>
  </div>
);

}

export default IADiciplinaria;
export texto;