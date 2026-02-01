import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-container">
          <div className="hero-bg animate fade-in">
            <img
              src="src/assets/rajaampat.jpg"
              alt="Raja Ampat Islands"
              loading="eager"
            />
          </div>
          <div className="hero-overlay animate fade-in delay-200"></div>

          <div className="hero-content">
            <h1 className="hero-title animate fade-up delay-300">
              Explore the Wonders of <br />
              <span className="text-highlight">Raja Ampat</span>
            </h1>
            <p className="hero-subtitle animate fade-up delay-500">
              The last paradise on Earth. Experience nature in its purest form.
            </p>
            <div className="animate zoom-in delay-600" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#destinations" className="btn btn-primary">
                Start Adventure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
