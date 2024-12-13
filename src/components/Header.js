import React, { useState } from 'react';
import '../components/css/Header.css';
import logo from '../components/images/1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className="header">
      <div className="container_head">
        <nav className="navbar">
          <a href="#home" className="logo">
          <img src={logo} alt="logo" className='logo_img'/>
          </a>
          <button className="burger_menu" onClick={toggleMenu} aria-label="Menu">
            {menuOpen ? '✖' : '☰'}
          </button>
          <nav className={`menu ${menuOpen ? 'menu_open' : ''}`}>
            <ul>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;