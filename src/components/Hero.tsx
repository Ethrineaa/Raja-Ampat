import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-container animate fade-up">
          <div className="hero-bg">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80"
              alt="Raja Ampat Islands"
              loading="eager"
            />
          </div>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">
              Explore the Wonders of <br />
              <span className="text-highlight">Raja Ampat</span>
            </h1>
            <p className="hero-subtitle">
              The last paradise on Earth. Experience nature in its purest form.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#destinations" className="btn btn-primary">
                Start Adventure
              </a>
              <button className="btn btn-icon" aria-label="Watch Video">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
