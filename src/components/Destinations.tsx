import React from 'react';
import type { Destination } from "../data/rajaAmpat";

interface Props {
  items: Destination[];
}

const Destinations: React.FC<Props> = ({ items }) => {
  return (
    <section id="destinations" className="section">
      <div className="container">
        <h2 className="section-title">Top Destinations</h2>

        <div className="grid grid-4" style={{ overflowX: 'auto', paddingBottom: '1rem', gridTemplateColumns: 'repeat(4, minmax(280px, 1fr))' }}>
          {items.map((item, index) => (
            <div key={index} className="dest-card group">
              <div className="dest-img">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div className="dest-overlay">
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{item.name}</h3>
                  <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>{item.location || 'Raja Ampat'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
