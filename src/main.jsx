import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/login.jsx'
import AppI from './loginpage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='text-white h-[100vh] flex items'>
  <AppI/>

  </div>
   
  </React.StrictMode>,
)
