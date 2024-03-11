import React from 'react';

const Dashboard = () => {
    
    return (
        <div style={{ fontFamily: 'Taiwin', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <h1>
            Bienvenido a la plataforma de asesoría jurídica y disciplinaria
            </h1>
            <h1  style={{ fontSize: '32px' }}>
                <span style={{ fontSize: '36px', transform: 'rotate(360deg)', display: 'inline-block' }}>
                    &larr;
                </span>
               {' '}Por favor, elige alguno de nuestros asesores de la barra lateral izquierda{' '}
            
            </h1>
            <img src="https://res.cloudinary.com/dte7upwcr/image/upload/v1/blog/blog2/mejores-herramientas-chat-online/mejores-herramientas-chat-online-img_header.jpg" alt="Descripción de la imagen" style={{ width: '100%', maxWidth: '80%', margin: '40px 0' }} />
        </div>
    );
};

export default Dashboard;