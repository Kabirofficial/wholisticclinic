import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
return (
<nav className="navbar">
<div className="navbar-container">
<NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
<img src={logo} alt="Wholistic Clinic Logo" className="logo-img" />
</NavLink>
    <div className="menu-icon" onClick={handleClick}>
      {click ? <FaTimes /> : <FaBars />}
    </div>

    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className="nav-item">
        <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/services" className="nav-links" onClick={closeMobileMenu}>
          Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-links-button" onClick={closeMobileMenu}>
          Book Appointment
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
);
}

export default Navbar