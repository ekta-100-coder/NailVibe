import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NailVibe</div>

      <ul className="nav-links">
        <li><Link to="/" className="nav-btn">Home</Link></li>
        <li><Link to="/services" className="nav-btn">Services</Link></li>
        <li><Link to="/gallery" className="nav-btn">Gallery</Link></li>
        <li><Link to="/about" className="nav-btn">About</Link></li>
        <li><Link to="/reviews" className="nav-btn">Reviews</Link></li>
        <li><Link to="/contact" className="nav-btn">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
