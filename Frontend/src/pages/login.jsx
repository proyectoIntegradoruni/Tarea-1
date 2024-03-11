import { purple } from '@mui/material/colors';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    

  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url(/imagenInicio.gif)',
    backgroundSize: 'contain',
    
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Lógica de autenticación...

    const usuario = email;

    if (!usuario || !password) {
      alert("Por favor, completa todos los campos");
      return;
    }
    
    try 
    {
      const url = "https://desplegue-back2-production.up.railway.app/api/login";
      const respuesta = await axios.post(url, { usuario, password });
      const isAuthorized = (respuesta.data && respuesta.data.respuesta === "ok");


      if(isAuthorized)
      {
         navigate('/home');
         console.log("autenticado")
      }

      
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
        
  };

    return (
        <div style={containerStyle} >
            <div className="bg-slate-800 border border-slate-700 rounded-md p-8 shadow-lg backdrop-filtre backdrop-blur-lg bg-opacity-30 relative">
                <h1 className="text-4xl font-bold text-center">Login</h1>
                <form action="">
                    <div>
                        <div className="relative my-4">
                        <input type="text" onChange={handleEmailChange} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-900 peer" placeholder=""value={email}/>
                        <label htmlFor=""className="absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:focus:border-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate-y-6" >Username</label>
                        </div>
                        <div className="relative my-4">
                        <input type="Password" onChange={handlePasswordChange} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-900 peer" placeholder=""value={password}/>
                        <label htmlFor=""className="absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:focus:border-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate-y-6">Password</label>
                        </div>
                        <div>
                        <button
        type="button"
        onClick={handleLogin}
        className="w-full mb-4 text-[20px] rounded blue-500 py-2 hover:bg-blue-600 translation-colors duration-300"
      >
        Ingresar
      </button>                            </div>                   

                    </div>
                </form>
                </div>

        </div> 
      );
}
export default Login;