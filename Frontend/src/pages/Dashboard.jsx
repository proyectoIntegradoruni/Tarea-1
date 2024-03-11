import React from 'react';

const Dashboard = () => {
    
    return (
        <div style={{ position: "absolute", display: 'flex', height: '100vh',  }}>
           <div style={{ fontFamily: 'Taiwin', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop : "64px"}}>
            <h1 style={{fontSize: '84px' , fontFamily: 'Comic Sans MS', fontWeight: 'bold', display: 'inline-block', margin: '10'}}>
            Bienvenido a la 
            <br />
            plataforma de 
            asesoría jurídica y 
            disciplinaria
            </h1>
            <h1  style={{ fontSize: '32px' }}>
                <span style={{ fontSize: '64px', transform: 'rotate(360deg)', display: 'inline-block' }}>
                    &larr;
                </span>
                <br />
               {' '}Por favor, elige alguno de nuestros asesores 
               <br />de la barra lateral izquierda{' '}
            
            </h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', height: '100%' }}>
                <img src="../../public/imagenInicio.gif" alt="Descripción de la imagen" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
        </div>
    );
};

export default Dashboard;