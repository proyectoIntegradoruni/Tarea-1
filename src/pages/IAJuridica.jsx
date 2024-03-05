import React from "react";
import { red } from "@mui/material/colors";
import Input from "./input";
import cam from "../img/attach.png"
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
  const messages = [
    { content: "Hola, juridico", timestamp: "just now", isOwner: true },
    { content: "Hola", timestamp: "just now", isOwner: false },
    { content: "lest go", timestamp: "just now", isOwner: false },

    // Agrega más mensajes según sea necesario
  ];

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
    <Input/>
  </div>
  </div>
  </div>
);
}

export default IAJuridica;