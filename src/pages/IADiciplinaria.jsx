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

        const url = 'http://localhost:4000/api/historial';

        // Cambia esta línea a axios.get si es una solicitud GET
        const response = await axios.post(url, {remitente, destinatario });

        const mensajesObtenidos = response.data.mensajes;

        setMensajes(mensajesObtenidos);
        console.log('Mensajes obtenidos:', mensajesObtenidos);
      } catch (error) {
        console.error('Error al obtener los mensajes:', error);
      }
    };

    // Llama a la función de consulta cuando se monta el componente
    obtenerMensajes();
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