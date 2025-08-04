import React from 'react';
import './About.css';
import FadeInOnScroll from '../components/FadeInOnScroll';
import doctorPortrait from '../assets/images/doctor-portrait.jpg';
import iconPersonalized from '../assets/icons/icon-personalized.png';
import iconListening from '../assets/icons/icon-listening.png';
import iconRootCause from '../assets/icons/icon-rootcause.png';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Treating the Person, Not Just the Disease</h1>
        <p>Our mission is to provide compassionate, personalized care that addresses the root cause of your health concerns.</p>
      </header>

      <FadeInOnScroll>
        <section className="founder-section">
          <div className="founder-image-container">
            <img src={doctorPortrait} alt="Dr. Naushad Khorajiya" className="founder-image" />
          </div>
          <div className="founder-bio">
            <h2>Meet Our Founder, Dr. Naushad Khorajiya</h2>
            <h5>BHMS, C.D. Pachchigar Homoeopathic Medical College</h5>
            <p>
              Dr. Naushad Khorajiya is a dedicated and passionate homeopathic consultant who believes in the body's intrinsic power to heal itself. His journey into medicine was driven by a desire to offer treatments that are both effective and gentle, leading him to specialize in Homeopathy.
            </p>
            <p>
              He founded the Wholistic Homeopathy Clinic to be a center for holistic well-being in Ahmedabad. Here, Dr. Khorajiya combines his deep knowledge of homeopathic principles with a modern approach to treat a wide range of conditions, from chronic ailments and allergies to hair loss and weight management. His focus is always on providing care that is personalized, empathetic, and aimed at long-term health.
            </p>
          </div>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section className="approach-section">
          <h2>Our Approach to Healing</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <img src={iconListening} alt="We Listen" className="approach-icon" />
              <h3>We Listen Deeply</h3>
              <p>Your story is the most important diagnostic tool. We take the time to understand your complete health picture.</p>
            </div>
            <div className="approach-card">
              <img src={iconPersonalized} alt="Personalized Plans" className="approach-icon" />
              <h3>Personalized Plans</h3>
              <p>There is no one-size-fits-all in health. Your treatment is tailored specifically to your unique needs and constitution.</p>
            </div>
            <div className="approach-card">
              <img src={iconRootCause} alt="Root Cause Focus" className="approach-icon" />
              <h3>Root Cause Focus</h3>
              <p>We work to uncover and treat the underlying imbalance causing your symptoms for long-term, sustainable wellness.</p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default About;