import React from 'react';
import type { Destination } from "../data/rajaAmpat";

interface Props {
  items: Destination[];
}

const Destinations: React.FC<Props> = ({ items }) => {
  return (
    <section id="destinations" className="section bg-light">
      <div className="container">
        <div className="section-head animate fade-up">
          <h5 className="text-accent" style={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Top Destinations</h5>
          <h2 className="section-title">Must-Visit Spots</h2>
        </div>

        <div className="destinations-scroll animate fade-up delay-200">
          {items.map((item) => (
            <div key={item.name} className="dest-card group">
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
