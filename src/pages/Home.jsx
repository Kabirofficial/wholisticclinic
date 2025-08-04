import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroBackground from '../assets/images/hero-background.jpg';
import iconHair from '../assets/icons/icon-hair.png';
import iconHormone from '../assets/icons/icon-hormone.png';
import iconAllergy from '../assets/icons/icon-allergy.png';
import iconWeightLoss from '../assets/icons/icon-weightloss.png';
import iconWellness from '../assets/icons/icon-wellness.png';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Natural Healing, Wholistic Care</h1>
            <p className="hero-subtitle">Rediscover your health with our personalized homeopathic treatments.</p>
            <Link to="/contact" className="hero-cta-button">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="services-overview-section">
        <h2 className="section-title">Our Areas of Expertise</h2>
        <div className="services-grid">
          
          <Link to="/services" className="service-card">
            <img src={iconHair} alt="PRP Hair Regrowth" className="service-icon" />
            <h3 className="service-title">PRP Hair Therapy</h3>
          </Link>

          <Link to="/services" className="service-card">
            <img src={iconHormone} alt="Hormonal Balance" className="service-icon" />
            <h3 className="service-title">Hormonal Balance</h3>
          </Link>

          <Link to="/services" className="service-card">
            <img src={iconAllergy} alt="Allergy Treatment" className="service-icon" />
            <h3 className="service-title">Allergy Treatment</h3>
          </Link>

          <Link to="/services" className="service-card">
            <img src={iconWeightLoss} alt="Natural Weight Loss" className="service-icon" />
            <h3 className="service-title">Natural Weight Loss</h3>
          </Link>
          
          <Link to="/services" className="service-card">
            <img src={iconWellness} alt="Chronic & Wellness Care" className="service-icon" />
            <h3 className="service-title">Chronic & Wellness</h3>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default Home;