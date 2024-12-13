import React from 'react';
import '../components/css/Footer.css';
import link_1 from '../components/images/tg.png';
import link_2 from '../components/images/ig.png';
import link_3 from '../components/images/github.png'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Agency. All rights reserved.</p>
      <div className="social_icons">
        <a href="https://t.me/iliyaarr" target="_blank" rel="noopener noreferrer"> <img src={link_1} className='link_icons'/> </a>
        <a href="https://www.instagram.com/i.mdnv/profilecard/?igsh=dm93cDNuazF1MDlu" target="_blank" rel="noopener noreferrer"> <img src={link_2} className='link_icons'/> </a>
        <a href="https://github.com/mdnv" target="_blank" rel="noopener noreferrer"> <img src={link_3} className='link_icons'/> </a>
      </div>
    </footer>
  );
};

export default Footer;