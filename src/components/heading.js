import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">GROUP6</div>
      <nav className="nav">
        <NavLink to="/map" className={({ isActive }) => 
          isActive ? "nav-link active" : "nav-link"
        }>Map</NavLink>
        <NavLink to="/about" className={({ isActive }) => 
          isActive ? "nav-link active" : "nav-link"
        }>About Us</NavLink>
      </nav>
    </header>
  );
}

export default Header;