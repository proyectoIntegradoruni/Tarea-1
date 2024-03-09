// AppLayout.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import IADiciplinaria from './IADiciplinaria';
import IAJuridica from './IAJuridica';
import Sidebar from '../components/Sidebar';

const AppLayout = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/diciplinaria" element={<IADiciplinaria />} />
        <Route path="/juridica" element={<IAJuridica />} />
      </Routes>
    </Sidebar>
  );
};

export default AppLayout;
