import React from 'react';

const Culture: React.FC = () => {
  return (
    <section id="culture" className="section">
      <div className="container">
        <div className="culture-card">
          <div className="culture-img">
            <img
              src="https://images.unsplash.com/photo-1518182170546-0766ce6fec56?auto=format&fit=crop&w=1200&q=80"
              alt="Papuan Dancers"
            />
          </div>

          <div className="culture-content">
            <h5 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', fontWeight: 700 }}>Living Heritage</h5>
            <h2 className="section-title" style={{ color: 'white', marginTop: '0.5rem' }}>Mesmerizing Traditions</h2>
            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
              More than just a destination, Raja Ampat is a soul-stirring encounter with ancient wisdom.
              Witness the vibrancy of the Papuan culture through traditional dances and ceremonies.
            </p>

            <ul style={{ display: 'grid', gap: '1rem' }}>
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
