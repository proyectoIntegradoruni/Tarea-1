import React from 'react';

import Login from './pages/login';
//https://edea.juntadeandalucia.es/bancorecursos/file/41832ff2-cfcb-4923-ac63-5abdf63e5087/1/CDI_1BAC_REA_01_v01.zip/gif_animado_narrador_juvenil.gif
function AppI() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'url("")',
    backgroundSize: 'cover',
  };

  return (
    <div style={{ ...containerStyle }}>
      <Login />
    </div>
  );
}


export default AppI