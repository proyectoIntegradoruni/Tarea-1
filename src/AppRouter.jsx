// AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import App from "./App";
import IADiciplinaria from "./pages/IADiciplinaria";
import IAJuridica from "./pages/IAJuridica";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<App />} />
      <Route path="/diciplinaria" element={<IADiciplinaria />} />
      <Route path="/juridica" element={<IAJuridica />} />
    </Routes>
  );
};
