// AppRouter.js
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import App from "./App";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    
  );
};
