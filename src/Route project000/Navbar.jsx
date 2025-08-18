
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Route</h1>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="navbar-button">Sign/In</button>
    </nav>
  );
}

export default Navbar;
