import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IADiciplinaria from './pages/IADiciplinaria'
import IAJuridica from './pages/IAJuridica'
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import AppLayout from './pages/AppLayout';
import './style.scss'
function App() {
  return (
  
    <Sidebar>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/diciplinaria" element={<IADiciplinaria />} />
        <Route path="/juridica" element={<IAJuridica />} />
      </Routes>
    </Sidebar>

  );
}

export default App;

