import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>
            Ready for the adventure of a lifetime?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Join us in exploring the world's most beautiful archipelago. Your journey to the last paradise starts here.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
              Start Your Adventure
            </a>
            <a href="#contact" className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(10px)' }}>
              Contact Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
