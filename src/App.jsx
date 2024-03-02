import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IADiciplinaria from './pages/IADiciplinaria'
import IAJuridica from './pages/IAJuridica'
import Dashboard from './pages/Dashboard';
function App() {


  return (
    
  <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/diciplinaria" element={<IADiciplinaria />} />
        <Route path="/juridica" element={<IAJuridica />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
    
  )
}

export default App