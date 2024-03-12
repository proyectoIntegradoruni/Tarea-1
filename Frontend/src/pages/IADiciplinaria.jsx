import { red } from "@mui/material/colors";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from "./input";
import Messages from "./Messages";
import Cam from "../img/attach.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { TypingIndicator } from '@chatscope/chat-ui-kit-react';

const IADiciplinaria = () => {
  const [escri, setEscri] = useState(false)
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


  useEffect(() => {
    const obtenerMensajes = async () => {
      try {
        const remitente = 'Admin';
        const destinatario = 'Diciplinario';
        const url = 'https://back-final-production.up.railway.app/api/historial';

        const response = await axios.post(url, { remitente, destinatario });
        const mensajesObtenidos = response.data.mensajes;
        
        setMensajes(mensajesObtenidos);
        const ultimoMensaje = mensajesObtenidos[mensajesObtenidos.length - 1];
        setEscri(ultimoMensaje.remitente === 'Admin');
       
        console.log('Mensajes obtenidos:', mensajesObtenidos);
      } catch (error) {
        console.error('Error al obtener los mensajes:', error);
      }
    };

    
    
    const intervalId = setInterval(() => {
      obtenerMensajes();
    }, 2000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const messages = mensajes.map(item => ({
    content: item.contenido,
    timestamp: item.timestamp,
    isOwner: item.remitente === 'Admin',
  }));

  return (
    <div className='home'>
      <div className="container">  
        <div className="chat">
          <div className="chatInfo">
            <span style={{fontSize: '19px' , fontFamily: 'Comic Sans MS', fontWeight: 'bold', display: 'inline-block', margin: '10',}} >{'Asesor Diciplinario'}</span>
            <div className="chatIcons">
              <img src={Cam} alt="" />
              <img src={Add} alt="" />
              <img src={More} alt="" />
            </div>
          </div>
          
          <Messages messages={messages} />
          {escri && <TypingIndicator content="asesor escribiendo..." />}
          <Input asesor={"Diciplinario"}/>
        </div>
      </div>
    </div>
  );
}

export default IADiciplinaria;
