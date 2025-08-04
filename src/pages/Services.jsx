import React from "react";
import "./Services.css";
import iconPrp from "../assets/icons/icon-hair.png";
import iconHormone from "../assets/icons/icon-hormone.png";
import iconAllergy from "../assets/icons/icon-allergy.png";
import iconWeightLoss from "../assets/icons/icon-weightloss.png";
import iconWellness from "../assets/icons/icon-wellness.png";

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Natural Healing Services</h1>
        <p>
          Discover healing that treats you — not just your symptoms. True
          healing begins from within.
        </p>
      </header>

      <div className="services-content-container">
        <div className="service-block">
          <img
            src={iconPrp}
            alt="PRP Therapy Icon"
            className="service-block-icon"
          />
          <div className="service-block-text">
            <h2>PRP Therapy</h2>
            <p>
              A cutting-edge solution for natural hair regrowth. We use your
              body's own healing properties to stimulate hair follicles,
              promoting thicker, healthier hair.
            </p>
          </div>
        </div>

        <div className="service-block reverse">
          <img
            src={iconHormone}
            alt="Hormonal Balance Icon"
            className="service-block-icon"
          />
          <div className="service-block-text">
            <h2>Hormonal & Menstrual Balance</h2>
            <p>
              Struggling with irregular menstrual cycles and discomfort?
              Discover the natural way to balance your hormones and regain
              control with Wholistic Homeopathy.
            </p>
          </div>
        </div>

        <div className="service-block">
          <img
            src={iconAllergy}
            alt="Allergy Treatment Icon"
            className="service-block-icon"
          />
          <div className="service-block-text">
            <h2>Allergy Treatment</h2>
            <p>
              Say goodbye to allergies—naturally! We don’t just mask symptoms—we
              heal the root cause. From skin irritation to itching and
              inflammation, we’ve got you covered with safe and effective
              homeopathic care.
            </p>
          </div>
        </div>

        <div className="service-block reverse">
          <img
            src={iconWeightLoss}
            alt="Weight Loss Icon"
            className="service-block-icon"
          />
          <div className="service-block-text">
            <h2>Natural Weight Loss Program</h2>
            <p>
              Transform your body the natural way with Wholistic Homeopathy! Our
              program focuses on holistic health to help you achieve and
              maintain your ideal weight. Join us and start seeing real results!
            </p>
          </div>
        </div>

        <div className="service-block">
          <img
            src={iconWellness}
            alt="General Wellness Icon"
            className="service-block-icon"
          />
          <div className="service-block-text">
            <h2>Chronic & General Wellness</h2>
            <p>
              From chronic conditions to everyday wellness — Wholistic
              Homeopathy is here to guide your journey towards better health,
              naturally. Your health deserves a personalized, holistic approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
