import React from 'react';
import type { GalleryItem } from "../data/rajaAmpat";

interface Props {
  items: GalleryItem[];
}

const Gallery: React.FC<Props> = ({ items }) => {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h5 className="text-accent" style={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Visual Journey</h5>
          <h2 className="section-title" style={{ margin: 0 }}>Captured Moments</h2>
        </div>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <div key={item.id} className={`gallery-item item-${index} animate fade-up delay-${(index % 4) * 100}`}>
              <img src={item.image} alt={item.alt || 'Gallery image'} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
