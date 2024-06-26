import React, { useState } from "react";

import {FaUserAlt, FaBars} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false)
    const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path: "/juridica",
      name: "Asesor Juridico",
      icon:<FaUserAlt/>
    },
    {
      path: "/diciplinaria",
      name: "Asesor Diciplinario",
      icon:<FaUserAlt/>
    }
  ]
  return (
    <div className="container">
      <div style={{width: isOpen ? "300px" : "90px"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">  
          <img src="../../src/img/J_B-removebg-preview.png" alt="Descripción de la imagen" style={{ width: '700%', height: '700%'}} />
            
           </h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>  
        </div>
        {
            menuItem.map((item,index) => (
              <NavLink to={item.path} key={index} 
              className="link" activeclassName="active">
                <div className="icon">{item.icon} </div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name} </div>
              </NavLink>
            ))
          }
      </div>
      <main>{children} </main>
    </div>
  );
}

export default Sidebar;