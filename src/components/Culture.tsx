import React from 'react';

const Culture: React.FC = () => {
  return (
    <section id="culture" className="section">
      <div className="container">
        <div className="culture-card animate zoom-in">
          <div className="culture-img animate fade-in delay-200">
            <img
              src="https://images.unsplash.com/photo-1518182170546-0766ce6fec56?auto=format&fit=crop&w=1200&q=80"
              alt="Papuan Dancers"
            />
          </div>

          <div className="culture-content">
            <h5 className="animate fade-up delay-300" style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', fontWeight: 700 }}>Living Heritage</h5>
            <h2 className="section-title animate fade-up delay-400" style={{ color: 'white', marginTop: '0.5rem' }}>Mesmerizing Traditions</h2>
            <p className="animate fade-up delay-500" style={{ opacity: 0.8, marginBottom: '2rem' }}>
              More than just a destination, Raja Ampat is a soul-stirring encounter with ancient wisdom.
              Witness the vibrancy of the Papuan culture through traditional dances and ceremonies.
            </p>

            <ul className="animate fade-up delay-600" style={{ display: 'grid', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> Traditional Ceremonies
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> Friendly Local Communities
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> Unique Handicrafts (Noken)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
