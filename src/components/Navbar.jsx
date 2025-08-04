import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.jpg"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
            <img src={logo} alt="Wholistic Clinic Logo" className="logo-img" />
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-links">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links">
              About Us
            </NavLink>
          </li>
          <li className="nav-item"> 
            <NavLink to="/contact" className="nav-links-button">
              Book Appointment
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;