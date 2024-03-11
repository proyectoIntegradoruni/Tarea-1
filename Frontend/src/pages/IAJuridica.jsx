import { red } from "@mui/material/colors";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from "./input";
import Messages from "./Messages";
import Cam from "../img/attach.png";
import Add from "../img/add.png";
import More from "../img/more.png";


const IAJuridica = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: red,
    backgroundSize: 'cover',
  };

  const [mensajes, setMensajes] = useState([]);
  const [actualizado, setActualizado] = useState(false);

  useEffect(() => {
    const obtenerMensajes = async () => {
      try {
        const remitente = 'Admin';
        const destinatario = 'Juridico';
        const url = 'http://localhost:4000/api/historial';

        // Cambia esta línea a axios.get si es una solicitud GET
        const response = await axios.post(url, { remitente, destinatario });
        const mensajesObtenidos = response.data.mensajes;

        setMensajes(mensajesObtenidos);
        console.log('Mensajes obtenidos:', mensajesObtenidos);
      } catch (error) {
        console.error('Error al obtener los mensajes:', error);
      }
    };

    if (!actualizado) {

      // Llama a la función de consulta cuando se monta el componente
      obtenerMensajes();
      setActualizado(true);
    }
  }, [actualizado]);

  const messages = mensajes.map(item => ({
    content: item.contenido,
    timestamp: item.timestamp,
    isOwner: item.remitente === 'Admin', // Ajusta esto según tus criterios
  }));
  return (

    <div className='home'>
    <div className="container">  
      <div className="chat">
    <div className="chatInfo">
      <span>{'Asesor Juridico'}</span>
      <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>{/**/}
    </div>
    <Messages messages={messages} />
    <Input asesor={"Juridico"}/>
  </div>
  </div>
  </div>
);
}

export default IAJuridica;