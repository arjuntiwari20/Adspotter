import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Adspotter</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/forgot-password">Forgot Password</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

