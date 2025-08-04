import React from 'react';
import './Preloader.css';
import logo from '../assets/images/logo.jpg';
import leafIcon from '../assets/icons/preloader-leaf.png';
import bottleIcon from '../assets/icons/preloader-bottle.png';
import plusIcon from '../assets/icons/preloader-plus.png';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-fading-container">
        <img src={leafIcon} alt="Natural" className="preloader-fading-icon icon1" />
        <img src={bottleIcon} alt="Homeopathy" className="preloader-fading-icon icon2" />
        <img src={plusIcon} alt="Medical Care" className="preloader-fading-icon icon3" />
        
        <img src={logo} alt="Wholistic Clinic Logo" className="preloader-fading-logo" />
      </div>
    </div>
  );
};

export default Preloader;