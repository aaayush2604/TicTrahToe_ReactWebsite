import React from 'react';
import './Footer.css';
import FooterBg from '../../assets/FooterBg.webp';

const Footer = () => {
  return (
    <div>
    <div className='tictrashtoe-footer-img-container'>
      <img src={FooterBg} className='tictrashtoe-footer-img'></img>
      <div className='tictrashtoe-footer-bgoverlay-container'>
        <div className='tictrashtoe-footet-bgoverlay-contact'>Contact Us</div>
        <div className='tictrashtoe-footet-bgoverlay-newpickup'>Request A Pick Up</div>
      </div>
    </div>
    </div>
  )
}

export default Footer
